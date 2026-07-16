import type { Metadata } from "next";
import { BookOpen, Code2, ExternalLink, GitBranch, PenLine } from "lucide-react";

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
  "自动化",
  "AI Agents",
  "文档整理",
];

const posts = [
  ["2026-07-16", "我的 AI 工作流应该长什么样", "把重复判断、资料整理和发布流程交给工具，人负责方向感。", "/posts/2026-07-16-ai-workflow.html"],
  ["2026-07-16", "GitHub Pages 个人主页搭建笔记", "从仓库命名、Pages 发布到文章页样式的第一版记录。", "/posts/2026-07-16-github-pages-notes.html"],
  ["2026-07-16", "一次终端 GitHub 代理排查", "SourceTree 能拉取，终端 Git 却超时，背后是代理端口不一致。", "/posts/2026-07-16-terminal-proxy.html"],
  ["2026-07-16", "个人知识库的最小可行结构", "先从入口、标签和复盘开始，不急着做一个巨大系统。", "/posts/2026-07-16-knowledge-base.html"],
  ["2026-07-16", "给公开主页留一点生长空间", "主页不是简历，也不是朋友圈，它更像一个持续更新的索引。", "/posts/2026-07-16-public-home.html"],
];

export const metadata: Metadata = {
  title: "asiuvxmcn 的个人主页",
  description: "asiuvxmcn 的中文个人主页，记录开发、工具、AI、知识库和项目笔记。",
};

export default function Home() {
  return (
    <main id="top" className="shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="asiuvxmcn 个人主页">
          <span className="avatar">A</span>
          <span>
            <strong>asiuvxmcn</strong>
            <small>个人主页 · Blog · Wiki</small>
          </span>
        </a>
        <nav>
          <a href="#stack">技能栈</a>
          <a href="#projects">项目</a>
          <a href="#posts">文章</a>
          <a className="write" href={newPostUrl}>
            <PenLine size={15} aria-hidden="true" />
            写文章
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-card">
          <p className="kicker">README.md</p>
          <h1>你好，我是 asiuvxmcn。</h1>
          <p className="lead">
            这里是我的公开工作台：放文章、项目线索、工具笔记和逐渐长出来的知识库。先把入口搭稳，内容慢慢住进来。
          </p>
          <div className="badges" aria-label="主页标签">
            <span>GitHub Pages</span>
            <span>中文笔记</span>
            <span>AI 工作流</span>
            <span>工具沉淀</span>
          </div>
          <div className="actions">
            <a className="button primary" href="#posts">
              <BookOpen size={17} aria-hidden="true" />
              阅读文章
            </a>
            <a className="button" href={repoUrl}>
              <ExternalLink size={17} aria-hidden="true" />
              查看仓库
            </a>
          </div>
        </div>

        <aside className="profile-panel" aria-label="主页状态">
          <div className="profile-header">
            <span className="avatar large">A</span>
            <div>
              <strong>asiuvxmcn</strong>
              <p>把重复问题写成笔记，把小工具沉淀成流程。</p>
            </div>
          </div>
          <div className="stats-grid">
            <div>
              <b>05</b>
              <span>预生成文章</span>
            </div>
            <div>
              <b>01</b>
              <span>公开主页</span>
            </div>
            <div>
              <b>∞</b>
              <span>后续更新</span>
            </div>
          </div>
          <p className="note">访客阅读 HTML 文章页；我自己通过 GitHub 编辑 Markdown 源稿和页面内容。</p>
        </aside>
      </section>

      <section className="section" id="stack">
        <div className="section-head">
          <p>
            <Code2 size={15} aria-hidden="true" />
            工具箱
          </p>
          <h2>常用技能与方向</h2>
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
            置顶项目
          </p>
          <h2>一些会继续生长的小东西</h2>
        </div>
        <div className="project-grid">
          <article>
            <div className="repo-line"><span /><strong>personal-homepage</strong></div>
            <p>当前这个 GitHub Pages 主页，用来承载文章、wiki 入口和项目痕迹。</p>
            <footer><em>HTML</em><em>CSS</em><em>Pages</em></footer>
          </article>
          <article>
            <div className="repo-line"><span /><strong>knowledge-index</strong></div>
            <p>未来的知识库索引，放常用链接、模板、方法和踩坑记录。</p>
            <footer><em>Markdown</em><em>Notes</em><em>Wiki</em></footer>
          </article>
          <article>
            <div className="repo-line"><span /><strong>workflow-lab</strong></div>
            <p>把日常重复操作做成稳定流程，减少来回点击和重复判断。</p>
            <footer><em>Automation</em><em>AI</em><em>Tools</em></footer>
          </article>
        </div>
      </section>

      <section className="section" id="posts">
        <div className="section-head with-action">
          <div>
            <p>最新文章</p>
            <h2>已经准备好的几篇文章</h2>
          </div>
          <a className="button" href={newPostUrl}>新增文章</a>
        </div>
        <div className="post-list">
          {posts.map(([date, title, desc, href]) => (
            <a href={href} key={href}>
              <time>{date}</time>
              <strong>{title}</strong>
              <span>{desc}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
