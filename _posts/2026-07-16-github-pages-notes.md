---
title: "GitHub Pages 个人主页搭建笔记"
date: "2026-07-16"
tags: ["github", "pages", "blog"]
---

GitHub Pages 最适合做轻量的个人主页：公开、稳定、免费，而且和仓库天然绑定。

这次主页采用了最直接的方式：

- 仓库名使用 `asiuvxmcn.github.io`。
- 根目录放 `index.html` 和 `styles.css`。
- 文章草稿放在 `_posts/`。
- 写文章入口跳到 GitHub 的新建文件页面。

这个方案没有复杂后台，但权限模型很清楚：访客只能看，只有仓库拥有者能写和发布。

后续如果文章多起来，可以升级成自动读取 Markdown 的静态博客，比如 Jekyll、Astro 或 Eleventy。第一版先保持简单，能发布比一开始就完美更重要。
