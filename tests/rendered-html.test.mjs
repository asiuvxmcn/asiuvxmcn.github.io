import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the personal homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /asiuvxmcn 的个人主页/);
  assert.match(html, /你好，我是 asiuvxmcn/);
  assert.match(html, /asiuvxmcn\.github\.io\/new\/main/);
  assert.match(html, /\/posts\/2026-07-16-public-home\.html/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|SkeletonPreview/);
});

test("keeps a GitHub Pages static entry", async () => {
  const [indexHtml, styles, readme, guide, article] = await Promise.all([
    readFile(new URL("../index.html", import.meta.url), "utf8"),
    readFile(new URL("../styles.css", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
    readFile(new URL("../docs/how-to-publish.md", import.meta.url), "utf8"),
    readFile(new URL("../posts/2026-07-16-public-home.html", import.meta.url), "utf8"),
  ]);

  assert.match(indexHtml, /<title>asiuvxmcn 的个人主页<\/title>/);
  assert.match(indexHtml, /\.\/posts\/2026-07-16-public-home\.html/);
  assert.doesNotMatch(indexHtml, /href="\.\/_posts\/.*\.md"/);
  assert.match(indexHtml, /https:\/\/github\.com\/asiuvxmcn\/asiuvxmcn\.github\.io/);
  assert.match(styles, /color-scheme:\s*light/);
  assert.match(styles, /\.article-card/);
  assert.match(article, /给公开主页留一点生长空间/);
  assert.match(article, /\.\.\/styles\.css/);
  assert.match(readme, /https:\/\/asiuvxmcn\.github\.io\//);
  assert.match(guide, /GitHub Pages/);
});
