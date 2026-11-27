<div align="center">

# dsh-chat-export

**Chat export and screenshots for [DeepSeek Harness](https://deepseek-harness.github.io/deepseek-harness/)**

Message selection · Six export formats · Math rendering · High-resolution screenshots

[![DSH Plugin](https://img.shields.io/badge/DeepSeek%20Harness-plugin-6128FF)](https://deepseek-harness.github.io/deepseek-harness/)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/houyanchao/dsh-chat-export/pulls)
[![GitHub stars](https://img.shields.io/github/stars/houyanchao/dsh-chat-export?style=social)](https://github.com/houyanchao/dsh-chat-export)

[简体中文](./README.md) | **English**

</div>

## 📖 What is dsh-chat-export?

dsh-chat-export brings the export and screenshot tools from [dsh-timeline](https://github.com/houyanchao/dsh-timeline) to DeepSeek Harness as a standalone plugin. Select a few replies and export them as Markdown for your notes, or capture a question and its worked solution in a single image that preserves the chat layout.

When dsh-timeline is active, Timeline handles exports and screenshots. Disabling or uninstalling Timeline automatically restores this plugin. On first use, the plugin imports any existing Timeline export preferences from the current browser and then saves its own settings.

## ✨ Features

- 📋 **Select individual messages** — Click **Export** in the conversation header to pick questions and replies. Clicking **Export** below a reply preselects it. **Select all** loads earlier messages as needed. Click **Stop loading** to stop at any point.
- 📤 **Choose from six formats** — Export Markdown or TXT for notes, or JSON or CSV for further processing. PNG and PDF render math and offer four color themes. To save a PDF, choose **Save as PDF** in the browser print dialog.
- 📸 **Capture the chat layout** — Click **Screenshot** below a reply, select messages, and choose a scale from 1× to 4×. Copy or download the resulting PNG. If the capture exceeds the size limit, the plugin reduces its resolution.
- ⚙️ **Set export preferences** — Choose whether to include the export time and the time each question was asked. The plugin remembers the last format, color theme, timestamp options and screenshot scale. Open the gear in the selection panel or go to DSH **Settings → General** to toggle the export and screenshot actions independently.

## 📦 Installation

### Method 1 (desktop client)

In the [DeepSeek Harness](https://www.deepseek.com/harness/) client, open **Plugins → Add plugin**, paste the repository URL below, then click **Install**.

```text
https://github.com/houyanchao/dsh-chat-export
```

![The Plugins page, the Add plugin button and the installation field in the DeepSeek Harness client](./docs/install-client.png)

### Method 2 (install from GitHub with the CLI)

```bash
# Install dsh-chat-export
dsh plugin --profile web add https://github.com/houyanchao/dsh-chat-export/archive/refs/heads/main.tar.gz
```

## ⭐ Support

If dsh-chat-export is useful to you, give it a 🌟 to help others discover it!

## 📄 License

This project uses [GPL-3.0-or-later](./LICENSE). The package also includes the MIT licenses for [html-to-image](./src/client/conversationExport/vendor/LICENSE) and [Temml](./src/client/conversationExport/vendor/Temml-LICENSE).
