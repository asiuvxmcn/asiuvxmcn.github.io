import type { Metadata } from "next";
import {
  BookOpen,
  Edit3,
  ExternalLink,
  PenLine,
  Sparkles,
  UserRound,
} from "lucide-react";

const githubUser = "asiuvxmcn";
const repoName = `${githubUser}.github.io`;
const repoUrl = `https://github.com/${githubUser}/${repoName}`;
const newPostUrl = `${repoUrl}/new/main?filename=_posts/2026-07-15-new-note.md`;

const posts = [
  {
    title: "第一篇文章会写什么",
    date: "2026-07-15",
    excerpt: "先把家搭起来，内容以后慢慢住进来。这里可以放日常记录、项目复盘、工具笔记，也可以是一个个人 wiki 的入口。",
  },
  {
    title: "我的知识库索引",
    date: "待更新",
    excerpt: "后续可以把常用链接、教程、工作流、读书笔记都整理成分类页面，让这个主页从 blog 慢慢长成 wiki。",
  },
  {
    title: "发布说明",
    date: "只给自己",
    excerpt: "点击写文章入口会跳到 GitHub。访客只能阅读，只有你登录并拥有仓库权限时才能新增、编辑和发布文章。",
  },
];

export const metadata: Metadata = {
  title: "asiuvxmcn 的个人主页",
  description: "一个用于记录文章、知识库和项目笔记的个人主页。",
};

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#f7f4ef] text-[#191714]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-4 border-b border-[#191714]/15 pb-5">
          <a className="flex items-center gap-3" href="#top">
            <span className="grid size-10 place-items-center rounded-full bg-[#191714] text-[#f7f4ef]">
              <Sparkles size={18} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm text-[#6b6257]">个人主页</span>
              <span className="block text-lg font-semibold">asiuvxmcn</span>
            </span>
          </a>
          <nav className="flex items-center gap-2 text-sm">
            <a className="nav-link" href="#posts">
              文章
            </a>
            <a className="nav-link" href="#about">
              关于
            </a>
            <a className="nav-action" href={newPostUrl}>
              <PenLine size={16} aria-hidden="true" />
              写文章
            </a>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 border border-[#191714]/20 bg-white/60 px-3 py-2 text-sm text-[#5a5148]">
              <BookOpen size={16} aria-hidden="true" />
              Blog now, wiki later
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              把文章、笔记和小项目，慢慢收进同一个地方。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5a5148]">
              这是 asiuvxmcn 的个人主页第一版。现在它先承担 blog
              的入口，后续可以继续扩展成 wiki、项目陈列、资料索引，内容不用一次填满。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="primary-button" href="#posts">
                <BookOpen size={18} aria-hidden="true" />
                看文章
              </a>
              <a className="secondary-button" href={repoUrl}>
                <ExternalLink size={18} aria-hidden="true" />
                管理仓库
              </a>
            </div>
          </div>

          <aside className="border border-[#191714]/15 bg-[#191714] p-5 text-[#f7f4ef] shadow-2xl shadow-[#191714]/15">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <span className="text-sm text-white/60">Owner mode</span>
              <UserRound size={20} aria-hidden="true" />
            </div>
            <h2 className="mt-8 text-3xl font-semibold leading-tight">
              你登录 GitHub 后，可以直接编辑并发布。
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              GitHub Pages 是静态主页，不会把编辑后台暴露给访客。写作入口会带你进入仓库的新文章页面，提交后 GitHub Pages 会自动更新公开主页。
            </p>
            <a className="mt-8 inline-flex items-center gap-2 border border-white/25 px-4 py-3 text-sm font-medium hover:bg-white hover:text-[#191714]" href={newPostUrl}>
              <Edit3 size={16} aria-hidden="true" />
              新建一篇 Markdown 文章
            </a>
          </aside>
        </section>

        <section id="posts" className="border-t border-[#191714]/15 py-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-[#6b6257]">Latest notes</p>
              <h2 className="text-3xl font-semibold">文章入口</h2>
            </div>
            <a className="text-sm underline underline-offset-4" href={newPostUrl}>
              新增文章
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <article className="post-card" key={post.title}>
                <p className="text-sm text-[#7b7166]">{post.date}</p>
                <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
                <p className="mt-3 leading-7 text-[#5a5148]">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-6 border-t border-[#191714]/15 py-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-3xl font-semibold">关于这个主页</h2>
          <p className="max-w-3xl leading-8 text-[#5a5148]">
            这一版先把“可访问”“能写文章”“可继续扩展”打通。之后可以继续加分类、搜索、标签、归档、友情链接，甚至把常用资料整理成 wiki。
          </p>
        </section>
      </section>
    </main>
  );
}
