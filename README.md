# asiuvxmcn.github.io

这是 asiuvxmcn 的个人主页第一版，用来承载 blog、wiki、项目笔记和资料索引。

公开访问地址计划为：

https://asiuvxmcn.github.io/

## 编辑文章

文章草稿放在 `_posts/` 目录。登录 GitHub 后，可以直接新增或编辑 Markdown 文件并提交。

访客只能浏览公开页面；只有仓库拥有者或协作者可以写文章并发布。

## GitHub Pages

首次部署时，在仓库 `Settings -> Pages` 中选择：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

保存后，GitHub Pages 会读取根目录的 `index.html` 作为主页。

## 本地预览

当前仓库同时保留了可在本地预览的页面工程：

```bash
npm run dev
```

GitHub Pages 使用根目录的静态文件；本地开发工程用于后续继续升级页面体验。
