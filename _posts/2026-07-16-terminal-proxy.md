---
title: "一次终端 GitHub 代理排查"
date: "2026-07-16"
tags: ["git", "proxy", "debug"]
---

这次遇到一个很典型的问题：SourceTree 可以正常拉取代码，但终端 `git push` 一直连接 GitHub 超时。

原因不是账号，也不是 GitHub 仓库权限，而是代理配置不一致。

机器当前系统代理跑在 `127.0.0.1:7897`，但是 Git 全局配置里还留着旧的 GitHub 专用代理 `127.0.0.1:7890`。图形应用会读系统代理，终端 Git 不一定会自动读，所以表现就分裂了。

最终修复方式是把 GitHub 专用代理更新到当前端口：

```bash
git config --global http.https://github.com.proxy http://127.0.0.1:7897
git config --global https.https://github.com.proxy http://127.0.0.1:7897
```

这个问题提醒我：网络问题不要一上来猜认证，先把 DNS、代理、端口和最小请求拆开看。
