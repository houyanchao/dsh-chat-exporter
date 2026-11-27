# 对话导出与截图 · dsh-chat-export

[English](./README.en.md)

DeepSeek Harness 会话插件。按消息选择需要保留的提问和回复，保存为文档或图片。功能来自 [dsh-timeline](https://github.com/houyanchao/dsh-timeline)，可以单独安装与配置。

## 使用

- **导出对话**　点会话顶部的「导出」，勾选消息或「全选」。从某条回复底部点「导出」会预先选中这条回复。「全选」会尝试加载更早的消息，加载过程可以停止。
- **选择格式**　支持 Markdown、TXT、JSON、CSV、PNG 和 PDF。可勾选导出时间和对话时间。PNG 和 PDF 可选配色，并渲染数学公式。PDF 使用浏览器打印窗口，选择「另存为 PDF」即可。
- **截取原貌**　点回复下方的「截图」，勾选提问和回复，选择 1× 到 4× 清晰度，再复制或下载 PNG。较长截图会在需要时自动降低分辨率。
- **调整设置**　在导出或截图面板点齿轮，或进入 DSH「设置 → 通用设置」，可分别开关两个入口。插件会记住上次使用的导出选项和截图清晰度。首次使用会从当前浏览器的 Timeline 设置中复制已有的导出偏好。

dsh-timeline 运行时，导出和截图由 Timeline 接管，本插件自动暂停。禁用或卸载 Timeline 后，本插件会自动恢复，并沿用自己的导出偏好。

## 安装

在已安装 DSH CLI 和 pnpm 的终端运行：

```sh
dsh plugin --profile web add https://github.com/houyanchao/dsh-chat-export/archive/refs/heads/main.tar.gz
dsh web
```

## 本地开发

使用 Node.js 24.11 或更高版本，在本仓库根目录运行：

```sh
npm ci
npm run typecheck
npm run bundle
npm pack
dsh plugin --profile web add "$PWD/dsh-chat-export-0.1.0.tgz"
```

## 许可证

本插件使用 [GPL-3.0-or-later](./LICENSE)。随包附有 [html-to-image](./src/client/conversationExport/vendor/LICENSE) 和 [Temml](./src/client/conversationExport/vendor/Temml-LICENSE) 的 MIT 许可证。
