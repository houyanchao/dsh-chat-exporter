# Chat Export & Screenshots · dsh-chat-export

[简体中文](./README.md)

Select individual questions and replies in the DeepSeek Harness web client and save them as a document or image. This standalone plugin brings over the export and screenshot tools from [dsh-timeline](https://github.com/houyanchao/dsh-timeline).

## Usage

- **Export a conversation.** Choose **Export** in the conversation header and select messages. Choosing **Export** below a reply preselects that reply. **Select all** loads earlier messages when available. You can stop the history load.
- **Choose a format.** Export Markdown, TXT, JSON, CSV, PNG or PDF. The export time and conversation timestamps are optional. PNG and PDF offer four color themes and render math. For PDF, choose **Save as PDF** in the browser print dialog.
- **Capture the original layout.** Choose **Screenshot** below a reply, select questions and answers, then copy or download a PNG at 1× to 4×. Very long captures can use a lower resolution to fit into a single image.
- **Manage preferences.** Open the gear in the selection panel, or go to DSH **Settings → General**. You can toggle export and screenshot actions independently. The plugin remembers your last export options and screenshot scale. On first use, it imports existing export preferences from Timeline in the same browser.

While dsh-timeline is running, Timeline handles exports and screenshots and this plugin pauses. Disabling or uninstalling Timeline automatically restores this plugin with its saved preferences.

## Install

With the DSH CLI and pnpm installed, run:

```sh
dsh plugin --profile web add https://github.com/houyanchao/dsh-chat-export/archive/refs/heads/main.tar.gz
dsh web
```

## Local development

Use Node.js 24.11 or later and run these commands in the root of this repository:

```sh
npm ci
npm run typecheck
npm run bundle
npm pack
dsh plugin --profile web add "$PWD/dsh-chat-export-0.1.0.tgz"
```

## License

[GPL-3.0-or-later](./LICENSE). The bundled libraries include the MIT licenses for [html-to-image](./src/client/conversationExport/vendor/LICENSE) and [Temml](./src/client/conversationExport/vendor/Temml-LICENSE).
