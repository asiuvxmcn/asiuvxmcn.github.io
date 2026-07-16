import type { Metadata } from "next";
import {
  BookOpen,
  Code2,
  ExternalLink,
  FileText,
  GitBranch,
  PenLine,
  Terminal,
} from "lucide-react";

const githubUser = "asiuvxmcn";
const repoName = `${githubUser}.github.io`;
const repoUrl = `https://github.com/${githubUser}/${repoName}`;
const newPostUrl = `${repoUrl}/new/main?filename=_posts/2026-07-16-new-note.md`;

const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "GitHub Pages",
  "Markdown",
  "Automation",
  "AI Agents",
  "Docs",
];

const projects = [
  {
    name: "personal-homepage",
    desc: "A GitHub Pages profile hub for posts, wiki notes and project breadcrumbs.",
    tags: ["HTML", "CSS", "Pages"],
  },
  {
    name: "knowledge-index",
    desc: "A future wiki map for links, repeated workflows, templates and solved problems.",
    tags: ["Markdown", "Notes", "Wiki"],
  },
  {
    name: "workflow-lab",
    desc: "Experiments for making daily work less click-heavy and more repeatable.",
    tags: ["Automation", "AI", "Tools"],
  },
];

const posts = [
  {
    href: "/_posts/2026-07-16-ai-workflow.md",
    date: "2026-07-16",
    title: "我的 AI 工作流应该长什么样",
    desc: "把重复判断、资料整理和发布流程交给工具，人负责方向感。",
  },
  {
    href: "/_posts/2026-07-16-github-pages-notes.md",
    date: "2026-07-16",
    title: "GitHub Pages 个人主页搭建笔记",
    desc: "从仓库命名、Pages 发布到写文章入口的第一版记录。",
  },
  {
    href: "/_posts/2026-07-16-terminal-proxy.md",
    date: "2026-07-16",
    title: "一次终端 GitHub 代理排查",
    desc: "SourceTree 能拉取，终端 Git 却超时，背后是代理端口不一致。",
  },
  {
    href: "/_posts/2026-07-16-knowledge-base.md",
    date: "2026-07-16",
    title: "个人知识库的最小可行结构",
    desc: "先从入口、标签和复盘开始，不急着做一个巨大系统。",
  },
  {
    href: "/_posts/2026-07-16-public-home.md",
    date: "2026-07-16",
    title: "给公开主页留一点生长空间",
    desc: "主页不是简历，也不是朋友圈，它更像一个持续更新的索引。",
  },
];

export const metadata: Metadata = {
  title: "asiuvxmcn | GitHub Profile",
  description: "asiuvxmcn 的个人主页，记录开发、工具、AI、知识库和项目笔记。",
};

export default function Home() {
  return (
    <main id="top" className="shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="asiuvxmcn homepage">
          <span className="avatar">A</span>
          <span>
            <strong>asiuvxmcn</strong>
            <small>github.io</small>
          </span>
        </a>
        <nav>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#posts">Posts</a>
          <a className="write" href={newPostUrl}>
            <PenLine size={15} aria-hidden="true" />
            Write
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="readme-card">
          <p className="kicker">
            <FileText size={15} aria-hidden="true" />
            README.md
          </p>
          <h1>Hi, I&apos;m asiuvxmcn.</h1>
          <p className="lead">
            Building a personal knowledge base from code, notes, automation and
            tiny experiments. This page is my public index for things I am
            learning, shipping and keeping.
          </p>
          <div className="badges" aria-label="profile badges">
            <span>GitHub Pages</span>
            <span>Markdown</span>
            <span>AI Workflow</span>
            <span>Dev Notes</span>
          </div>
          <div className="actions">
            <a className="button primary" href="#posts">
              <BookOpen size={17} aria-hidden="true" />
              Read posts
            </a>
            <a className="button" href={repoUrl}>
              <ExternalLink size={17} aria-hidden="true" />
              View repo
            </a>
          </div>
        </div>

        <aside className="status-board" aria-label="profile status">
          <div className="terminal">
            <div className="dots">
              <i />
              <i />
              <i />
            </div>
            <pre>
              <code>{`$ whoami
asiuvxmcn

$ focus
blog + wiki + tools

$ now
shipping the first public homepage`}</code>
            </pre>
          </div>
          <div className="stats-grid">
            <div>
              <b>05</b>
              <span>draft posts</span>
            </div>
            <div>
              <b>01</b>
              <span>public site</span>
            </div>
            <div>
              <b>∞</b>
              <span>notes later</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section" id="stack">
        <div className="section-head">
          <p>
            <Code2 size={15} aria-hidden="true" />
            toolbox
          </p>
          <h2>Stack I keep around</h2>
        </div>
        <div className="stack-grid">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-head">
          <p>
            <GitBranch size={15} aria-hidden="true" />
            pinned
          </p>
          <h2>Small projects, useful traces</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name}>
              <div className="repo-line">
                <span />
                <strong>{project.name}</strong>
              </div>
              <p>{project.desc}</p>
              <footer>
                {project.tags.map((tag) => (
                  <em key={tag}>{tag}</em>
                ))}
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="posts">
        <div className="section-head with-action">
          <div>
            <p>
              <Terminal size={15} aria-hidden="true" />
              latest
            </p>
            <h2>Generated starter posts</h2>
          </div>
          <a className="button" href={newPostUrl}>
            <PenLine size={16} aria-hidden="true" />
            New post
          </a>
        </div>
        <div className="post-list">
          {posts.map((post) => (
            <a href={post.href} key={post.title}>
              <time>{post.date}</time>
              <strong>{post.title}</strong>
              <span>{post.desc}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
