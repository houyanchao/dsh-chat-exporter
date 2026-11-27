<div align="center">

# dsh-chat-export

**[DeepSeek Harness](https://deepseek-harness.github.io/deepseek-harness/) 对话导出与截图插件**

按消息选择 · 六种导出格式 · 数学公式渲染 · 高清截图

[![DSH Plugin](https://img.shields.io/badge/DeepSeek%20Harness-plugin-6128FF)](https://deepseek-harness.github.io/deepseek-harness/)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/houyanchao/dsh-chat-export/pulls)
[![GitHub stars](https://img.shields.io/github/stars/houyanchao/dsh-chat-export?style=social)](https://github.com/houyanchao/dsh-chat-export)

**简体中文** | [English](./README.en.md)

</div>

## 📖 dsh-chat-export 是什么？

dsh-chat-export 把 [dsh-timeline](https://github.com/houyanchao/dsh-timeline) 的导出和截图功能做成了独立插件。想把几条回复整理进笔记，可以勾选后导出 Markdown。想分享一段带公式的推导，可以把选中的提问和回复按聊天页样式截成一张图。

如果同时启用 dsh-timeline，导出和截图会由 Timeline 接管。停用或卸载 Timeline 后，本插件会自动恢复。首次使用时，插件会从当前浏览器读取已有的 Timeline 导出偏好，之后独立保存设置。

## ✨ 功能特性

- 📋 **按消息选择** — 点会话顶部的「导出」，逐条勾选提问和回复，也可以从某条回复下方点「导出」直接选中它。「全选」会加载更早的消息，途中可点「停止加载」。
- 📤 **六种导出格式** — Markdown 和 TXT 方便整理笔记，JSON 和 CSV 适合后续处理。选 PNG 或 PDF 可以保留公式排版，并从四种主题色中挑选一种。保存 PDF 时，在浏览器打印窗口选择「另存为 PDF」。
- 📸 **按聊天页样式截图** — 点回复下方的「截图」，勾选消息并选择 1× 至 4× 清晰度，即可复制或下载 PNG。超出尺寸上限时，插件会自动降低清晰度。
- ⚙️ **导出偏好** — 可选择是否附上导出时间和提问时间。插件会记住上次使用的格式、主题色、时间选项和截图清晰度。在选择面板点齿轮，或打开 DSH「设置 → 通用设置」，可分别开关导出和截图入口。

## 📦 安装

安装好 DSH CLI 和 pnpm 后，在终端运行以下命令。

```bash
dsh plugin --profile web add https://github.com/houyanchao/dsh-chat-export/archive/refs/heads/main.tar.gz
dsh web
```

> [!TIP]
> 如果从源码运行 DSH，可以在 DSH 源码仓库根目录将命令开头的 `dsh` 换成 `pnpm dsh`。

## ⭐ 支持一下

如果你用这个插件整理笔记或分享对话，欢迎把它推荐给朋友，或在 GitHub 上点个 Star。[项目主页](https://github.com/houyanchao/dsh-chat-export)

## 📄 许可证

本项目采用 [GPL-3.0-or-later](./LICENSE) 许可证。随包附有 [html-to-image](./src/client/conversationExport/vendor/LICENSE) 和 [Temml](./src/client/conversationExport/vendor/Temml-LICENSE) 的 MIT 许可证。
