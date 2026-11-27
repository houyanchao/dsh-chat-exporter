window.__ModuleLoader__.load({
	id: "dsh-chat-export",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		// \0rolldown/runtime.js
		var __defProp = Object.defineProperty;
		var __esmMin = (fn, res, err) => () => {
			if (err) throw err[0];
			try {
				return fn && (res = fn(fn = 0)), res;
			} catch (e) {
				throw err = [e], e;
			}
		};
		var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod, mod.exports), cb = null), mod.exports);
		var __exportAll = (all, no_symbols) => {
			let target = {};
			for (var name in all) __defProp(target, name, {
				get: all[name],
				enumerable: true
			});
			if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
			return target;
		};
		let react = require("react");
		let react_dom = require("react-dom");
		let react_jsx_runtime = require("react/jsx-runtime");
		// src/client/locales.ts
		const NS = "dshChatExport";
		const zh = {
			"common.cancel": "取消",
			"export.label": "导出",
			"export.screenshotAction": "截图",
			"export.actionSettings": "设置",
			"export.headerOptions": "导出页眉",
			"export.download": "下载",
			"export.copyImage": "复制图片",
			"export.copyContent": "复制内容",
			"export.copying": "复制中…",
			"export.selectedCount": "已选 {count} / {total} 条",
			"export.loadedCount": "已加载 {count} 条消息",
			"export.stopLoading": "停止加载",
			"export.loadingStopped": "已停止加载",
			"export.historyLoaded": "全部消息已加载",
			"export.selectionChanged": "消息已变化，请重新选择。",
			"export.selectQuestion": "选择提问",
			"export.selectReply": "选择回复",
			"export.quality1": "标准",
			"export.quality2": "清晰",
			"export.quality3": "高清",
			"export.quality4": "超高清",
			"export.screenshotImageUnavailable": "所选图片无法读取，未生成截图。",
			"export.screenshotMissingImageLabel": "图片未能读取",
			"export.screenshotPartial": "已生成截图，{count} 张图片未能读取。",
			"export.screenshotResolutionReduced": "已自动降低清晰度，将完整内容保留在一张图中。",
			"export.screenshotTooLarge": "截图内容过大，请减少所选消息。",
			"export.screenshotHint": "在回复底部显示截图按钮，可选择消息并复制或下载图片。",
			"export.historyIncomplete": "未能加载完整历史，请重试。",
			"export.messageUnavailable": "消息已切换或暂不可截图，请重新选择。",
			"export.screenshot": "消息截图",
			"export.downloadScreenshot": "下载截图",
			"export.copied": "已复制",
			"export.copyFailed": "复制失败",
			"export.resolution": "截图清晰度",
			"export.buttonTooltip": "导出对话",
			"export.sectionFormat": "导出格式",
			"export.sectionTheme": "主题色",
			"export.headerShowTime": "导出时间",
			"export.headerShowConversationTime": "对话时间",
			"export.askTimeLabel": "提问时间",
			"export.selectAll": "全选",
			"export.emptyAssistant": "未找到回复内容",
			"export.emptyUserPreview": "（无文本内容）",
			"export.cancel": "取消",
			"export.loading": "加载对话中...",
			"export.exporting": "导出中...",
			"export.done": "对话已导出",
			"export.failed": "导出失败",
			"export.noConversation": "未找到可导出的对话",
			"export.timeLabel": "导出时间",
			"export.titleLabel": "标题",
			"export.orderLabel": "序号",
			"export.imageCannotEmbed": "图片无法内嵌",
			"export.imageNotRendered": "图片未渲染，无法内嵌（可滚动到该轮后重试）",
			"export.truncatedNotice": "内容过长，已截断",
			"export.imageListTitle": "图片",
			"export.defaultTitle": "对话导出",
			"export.unknownSize": "未知尺寸",
			"color.black": "黑色",
			"color.blue": "蓝色",
			"color.purple": "紫色",
			"color.gemini": "蓝紫渐变",
			"panel.exportTitle": "对话导出",
			"panel.exportHint": "开启后，对话页顶部会显示「导出对话」按钮",
			"settings.title": "对话导出与截图"
		};
		const en = {
			"common.cancel": "Cancel",
			"export.label": "Export",
			"export.screenshotAction": "Screenshot",
			"export.actionSettings": "Settings",
			"export.headerOptions": "Export header",
			"export.download": "Download",
			"export.copyImage": "Copy image",
			"export.copyContent": "Copy content",
			"export.copying": "Copying…",
			"export.selectedCount": "{count} / {total} selected",
			"export.loadedCount": "{count} messages loaded",
			"export.stopLoading": "Stop loading",
			"export.loadingStopped": "Loading stopped",
			"export.historyLoaded": "All messages loaded",
			"export.selectionChanged": "The conversation changed. Select messages again.",
			"export.selectQuestion": "Select question",
			"export.selectReply": "Select reply",
			"export.quality1": "Standard",
			"export.quality2": "Clear",
			"export.quality3": "High",
			"export.quality4": "Ultra",
			"export.screenshotImageUnavailable": "The selected images could not be loaded. No screenshot was created.",
			"export.screenshotMissingImageLabel": "Image unavailable",
			"export.screenshotPartial": "Screenshot created. {count} of the selected images could not be loaded.",
			"export.screenshotResolutionReduced": "The resolution was reduced to fit all of the content into one image.",
			"export.screenshotTooLarge": "The screenshot is too large. Select fewer messages.",
			"export.screenshotHint": "Show a screenshot button below replies to copy or download selected messages.",
			"export.historyIncomplete": "Could not load the complete history. Try again.",
			"export.messageUnavailable": "A message is unavailable for capture. Select it again.",
			"export.screenshot": "Message screenshot",
			"export.downloadScreenshot": "Download screenshot",
			"export.copied": "Copied",
			"export.copyFailed": "Could not copy",
			"export.resolution": "Screenshot scale",
			"export.buttonTooltip": "Export conversation",
			"export.sectionFormat": "Export format",
			"export.sectionTheme": "Theme color",
			"export.headerShowTime": "Export time",
			"export.headerShowConversationTime": "Message time",
			"export.askTimeLabel": "Asked at",
			"export.selectAll": "Select all",
			"export.emptyAssistant": "No reply found",
			"export.emptyUserPreview": "(No text content)",
			"export.cancel": "Cancel",
			"export.loading": "Loading conversation...",
			"export.exporting": "Exporting...",
			"export.done": "Conversation exported",
			"export.failed": "Export failed",
			"export.noConversation": "No conversation found to export",
			"export.timeLabel": "Export time",
			"export.titleLabel": "Title",
			"export.orderLabel": "No.",
			"export.imageCannotEmbed": "Image cannot be embedded",
			"export.imageNotRendered": "Image not rendered and cannot be embedded (scroll to that turn and retry)",
			"export.truncatedNotice": "Content too long, truncated",
			"export.imageListTitle": "Image",
			"export.defaultTitle": "Conversation export",
			"export.unknownSize": "Unknown size",
			"color.black": "Black",
			"color.blue": "Blue",
			"color.purple": "Purple",
			"color.gemini": "Blue-purple gradient",
			"panel.exportTitle": "Conversation Export",
			"panel.exportHint": "When enabled, an \"Export\" button appears at the top of the chat page",
			"settings.title": "Chat Export & Screenshots"
		};
		// src/client/shared/theme.ts
		let dark = false;
		const listeners = /* @__PURE__ */ new Set();
		/**
		* 绑定主题服务（index.ts 的 apply 中调用，早于任何组件挂载）。
		* 订阅经 ctx.on 注册，随插件 fiber 卸载自动解除；重载后重新绑定。
		* @param ctx - 注入了 theme 服务的客户端上下文。
		*/
		function bindTheme(ctx) {
			const sync = (snapshot) => {
				const next = snapshot.active.colorScheme === "dark";
				if (next === dark) return;
				dark = next;
				for (const fn of [...listeners]) fn();
			};
			sync(ctx.theme.getTheme());
			ctx.on("theme/change", sync);
		}
		/**
		* 当前是否深色主题。
		* @returns true 表示深色。
		*/
		function detectDarkTheme() {
			return dark;
		}
		/**
		* 订阅主题变化。
		* @param onChange - 主题变化时回调（回调内自行调用 detectDarkTheme）。
		* @returns 取消订阅。
		*/
		function observeTheme(onChange) {
			listeners.add(onChange);
			return () => {
				listeners.delete(onChange);
			};
		}
		// src/client/shared/conversationDom.ts
		const HEADER = "[data-slot=\"conversation.session.header\"]";
		const FLOW = "[data-chat-flow]";
		const SCROLL = "[data-conversation-scroll]";
		const HIDDEN = "[hidden], [inert], [aria-hidden=\"true\"]";
		function conversationRoot(anchor) {
			if (!anchor?.isConnected) return null;
			const header = anchor.closest(HEADER);
			return header?.closest("[data-phase]") ?? header?.parentElement ?? null;
		}
		function findMessageElement(flow, key) {
			const rows = flow.querySelectorAll(`[data-chat-flow-key="${CSS.escape(key)}"]`);
			for (const element of rows) if (element.isConnected && element.closest(HIDDEN) === null && element.getClientRects().length > 0) return element;
			return null;
		}
		function findConversationDOM(anchor, messageKey) {
			const root = conversationRoot(anchor);
			if (root === null) return null;
			for (const flow of root.querySelectorAll(FLOW)) {
				const scroll = flow.closest(SCROLL);
				if (scroll === null || !root.contains(scroll) || flow.closest(HIDDEN) !== null || flow.getClientRects().length === 0) continue;
				if (messageKey === void 0 || findMessageElement(flow, messageKey) !== null) return {
					flow,
					scroll
				};
			}
			return null;
		}
		// src/client/ui/bus.ts
		/**
		* 微型外部 store：命令式 API（toast.show / dropdown.show 等）与 React
		* 宿主组件（useSyncExternalStore）之间的桥。原扩展的各 GlobalXxxManager
		* 是 window 单例 + 直接操作 DOM；DSH 下改为模块单例 + React 渲染。
		*/
		/** 可订阅的值容器。 */
		var Bus = class {
			value;
			listeners = /* @__PURE__ */ new Set();
			constructor(initial) {
				this.value = initial;
			}
			get() {
				return this.value;
			}
			set(next) {
				this.value = next;
				for (const fn of this.listeners) fn();
			}
			update(fn) {
				this.set(fn(this.value));
			}
			subscribe = (listener) => {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			};
		};
		// src/client/shared/palette.ts
		var ACTIVE_COLOR_PALETTE, DEFAULT_ACTIVE_COLOR_ID;
		var init_palette = __esmMin((() => {
			ACTIVE_COLOR_PALETTE = [
				{
					id: "black",
					solid: "#0d0d0d"
				},
				{
					id: "blue",
					solid: "#3964fe"
				},
				{
					id: "purple",
					solid: "#6128FF"
				},
				{
					id: "gemini",
					gradient: {
						angle: 135,
						stops: [
							[0, "#4285F4"],
							[.45, "#8E75FF"],
							[1, "#A142F4"]
						]
					}
				}
			];
			DEFAULT_ACTIVE_COLOR_ID = "black";
		}));
		// src/client/shared/storageSync.ts
		init_palette();
		const handlers = /* @__PURE__ */ new Map();
		function registerStorageSync(key, reload) {
			handlers.set(key, reload);
		}
		/** Keep the browser listener within the plugin's lifetime. */
		function bindStorageSync(ctx) {
			ctx.effect(() => {
				for (const reload of handlers.values()) reload();
				const sync = (event) => {
					if (event.storageArea !== localStorage) return;
					if (event.key === null) for (const reload of handlers.values()) reload();
					else handlers.get(event.key)?.();
				};
				window.addEventListener("storage", sync);
				return () => {
					window.removeEventListener("storage", sync);
				};
			}, "dsh-chat-export: storage sync");
		}
		// src/client/shared/settings.ts
		const STORAGE_KEY = "dsh.chat-export.settings";
		const LEGACY_KEY = "dsh.timeline.settings";
		const defaults = {
			conversationExportEnabled: true,
			messageScreenshotEnabled: true,
			screenshotScale: 2,
			activeColorId: DEFAULT_ACTIVE_COLOR_ID
		};
		function decode(raw) {
			const value = JSON.parse(raw);
			if (!value || typeof value !== "object") return defaults;
			const options = value.exportOptions;
			const scale = value.screenshotScale;
			return {
				conversationExportEnabled: value.conversationExportEnabled !== false,
				messageScreenshotEnabled: value.messageScreenshotEnabled !== false,
				screenshotScale: typeof scale === "number" && [
					1,
					2,
					3,
					4
				].includes(scale) ? scale : defaults.screenshotScale,
				activeColorId: typeof value.activeColorId === "string" ? value.activeColorId : defaults.activeColorId,
				...options && typeof options.formatId === "string" && typeof options.themeId === "string" ? { exportOptions: {
					formatId: options.formatId,
					themeId: options.themeId,
					showTime: options.showTime !== false,
					showConversationTime: options.showConversationTime !== false
				} } : {}
			};
		}
		/** Seed this plugin's own key once using just the export preferences from Timeline. */
		function load() {
			try {
				const raw = localStorage.getItem(STORAGE_KEY);
				if (raw !== null) return decode(raw);
				const legacy = localStorage.getItem(LEGACY_KEY);
				const initial = legacy === null ? defaults : decode(legacy);
				try {
					localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
				} catch {}
				return initial;
			} catch {
				return defaults;
			}
		}
		const bus$1 = new Bus(defaults);
		registerStorageSync(STORAGE_KEY, () => {
			bus$1.set(load());
		});
		const settingsStore = {
			subscribe: bus$1.subscribe,
			get: () => bus$1.get(),
			set(patch) {
				let current = bus$1.get();
				try {
					const latest = localStorage.getItem(STORAGE_KEY);
					if (latest !== null) current = decode(latest);
				} catch {}
				const next = {
					...current,
					...patch
				};
				bus$1.set(next);
				try {
					localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
				} catch {}
			}
		};
		// src/client/settings/dialog.ts
		const settingsDialog = new Bus(false);
		function showSettings() {
			settingsDialog.set(true);
		}
		// \0dsh-css:src/client/ui/ui.module.css?0cbb4e13d2.mjs
		const css$2 = ".WFYhkG_host{pointer-events:none;z-index:2147483647;width:0;height:0;position:fixed;top:0;left:0;overflow:visible}.WFYhkG_toast{z-index:2147483647;pointer-events:none;white-space:nowrap;align-items:center;gap:8px;max-width:400px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;display:flex;position:fixed}.WFYhkG_toastMultiline{box-sizing:border-box;white-space:pre-line;overflow-wrap:anywhere;max-width:min(400px,100vw - 16px)}.WFYhkG_toastMultilineCentered{width:max-content;margin-inline:auto;inset-inline:0}.WFYhkG_toastDefaultVisual{opacity:0;border-radius:12px;padding:10px 16px;font-size:13px;font-weight:500;transition:opacity .15s,transform .15s;transform:translateY(-10px);box-shadow:0 4px 14px #00000026,0 1px 2px #0000000f}.WFYhkG_toastVisible{opacity:1!important}.WFYhkG_toastDefaultVisual.WFYhkG_toastVisible{transform:translateY(0)!important}.WFYhkG_toastIcon{font-size:16px}.WFYhkG_toastAiComplete{corner-shape:round;letter-spacing:-.01em;-webkit-backdrop-filter:blur(16px)saturate(180%);color:#1f2937;opacity:0;background:#ffffffe6;border:1px solid #0f172a14;border-radius:999px;gap:10px;padding:7px 14px 7px 7px;font-size:13px;font-weight:500;transition:opacity .28s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1);transform:translate(14px)scale(.96);box-shadow:0 1px 2px #0f172a0a,0 8px 24px #0f172a1a,inset 0 1px #ffffffa6}.WFYhkG_toastAiComplete .WFYhkG_toastIcon{corner-shape:round;color:#fff;background:linear-gradient(145deg,#22c55e 0%,#15803d 100%);border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;width:26px;height:26px;font-size:13px;display:inline-flex;box-shadow:0 2px 8px #15803d57}.WFYhkG_toastAiComplete .WFYhkG_toastIcon svg{display:block}.WFYhkG_toastAiComplete.WFYhkG_toastVisible{opacity:1!important;transform:translate(0)scale(1)!important}.WFYhkG_host[data-theme=dark] .WFYhkG_toastAiComplete{color:#f5f5f7;background:#1c1c1ee0;border-color:#ffffff1a;box-shadow:0 1px 2px #0000003d,0 10px 28px #0000005c,inset 0 1px #ffffff0f}.WFYhkG_host[data-theme=dark] .WFYhkG_toastAiComplete .WFYhkG_toastIcon{box-shadow:0 2px 10px #15803d4d}.WFYhkG_tooltipBase{box-sizing:border-box;background-color:var(--ui-tooltip-bg,#f8fafc);color:var(--ui-tooltip-text,#334155);border:1px solid var(--ui-tooltip-border,#e2e8f0);white-space:normal;word-break:break-word;z-index:2147483647;opacity:0;visibility:hidden;pointer-events:none;border-radius:8px;max-width:400px;padding:8px 12px;font-size:15px;font-weight:500;line-height:1.5;transition:opacity .15s,visibility .15s;position:fixed;box-shadow:0 4px 12px #00000026}.WFYhkG_tooltipBase.WFYhkG_tooltipVisible{opacity:1;visibility:visible}.WFYhkG_tooltipBase:before,.WFYhkG_tooltipBase:after{content:\"\";pointer-events:none;background:0 0;width:0;height:0;position:absolute}.WFYhkG_tooltipBase[data-placement=top]:before{bottom:-8px;left:var(--arrow-offset,50%);border-left:8px solid #0000;border-right:8px solid #0000;border-top:8px solid var(--ui-tooltip-border,#e2e8f0);margin-left:-8px}.WFYhkG_tooltipBase[data-placement=top]:after{bottom:-6px;left:var(--arrow-offset,50%);border-left:7px solid #0000;border-right:7px solid #0000;border-top:7px solid var(--ui-tooltip-bg,#f8fafc);margin-left:-7px}.WFYhkG_tooltipBase[data-placement=bottom]:before{top:-8px;left:var(--arrow-offset,50%);border-left:8px solid #0000;border-right:8px solid #0000;border-bottom:8px solid var(--ui-tooltip-border,#e2e8f0);margin-left:-8px}.WFYhkG_tooltipBase[data-placement=bottom]:after{top:-6px;left:var(--arrow-offset,50%);border-left:7px solid #0000;border-right:7px solid #0000;border-bottom:7px solid var(--ui-tooltip-bg,#f8fafc);margin-left:-7px}.WFYhkG_tooltipBase[data-placement=left]:before{right:-8px;top:var(--arrow-offset,50%);border-top:8px solid #0000;border-bottom:8px solid #0000;border-left:8px solid var(--ui-tooltip-border,#e2e8f0);margin-top:-8px}.WFYhkG_tooltipBase[data-placement=left]:after{right:-6px;top:var(--arrow-offset,50%);border-top:7px solid #0000;border-bottom:7px solid #0000;border-left:7px solid var(--ui-tooltip-bg,#f8fafc);margin-top:-7px}.WFYhkG_tooltipBase[data-placement=right]:before{left:-8px;top:var(--arrow-offset,50%);border-top:8px solid #0000;border-bottom:8px solid #0000;border-right:8px solid var(--ui-tooltip-border,#e2e8f0);margin-top:-8px}.WFYhkG_tooltipBase[data-placement=right]:after{left:-6px;top:var(--arrow-offset,50%);border-top:7px solid #0000;border-bottom:7px solid #0000;border-right:7px solid var(--ui-tooltip-bg,#f8fafc);margin-top:-7px}.WFYhkG_tooltipNoArrow:before,.WFYhkG_tooltipNoArrow:after{display:none!important}.WFYhkG_tooltipSmall{border-radius:6px;padding:4px 8px;font-size:12px}.WFYhkG_tooltipLarge{padding:12px 16px;font-size:17px}.WFYhkG_tooltipMini{z-index:2147483647;pointer-events:none;white-space:nowrap;background:var(--dsw-alias-tooltip-bg);color:#fff;opacity:0;border-radius:6px;padding:4px 8px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:11px;font-weight:500;transition:opacity .12s;position:fixed;box-shadow:0 2px 8px #0003}.WFYhkG_tooltipMini[data-mini-theme=light]{color:#1f2937;background:#fff;box-shadow:0 2px 8px #0000001f}.WFYhkG_tooltipMini.WFYhkG_tooltipVisible{opacity:1}";
		const tagId$2 = "dsh-chat-export/ui.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$2) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-chat-export";
			tag.dataset.pluginCss = tagId$2;
			tag.textContent = css$2;
			document.head.appendChild(tag);
		}
		var ui_module_css_0cbb4e13d2_default = {
			"toast": "WFYhkG_toast",
			"toastVisible": "WFYhkG_toastVisible",
			"toastIcon": "WFYhkG_toastIcon",
			"tooltipVisible": "WFYhkG_tooltipVisible",
			"tooltipLarge": "WFYhkG_tooltipLarge",
			"tooltipSmall": "WFYhkG_tooltipSmall",
			"host": "WFYhkG_host",
			"tooltipMini": "WFYhkG_tooltipMini",
			"toastMultiline": "WFYhkG_toastMultiline",
			"toastMultilineCentered": "WFYhkG_toastMultilineCentered",
			"toastDefaultVisual": "WFYhkG_toastDefaultVisual",
			"toastAiComplete": "WFYhkG_toastAiComplete",
			"tooltipBase": "WFYhkG_tooltipBase",
			"tooltipNoArrow": "WFYhkG_tooltipNoArrow"
		};
		// src/client/ui/toast.tsx
		/**
		* 全局 Toast：移植原扩展 GlobalToastManager。
		* - 四种类型（success/error/info/warning），配色/图标/时长逐参数保留；
		* - 队列管理：最多同时 3 个，居中 toast 自上而下堆叠（起始 60px、间距 10px）；
		* - 相对定位：传 target 时贴目标元素 top/bottom/left/right + gap，视口边界 8px 修正；
		* - className/iconType/useClassStyles 支持 AI 完成提醒的胶囊样式。
		* 命令式 API（toast.success 等）+ React 宿主（ToastHost，portal 到 body）。
		*/
		/** 原版 config（逐参数移植）。 */
		const CONFIG = {
			maxVisible: 3,
			stackGap: 10,
			centerGap: 60,
			types: {
				success: {
					color: {
						light: {
							backgroundColor: "#ffffff",
							textColor: "#1f2937",
							borderColor: "#e5e7eb"
						},
						dark: {
							backgroundColor: "#ffffff",
							textColor: "#1f2937",
							borderColor: "#e5e7eb"
						}
					},
					icon: "✓",
					duration: 1e3,
					position: "top",
					gap: 10
				},
				error: {
					color: {
						light: {
							backgroundColor: "var(--dsw-alias-tooltip-bg)",
							textColor: "#ffffff",
							borderColor: "var(--dsw-alias-tooltip-bg)"
						},
						dark: {
							backgroundColor: "#ffffff",
							textColor: "#1f2937",
							borderColor: "#e5e7eb"
						}
					},
					icon: "⚠",
					duration: 1500,
					position: "top",
					gap: 10
				},
				info: {
					color: {
						light: {
							backgroundColor: "#ffffff",
							textColor: "#1f2937",
							borderColor: "#e5e7eb"
						},
						dark: {
							backgroundColor: "#ffffff",
							textColor: "#1f2937",
							borderColor: "#e5e7eb"
						}
					},
					icon: "✓",
					duration: 2e3,
					position: "top",
					gap: 10
				},
				warning: {
					color: {
						light: {
							backgroundColor: "var(--dsw-alias-tooltip-bg)",
							textColor: "#ffffff",
							borderColor: "var(--dsw-alias-tooltip-bg)"
						},
						dark: {
							backgroundColor: "#ffffff",
							textColor: "#1f2937",
							borderColor: "#e5e7eb"
						}
					},
					icon: "⚡",
					duration: 2e3,
					position: "top",
					gap: 10
				}
			}
		};
		let nextId = 1;
		const bus = new Bus([]);
		const timers = /* @__PURE__ */ new Map();
		function remove(id, immediate) {
			const timer = timers.get(id);
			if (timer !== void 0) {
				clearTimeout(timer);
				timers.delete(id);
			}
			const current = bus.get().find((t) => t.id === id);
			if (current === void 0) return;
			if (immediate) {
				bus.update((list) => list.filter((t) => t.id !== id));
				return;
			}
			bus.update((list) => list.map((t) => t.id === id ? {
				...t,
				leaving: true
			} : t));
			const cleanupDelay = current.config.useClassStyles === true ? 320 : 200;
			setTimeout(() => {
				bus.update((list) => list.filter((t) => t.id !== id));
			}, cleanupDelay);
		}
		function show(type, message, options = {}) {
			if (message === "") return;
			const config = {
				...CONFIG.types[type],
				...options
			};
			const id = nextId++;
			bus.update((list) => {
				let next = [...list, {
					id,
					message,
					config,
					leaving: false
				}];
				const active = next.filter((t) => !t.leaving);
				if (active.length > CONFIG.maxVisible) {
					const oldest = active[0];
					next = next.filter((t) => t.id !== oldest.id);
					const timer = timers.get(oldest.id);
					if (timer !== void 0) {
						clearTimeout(timer);
						timers.delete(oldest.id);
					}
				}
				return next;
			});
			timers.set(id, setTimeout(() => {
				remove(id, false);
			}, config.duration));
		}
		/** 命令式 Toast API（等价原 window.globalToastManager）。 */
		const toast = {
			show,
			success: (message, target = null, options = {}) => {
				show("success", message, {
					target,
					...options
				});
			},
			error: (message, target = null, options = {}) => {
				show("error", message, {
					target,
					...options
				});
			},
			info: (message, target = null, options = {}) => {
				show("info", message, {
					target,
					...options
				});
			},
			warning: (message, target = null, options = {}) => {
				show("warning", message, {
					target,
					...options
				});
			},
			forceHideAll: () => {
				for (const timer of timers.values()) clearTimeout(timer);
				timers.clear();
				bus.set([]);
			}
		};
		/** check 图标（原 _createIconElement）。 */
		function CheckIcon() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: "14",
				height: "14",
				viewBox: "0 0 14 14",
				fill: "none",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					d: "M2.75 7.25L5.75 10.25L11.25 3.75",
					stroke: "currentColor",
					strokeWidth: "1.75",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			});
		}
		/**
		* Toast 宿主：渲染队列并按原版算法定位。
		* portal 到 body，且仅在有 toast 时挂载，保证插在收藏弹窗之后、不被挡住。
		* @param props - dark 为宿主主题（决定 light/dark 配色取值）。
		* @returns toast 列表。
		*/
		function ToastHost({ dark }) {
			const list = (0, react.useSyncExternalStore)(bus.subscribe, () => bus.get());
			const refs = (0, react.useRef)(/* @__PURE__ */ new Map());
			const shown = (0, react.useRef)(/* @__PURE__ */ new Set());
			const hostRef = (0, react.useRef)(null);
			(0, react.useLayoutEffect)(() => {
				const centerToasts = list.filter((t) => t.config.target == null && !t.leaving);
				const relativeToasts = list.filter((t) => t.config.target != null && !t.leaving);
				let centerTop = CONFIG.centerGap;
				centerToasts.forEach((t) => {
					const el = refs.current.get(t.id);
					if (el === void 0) return;
					const rect = el.getBoundingClientRect();
					if (!t.config.multiline) el.style.left = `${(window.innerWidth - rect.width) / 2}px`;
					el.style.top = `${centerTop}px`;
					centerTop += rect.height + CONFIG.stackGap;
				});
				for (const t of relativeToasts) {
					const el = refs.current.get(t.id);
					const target = t.config.target;
					if (el === void 0 || target == null) continue;
					if (!target.isConnected) {
						remove(t.id, true);
						continue;
					}
					const targetRect = target.getBoundingClientRect();
					const toastRect = el.getBoundingClientRect();
					const gap = t.config.gap ?? 10;
					let x;
					let y;
					switch (t.config.position) {
						case "bottom":
							x = targetRect.left + (targetRect.width - toastRect.width) / 2;
							y = targetRect.bottom + gap;
							break;
						case "left":
							x = targetRect.left - toastRect.width - gap;
							y = targetRect.top + (targetRect.height - toastRect.height) / 2;
							break;
						case "right":
							x = targetRect.right + gap;
							y = targetRect.top + (targetRect.height - toastRect.height) / 2;
							break;
						default:
							x = targetRect.left + (targetRect.width - toastRect.width) / 2;
							y = targetRect.top - toastRect.height - gap;
					}
					const padding = 8;
					x = Math.max(padding, Math.min(x, window.innerWidth - toastRect.width - padding));
					y = Math.max(padding, Math.min(y, window.innerHeight - toastRect.height - padding));
					el.style.left = `${x}px`;
					el.style.top = `${y}px`;
				}
				for (const t of list) {
					const el = refs.current.get(t.id);
					if (el === void 0) continue;
					if (t.leaving) {
						el.classList.remove(ui_module_css_0cbb4e13d2_default.toastVisible);
						continue;
					}
					if (shown.current.has(t.id)) continue;
					shown.current.add(t.id);
					requestAnimationFrame(() => {
						el.classList.add(ui_module_css_0cbb4e13d2_default.toastVisible);
					});
				}
				for (const id of [...shown.current]) if (!list.some((t) => t.id === id)) shown.current.delete(id);
				const host = hostRef.current;
				if (host !== null && host.parentNode === document.body) document.body.appendChild(host);
			}, [list]);
			if (list.length === 0) return null;
			return (0, react_dom.createPortal)(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				ref: hostRef,
				className: ui_module_css_0cbb4e13d2_default.host,
				"data-theme": dark ? "dark" : "light",
				children: list.map((t) => {
					const useClass = t.config.useClassStyles === true;
					const colors = t.config.color === false ? null : dark ? (t.config.color ?? CONFIG.types.info.color).dark : (t.config.color ?? CONFIG.types.info.color).light;
					const classNames = [
						ui_module_css_0cbb4e13d2_default.toast,
						useClass ? "" : ui_module_css_0cbb4e13d2_default.toastDefaultVisual,
						t.config.multiline ? ui_module_css_0cbb4e13d2_default.toastMultiline : "",
						t.config.multiline && t.config.target == null ? ui_module_css_0cbb4e13d2_default.toastMultilineCentered : "",
						t.config.className === "ait-ai-complete-toast" ? ui_module_css_0cbb4e13d2_default.toastAiComplete : "",
						t.config.className ?? ""
					].filter(Boolean).join(" ");
					return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						ref: (el) => {
							if (el !== null) refs.current.set(t.id, el);
							else refs.current.delete(t.id);
						},
						className: classNames,
						style: colors !== null && !useClass ? {
							backgroundColor: colors.backgroundColor,
							color: colors.textColor,
							border: `1px solid ${colors.borderColor}`,
							...t.leaving ? {
								opacity: 0,
								transform: "translateY(-10px)"
							} : {}
						} : void 0,
						children: [t.config.iconType === "check" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ui_module_css_0cbb4e13d2_default.toastIcon,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CheckIcon, {})
						}) : t.config.icon !== void 0 && t.config.icon !== "" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ui_module_css_0cbb4e13d2_default.toastIcon,
							children: t.config.icon
						}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t.message })]
					}, t.id);
				})
			}), document.body);
		}
		// src/client/ui/tooltip.tsx
		/**
		* 全局 Tooltip：移植原扩展 GlobalTooltipManager 的 button 型 tooltip
		* 与二级悬浮 mini tooltip（showOverlay）。
		* - button 型：showDelay 0 / hideDelay 100、placement 默认 bottom、gap 12、
		*   auto 时按 左>右>上>下 择位、视口 8px 边界修正、箭头随修正偏移；
		* - 安全网：滚动/点击外部/ESC/窗口失焦 强制隐藏；目标移出视口隐藏；
		* - mini：小号无箭头黑底提示（主 tooltip 内图标 hover 用），支持 light 反转。
		* 注：原 node 型 tooltip 已由时间轴 DotTooltip 组件化承载。
		*/
		/** tooltip 配色（light/dark 两套，原 config.types.button.color）。 */
		const BUTTON_COLORS = {
			light: {
				backgroundColor: "#f8fafc",
				textColor: "#334155",
				borderColor: "#e2e8f0"
			},
			dark: {
				backgroundColor: "#27272a",
				textColor: "#e5e7eb",
				borderColor: "#3f3f46"
			}
		};
		const tipBus = new Bus(null);
		const miniBus = new Bus(null);
		let showTimer = null;
		let hideTimer = null;
		function clearTimers() {
			if (showTimer !== null) {
				clearTimeout(showTimer);
				showTimer = null;
			}
			if (hideTimer !== null) {
				clearTimeout(hideTimer);
				hideTimer = null;
			}
		}
		/** 命令式 Tooltip API（等价原 window.globalTooltipManager 的 button/overlay 面）。 */
		const tooltip = {
			/** 显示 button 型 tooltip（原 show(id,'button',target,content)，富内容对应原 html 形态）。 */
			show(id, target, content, options = {}) {
				if (!target.isConnected || content === "" || content === null || content === void 0) return;
				const current = tipBus.get();
				if (current !== null && current.id === id) return;
				clearTimers();
				const delay = options.showDelay ?? 0;
				showTimer = setTimeout(() => {
					showTimer = null;
					if (!target.isConnected) return;
					tipBus.set({
						id,
						target,
						content,
						options
					});
				}, delay);
			},
			hide(immediate = false) {
				if (showTimer !== null) {
					clearTimeout(showTimer);
					showTimer = null;
				}
				if (immediate) {
					if (hideTimer !== null) {
						clearTimeout(hideTimer);
						hideTimer = null;
					}
					tipBus.set(null);
					return;
				}
				const delay = tipBus.get()?.options.hideDelay ?? 100;
				if (hideTimer !== null) clearTimeout(hideTimer);
				hideTimer = setTimeout(() => {
					hideTimer = null;
					tipBus.set(null);
				}, delay);
			},
			forceHideAll() {
				clearTimers();
				tipBus.set(null);
				miniBus.set(null);
			},
			isShowing(id) {
				return tipBus.get()?.id === id;
			},
			/** 二级悬浮 mini tooltip（原 showOverlay）。 */
			showOverlay(target, text, options = {}) {
				if (!target.isConnected) return;
				let theme = options.theme ?? null;
				if (theme === null) {
					const parent = target.closest("[data-tooltip-theme]");
					if (parent !== null) theme = parent.getAttribute("data-tooltip-theme") === "dark" ? "dark" : "light";
				}
				miniBus.set({
					target,
					text,
					placement: options.placement ?? "top",
					theme
				});
			},
			hideOverlay() {
				miniBus.set(null);
			}
		};
		/** 择位（原 _chooseBestPlacement：左>右>上>下）。 */
		function chooseBestPlacement(targetRect, tipRect) {
			const space = {
				left: targetRect.left,
				right: window.innerWidth - targetRect.right,
				top: targetRect.top,
				bottom: window.innerHeight - targetRect.bottom
			};
			const padding = 20;
			if (space.left >= tipRect.width + padding) return "left";
			if (space.right >= tipRect.width + padding) return "right";
			if (space.top >= tipRect.height + padding) return "top";
			return "bottom";
		}
		/**
		* Tooltip 宿主。
		* @param props - dark 为宿主主题。
		* @returns button 型 tooltip + mini tooltip。
		*/
		function TooltipHost({ dark }) {
			const busTip = (0, react.useSyncExternalStore)(tipBus.subscribe, () => tipBus.get());
			const mini = (0, react.useSyncExternalStore)(miniBus.subscribe, () => miniBus.get());
			const tipRef = (0, react.useRef)(null);
			const miniRef = (0, react.useRef)(null);
			const [tip, setTip] = (0, react.useState)(busTip);
			const leaveTimerRef = (0, react.useRef)(null);
			(0, react.useLayoutEffect)(() => {
				if (busTip !== null) {
					if (leaveTimerRef.current !== null) {
						clearTimeout(leaveTimerRef.current);
						leaveTimerRef.current = null;
					}
					setTip(busTip);
					return;
				}
				if (tip === null) return;
				tipRef.current?.classList.remove(ui_module_css_0cbb4e13d2_default.tooltipVisible);
				leaveTimerRef.current = setTimeout(() => {
					leaveTimerRef.current = null;
					setTip(null);
				}, 200);
				return () => {
					if (leaveTimerRef.current !== null) {
						clearTimeout(leaveTimerRef.current);
						leaveTimerRef.current = null;
					}
				};
			}, [busTip]);
			(0, react.useLayoutEffect)(() => {
				const el = tipRef.current;
				if (el === null || tip === null) return;
				el.classList.remove(ui_module_css_0cbb4e13d2_default.tooltipVisible);
				const targetRect = tip.target.getBoundingClientRect();
				const tipRect = el.getBoundingClientRect();
				const gap = tip.options.gap ?? 12;
				let placement = tip.options.placement ?? "bottom";
				if (placement === "auto") placement = chooseBestPlacement(targetRect, tipRect);
				let left;
				let top;
				switch (placement) {
					case "left":
						left = targetRect.left - tipRect.width - gap;
						top = targetRect.top + (targetRect.height - tipRect.height) / 2;
						break;
					case "right":
						left = targetRect.right + gap;
						top = targetRect.top + (targetRect.height - tipRect.height) / 2;
						break;
					case "top":
						left = targetRect.left + (targetRect.width - tipRect.width) / 2;
						top = targetRect.top - tipRect.height - gap;
						break;
					default:
						left = targetRect.left + (targetRect.width - tipRect.width) / 2;
						top = targetRect.bottom + gap;
				}
				left = Math.round(left);
				top = Math.round(top);
				const pad = 8;
				if (left < pad) left = pad;
				else if (left + tipRect.width > window.innerWidth - pad) left = window.innerWidth - tipRect.width - pad;
				if (top < pad) top = pad;
				else if (top + tipRect.height > window.innerHeight - pad) top = window.innerHeight - tipRect.height - pad;
				const targetCenterX = targetRect.left + targetRect.width / 2;
				const targetCenterY = targetRect.top + targetRect.height / 2;
				let arrowOffset = "50%";
				if (placement === "top" || placement === "bottom") {
					const offsetPx = targetCenterX - left;
					arrowOffset = `${Math.max(12, Math.min(tipRect.width - 12, offsetPx))}px`;
				} else {
					const offsetPx = targetCenterY - top;
					arrowOffset = `${Math.max(12, Math.min(tipRect.height - 12, offsetPx))}px`;
				}
				el.setAttribute("data-placement", placement);
				el.style.setProperty("--arrow-offset", arrowOffset);
				el.style.left = `${left}px`;
				el.style.top = `${top}px`;
				requestAnimationFrame(() => {
					el.classList.add(ui_module_css_0cbb4e13d2_default.tooltipVisible);
				});
			}, [tip]);
			(0, react.useEffect)(() => {
				if (tip === null) return;
				const onScroll = () => {
					tooltip.forceHideAll();
				};
				const onClick = (e) => {
					const t = e.target;
					if (t instanceof Node && (tip.target === t || tip.target.contains(t))) return;
					if (tipRef.current !== null && t instanceof Node && tipRef.current.contains(t)) return;
					tooltip.hide(true);
				};
				const onKeydown = (e) => {
					if (e.key === "Escape") tooltip.forceHideAll();
				};
				const onBlur = () => {
					tooltip.forceHideAll();
				};
				document.addEventListener("scroll", onScroll, true);
				document.addEventListener("click", onClick, true);
				document.addEventListener("keydown", onKeydown);
				window.addEventListener("blur", onBlur);
				const io = new IntersectionObserver((entries) => {
					for (const entry of entries) if (!entry.isIntersecting) tooltip.forceHideAll();
				}, { threshold: 0 });
				io.observe(tip.target);
				return () => {
					document.removeEventListener("scroll", onScroll, true);
					document.removeEventListener("click", onClick, true);
					document.removeEventListener("keydown", onKeydown);
					window.removeEventListener("blur", onBlur);
					io.disconnect();
				};
			}, [tip]);
			(0, react.useLayoutEffect)(() => {
				const el = miniRef.current;
				if (el === null || mini === null) return;
				const targetRect = mini.target.getBoundingClientRect();
				const elRect = el.getBoundingClientRect();
				const gap = 6;
				let top;
				let left;
				if (mini.placement === "top") {
					top = targetRect.top - elRect.height - gap;
					left = targetRect.left + (targetRect.width - elRect.width) / 2;
				} else {
					top = targetRect.bottom + gap;
					left = targetRect.left + (targetRect.width - elRect.width) / 2;
				}
				if (left < 4) left = 4;
				if (left + elRect.width > window.innerWidth - 4) left = window.innerWidth - elRect.width - 4;
				if (top < 4) top = targetRect.bottom + gap;
				el.style.top = `${top}px`;
				el.style.left = `${left}px`;
				requestAnimationFrame(() => {
					el.classList.add(ui_module_css_0cbb4e13d2_default.tooltipVisible);
				});
			}, [mini]);
			const custom = tip?.options.color;
			const palette = custom === void 0 ? BUTTON_COLORS : "light" in custom ? custom : {
				light: custom,
				dark: custom
			};
			const surfaceDark = tip?.options.theme === "inverse" ? !dark : dark;
			const colors = surfaceDark ? palette.dark : palette.light;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [tip !== null ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				ref: tipRef,
				className: [
					ui_module_css_0cbb4e13d2_default.tooltipBase,
					tip.options.noArrow === true ? ui_module_css_0cbb4e13d2_default.tooltipNoArrow : "",
					tip.options.size === "small" ? ui_module_css_0cbb4e13d2_default.tooltipSmall : "",
					tip.options.size === "large" ? ui_module_css_0cbb4e13d2_default.tooltipLarge : ""
				].filter(Boolean).join(" "),
				role: "tooltip",
				"data-tooltip-theme": surfaceDark ? "dark" : "light",
				style: {
					maxWidth: `${tip.options.maxWidth ?? 400}px`,
					backgroundColor: colors.backgroundColor,
					color: colors.textColor,
					borderColor: colors.borderColor,
					"--ui-tooltip-bg": colors.backgroundColor,
					"--ui-tooltip-text": colors.textColor,
					"--ui-tooltip-border": colors.borderColor
				},
				children: tip.content
			}) : null, mini !== null ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				ref: miniRef,
				className: ui_module_css_0cbb4e13d2_default.tooltipMini,
				"data-mini-theme": mini.theme ?? void 0,
				children: mini.text
			}) : null] });
		}
		// src/client/ui/SettingsIcon.tsx
		function SettingsIcon({ strokeWidth = 2 }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M9.67 4.14a2.34 2.34 0 0 1 4.66 0 2.34 2.34 0 0 0 3.32 1.91 2.34 2.34 0 0 1 2.33 4.04 2.34 2.34 0 0 0 0 3.82 2.34 2.34 0 0 1-2.33 4.04 2.34 2.34 0 0 0-3.32 1.91 2.34 2.34 0 0 1-4.66 0 2.34 2.34 0 0 0-3.32-1.91 2.34 2.34 0 0 1-2.33-4.04 2.34 2.34 0 0 0 0-3.82 2.34 2.34 0 0 1 2.33-4.04 2.34 2.34 0 0 0 3.32-1.91Z" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "12",
					r: "3"
				})]
			});
		}
		// src/client/conversationExport/constants.ts
		/**
		* 按模板插值文案（原 ceFormatText）。
		* @param template - 含 {key} 占位符的模板。
		* @param params - 键值。
		*/
		function ceFormatText(template, params = {}) {
			return template.replace(/\{(\w+)\}/g, (match, key) => Object.prototype.hasOwnProperty.call(params, key) ? String(params[key]) : match);
		}
		/**
		* 根据 id 取主题定义，找不到时回退默认（原 ceGetTheme）。
		* @param themeId - 主题 id。
		*/
		function ceGetTheme(themeId) {
			return CE_THEMES.find((t) => t.id === themeId) ?? CE_THEMES.find((t) => t.id === "purple") ?? CE_THEMES[0];
		}
		/**
		* 清洗文件名（原 ceSanitizeFilename）：移除控制字符与文件系统保留字符并限长。
		* @param rawName - 原始标题。
		* @param fallback - 缺省文件名。
		*/
		function ceSanitizeFilename(rawName, fallback) {
			let name = rawName.trim();
			name = name.replace(/[\x00-\x1f\x80-\x9f]/g, "").replace(/[\\/:*?"<>|]/g, " ").replace(/\s+/g, " ").trim();
			name = name.replace(/\.+$/, "").trim();
			if (name === "") name = fallback;
			if (name.length > 80) name = name.slice(0, 80).trim();
			return name !== "" ? name : fallback;
		}
		/**
		* 本地时间字符串 YYYY-MM-DD HH:mm:ss（原 ceFormatLocalTime）。
		* @param date - 时间（默认当前）。
		*/
		function ceFormatLocalTime(date = /* @__PURE__ */ new Date()) {
			const pad = (n) => String(n).padStart(2, "0");
			return `${String(date.getFullYear())}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
		}
		/**
		* 提问时间 YYYY-MM-DD HH:mm（原 ceFormatChatTime，不含秒）。
		* @param timestamp - 毫秒时间戳。
		*/
		function ceFormatChatTime(timestamp) {
			if (!timestamp) return "";
			const date = new Date(timestamp);
			if (Number.isNaN(date.getTime())) return "";
			const pad = (n) => String(n).padStart(2, "0");
			return `${String(date.getFullYear())}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
		}
		var CE_FORMATS, CE_THEMES, CE_MAX_CANVAS_HEIGHT;
		var init_constants = __esmMin((() => {
			init_palette();
			CE_FORMATS = [
				{
					id: "markdown",
					label: "Markdown",
					ext: ".md",
					mime: "text/markdown"
				},
				{
					id: "txt",
					label: "TXT",
					ext: ".txt",
					mime: "text/plain"
				},
				{
					id: "json",
					label: "JSON",
					ext: ".json",
					mime: "application/json"
				},
				{
					id: "csv",
					label: "CSV",
					ext: ".csv",
					mime: "text/csv"
				},
				{
					id: "png",
					label: "PNG",
					ext: ".png",
					mime: "image/png"
				},
				{
					id: "pdf",
					label: "PDF",
					ext: ".pdf",
					mime: "application/pdf"
				}
			];
			CE_THEMES = ACTIVE_COLOR_PALETTE.map((entry) => ({
				id: entry.id,
				textColor: "#ffffff",
				...entry.gradient !== void 0 ? { gradient: entry.gradient.stops.map((stop) => [stop[0], stop[1]]) } : { solid: entry.solid }
			}));
			CE_MAX_CANVAS_HEIGHT = 3e4;
		}));
		// src/client/conversationExport/markdown.ts
		function replaceMarkdownTokens(source, tokens, render, renderText = (text) => text) {
			let result = "", last = 0;
			for (const token of tokens) {
				result += renderText(source.slice(last, token.start)) + render(token);
				last = token.end;
			}
			return result + renderText(source.slice(last));
		}
		/** 反引号数量必须匹配，避免多反引号代码示例被拆成普通正文。 */
		function inlineCodeSpans(source) {
			const spans = [];
			for (let index = 0; index < source.length; index++) {
				if (source[index] === "\\") {
					index++;
					continue;
				}
				if (source[index] !== "`") continue;
				const start = index;
				while (source[index] === "`") index++;
				const size = index - start;
				let cursor = index;
				while ((cursor = source.indexOf("`", cursor)) !== -1) {
					const closing = cursor;
					while (source[cursor] === "`") cursor++;
					if (cursor - closing !== size) continue;
					spans.push({
						start,
						end: cursor,
						text: source.slice(index, closing)
					});
					index = cursor - 1;
					break;
				}
				if (cursor === -1) index--;
			}
			return spans;
		}
		/** Keep code opaque across formatting that can span a literal, such as a link label. */
		function markdownLiterals() {
			const values = [];
			const protect = (text) => `\u0000${values.push(text) - 1}\u0000`;
			return {
				protect,
				protectInline: (source) => replaceMarkdownTokens(source, inlineCodeSpans(source), (code) => protect(code.text), (prose) => prose.replaceAll("\0", () => protect("\0"))),
				restore: (text) => text.replace(/\u0000(\d+)\u0000/g, (_, index) => values[Number(index)])
			};
		}
		function fencedCodeSpans(source) {
			const spans = [];
			let fence;
			let start = 0;
			for (const line of source.split("\n")) {
				if (start === source.length) break;
				const end = Math.min(start + line.length + 1, source.length);
				const quotes = line.match(/^(?: {0,3}>[ \t]?)+/)?.[0] ?? "";
				const quoteDepth = quotes.split(">").length - 1;
				const match = line.slice(quotes.length).replace(/\r$/, "").match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
				const lineBreak = source[start - 2] === "\r" ? 2 : 1;
				if (fence !== void 0 && quoteDepth < fence.quoteDepth) {
					spans.push({
						...fence,
						end: start,
						contentEnd: Math.max(fence.contentStart, start - lineBreak)
					});
					fence = void 0;
				}
				if (match !== null) {
					const [, marker, rest] = match;
					if (fence === void 0) {
						if (marker[0] !== "`" || !rest.includes("`")) fence = {
							start,
							marker,
							contentStart: end,
							quoteDepth,
							info: rest.trim()
						};
					} else if (quoteDepth === fence.quoteDepth && marker[0] === fence.marker[0] && marker.length >= fence.marker.length && rest.trim() === "") {
						spans.push({
							...fence,
							end,
							contentEnd: Math.max(fence.contentStart, start - lineBreak)
						});
						fence = void 0;
					}
				}
				start = end;
			}
			if (fence !== void 0) spans.push({
				...fence,
				end: source.length,
				contentEnd: source.length
			});
			return spans;
		}
		function fencedCodeText(source, fence) {
			const body = source.slice(fence.contentStart, fence.contentEnd);
			if (fence.quoteDepth === 0) return body;
			const quotePrefix = new RegExp(`^(?: {0,3}>[ \\t]?){1,${fence.quoteDepth}}`, "gm");
			return body.replace(quotePrefix, "");
		}
		function maskMarkdownCode(markdown) {
			const mask = (text) => text.replace(/[^\n]/g, " ");
			const source = replaceMarkdownTokens(markdown, fencedCodeSpans(markdown), (span) => mask(markdown.slice(span.start, span.end))).split("\n").map((line) => {
				const content = line.replace(/^(?: {0,3}>[ \t]?)+/, "");
				return /^(?: {4}|\t)/.test(content) ? mask(line) : line;
			}).join("\n");
			return replaceMarkdownTokens(source, inlineCodeSpans(source), (span) => mask(source.slice(span.start, span.end)));
		}
		/** 读取图片引用的范围，使用括号计数保留 URL；与 PDF 使用同一个解析结果。 */
		function markdownImages(markdown) {
			const source = maskMarkdownCode(markdown);
			const unescape = (text) => text.replace(/\\([\\`*{}\[\]()#+\-.!_>~|])/g, "$1");
			const images = [];
			for (let start = 0; start < source.length; start++) {
				if (source[start] === "\\") {
					start++;
					continue;
				}
				if (!source.startsWith("![", start)) continue;
				let cursor = start + 2, brackets = 1;
				for (; cursor < source.length; cursor++) {
					if (source[cursor] === "\\") {
						cursor++;
						continue;
					}
					if (source[cursor] === "[") brackets++;
					if (source[cursor] === "]" && --brackets === 0) break;
				}
				const labelEnd = cursor;
				if (brackets || source[++cursor] !== "(") continue;
				cursor++;
				while (/\s/.test(source[cursor] || "") && cursor < source.length) cursor++;
				let urlStart = cursor, urlEnd;
				if (source[cursor] === "<") {
					urlStart = ++cursor;
					while (cursor < source.length && source[cursor] !== ">") cursor++;
					if (cursor === source.length) continue;
					urlEnd = cursor++;
				} else {
					let depth = 0;
					for (; cursor < source.length; cursor++) {
						const char = source[cursor];
						if (char === "\\") {
							cursor++;
							continue;
						}
						if (char === "(") depth++;
						else if (char === ")") {
							if (!depth) break;
							depth--;
						} else if (/\s/.test(char)) break;
					}
					if (depth) continue;
					urlEnd = cursor;
				}
				while (/\s/.test(source[cursor] || "") && cursor < source.length) cursor++;
				if (source[cursor] === "\"" || source[cursor] === "'") {
					const quote = source[cursor++];
					while (cursor < source.length && source[cursor] !== quote) {
						if (source[cursor] === "\\") cursor++;
						cursor++;
					}
					if (source[cursor++] !== quote) continue;
					while (/\s/.test(source[cursor] || "") && cursor < source.length) cursor++;
				}
				if (source[cursor] !== ")" || urlStart === urlEnd) continue;
				images.push({
					start,
					end: cursor + 1,
					src: unescape(markdown.slice(urlStart, urlEnd)),
					alt: unescape(markdown.slice(start + 2, labelEnd))
				});
				start = cursor;
			}
			return images;
		}
		function splitTableRow(line) {
			const cells = line.trim().split(/(?<!\\)\|/);
			if (cells[0] === "") cells.shift();
			if (cells.at(-1) === "") cells.pop();
			return cells.map((cell) => cell.trim().replace(/\\\|/g, "|"));
		}
		function safeImageSource(src) {
			if (/^data:image\/(?:png|jpeg|gif|webp|avif|bmp);/i.test(src)) return src;
			try {
				const url = new URL(src, document.baseURI);
				return [
					"https:",
					"http:",
					"blob:"
				].includes(url.protocol) ? url.href : "";
			} catch {
				return "";
			}
		}
		var init_markdown = __esmMin((() => {}));
		// src/client/conversationExport/collect.ts
		init_constants();
		init_markdown();
		/** 计入轮次的用户输入节点类别（与时间轴一致：提问 + 轮中追问）。 */
		const USER_KINDS = /* @__PURE__ */ new Set(["user", "steering"]);
		function userBlockText(block) {
			const b = block;
			return typeof b === "object" && b !== null && b.type === "text" && typeof b.text === "string" ? b.text : "";
		}
		function trimMessageEdges(markdown) {
			const trimmed = markdown.trimEnd();
			if (trimmed.length < markdown.length && fencedCodeSpans(markdown).at(-1)?.contentEnd === markdown.length) return markdown.trimStart();
			return trimmed.trimStart();
		}
		/**
		* 从会话快照采集全部轮次（原 collectAllTurns 的 DSH 等价实现）。
		* @param order - chat.order 节点键序。
		* @param nodes - chat.nodes 节点表。
		* @param resolveAttachment - 图片字节解析器。
		* @param options - 进度与取消回调。
		* @returns 轮次数组（用户消息为界，其后的助手消息并入该轮）。
		*/
		async function collectAllTurns(chatOrder, nodes, resolveAttachment, options = {}) {
			const mutables = [];
			let current = null;
			const includes = (key) => options.selectedKeys?.has(key) ?? true;
			const pendingImages = [];
			for (const key of chatOrder) {
				const node = nodes.get(key);
				if (node === void 0 || node.visibility === "hidden") continue;
				if (USER_KINDS.has(node.kind)) {
					const data = node.data;
					const includeUser = includes(key);
					const content = includeUser ? data.content ?? [] : [];
					current = {
						userKey: key,
						includeUser,
						assistantMessages: [],
						userText: trimMessageEdges(content.map(userBlockText).filter((t) => t !== "").join("\n\n")),
						userTime: includeUser ? data.time ?? 0 : 0,
						userImages: [],
						assistantParts: [],
						assistantImages: []
					};
					mutables.push(current);
					for (const block of content) {
						const b = block;
						if (typeof b === "object" && b !== null && b.type === "image" && b.attachment?.attachmentId !== void 0) {
							const image = {
								role: "user",
								src: "",
								alt: b.attachment.name ?? "",
								width: b.attachment.width ?? null,
								height: b.attachment.height ?? null,
								fileId: b.attachment.attachmentId,
								unrendered: true
							};
							const turn = current;
							const index = turn.userImages.length;
							turn.userImages.push(image);
							if (resolveAttachment !== null) pendingImages.push({
								image,
								attachmentId: b.attachment.attachmentId,
								assign: (img) => {
									turn.userImages[index] = img;
								}
							});
						}
					}
					options.onProgress?.(mutables.length);
					continue;
				}
				if (node.kind === "assistant-step" && includes(key)) {
					if (current === null) {
						current = {
							userKey: "",
							includeUser: false,
							assistantMessages: [],
							userText: "",
							userTime: 0,
							userImages: [],
							assistantParts: [],
							assistantImages: []
						};
						mutables.push(current);
					}
					const data = node.data;
					const texts = [];
					const imageStart = current.assistantImages.length;
					for (const block of data.blocks ?? []) if (block.kind === "text" && typeof block.text === "string" && block.text.trim() !== "") texts.push(block.text);
					else if (block.kind === "image" && block.attachment?.attachmentId !== void 0) {
						const image = {
							role: "assistant",
							src: "",
							alt: block.attachment.name ?? "",
							width: block.attachment.width ?? null,
							height: block.attachment.height ?? null,
							fileId: block.attachment.attachmentId,
							unrendered: true
						};
						const turn = current;
						const index = turn.assistantImages.length;
						turn.assistantImages.push(image);
						if (resolveAttachment !== null) pendingImages.push({
							image,
							attachmentId: block.attachment.attachmentId,
							assign: (img) => {
								turn.assistantImages[index] = img;
							}
						});
					}
					if (texts.length > 0 || current.assistantImages.length > imageStart) {
						const text = texts.join("\n\n");
						current.assistantMessages.push({
							key,
							messageId: data.finalNode?.messageId,
							text: markdownToPlainText(text)
						});
						if (text !== "") current.assistantParts.push(text);
					}
				}
			}
			if (resolveAttachment !== null) {
				const pending = pendingImages.values();
				async function resolveImages(resolve) {
					for (const { image, attachmentId, assign } of pending) {
						if (options.shouldCancel?.() === true) break;
						try {
							const resolved = await resolve(attachmentId);
							if (resolved === null || options.shouldCancel?.() === true) continue;
							const blob = new Blob([resolved.data], { type: resolved.mediaType });
							const src = options.imageEncoding === "data" ? await new Promise((resolve, reject) => {
								const reader = new FileReader();
								reader.onload = () => {
									resolve(String(reader.result));
								};
								reader.onerror = () => {
									reject(reader.error);
								};
								reader.readAsDataURL(blob);
							}) : URL.createObjectURL(blob);
							if (options.shouldCancel?.() === true) {
								if (src.startsWith("blob:")) URL.revokeObjectURL(src);
								break;
							}
							assign({
								...image,
								src,
								width: resolved.width,
								height: resolved.height,
								unrendered: false
							});
						} catch {}
					}
				}
				await Promise.all(Array.from({ length: Math.min(6, pendingImages.length) }, () => resolveImages(resolveAttachment)));
			}
			if (options.shouldCancel?.() === true) {
				for (const turn of mutables) revokeImageUrls([...turn.userImages, ...turn.assistantImages]);
				return [];
			}
			const turns = [];
			for (const m of mutables) {
				const { userImages, assistantImages } = m;
				const markdown = trimMessageEdges(normalizeMathDelimiters(m.assistantParts.join("\n\n")));
				const text = markdownToPlainText(markdown);
				if (m.userText === "" && userImages.length === 0 && markdown === "" && assistantImages.length === 0) continue;
				turns.push({
					order: turns.length + 1,
					userKey: m.userKey,
					assistantMessages: m.assistantMessages,
					omitUser: !m.includeUser,
					omitAssistant: options.selectedKeys !== void 0 && m.assistantMessages.length === 0,
					user: {
						text: m.userText,
						time: m.userTime,
						images: userImages
					},
					assistant: {
						markdown,
						text,
						images: assistantImages
					}
				});
			}
			return turns;
		}
		function revokeImageUrls(images) {
			for (const image of images) if (image.src.startsWith("blob:")) URL.revokeObjectURL(image.src);
		}
		function releaseExportImages(turns) {
			for (const turn of turns) revokeImageUrls([...turn.user.images, ...turn.assistant.images]);
		}
		/**
		* 公式定界符归一化：\[...\] 与 $$...$$ 统一为独占行的 $$ 围栏，\(...\) → $...$。
		* DeepSeek 回复与 dsh 渲染层同时支持 $ 系与 TeX 系定界符，而下游导出器
		* （PNG 的块解析 / PDF / Markdown）只识别 $ 系；代码围栏内不做替换。
		*/
		function normalizeMathDelimiters(markdown) {
			const normalize = (text) => text.replace(/\\\[([\s\S]*?)\\\]/g, (_, tex) => `\n\n$$\n${tex.trim()}\n$$\n\n`).replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => `\n\n$$\n${tex.trim()}\n$$\n\n`).replace(/\\\((.*?)\\\)/g, (_, tex) => `$${tex.trim()}$`);
			const normalizeText = (segment) => replaceMarkdownTokens(segment, inlineCodeSpans(segment), (code) => segment.slice(code.start, code.end), normalize);
			return replaceMarkdownTokens(markdown, fencedCodeSpans(markdown), (fence) => markdown.slice(fence.start, fence.end), normalizeText);
		}
		/**
		* Markdown → 纯文本（原 adapters 由 DOM innerText 提供；此处从 markdown 剥离标记，
		* 覆盖：代码围栏（含未闭合）、块级/行内公式定界符、表格（分隔行丢弃、单元格转制表符）、
		* 分隔线、标题、图片/链接、行内标记、引用、列表符号）。
		*/
		function markdownToPlainText(markdown) {
			const { protect, protectInline, restore } = markdownLiterals();
			return restore(replaceMarkdownTokens(markdown, fencedCodeSpans(markdown), (fence) => protect(fencedCodeText(markdown, fence)) + (fence.end < markdown.length ? "\n" : ""), protectInline).replace(/\$\$([\s\S]*?)\$\$/g, "$1").replace(/\$([^$\n]+?)\$/g, "$1").replace(/\\\[([\s\S]*?)\\\]/g, "$1").replace(/\\\((.*?)\\\)/g, "$1").split("\n").flatMap((line) => {
				const trimmed = line.trim();
				if (trimmed.startsWith("|") && /^\|?[\s:|-]+$/.test(trimmed)) return [];
				if (trimmed.startsWith("|")) return [splitTableRow(trimmed).join("	")];
				return [line];
			}).join("\n").replace(/^\s*(-{3,}|\*{3,}|_{3,})\s*$/gm, "").replace(/^#{1,6}\s+/gm, "").replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/__([^_]+)__/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/^\s*>\s?/gm, "").replace(/^(\s*)[-*+]\s+/gm, "$1- ").replace(/\n{3,}/g, "\n\n").trim());
		}
		// src/client/conversationExport/exporters.ts
		/**
		* 对话导出：文本类导出器（Markdown / TXT / JSON / CSV）与下载工具。
		* 移植原 conversationExport/exporters.js（CETextExporters + ceTriggerDownload），
		* 文案改由 CeTexts 注入。
		*/
		init_markdown();
		function turnImages(turn) {
			return [...turn.user.images, ...turn.assistant.images];
		}
		function imageInfoLabel(image, texts) {
			return `${image.role === "user" ? texts.exportRoleUser : texts.exportRoleAssistant} · ${(image.width ?? 0) > 0 && (image.height ?? 0) > 0 ? `${String(image.width)}x${String(image.height)}` : texts.unknownSize}${image.alt !== "" ? ` ${image.alt}` : ""}`;
		}
		/** 一张图片对应的 Markdown 行（原 _imageMarkdownLines）。 */
		function imageMarkdownLines(image, texts) {
			if (image.src !== "") return [`![${image.alt}](${image.src})`, `> ${texts.imageListTitle}：${imageInfoLabel(image, texts)}`];
			return [`> ${texts.imageListTitle}：${imageInfoLabel(image, texts)}（${texts.imageNotRendered}）`];
		}
		/** Markdown 导出（原 buildMarkdown）。 */
		function buildMarkdown(job, texts) {
			const { meta, options, turns } = job;
			const lines = [];
			lines.push(`# ${meta.title}`);
			const headerLines = [];
			if (options.showTime) headerLines.push(`> ${texts.timeLabel}: ${ceFormatLocalTime(meta.exportTime)}`);
			if (headerLines.length > 0) {
				lines.push("");
				lines.push(...headerLines);
			}
			lines.push("");
			lines.push("---");
			for (const turn of turns) {
				if (!turn.omitUser) {
					lines.push("");
					lines.push(`**${texts.exportRoleUser}：**`);
					const mdAskTime = options.showConversationTime ? ceFormatChatTime(turn.user.time) : "";
					if (mdAskTime !== "") {
						lines.push("");
						lines.push(`> ${texts.askTimeLabel}: ${mdAskTime}`);
					}
					lines.push("");
					lines.push(turn.user.text !== "" ? turn.user.text : texts.emptyUserPreview);
					for (const image of turn.user.images) {
						lines.push("");
						lines.push(...imageMarkdownLines(image, texts));
					}
				}
				if (!turn.omitAssistant) {
					lines.push("");
					lines.push(`**${texts.exportRoleAssistant}：**`);
					const sources = new Set(markdownImages(turn.assistant.markdown).map((image) => image.src));
					const mdAsstImages = turn.assistant.images.filter((image) => !sources.has(image.src));
					if (turn.assistant.markdown !== "") {
						lines.push("");
						lines.push(turn.assistant.markdown);
					} else if (mdAsstImages.length === 0) {
						lines.push("");
						lines.push(texts.emptyAssistant);
					}
					for (const image of mdAsstImages) {
						lines.push("");
						lines.push(...imageMarkdownLines(image, texts));
					}
				}
				lines.push("");
				lines.push("---");
			}
			return `${lines.join("\n")}\n`;
		}
		/** TXT 导出（原 buildTxt）。 */
		function buildTxt(job, texts) {
			const { meta, options, turns } = job;
			const lines = [];
			lines.push(meta.title);
			if (options.showTime) lines.push(`${texts.timeLabel}: ${ceFormatLocalTime(meta.exportTime)}`);
			lines.push("=".repeat(40));
			for (const turn of turns) {
				lines.push("");
				if (!turn.omitUser) {
					const txtAskTime = options.showConversationTime ? ceFormatChatTime(turn.user.time) : "";
					lines.push(txtAskTime !== "" ? `${texts.exportRoleUser}（${txtAskTime}）：` : `${texts.exportRoleUser}：`);
					lines.push(turn.user.text !== "" ? turn.user.text : texts.emptyUserPreview);
				}
				if (!turn.omitAssistant) {
					if (!turn.omitUser) lines.push("");
					lines.push(`${texts.exportRoleAssistant}：`);
					if (turn.assistant.text !== "") lines.push(turn.assistant.text);
					else if (turn.assistant.images.length === 0) lines.push(texts.emptyAssistant);
				}
				const images = turnImages(turn);
				if (images.length > 0) {
					lines.push("");
					lines.push(`${texts.imageListTitle}：`);
					images.forEach((image, index) => {
						const tail = image.src !== "" ? image.src : `（${texts.imageNotRendered}）`;
						lines.push(`  ${String(index + 1)}. [${imageInfoLabel(image, texts)}] ${tail}`);
					});
				}
				lines.push("");
				lines.push("-".repeat(40));
			}
			return `${lines.join("\n")}\n`;
		}
		function serializeImage(image) {
			return {
				role: image.role,
				src: image.src || "",
				alt: image.alt || "",
				width: image.width || null,
				height: image.height || null,
				fileId: image.fileId || null,
				unrendered: !!image.unrendered
			};
		}
		/** JSON 导出（原 buildJson）。 */
		function buildJson(job, texts) {
			const { meta, options, turns } = job;
			const imageCount = turns.reduce((sum, turn) => sum + turnImages(turn).length, 0);
			const metadata = {
				title: meta.title,
				platform: meta.platformName !== "" ? meta.platformName : meta.platformId,
				range: options.rangeId,
				format: options.formatId,
				turnCount: turns.length,
				imageCount
			};
			if (options.showTime) metadata.exportTime = ceFormatLocalTime(meta.exportTime);
			const conversation = turns.map((turn) => ({
				order: turn.order,
				...!turn.omitUser && { user: {
					text: turn.user.text,
					...options.showConversationTime && turn.user.time !== 0 ? { time: ceFormatChatTime(turn.user.time) } : {},
					images: turn.user.images.map(serializeImage)
				} },
				...!turn.omitAssistant && { assistant: {
					text: turn.assistant.text,
					markdown: turn.assistant.markdown,
					images: turn.assistant.images.map(serializeImage)
				} }
			}));
			return JSON.stringify({
				metadata,
				conversation
			}, null, 2);
		}
		function csvEscape(value) {
			const s = String(value);
			return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, "\"\"")}"` : s;
		}
		/**
		* CSV 导出（原 buildCsv）：每轮一行，RFC4180 转义 + UTF-8 BOM。
		*/
		function buildCsv(job, texts) {
			const { meta, options, turns } = job;
			const withTime = options.showConversationTime;
			const rows = [];
			rows.push(`${csvEscape(texts.titleLabel)},${csvEscape(meta.title)}`);
			if (options.showTime) rows.push(`${csvEscape(texts.timeLabel)},${csvEscape(ceFormatLocalTime(meta.exportTime))}`);
			rows.push("");
			const header = [texts.orderLabel];
			if (withTime) header.push(texts.askTimeLabel);
			header.push(texts.exportRoleUser, texts.exportRoleAssistant, texts.imageListTitle);
			rows.push(header.map((h) => csvEscape(h)).join(","));
			for (const turn of turns) {
				const cells = [turn.order];
				if (withTime) cells.push(ceFormatChatTime(turn.user.time));
				cells.push(turn.user.text);
				cells.push(turn.assistant.text !== "" ? turn.assistant.text : turn.assistant.markdown);
				const imgs = turnImages(turn).map((img) => img.src !== "" ? img.src : `（${texts.imageNotRendered}）`).join("\n");
				cells.push(imgs);
				rows.push(cells.map((c) => csvEscape(c)).join(","));
			}
			return `\uFEFF${rows.join("\r\n")}\r\n`;
		}
		/**
		* 触发浏览器下载（原 ceTriggerDownload）。
		* @param filenameBase - 不含扩展名的文件名（已清洗）。
		* @param format - 格式定义。
		* @param content - 文本内容或 Blob。
		*/
		function ceTriggerDownload(filenameBase, format, content) {
			const blob = content instanceof Blob ? content : new Blob([content], { type: `${format.mime};charset=utf-8` });
			const url = URL.createObjectURL(blob);
			const anchor = document.createElement("a");
			anchor.href = url;
			anchor.download = `${filenameBase}${format.ext}`;
			anchor.style.display = "none";
			document.body.appendChild(anchor);
			anchor.click();
			setTimeout(() => {
				anchor.remove();
				URL.revokeObjectURL(url);
			}, 1e3);
		}
		// src/client/conversationExport/selectionLayout.ts
		const ROW = "[data-chat-flow-key]";
		function collectMountedMessages(flow) {
			const elements = /* @__PURE__ */ new Map();
			for (const element of flow?.querySelectorAll(ROW) ?? []) {
				const key = element.dataset.chatFlowKey;
				if (key && !element.closest("[hidden], [inert], [aria-hidden=\"true\"]") && element.getClientRects().length > 0) elements.set(key, element);
			}
			return elements;
		}
		function mountedMessageElements(anchor) {
			return collectMountedMessages(findConversationDOM(anchor)?.flow);
		}
		function useSelectionLayout(scopeAnchor, dockRef, keys, onViewLost) {
			const [layout, setLayout] = (0, react.useState)(null);
			(0, react.useLayoutEffect)(() => {
				let frame = 0;
				let previous;
				let flow = null;
				let scroll = null;
				let composer = null;
				const schedule = () => {
					if (frame === 0) frame = requestAnimationFrame(measure);
				};
				const observer = new ResizeObserver(schedule);
				function measure() {
					frame = 0;
					const scope = findConversationDOM(scopeAnchor.current);
					if (scope === null) {
						onViewLost();
						return;
					}
					const { flow: nextFlow, scroll: nextScroll } = scope;
					const nextComposer = nextScroll.querySelector("[data-composer-seat]");
					if (nextFlow !== flow) previous = void 0;
					if (nextFlow !== flow || nextScroll !== scroll || nextComposer !== composer) {
						flow = nextFlow;
						scroll = nextScroll;
						composer = nextComposer;
						observer.disconnect();
						for (const node of [
							dockRef.current,
							flow,
							scroll,
							composer
						]) if (node !== null) observer.observe(node);
					}
					const bounds = scroll?.getBoundingClientRect();
					const leftLimit = Math.max(0, bounds?.left ?? 0);
					const rightLimit = Math.min(innerWidth, bounds?.right ?? innerWidth);
					const seat = (composer?.querySelector("[data-input-scroll]") ?? composer)?.getBoundingClientRect();
					const width = Math.round(Math.min(920, Math.max(0, rightLimit - leftLimit - 24), seat && seat.width > 0 ? Math.max(360, seat.width + 100) : Infinity));
					const center = Math.round(Math.max(leftLimit + width / 2 + 12, Math.min(rightLimit - width / 2 - 12, seat ? seat.left + seat.width / 2 : (leftLimit + rightLimit) / 2)));
					const bottom = Math.max(20, innerHeight - (bounds?.bottom ?? innerHeight) + 12);
					const dockHeight = dockRef.current?.offsetHeight ?? 0;
					const extraScrollSpace = composer === null ? 0 : Math.ceil(Math.max(0, dockHeight + 30 - composer.getBoundingClientRect().height));
					const topLimit = Math.max(4, (bounds?.top ?? 0) + 4);
					const bottomLimit = Math.min(innerHeight - bottom - dockHeight - 8, bounds?.bottom ?? innerHeight);
					const mounted = /* @__PURE__ */ new Set();
					const measured = [];
					for (const [key, element] of collectMountedMessages(nextFlow)) {
						if (!keys.has(key)) continue;
						const rect = element.getBoundingClientRect();
						if (rect.width <= 0 || rect.height <= 0) continue;
						mounted.add(key);
						if (rect.bottom > topLimit && rect.top < bottomLimit) measured.push({
							key,
							rect
						});
					}
					const markers = measured.flatMap(({ key, rect }, index) => {
						const top = Math.min(rect.bottom - 20, Math.max(topLimit, rect.top - 2));
						if (top < topLimit || top + 28 > bottomLimit) return [];
						const outlineTop = rect.top - (index === 0 ? 6 : Math.max(0, Math.min(6, (rect.top - measured[index - 1].rect.bottom) / 2 - 2)));
						const outlineBottom = rect.bottom + (index === measured.length - 1 ? 6 : Math.max(0, Math.min(6, (measured[index + 1].rect.top - rect.bottom) / 2 - 2)));
						const outlineLeft = Math.max(leftLimit + 4, rect.left - 10);
						return [{
							key,
							left: Math.max(leftLimit + 4, rect.left - 42),
							top,
							outline: {
								left: outlineLeft,
								top: outlineTop,
								width: Math.max(0, Math.min(rightLimit - 4, rect.right + 10) - outlineLeft),
								height: outlineBottom - outlineTop,
								clipPath: `inset(${Math.max(0, topLimit - outlineTop)}px 0 ${Math.max(0, outlineBottom - bottomLimit)}px 0)`
							}
						}];
					});
					const signature = JSON.stringify([
						center,
						width,
						bottom,
						extraScrollSpace,
						[...mounted],
						markers
					]);
					if (signature !== previous) {
						previous = signature;
						setLayout({
							center,
							width,
							bottom,
							flow: nextFlow,
							extraScrollSpace,
							mounted,
							markers
						});
					}
				}
				measure();
				window.addEventListener("scroll", schedule, {
					capture: true,
					passive: true
				});
				window.addEventListener("resize", schedule);
				const mutations = new MutationObserver((records) => {
					if (records.some((record) => !(record.target instanceof Element && record.target.closest("[data-dsh-chat-export-selection]")))) schedule();
				});
				mutations.observe(document.body, {
					subtree: true,
					childList: true,
					attributes: true,
					attributeFilter: ["hidden"]
				});
				return () => {
					observer.disconnect();
					mutations.disconnect();
					window.removeEventListener("scroll", schedule, true);
					window.removeEventListener("resize", schedule);
					cancelAnimationFrame(frame);
				};
			}, [
				scopeAnchor,
				dockRef,
				keys,
				onViewLost
			]);
			return layout;
		}
		// \0dsh-css:src/client/conversationExport/export.module.css?11cec1e15e.mjs
		const css$1 = ".-hrZNG_headerEntry{color:#61666b;white-space:nowrap;cursor:pointer;background:0 0;border:none;border-radius:6px;justify-content:center;align-items:center;gap:6px;padding:4px 8px;font-size:12px;font-weight:400;line-height:1;display:inline-flex}body[data-ds-dark-theme] .-hrZNG_headerEntry{color:#cfd3d6}.-hrZNG_headerEntry:hover{background:var(--dsw-alias-interactive-bg-hover)}.-hrZNG_replyEntry{color:#81858c;cursor:pointer;background:0 0;border:0;border-radius:6px;place-items:center;width:28px;height:28px;padding:4px;display:inline-grid}.-hrZNG_replyEntry svg{width:18px;height:18px}.-hrZNG_replyEntry:hover:not(:disabled){background:color-mix(in srgb, currentColor 12%, transparent)}.-hrZNG_replyEntry:disabled,.-hrZNG_headerEntry:disabled{opacity:.35;cursor:default}.-hrZNG_selection{color-scheme:light;--surface:light-dark(#fff,#242426);--soft:light-dark(#f5f5f7,#303033);--border:light-dark(#e5e5e9,#424246);--text:light-dark(#242427,#f1f1f3);--muted:light-dark(#73737d,#a5a5b0);--primary:light-dark(#252528,#eeeef0);--on-primary:light-dark(#fff,#232326);--dock:light-dark(#f6f7fb,#292b31);--selected-border:light-dark(#28282d40,#fff4);--selected-fill:light-dark(#28282d08,#fff0);--shadow:light-dark(#1418232e,#0007);color:var(--text);font:13px/1.5 var(--font-sans,-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif)}.-hrZNG_selection[data-theme=dark]{color-scheme:dark}.-hrZNG_dock{z-index:2147483502;box-sizing:border-box;border:1px solid var(--border);background:var(--dock);width:min(920px,100vw - 32px);max-height:72vh;box-shadow:0 18px 48px -12px var(--shadow), 0 4px 12px #0001;border-radius:18px;padding:16px;position:fixed;bottom:20px;left:50%;overflow:auto;transform:translate(-50%)}.-hrZNG_heading,.-hrZNG_identity,.-hrZNG_fields,.-hrZNG_metadata,.-hrZNG_footer,.-hrZNG_buttons,.-hrZNG_selectionTools{align-items:center;gap:8px;display:flex}.-hrZNG_heading,.-hrZNG_footer{justify-content:space-between}.-hrZNG_identity,.-hrZNG_fields,.-hrZNG_metadata,.-hrZNG_footer,.-hrZNG_buttons,.-hrZNG_selectionTools{flex-wrap:wrap}.-hrZNG_titleGroup{align-items:center;gap:4px;display:inline-flex}.-hrZNG_titleGroup strong{font-size:14px;font-weight:600}.-hrZNG_options{gap:9px;margin:10px 0 12px;display:grid}.-hrZNG_fields{gap:10px 24px}.-hrZNG_field{color:var(--muted);align-items:center;gap:8px;font-size:12px;display:flex}.-hrZNG_field select{border:1px solid var(--border);background:var(--surface);min-width:124px;height:36px;color:var(--text);font:13px/1.3 var(--font-sans,system-ui);border-radius:8px;padding:0 10px}.-hrZNG_metadata .-hrZNG_check{border:1px solid var(--border);background:var(--surface);padding:0 10px;font-size:12px}.-hrZNG_footer{border-top:1px solid var(--border);gap:8px 16px;padding-top:12px}.-hrZNG_status{color:var(--muted);font-variant-numeric:tabular-nums;font-size:12px}.-hrZNG_button,.-hrZNG_iconButton{border:1px solid var(--border);background:var(--surface);height:36px;color:var(--text);font:inherit;white-space:nowrap;cursor:pointer;border-radius:9px;justify-content:center;align-items:center;padding:0 12px;font-weight:500;display:inline-flex}.-hrZNG_button:hover:not(:disabled),.-hrZNG_iconButton:hover{background:var(--soft)}.-hrZNG_button:disabled{opacity:.42;cursor:default}.-hrZNG_primary{border-color:var(--primary);background:var(--primary);min-width:106px;color:var(--on-primary)}.-hrZNG_primary:hover:not(:disabled){background:color-mix(in srgb, var(--primary) 88%, var(--surface))}.-hrZNG_iconButton{width:28px;height:28px;color:var(--muted);background:0 0;border-color:#0000;padding:0}.-hrZNG_iconButton svg{width:17px;height:17px}.-hrZNG_settingsButton{border-radius:5px;width:24px;height:24px}.-hrZNG_settingsButton svg{width:14px;height:14px}.-hrZNG_check{cursor:pointer;border-radius:8px;justify-content:center;align-items:center;gap:8px;min-width:28px;min-height:32px;display:inline-flex}.-hrZNG_selectionTools .-hrZNG_check{padding:0 6px}.-hrZNG_selectionTools .-hrZNG_check:hover{background:var(--soft)}.-hrZNG_check input{width:18px;height:18px;accent-color:var(--primary);cursor:inherit;margin:0}.-hrZNG_check:has(input:disabled){cursor:default;opacity:.45}.-hrZNG_markerControl,.-hrZNG_outline{position:fixed}.-hrZNG_markerControl{z-index:2147483501}.-hrZNG_outline{z-index:2147483500;box-sizing:border-box;pointer-events:none;border:1px solid #0000;border-radius:12px}.-hrZNG_marker[data-selected=true] .-hrZNG_outline,.-hrZNG_marker:has(.-hrZNG_markerControl:hover) .-hrZNG_outline{border-color:var(--selected-border);background:var(--selected-fill)}.-hrZNG_loadingNotice{z-index:2147483502;border:1px solid var(--border);background:var(--dock);max-width:calc(100vw - 24px);box-shadow:0 8px 24px var(--shadow);border-radius:12px;align-items:center;gap:12px;padding:10px 12px;display:flex;position:fixed;top:16px;left:50%;transform:translate(-50%)}.-hrZNG_spinner{border:2px solid var(--border);border-top-color:var(--text);corner-shape:round;border-radius:50%;flex-shrink:0;width:14px;height:14px;animation:.8s linear infinite -hrZNG_spin}@keyframes -hrZNG_spin{to{transform:rotate(360deg)}}@media (width<=600px){.-hrZNG_dock{padding:12px}.-hrZNG_buttons{margin-left:auto}}@media (prefers-reduced-motion:reduce){.-hrZNG_spinner{animation:none}}.-hrZNG_spacer{pointer-events:none;flex:none}";
		const tagId$1 = "dsh-chat-export/export.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-chat-export";
			tag.dataset.pluginCss = tagId$1;
			tag.textContent = css$1;
			document.head.appendChild(tag);
		}
		var export_module_css_11cec1e15e_default = {
			"outline": "-hrZNG_outline",
			"replyEntry": "-hrZNG_replyEntry",
			"identity": "-hrZNG_identity",
			"check": "-hrZNG_check",
			"primary": "-hrZNG_primary",
			"button": "-hrZNG_button",
			"selectionTools": "-hrZNG_selectionTools",
			"spin": "-hrZNG_spin",
			"buttons": "-hrZNG_buttons",
			"dock": "-hrZNG_dock",
			"selection": "-hrZNG_selection",
			"metadata": "-hrZNG_metadata",
			"settingsButton": "-hrZNG_settingsButton",
			"marker": "-hrZNG_marker",
			"loadingNotice": "-hrZNG_loadingNotice",
			"field": "-hrZNG_field",
			"headerEntry": "-hrZNG_headerEntry",
			"titleGroup": "-hrZNG_titleGroup",
			"spinner": "-hrZNG_spinner",
			"fields": "-hrZNG_fields",
			"spacer": "-hrZNG_spacer",
			"iconButton": "-hrZNG_iconButton",
			"options": "-hrZNG_options",
			"heading": "-hrZNG_heading",
			"footer": "-hrZNG_footer",
			"markerControl": "-hrZNG_markerControl",
			"status": "-hrZNG_status"
		};
		// src/client/conversationExport/vendor/html-to-image.cjs
		var require_html_to_image = /* @__PURE__ */ __commonJSMin(((exports, module, this$1) => {
			(function(t, e) {
				"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).htmlToImage = {});
			})(this$1, (function(t) {
				"use strict";
				function e(t, e, n, r) {
					return new (n || (n = Promise))((function(i, o) {
						function u(t) {
							try {
								a(r.next(t));
							} catch (t) {
								o(t);
							}
						}
						function c(t) {
							try {
								a(r.throw(t));
							} catch (t) {
								o(t);
							}
						}
						function a(t) {
							var e;
							t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
								t(e);
							}))).then(u, c);
						}
						a((r = r.apply(t, e || [])).next());
					}));
				}
				function n(t, e) {
					var n, r, i, o, u = {
						label: 0,
						sent: function() {
							if (1 & i[0]) throw i[1];
							return i[1];
						},
						trys: [],
						ops: []
					};
					return o = {
						next: c(0),
						throw: c(1),
						return: c(2)
					}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
						return this;
					}), o;
					function c(c) {
						return function(a) {
							return function(c) {
								if (n) throw new TypeError("Generator is already executing.");
								for (; o && (o = 0, c[0] && (u = 0)), u;) try {
									if (n = 1, r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done) return i;
									switch (r = 0, i && (c = [2 & c[0], i.value]), c[0]) {
										case 0:
										case 1:
											i = c;
											break;
										case 4: return u.label++, {
											value: c[1],
											done: !1
										};
										case 5:
											u.label++, r = c[1], c = [0];
											continue;
										case 7:
											c = u.ops.pop(), u.trys.pop();
											continue;
										default:
											if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
												u = 0;
												continue;
											}
											if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
												u.label = c[1];
												break;
											}
											if (6 === c[0] && u.label < i[1]) {
												u.label = i[1], i = c;
												break;
											}
											if (i && u.label < i[2]) {
												u.label = i[2], u.ops.push(c);
												break;
											}
											i[2] && u.ops.pop(), u.trys.pop();
											continue;
									}
									c = e.call(t, u);
								} catch (t) {
									c = [6, t], r = 0;
								} finally {
									n = i = 0;
								}
								if (5 & c[0]) throw c[1];
								return {
									value: c[0] ? c[1] : void 0,
									done: !0
								};
							}([c, a]);
						};
					}
				}
				var r, i = (r = 0, function() {
					return r += 1, "u".concat("0000".concat((Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)).concat(r);
				});
				function o(t) {
					for (var e = [], n = 0, r = t.length; n < r; n++) e.push(t[n]);
					return e;
				}
				var u = null;
				function c(t) {
					return void 0 === t && (t = {}), u || (u = t.includeStyleProperties ? t.includeStyleProperties : o(window.getComputedStyle(document.documentElement)));
				}
				function a(t, e) {
					var n = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
					return n ? parseFloat(n.replace("px", "")) : 0;
				}
				function s(t, e) {
					void 0 === e && (e = {});
					var n, r, i;
					return {
						width: e.width || (r = a(n = t, "border-left-width"), i = a(n, "border-right-width"), n.clientWidth + r + i),
						height: e.height || function(t) {
							var e = a(t, "border-top-width"), n = a(t, "border-bottom-width");
							return t.clientHeight + e + n;
						}(t)
					};
				}
				var l = 16384;
				function f(t, e) {
					return void 0 === e && (e = {}), t.toBlob ? new Promise((function(n) {
						t.toBlob(n, e.type ? e.type : "image/png", e.quality ? e.quality : 1);
					})) : new Promise((function(n) {
						for (var r = window.atob(t.toDataURL(e.type ? e.type : void 0, e.quality ? e.quality : void 0).split(",")[1]), i = r.length, o = new Uint8Array(i), u = 0; u < i; u += 1) o[u] = r.charCodeAt(u);
						n(new Blob([o], { type: e.type ? e.type : "image/png" }));
					}));
				}
				function h(t) {
					return new Promise((function(e, n) {
						var r = new Image();
						r.onload = function() {
							r.decode().then((function() {
								requestAnimationFrame((function() {
									return e(r);
								}));
							}));
						}, r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = t;
					}));
				}
				function d(t) {
					return e(this, void 0, void 0, (function() {
						return n(this, (function(e) {
							return [2, Promise.resolve().then((function() {
								return new XMLSerializer().serializeToString(t);
							})).then(encodeURIComponent).then((function(t) {
								return "data:image/svg+xml;charset=utf-8,".concat(t);
							}))];
						}));
					}));
				}
				function v(t, r, i) {
					return e(this, void 0, void 0, (function() {
						var e, o, u;
						return n(this, (function(n) {
							return e = "http://www.w3.org/2000/svg", o = document.createElementNS(e, "svg"), u = document.createElementNS(e, "foreignObject"), o.setAttribute("width", "".concat(r)), o.setAttribute("height", "".concat(i)), o.setAttribute("viewBox", "0 0 ".concat(r, " ").concat(i)), u.setAttribute("width", "100%"), u.setAttribute("height", "100%"), u.setAttribute("x", "0"), u.setAttribute("y", "0"), u.setAttribute("externalResourcesRequired", "true"), o.appendChild(u), u.appendChild(t), [2, d(o)];
						}));
					}));
				}
				var p = function(t, e) {
					if (t instanceof e) return !0;
					var n = Object.getPrototypeOf(t);
					return null !== n && (n.constructor.name === e.name || p(n, e));
				};
				function g(t, e, n, r) {
					var i = ".".concat(t, ":").concat(e), o = n.cssText ? function(t) {
						var e = t.getPropertyValue("content");
						return "".concat(t.cssText, " content: '").concat(e.replace(/'|"/g, ""), "';");
					}(n) : function(t, e) {
						return c(e).map((function(e) {
							var n = t.getPropertyValue(e), r = t.getPropertyPriority(e);
							return "".concat(e, ": ").concat(n).concat(r ? " !important" : "", ";");
						})).join(" ");
					}(n, r);
					return document.createTextNode("".concat(i, "{").concat(o, "}"));
				}
				function m(t, e, n, r) {
					var o = window.getComputedStyle(t, n), u = o.getPropertyValue("content");
					if ("" !== u && "none" !== u) {
						var c = i();
						try {
							e.className = "".concat(e.className, " ").concat(c);
						} catch (t) {
							return;
						}
						var a = document.createElement("style");
						a.appendChild(g(c, n, o, r)), e.appendChild(a);
					}
				}
				var w = "application/font-woff", y = "image/jpeg", b = {
					woff: w,
					woff2: w,
					ttf: "application/font-truetype",
					eot: "application/vnd.ms-fontobject",
					png: "image/png",
					jpg: y,
					jpeg: y,
					gif: "image/gif",
					tiff: "image/tiff",
					svg: "image/svg+xml",
					webp: "image/webp"
				};
				function S(t) {
					return b[function(t) {
						var e = /\.([^./]*?)$/g.exec(t);
						return e ? e[1] : "";
					}(t).toLowerCase()] || "";
				}
				function E(t) {
					return -1 !== t.search(/^(data:)/);
				}
				function x(t, e) {
					return "data:".concat(e, ";base64,").concat(t);
				}
				function C(t, r, i) {
					return e(this, void 0, void 0, (function() {
						var e, o;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return [4, fetch(t, r)];
								case 1:
									if (404 === (e = n.sent()).status) throw new Error("Resource \"".concat(e.url, "\" not found"));
									return [4, e.blob()];
								case 2: return o = n.sent(), [2, new Promise((function(t, n) {
									var r = new FileReader();
									r.onerror = n, r.onloadend = function() {
										try {
											t(i({
												res: e,
												result: r.result
											}));
										} catch (t) {
											n(t);
										}
									}, r.readAsDataURL(o);
								}))];
							}
						}));
					}));
				}
				var P = {};
				function R(t, r, i) {
					return e(this, void 0, void 0, (function() {
						var e, o, u, c, a;
						return n(this, (function(n) {
							switch (n.label) {
								case 0:
									if (e = function(t, e, n) {
										var r = t.replace(/\?.*/, "");
										return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? "[".concat(e, "]").concat(r) : r;
									}(t, r, i.includeQueryParams), null != P[e]) return [2, P[e]];
									i.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime()), n.label = 1;
								case 1: return n.trys.push([
									1,
									3,
									,
									4
								]), [4, C(t, i.fetchRequestInit, (function(t) {
									var e = t.res, n = t.result;
									return r || (r = e.headers.get("Content-Type") || ""), function(t) {
										return t.split(/,/)[1];
									}(n);
								}))];
								case 2: return u = n.sent(), o = x(u, r), [3, 4];
								case 3: return c = n.sent(), o = i.imagePlaceholder || "", a = "Failed to fetch resource: ".concat(t), c && (a = "string" == typeof c ? c : c.message), a && console.warn(a), [3, 4];
								case 4: return P[e] = o, [2, o];
							}
						}));
					}));
				}
				function T(t) {
					return e(this, void 0, void 0, (function() {
						var e;
						return n(this, (function(n) {
							return "data:," === (e = t.toDataURL()) ? [2, t.cloneNode(!1)] : [2, h(e)];
						}));
					}));
				}
				function A(t, r) {
					return e(this, void 0, void 0, (function() {
						var e, i, o, u;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return t.currentSrc ? (e = document.createElement("canvas"), i = e.getContext("2d"), e.width = t.clientWidth, e.height = t.clientHeight, i?.drawImage(t, 0, 0, e.width, e.height), [2, h(e.toDataURL())]) : (o = t.poster, u = S(o), [4, R(o, u, r)]);
								case 1: return [2, h(n.sent())];
							}
						}));
					}));
				}
				function k(t, r) {
					var i;
					return e(this, void 0, void 0, (function() {
						return n(this, (function(e) {
							switch (e.label) {
								case 0: return e.trys.push([
									0,
									3,
									,
									4
								]), (null === (i = null == t ? void 0 : t.contentDocument) || void 0 === i ? void 0 : i.body) ? [4, I(t.contentDocument.body, r, !0)] : [3, 2];
								case 1: return [2, e.sent()];
								case 2: return [3, 4];
								case 3: return e.sent(), [3, 4];
								case 4: return [2, t.cloneNode(!1)];
							}
						}));
					}));
				}
				var L = function(t) {
					return null != t.tagName && "SVG" === t.tagName.toUpperCase();
				};
				function N(t, e, n) {
					return p(e, Element) && (function(t, e, n) {
						var r = e.style;
						if (r) {
							var i = window.getComputedStyle(t);
							i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : c(n).forEach((function(n) {
								var o = i.getPropertyValue(n);
								if ("font-size" === n && o.endsWith("px")) {
									var u = Math.floor(parseFloat(o.substring(0, o.length - 2))) - .1;
									o = "".concat(u, "px");
								}
								p(t, HTMLIFrameElement) && "display" === n && "inline" === o && (o = "block"), "d" === n && e.getAttribute("d") && (o = "path(".concat(e.getAttribute("d"), ")")), r.setProperty(n, o, i.getPropertyPriority(n));
							}));
						}
					}(t, e, n), function(t, e, n) {
						m(t, e, ":before", n), m(t, e, ":after", n);
					}(t, e, n), function(t, e) {
						p(t, HTMLTextAreaElement) && (e.innerHTML = t.value), p(t, HTMLInputElement) && e.setAttribute("value", t.value);
					}(t, e), function(t, e) {
						if (p(t, HTMLSelectElement)) {
							var n = e, r = Array.from(n.children).find((function(e) {
								return t.value === e.getAttribute("value");
							}));
							r && r.setAttribute("selected", "");
						}
					}(t, e)), e;
				}
				function I(t, r, i) {
					return e(this, void 0, void 0, (function() {
						return n(this, (function(u) {
							return i || !r.filter || r.filter(t) ? [2, Promise.resolve(t).then((function(t) {
								return function(t, r) {
									return e(this, void 0, void 0, (function() {
										return n(this, (function(e) {
											return p(t, HTMLCanvasElement) ? [2, T(t)] : p(t, HTMLVideoElement) ? [2, A(t, r)] : p(t, HTMLIFrameElement) ? [2, k(t, r)] : [2, t.cloneNode(L(t))];
										}));
									}));
								}(t, r);
							})).then((function(i) {
								return function(t, r, i) {
									var u, c;
									return e(this, void 0, void 0, (function() {
										var e;
										return n(this, (function(n) {
											switch (n.label) {
												case 0: return L(r) ? [2, r] : (e = [], 0 === (e = null != (a = t).tagName && "SLOT" === a.tagName.toUpperCase() && t.assignedNodes ? o(t.assignedNodes()) : p(t, HTMLIFrameElement) && (null === (u = t.contentDocument) || void 0 === u ? void 0 : u.body) ? o(t.contentDocument.body.childNodes) : o((null !== (c = t.shadowRoot) && void 0 !== c ? c : t).childNodes)).length || p(t, HTMLVideoElement) ? [2, r] : [4, e.reduce((function(t, e) {
													return t.then((function() {
														return I(e, i);
													})).then((function(t) {
														t && r.appendChild(t);
													}));
												}), Promise.resolve())]);
												case 1: return n.sent(), [2, r];
											}
											var a;
										}));
									}));
								}(t, i, r);
							})).then((function(e) {
								return N(t, e, r);
							})).then((function(t) {
								return function(t, r) {
									return e(this, void 0, void 0, (function() {
										var e, i, o, u, c, a, s, l, f, h, d, v, p;
										return n(this, (function(n) {
											switch (n.label) {
												case 0:
													if (0 === (e = t.querySelectorAll ? t.querySelectorAll("use") : []).length) return [2, t];
													i = {}, p = 0, n.label = 1;
												case 1: return p < e.length ? (o = e[p], (u = o.getAttribute("xlink:href")) ? (c = t.querySelector(u), a = document.querySelector(u), c || !a || i[u] ? [3, 3] : (s = i, l = u, [4, I(a, r, !0)])) : [3, 3]) : [3, 4];
												case 2: s[l] = n.sent(), n.label = 3;
												case 3: return p++, [3, 1];
												case 4:
													if ((f = Object.values(i)).length) {
														for (h = "http://www.w3.org/1999/xhtml", (d = document.createElementNS(h, "svg")).setAttribute("xmlns", h), d.style.position = "absolute", d.style.width = "0", d.style.height = "0", d.style.overflow = "hidden", d.style.display = "none", v = document.createElementNS(h, "defs"), d.appendChild(v), p = 0; p < f.length; p++) v.appendChild(f[p]);
														t.appendChild(d);
													}
													return [2, t];
											}
										}));
									}));
								}(t, r);
							}))] : [2, null];
						}));
					}));
				}
				var D = /url\((['"]?)([^'"]+?)\1\)/g, H = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, M = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
				function F(t, r, i, o, u) {
					return e(this, void 0, void 0, (function() {
						var e, c, a, s;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return n.trys.push([
									0,
									5,
									,
									6
								]), e = i ? function(t, e) {
									if (t.match(/^[a-z]+:\/\//i)) return t;
									if (t.match(/^\/\//)) return window.location.protocol + t;
									if (t.match(/^[a-z]+:/i)) return t;
									var n = document.implementation.createHTMLDocument(), r = n.createElement("base"), i = n.createElement("a");
									return n.head.appendChild(r), n.body.appendChild(i), e && (r.href = e), i.href = t, i.href;
								}(r, i) : r, c = S(r), a = void 0, u ? [4, u(e)] : [3, 2];
								case 1: return s = n.sent(), a = x(s, c), [3, 4];
								case 2: return [4, R(e, c, o)];
								case 3: a = n.sent(), n.label = 4;
								case 4: return [2, t.replace((l = r, f = l.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1"), new RegExp("(url\\(['\"]?)(".concat(f, ")(['\"]?\\))"), "g")), "$1".concat(a, "$3"))];
								case 5: return n.sent(), [3, 6];
								case 6: return [2, t];
							}
							var l, f;
						}));
					}));
				}
				function V(t) {
					return -1 !== t.search(D);
				}
				function q(t, r, i) {
					return e(this, void 0, void 0, (function() {
						var e, o;
						return n(this, (function(n) {
							return V(t) ? (e = function(t, e) {
								var n = e.preferredFontFormat;
								return n ? t.replace(M, (function(t) {
									for (;;) {
										var e = H.exec(t) || [], r = e[0], i = e[2];
										if (!i) return "";
										if (i === n) return "src: ".concat(r, ";");
									}
								})) : t;
							}(t, i), o = function(t) {
								var e = [];
								return t.replace(D, (function(t, n, r) {
									return e.push(r), t;
								})), e.filter((function(t) {
									return !E(t);
								}));
							}(e), [2, o.reduce((function(t, e) {
								return t.then((function(t) {
									return F(t, e, r, i);
								}));
							}), Promise.resolve(e))]) : [2, t];
						}));
					}));
				}
				function U(t, r, i) {
					var o;
					return e(this, void 0, void 0, (function() {
						var e, u;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return (e = null === (o = r.style) || void 0 === o ? void 0 : o.getPropertyValue(t)) ? [4, q(e, null, i)] : [3, 2];
								case 1: return u = n.sent(), r.style.setProperty(t, u, r.style.getPropertyPriority(t)), [2, !0];
								case 2: return [2, !1];
							}
						}));
					}));
				}
				function j(t, r) {
					return e(this, void 0, void 0, (function() {
						var e, i;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return [4, U("background", t, r)];
								case 1: return n.sent() ? [3, 3] : [4, U("background-image", t, r)];
								case 2: n.sent(), n.label = 3;
								case 3: return [4, U("mask", t, r)];
								case 4: return (i = n.sent()) ? [3, 6] : [4, U("-webkit-mask", t, r)];
								case 5: i = n.sent(), n.label = 6;
								case 6: return (e = i) ? [3, 8] : [4, U("mask-image", t, r)];
								case 7: e = n.sent(), n.label = 8;
								case 8: return e ? [3, 10] : [4, U("-webkit-mask-image", t, r)];
								case 9: n.sent(), n.label = 10;
								case 10: return [2];
							}
						}));
					}));
				}
				function O(t, r) {
					return e(this, void 0, void 0, (function() {
						var e, i, o;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return (e = p(t, HTMLImageElement)) && !E(t.src) || p(t, SVGImageElement) && !E(t.href.baseVal) ? [4, R(i = e ? t.src : t.href.baseVal, S(i), r)] : [2];
								case 1: return o = n.sent(), [4, new Promise((function(n, i) {
									t.onload = n, t.onerror = r.onImageErrorHandler ? function() {
										for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
										try {
											n(r.onImageErrorHandler.apply(r, t));
										} catch (t) {
											i(t);
										}
									} : i;
									var u = t;
									u.decode && (u.decode = n), "lazy" === u.loading && (u.loading = "eager"), e ? (t.srcset = "", t.src = o) : t.href.baseVal = o;
								}))];
								case 2: return n.sent(), [2];
							}
						}));
					}));
				}
				function B(t, r) {
					return e(this, void 0, void 0, (function() {
						var e, i;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return e = o(t.childNodes), i = e.map((function(t) {
									return z(t, r);
								})), [4, Promise.all(i).then((function() {
									return t;
								}))];
								case 1: return n.sent(), [2];
							}
						}));
					}));
				}
				function z(t, r) {
					return e(this, void 0, void 0, (function() {
						return n(this, (function(e) {
							switch (e.label) {
								case 0: return p(t, Element) ? [4, j(t, r)] : [3, 4];
								case 1: return e.sent(), [4, O(t, r)];
								case 2: return e.sent(), [4, B(t, r)];
								case 3: e.sent(), e.label = 4;
								case 4: return [2];
							}
						}));
					}));
				}
				var W = {};
				function $(t) {
					return e(this, void 0, void 0, (function() {
						var e, r;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return null != (e = W[t]) ? [2, e] : [4, fetch(t)];
								case 1: return [4, n.sent().text()];
								case 2: return r = n.sent(), e = {
									url: t,
									cssText: r
								}, W[t] = e, [2, e];
							}
						}));
					}));
				}
				function G(t, r) {
					return e(this, void 0, void 0, (function() {
						var i, o, u, c, a = this;
						return n(this, (function(s) {
							return i = t.cssText, o = /url\(["']?([^"')]+)["']?\)/g, u = i.match(/url\([^)]+\)/g) || [], c = u.map((function(u) {
								return e(a, void 0, void 0, (function() {
									var e;
									return n(this, (function(n) {
										return (e = u.replace(o, "$1")).startsWith("https://") || (e = new URL(e, t.url).href), [2, C(e, r.fetchRequestInit, (function(t) {
											var e = t.result;
											return i = i.replace(u, "url(".concat(e, ")")), [u, e];
										}))];
									}));
								}));
							})), [2, Promise.all(c).then((function() {
								return i;
							}))];
						}));
					}));
				}
				function _(t) {
					if (null == t) return [];
					for (var e = [], n = t.replace(/(\/\*[\s\S]*?\*\/)/gi, ""), r = /* @__PURE__ */ new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");;) {
						if (null === (u = r.exec(n))) break;
						e.push(u[0]);
					}
					n = n.replace(r, "");
					for (var i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, o = /* @__PURE__ */ new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");;) {
						var u;
						if (null === (u = i.exec(n))) {
							if (null === (u = o.exec(n))) break;
							i.lastIndex = o.lastIndex;
						} else o.lastIndex = i.lastIndex;
						e.push(u[0]);
					}
					return e;
				}
				function J(t, r) {
					return e(this, void 0, void 0, (function() {
						var e, i;
						return n(this, (function(n) {
							return e = [], i = [], t.forEach((function(e) {
								if ("cssRules" in e) try {
									o(e.cssRules || []).forEach((function(t, n) {
										if (t.type === CSSRule.IMPORT_RULE) {
											var o = n + 1, u = $(t.href).then((function(t) {
												return G(t, r);
											})).then((function(t) {
												return _(t).forEach((function(t) {
													try {
														e.insertRule(t, t.startsWith("@import") ? o += 1 : e.cssRules.length);
													} catch (e) {
														console.error("Error inserting rule from remote css", {
															rule: t,
															error: e
														});
													}
												}));
											})).catch((function(t) {
												console.error("Error loading remote css", t.toString());
											}));
											i.push(u);
										}
									}));
								} catch (o) {
									var n = t.find((function(t) {
										return null == t.href;
									})) || document.styleSheets[0];
									null != e.href && i.push($(e.href).then((function(t) {
										return G(t, r);
									})).then((function(t) {
										return _(t).forEach((function(t) {
											n.insertRule(t, n.cssRules.length);
										}));
									})).catch((function(t) {
										console.error("Error loading remote stylesheet", t);
									}))), console.error("Error inlining remote css file", o);
								}
							})), [2, Promise.all(i).then((function() {
								return t.forEach((function(t) {
									if ("cssRules" in t) try {
										o(t.cssRules || []).forEach((function(t) {
											e.push(t);
										}));
									} catch (e) {
										console.error("Error while reading CSS rules from ".concat(t.href), e);
									}
								})), e;
							}))];
						}));
					}));
				}
				function Q(t) {
					return t.filter((function(t) {
						return t.type === CSSRule.FONT_FACE_RULE;
					})).filter((function(t) {
						return V(t.style.getPropertyValue("src"));
					}));
				}
				function X(t, r) {
					return e(this, void 0, void 0, (function() {
						return n(this, (function(e) {
							switch (e.label) {
								case 0:
									if (null == t.ownerDocument) throw new Error("Provided element is not within a Document");
									return [4, J(o(t.ownerDocument.styleSheets), r)];
								case 1: return [2, Q(e.sent())];
							}
						}));
					}));
				}
				function K(t) {
					return t.trim().replace(/["']/g, "");
				}
				function Y(t, r) {
					return e(this, void 0, void 0, (function() {
						var e, i;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return [4, X(t, r)];
								case 1: return e = n.sent(), i = function(t) {
									var e = /* @__PURE__ */ new Set();
									return function t(n) {
										(n.style.fontFamily || getComputedStyle(n).fontFamily).split(",").forEach((function(t) {
											e.add(K(t));
										})), Array.from(n.children).forEach((function(e) {
											e instanceof HTMLElement && t(e);
										}));
									}(t), e;
								}(t), [4, Promise.all(e.filter((function(t) {
									return i.has(K(t.style.fontFamily));
								})).map((function(t) {
									var e = t.parentStyleSheet ? t.parentStyleSheet.href : null;
									return q(t.cssText, e, r);
								})))];
								case 2: return [2, n.sent().join("\n")];
							}
						}));
					}));
				}
				function Z(t, r) {
					return e(this, void 0, void 0, (function() {
						var e, i, o, u, c;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return null == r.fontEmbedCSS ? [3, 1] : (i = r.fontEmbedCSS, [3, 5]);
								case 1: return r.skipFonts ? (o = null, [3, 4]) : [3, 2];
								case 2: return [4, Y(t, r)];
								case 3: o = n.sent(), n.label = 4;
								case 4: i = o, n.label = 5;
								case 5: return (e = i) && (u = document.createElement("style"), c = document.createTextNode(e), u.appendChild(c), t.firstChild ? t.insertBefore(u, t.firstChild) : t.appendChild(u)), [2];
							}
						}));
					}));
				}
				function tt(t, r) {
					return void 0 === r && (r = {}), e(this, void 0, void 0, (function() {
						var e, i, o, u;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return e = s(t, r), i = e.width, o = e.height, [4, I(t, r, !0)];
								case 1: return [4, Z(u = n.sent(), r)];
								case 2: return n.sent(), [4, z(u, r)];
								case 3: return n.sent(), function(t, e) {
									var n = t.style;
									e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = "".concat(e.width, "px")), e.height && (n.height = "".concat(e.height, "px"));
									var r = e.style;
									null != r && Object.keys(r).forEach((function(t) {
										n[t] = r[t];
									}));
								}(u, r), [4, v(u, i, o)];
								case 4: return [2, n.sent()];
							}
						}));
					}));
				}
				function et(t, r) {
					return void 0 === r && (r = {}), e(this, void 0, void 0, (function() {
						var e, i, o, u, c, a, f, d, v;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return e = s(t, r), i = e.width, o = e.height, [4, tt(t, r)];
								case 1: return [4, h(n.sent())];
								case 2: return u = n.sent(), c = document.createElement("canvas"), a = c.getContext("2d"), f = r.pixelRatio || function() {
									var t, e;
									try {
										e = process;
									} catch (t) {}
									var n = e && e.env ? e.env.devicePixelRatio : null;
									return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
								}(), d = r.canvasWidth || i, v = r.canvasHeight || o, c.width = d * f, c.height = v * f, r.skipAutoScale || function(t) {
									(t.width > l || t.height > l) && (t.width > l && t.height > l ? t.width > t.height ? (t.height *= l / t.width, t.width = l) : (t.width *= l / t.height, t.height = l) : t.width > l ? (t.height *= l / t.width, t.width = l) : (t.width *= l / t.height, t.height = l));
								}(c), c.style.width = "".concat(d), c.style.height = "".concat(v), r.backgroundColor && (a.fillStyle = r.backgroundColor, a.fillRect(0, 0, c.width, c.height)), a.drawImage(u, 0, 0, c.width, c.height), [2, c];
							}
						}));
					}));
				}
				t.getFontEmbedCSS = function(t, r) {
					return void 0 === r && (r = {}), e(this, void 0, void 0, (function() {
						return n(this, (function(e) {
							return [2, Y(t, r)];
						}));
					}));
				}, t.toBlob = function(t, r) {
					return void 0 === r && (r = {}), e(this, void 0, void 0, (function() {
						return n(this, (function(e) {
							switch (e.label) {
								case 0: return [4, et(t, r)];
								case 1: return [4, f(e.sent())];
								case 2: return [2, e.sent()];
							}
						}));
					}));
				}, t.toCanvas = et, t.toJpeg = function(t, r) {
					return void 0 === r && (r = {}), e(this, void 0, void 0, (function() {
						return n(this, (function(e) {
							switch (e.label) {
								case 0: return [4, et(t, r)];
								case 1: return [2, e.sent().toDataURL("image/jpeg", r.quality || 1)];
							}
						}));
					}));
				}, t.toPixelData = function(t, r) {
					return void 0 === r && (r = {}), e(this, void 0, void 0, (function() {
						var e, i, o, u;
						return n(this, (function(n) {
							switch (n.label) {
								case 0: return e = s(t, r), i = e.width, o = e.height, [4, et(t, r)];
								case 1: return u = n.sent(), [2, u.getContext("2d").getImageData(0, 0, i, o).data];
							}
						}));
					}));
				}, t.toPng = function(t, r) {
					return void 0 === r && (r = {}), e(this, void 0, void 0, (function() {
						return n(this, (function(e) {
							switch (e.label) {
								case 0: return [4, et(t, r)];
								case 1: return [2, e.sent().toDataURL()];
							}
						}));
					}));
				}, t.toSvg = tt;
			}));
		}));
		// src/client/conversationExport/screenshot.ts
		var screenshot_exports = /* @__PURE__ */ __exportAll({ captureMessages: () => captureMessages });
		function cloneContent(node, properties, inherited) {
			if (node.nodeType === Node.TEXT_NODE) return node.cloneNode();
			if (!(node instanceof HTMLElement || node instanceof SVGElement || node instanceof MathMLElement) || node.matches(OMIT)) return null;
			if (node.tagName === "SOURCE" && node.parentElement?.tagName === "PICTURE") return null;
			const style = getComputedStyle(node);
			if (style.display === "none" || style.visibility !== "visible") return null;
			const clone = node instanceof HTMLButtonElement ? document.createElement("div") : node.cloneNode(false);
			for (const attribute of [...clone.attributes]) if (attribute.name.startsWith("on") || attribute.name.startsWith("data-chat-")) clone.removeAttribute(attribute.name);
			for (const name of style) {
				if (!name.startsWith("--")) continue;
				const value = style.getPropertyValue(name);
				if (value !== inherited?.getPropertyValue(name)) clone.style.setProperty(name, value);
			}
			for (const name of properties) clone.style.setProperty(name, style.getPropertyValue(name));
			clone.style.setProperty("animation", "none");
			clone.style.setProperty("transition", "none");
			clone.style.setProperty("content-visibility", "visible");
			if (style.position === "fixed" || style.position === "sticky") clone.style.setProperty("position", "static");
			if (node instanceof HTMLImageElement && clone instanceof HTMLImageElement) {
				clone.removeAttribute("srcset");
				clone.removeAttribute("sizes");
				const src = node.currentSrc || node.getAttribute("src")?.trim();
				if (src) clone.src = src;
				else clone.removeAttribute("src");
				clone.loading = "eager";
			}
			if (node instanceof HTMLCanvasElement && clone instanceof HTMLCanvasElement) clone.getContext("2d")?.drawImage(node, 0, 0);
			for (const child of node.childNodes) {
				const copy = cloneContent(child, properties, style);
				if (copy !== null) clone.append(copy);
			}
			return clone;
		}
		function waitForCapture(start, signal) {
			signal.throwIfAborted();
			return new Promise((resolve, reject) => {
				const abort = () => {
					reject(signal.reason);
				};
				signal.addEventListener("abort", abort, { once: true });
				Promise.resolve().then(() => {
					signal.throwIfAborted();
					return start();
				}).then(resolve, reject).finally(() => {
					signal.removeEventListener("abort", abort);
				});
			});
		}
		async function readImage(url, cancel) {
			if (![
				"data:",
				"http:",
				"https:",
				"blob:"
			].includes(url.protocol)) throw new Error("image-unavailable");
			const request = new AbortController();
			const signal = AbortSignal.any([
				cancel,
				request.signal,
				AbortSignal.timeout(IMAGE_TIMEOUT)
			]);
			let reader;
			let probe;
			async function fetchDataUrl() {
				const options = {
					signal,
					credentials: "same-origin"
				};
				let response = await fetch(url, options);
				if (RETRYABLE_IMAGE_STATUS.has(response.status) && !response.headers.has("Retry-After")) {
					await response.body?.cancel();
					signal.throwIfAborted();
					response = await fetch(url, options);
				}
				if (!response.ok) throw new Error("image-unavailable");
				const blob = await response.blob();
				signal.throwIfAborted();
				if (!blob.size || !blob.type.startsWith("image/")) throw new Error("image-unavailable");
				return await new Promise((resolve, reject) => {
					const fileReader = new FileReader();
					reader = fileReader;
					fileReader.onload = () => {
						resolve(String(fileReader.result));
					};
					fileReader.onerror = () => {
						reject(fileReader.error);
					};
					fileReader.onabort = () => {
						reject(signal.reason);
					};
					fileReader.readAsDataURL(blob);
				});
			}
			try {
				return await waitForCapture(async () => {
					const data = url.protocol === "data:" ? url.href : await fetchDataUrl();
					signal.throwIfAborted();
					probe = new Image();
					probe.src = data;
					await probe.decode();
					return data;
				}, signal);
			} finally {
				request.abort();
				if (reader?.readyState === FileReader.LOADING) reader.abort();
				probe?.removeAttribute("src");
			}
		}
		function decodeCssEscapes(value) {
			return value.replace(/\\(?:([\da-f]{1,6})(?:\r\n|[\t\n\f\r ])?|(?:\r\n|[\n\f\r])|([^\n\f\r]))/gi, (_, hex, character) => {
				if (!hex) return character ?? "";
				const codePoint = Number.parseInt(hex, 16);
				if (!codePoint || codePoint > 1114111 || codePoint >= 55296 && codePoint <= 57343) return "�";
				return String.fromCodePoint(codePoint);
			});
		}
		function imagePlaceholder(image, label) {
			const rect = image.getBoundingClientRect();
			const width = rect.width || 128;
			const height = rect.height || 96;
			const scale = Math.min(1, 256 / Math.max(width, height));
			const w = Math.max(2, Math.round(width * scale));
			const h = Math.max(2, Math.round(height * scale));
			const fontSize = Math.min(14, Math.floor((w - 12) / [...label].length));
			const mark = fontSize >= 9 && h >= 24 ? `<text x="50%" y="50%" dy=".35em" text-anchor="middle" font-family="sans-serif" font-size="${fontSize}" fill="#334155">${label.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</text>` : `<path d="M${w / 3} ${h / 3}l${w / 3} ${h / 3}m0 ${-h / 3}l${-w / 3} ${h / 3}" stroke="#64748b"/>`;
			const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect x=".5" y=".5" width="${w - 1}" height="${h - 1}" fill="#e2e8f0" stroke="#94a3b8" stroke-dasharray="3 2"/>${mark}</svg>`;
			return `data:image/svg+xml,${encodeURIComponent(svg)}`;
		}
		async function inlineImages(root, signal, unavailableLabel) {
			const cache = /* @__PURE__ */ new Map();
			let unavailableImageCount = 0;
			let usableImageCount = 0;
			async function readAsset(source) {
				signal.throwIfAborted();
				try {
					const url = new URL(source, document.baseURI);
					let asset = cache.get(url.href);
					if (asset === void 0) {
						asset = readImage(url, signal);
						cache.set(url.href, asset);
					}
					const data = await asset;
					signal.throwIfAborted();
					usableImageCount++;
					return data;
				} catch {
					signal.throwIfAborted();
					unavailableImageCount++;
					return null;
				}
			}
			const jobs = [];
			for (const image of root.querySelectorAll("img[src]")) {
				const source = image.getAttribute("src")?.trim();
				if (!source) continue;
				jobs.push(readAsset(source).then((data) => {
					signal.throwIfAborted();
					image.src = data ?? imagePlaceholder(image, unavailableLabel);
				}));
			}
			for (const image of root.querySelectorAll("svg image")) {
				const source = (image.getAttribute("href") || image.getAttributeNS(XLINK_NAMESPACE, "href"))?.trim();
				if (source) jobs.push(readAsset(source).then((data) => {
					signal.throwIfAborted();
					image.setAttribute("href", data ?? imagePlaceholder(image, unavailableLabel));
					image.removeAttributeNS(XLINK_NAMESPACE, "href");
				}));
			}
			for (const node of root.querySelectorAll("[style]")) {
				const background = node.style.backgroundImage;
				const sources = [...background.matchAll(CSS_IMAGE_URL)].map(([, doubleQuoted, singleQuoted, unquoted]) => decodeCssEscapes(doubleQuoted ?? singleQuoted ?? unquoted.trim()));
				if (sources.length === 0) continue;
				jobs.push(Promise.all(sources.map(readAsset)).then((images) => {
					signal.throwIfAborted();
					let index = 0;
					node.style.backgroundImage = background.replace(CSS_IMAGE_URL, () => {
						return `url("${(images[index++] ?? EMPTY_BACKGROUND).replaceAll("\\", "\\\\").replaceAll("\"", "\\\"")}")`;
					});
				}));
			}
			await Promise.all(jobs);
			signal.throwIfAborted();
			return {
				unavailableImageCount,
				usableImageCount
			};
		}
		function hasOtherContent(root) {
			const svgDefinitions = "svg :is(defs, title, desc, clipPath, mask, marker, pattern, symbol)";
			if (root.querySelector(`canvas, hr, svg :is(path, line, polyline, polygon, rect, circle, ellipse, use):not(${svgDefinitions} *)`)) return true;
			const textNodes = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
			for (let node = textNodes.nextNode(); node; node = textNodes.nextNode()) if (node.textContent?.trim() && !node.parentElement?.closest(svgDefinitions)) return true;
			return false;
		}
		function sliceContent(root, top, start, end) {
			const clone = root.cloneNode(true);
			function prune(original, copy) {
				for (let index = 0; index < original.children.length; index++) {
					const child = original.children[index];
					const duplicate = copy.children[index];
					const rect = child.getBoundingClientRect();
					if (duplicate instanceof HTMLElement && rect.width > 0 && rect.height > 0 && (rect.bottom <= top + start || rect.top >= top + end)) {
						duplicate.replaceChildren();
						duplicate.style.boxSizing = "border-box";
						duplicate.style.height = duplicate.style.minHeight = `${rect.height}px`;
					} else if (child instanceof HTMLCanvasElement && duplicate instanceof HTMLCanvasElement) duplicate.getContext("2d")?.drawImage(child, 0, 0);
					else if (!(child instanceof SVGElement || child instanceof MathMLElement)) prune(child, duplicate);
				}
			}
			prune(root, clone);
			clone.style.top = `-${start}px`;
			return clone;
		}
		function releaseCanvas(canvas) {
			canvas.width = 0;
			canvas.height = 0;
		}
		function encodePng(canvas, signal) {
			return waitForCapture(() => new Promise((resolve, reject) => {
				canvas.toBlob((blob) => {
					if (blob?.size) resolve(blob);
					else reject(/* @__PURE__ */ new Error("capture-failed"));
				}, "image/png");
			}), signal);
		}
		async function captureMessages(elements, pixelRatio, cancel, unavailableLabel) {
			const deadline = performance.now() + CAPTURE_TIMEOUT;
			const operation = new AbortController();
			const signal = AbortSignal.any([
				cancel,
				operation.signal,
				AbortSignal.timeout(CAPTURE_TIMEOUT)
			]);
			signal.throwIfAborted();
			const widths = elements.map((element) => Math.ceil(element.getBoundingClientRect().width));
			const width = Math.max(...widths) + 32;
			if (!elements.length || ![
				1,
				2,
				3,
				4
			].includes(pixelRatio) || elements.some((element, index) => !element.isConnected || !Number.isFinite(widths[index]) || widths[index] < 1)) throw new Error("unavailable");
			if (width > MAX_EDGE) throw new Error("capture-too-large");
			const mount = document.createElement("div");
			mount.setAttribute("aria-hidden", "true");
			mount.inert = true;
			mount.dataset.dshTimelineUi = "";
			mount.style.cssText = `position:fixed;left:-100000px;top:0;width:${width}px;pointer-events:none`;
			const content = document.createElement("div");
			content.style.cssText = "position:absolute;left:0;right:0;top:0;box-sizing:border-box;padding:16px;display:flex;flex-direction:column;gap:12px";
			const properties = [...getComputedStyle(elements[0])].filter((name) => !name.startsWith("--"));
			elements.forEach((element, index) => {
				const clone = cloneContent(element, properties);
				if (!(clone instanceof HTMLElement)) throw new Error("unavailable");
				Object.assign(clone.style, {
					margin: "0",
					height: "auto",
					minHeight: "0",
					maxHeight: "none",
					width: `${widths[index]}px`,
					minWidth: "0",
					maxWidth: "none",
					position: "static",
					boxSizing: "border-box"
				});
				content.append(clone);
			});
			mount.append(content);
			document.body.append(mount);
			try {
				const { unavailableImageCount, usableImageCount } = await waitForCapture(() => inlineImages(content, signal, unavailableLabel), signal);
				if (unavailableImageCount > 0 && usableImageCount === 0 && !hasOtherContent(content)) throw new Error("image-unavailable");
				await waitForCapture(() => document.fonts.ready, signal);
				const bounds = content.getBoundingClientRect();
				const height = Math.ceil(bounds.height);
				if (!Number.isFinite(height) || height < 1 || height > MAX_EDGE * MAX_SLICES) throw new Error("capture-too-large");
				const scale = Math.min(pixelRatio, MAX_EDGE / width, MAX_EDGE / height, Math.sqrt(MAX_AREA / (width * height)));
				const outputWidth = Math.floor(width * scale);
				const outputHeight = Math.floor(height * scale);
				if (outputWidth < 1 || outputHeight < 1) throw new Error("capture-too-large");
				const result = {
					unavailableImageCount,
					reducedResolution: scale < pixelRatio
				};
				const fontEmbedCSS = await waitForCapture(() => (0, import_html_to_image.getFontEmbedCSS)(content, {
					preferredFontFormat: "woff2",
					fetchRequestInit: { signal }
				}), signal);
				const render = (node, sourceHeight, canvasHeight, attempt) => waitForCapture(async () => {
					const scaleSvg = sourceHeight > MAX_EDGE || width * sourceHeight > MAX_AREA;
					const canvas = await (0, import_html_to_image.toCanvas)(node, {
						width: scaleSvg ? outputWidth : width,
						height: scaleSvg ? canvasHeight : sourceHeight,
						canvasWidth: outputWidth,
						canvasHeight,
						pixelRatio: 1,
						skipAutoScale: true,
						fontEmbedCSS,
						fetchRequestInit: { signal: attempt },
						includeStyleProperties: properties,
						style: scaleSvg ? {
							width: `${width}px`,
							height: `${sourceHeight}px`,
							transformOrigin: "top left",
							transform: `scale(${outputWidth / width}, ${canvasHeight / sourceHeight})`
						} : void 0
					});
					if (attempt.aborted || canvas.width !== outputWidth || canvas.height !== canvasHeight) {
						releaseCanvas(canvas);
						attempt.throwIfAborted();
						throw new Error("capture-failed");
					}
					return canvas;
				}, attempt);
				const wholeBudget = Math.max(1, Math.floor(Math.min(WHOLE_CAPTURE_TIMEOUT, (deadline - performance.now()) / 2)));
				const wholeSignal = AbortSignal.any([signal, AbortSignal.timeout(wholeBudget)]);
				try {
					const canvas = await render(content, height, outputHeight, wholeSignal);
					try {
						const blob = await encodePng(canvas, wholeSignal);
						wholeSignal.throwIfAborted();
						return {
							blob,
							...result
						};
					} finally {
						releaseCanvas(canvas);
					}
				} catch {
					signal.throwIfAborted();
				}
				const top = bounds.top;
				const boundaries = [...content.children, ...content.querySelectorAll("p, pre, li, tr, img")].map((element) => Math.ceil(element.getBoundingClientRect().bottom - top)).sort((a, b) => b - a);
				const limit = Math.min(Math.ceil(height / 2), Math.max(PREFERRED_SLICE_HEIGHT, Math.ceil(height / MAX_SLICES)));
				const output = document.createElement("canvas");
				output.width = outputWidth;
				output.height = outputHeight;
				try {
					const ctx = output.getContext("2d");
					if (!ctx) throw new Error("capture-failed");
					for (let start = 0, slices = 0; start < height; slices++) {
						signal.throwIfAborted();
						const target = Math.min(start + limit, height);
						const minimum = Math.max(start + Math.ceil(limit / 2), height - limit * (MAX_SLICES - slices - 1));
						const end = target === height ? target : boundaries.find((value) => value > start && value <= target && value >= minimum) ?? target;
						const row = Math.round(start * outputHeight / height);
						const endRow = Math.round(end * outputHeight / height);
						if (endRow > row) {
							const viewport = document.createElement("div");
							viewport.style.cssText = `position:relative;overflow:hidden;width:${width}px;height:${end - start}px`;
							viewport.append(sliceContent(content, top, start, end));
							mount.append(viewport);
							try {
								const tile = await render(viewport, end - start, endRow - row, signal);
								try {
									signal.throwIfAborted();
									ctx.drawImage(tile, 0, row);
								} finally {
									releaseCanvas(tile);
								}
							} finally {
								viewport.remove();
							}
						}
						start = end;
					}
					const blob = await encodePng(output, signal);
					signal.throwIfAborted();
					return {
						blob,
						...result
					};
				} finally {
					releaseCanvas(output);
				}
			} finally {
				operation.abort();
				mount.remove();
			}
		}
		var import_html_to_image, OMIT, MAX_EDGE, MAX_AREA, MAX_SLICES, PREFERRED_SLICE_HEIGHT, CAPTURE_TIMEOUT, WHOLE_CAPTURE_TIMEOUT, IMAGE_TIMEOUT, XLINK_NAMESPACE, RETRYABLE_IMAGE_STATUS, CSS_IMAGE_URL, EMPTY_BACKGROUND;
		var init_screenshot = __esmMin((() => {
			import_html_to_image = require_html_to_image();
			OMIT = "input, textarea, select, script, style, link, iframe, object, embed, video, [hidden], [role=\"toolbar\"], [data-turn-tail], [data-dsh-chat-export-ui], [data-dsh-timeline-ui]";
			MAX_EDGE = 16e3;
			MAX_AREA = 32e6;
			MAX_SLICES = 30;
			PREFERRED_SLICE_HEIGHT = 4e3;
			CAPTURE_TIMEOUT = 45e3;
			WHOLE_CAPTURE_TIMEOUT = 2e4;
			IMAGE_TIMEOUT = 8e3;
			XLINK_NAMESPACE = "http://www.w3.org/1999/xlink";
			RETRYABLE_IMAGE_STATUS = /* @__PURE__ */ new Set([
				408,
				500,
				502,
				503,
				504
			]);
			CSS_IMAGE_URL = /url\(\s*(?:"((?:\\[\s\S]|[^"\\])*)"|'((?:\\[\s\S]|[^'\\])*)'|((?:\\[\s\S]|[^)\\])*))\s*\)/gi;
			EMPTY_BACKGROUND = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221%22 height=%221%22/%3E";
		}));
		// ../../../../Users/houyanchao/前端项目/deepseekharness/plugin/dsh-chat-export/node_modules/temml/dist/temml.mjs
		/**
		* Escapes text to prevent scripting attacks.
		*/
		function escape(text) {
			return String(text).replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
		}
		function defineFunction({ type, names, props, handler, mathmlBuilder }) {
			const data = {
				type,
				numArgs: props.numArgs,
				argTypes: props.argTypes,
				allowedInArgument: !!props.allowedInArgument,
				allowedInText: !!props.allowedInText,
				allowedInMath: props.allowedInMath === void 0 ? true : props.allowedInMath,
				numOptionalArgs: props.numOptionalArgs || 0,
				infix: !!props.infix,
				primitive: !!props.primitive,
				handler
			};
			for (let i = 0; i < names.length; ++i) _functions[names[i]] = data;
			if (type) {
				if (mathmlBuilder) _mathmlGroupBuilders[type] = mathmlBuilder;
			}
		}
		/**
		* Use this to register only the MathML builder for a function(e.g.
		* if the function's ParseNode is generated in Parser.js rather than via a
		* stand-alone handler provided to `defineFunction`).
		*/
		function defineFunctionBuilders({ type, mathmlBuilder }) {
			defineFunction({
				type,
				names: [],
				props: { numArgs: 0 },
				handler() {
					throw new Error("Should never be called.");
				},
				mathmlBuilder
			});
		}
		/**
		* These objects store data about MathML nodes.
		* The `toNode` and `toMarkup` functions  create namespaced DOM nodes and
		* HTML text markup respectively.
		*/
		function newDocumentFragment(children) {
			return new DocumentFragment(children);
		}
		/** `acceptUnicodeChar = true` is only applicable if `replace` is set. */
		function defineSymbol(mode, group, replace, name, acceptUnicodeChar) {
			symbols[mode][name] = {
				group,
				replace
			};
			if (acceptUnicodeChar && replace) symbols[mode][replace] = symbols[mode][name];
		}
		function setLineBreaks(expression, wrapMode, isDisplayMode) {
			const mtrs = [];
			let mrows = [];
			let block = [];
			let numTopLevelEquals = 0;
			let i = 0;
			while (i < expression.length) {
				while (expression[i] instanceof DocumentFragment) expression.splice(i, 1, ...expression[i].children);
				const node = expression[i];
				if (node.attributes && node.attributes.linebreak && node.attributes.linebreak === "newline") {
					if (block.length > 0) mrows.push(new MathNode("mrow", block));
					mrows.push(node);
					block = [];
					const mtd = new MathNode("mtd", mrows);
					mtd.style.textAlign = "left";
					mtrs.push(new MathNode("mtr", [mtd]));
					mrows = [];
					i += 1;
					continue;
				}
				block.push(node);
				if (node.type && node.type === "mo" && node.children.length === 1 && !(node.attributes.form && node.attributes.form === "prefix") && !Object.prototype.hasOwnProperty.call(node.attributes, "movablelimits")) {
					const ch = node.children[0].text;
					if (wrapMode === "=" && ch === "=") {
						numTopLevelEquals += 1;
						if (numTopLevelEquals > 1) {
							block.pop();
							const element = new MathNode("mrow", block);
							mrows.push(element);
							block = [node];
						}
					} else if (wrapMode === "tex") {
						const next = i < expression.length - 1 ? expression[i + 1] : null;
						let glueIsFreeOfNobreak = true;
						if (!(next && next.type === "mtext" && next.attributes.linebreak && next.attributes.linebreak === "nobreak")) for (let j = i + 1; j < expression.length; j++) {
							const nd = expression[j];
							if (nd.type && nd.type === "mspace" && !(nd.attributes.linebreak && nd.attributes.linebreak === "newline")) {
								block.push(nd);
								i += 1;
								if (nd.attributes && nd.attributes.linebreak && nd.attributes.linebreak === "nobreak") glueIsFreeOfNobreak = false;
							} else break;
						}
						if (glueIsFreeOfNobreak) {
							const element = new MathNode("mrow", block);
							mrows.push(element);
							block = [];
						}
					}
				}
				i += 1;
			}
			if (block.length > 0) {
				const element = new MathNode("mrow", block);
				mrows.push(element);
			}
			if (mtrs.length > 0) {
				const mtd = new MathNode("mtd", mrows);
				mtd.style.textAlign = "left";
				const mtr = new MathNode("mtr", [mtd]);
				mtrs.push(mtr);
				const mtable = new MathNode("mtable", mtrs);
				if (!isDisplayMode) {
					mtable.setAttribute("columnalign", "left");
					mtable.setAttribute("rowspacing", "0em");
				}
				return mtable;
			}
			return newDocumentFragment(mrows);
		}
		/**
		* Check for <mi>.</mi> which is how a dot renders in MathML,
		* or <mo separator="true" lspace="0em" rspace="0em">,</mo>
		* which is how a braced comma {,} renders in MathML
		*/
		function isNumberPunctuation(group) {
			if (!group) return false;
			if (group.type === "mi" && group.children.length === 1) {
				const child = group.children[0];
				return child instanceof TextNode && child.text === ".";
			} else if (group.type === "mtext" && group.children.length === 1) {
				const child = group.children[0];
				return child instanceof TextNode && child.text === " ";
			} else if (group.type === "mo" && group.children.length === 1 && group.getAttribute("separator") === "true" && group.getAttribute("lspace") === "0em" && group.getAttribute("rspace") === "0em") {
				const child = group.children[0];
				return child instanceof TextNode && child.text === ",";
			} else return false;
		}
		/**
		* Takes a full parse tree and settings and builds a MathML representation of
		* it.
		*/
		function buildMathML(tree, texExpression, style, settings) {
			let tag = null;
			if (tree.length === 1 && tree[0].type === "tag") {
				tag = tree[0].tag;
				tree = tree[0].body;
			}
			const expression = buildExpression(tree, style);
			if (expression.length === 1 && expression[0] instanceof AnchorNode) return expression[0];
			const wrap = settings.displayMode || settings.annotate ? "none" : settings.wrap;
			const n1 = expression.length === 0 ? null : expression[0];
			let wrapper = expression.length === 1 && tag === null && n1 instanceof MathNode ? expression[0] : setLineBreaks(expression, wrap, settings.displayMode);
			if (tag) wrapper = taggedExpression(wrapper, tag, style, settings.leqno);
			if (settings.annotate) {
				const annotation = new MathNode("annotation", [new TextNode(texExpression)]);
				annotation.setAttribute("encoding", "application/x-tex");
				wrapper = new MathNode("semantics", [wrapper, annotation]);
			}
			const math = new MathNode("math", [wrapper]);
			if (settings.xml) math.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML");
			if (settings.displayMode) {
				math.setAttribute("display", "block");
				math.style.display = "block math";
				math.classes = ["tml-display"];
			}
			return math;
		}
		function defineEnvironment({ type, names, props, handler, mathmlBuilder }) {
			const data = {
				type,
				numArgs: props.numArgs || 0,
				allowedInText: false,
				numOptionalArgs: 0,
				handler
			};
			for (let i = 0; i < names.length; ++i) _environments[names[i]] = data;
			if (mathmlBuilder) _mathmlGroupBuilders[type] = mathmlBuilder;
		}
		/**
		* Asserts that the node is of the given type and returns it with stricter
		* typing. Throws if the node's type does not match.
		*/
		function assertNodeType(node, type) {
			if (!node || node.type !== type) throw new Error(`Expected node of type ${type}, but got ` + (node ? `node of type ${node.type}` : String(node)));
			return node;
		}
		/**
		* Returns the node more strictly typed iff it is of the given type. Otherwise,
		* returns null.
		*/
		function assertSymbolNodeType(node) {
			const typedNode = checkSymbolNodeType(node);
			if (!typedNode) throw new Error(`Expected node of symbol group type, but got ` + (node ? `node of type ${node.type}` : String(node)));
			return typedNode;
		}
		/**
		* Returns the node more strictly typed iff it is of the given type. Otherwise,
		* returns null.
		*/
		function checkSymbolNodeType(node) {
			if (node && (node.type === "atom" || node.type === "delimiter" || Object.prototype.hasOwnProperty.call(NON_ATOMS, node.type))) return node;
			return null;
		}
		function cdArrow(arrowChar, labels, parser) {
			const funcName = cdArrowFunctionName[arrowChar];
			switch (funcName) {
				case "\\\\cdrightarrow":
				case "\\\\cdleftarrow": return parser.callFunction(funcName, [labels[0]], [labels[1]]);
				case "\\uparrow":
				case "\\downarrow": {
					const leftLabel = parser.callFunction("\\\\cdleft", [labels[0]], []);
					const bareArrow = {
						type: "atom",
						text: funcName,
						mode: "math",
						family: "rel"
					};
					const arrowGroup = {
						type: "ordgroup",
						mode: "math",
						body: [
							leftLabel,
							parser.callFunction("\\Big", [bareArrow], []),
							parser.callFunction("\\\\cdright", [labels[1]], [])
						],
						semisimple: true
					};
					return parser.callFunction("\\\\cdparent", [arrowGroup], []);
				}
				case "\\\\cdlongequal": return parser.callFunction("\\\\cdlongequal", [], []);
				case "\\Vert": return parser.callFunction("\\Big", [{
					type: "textord",
					text: "\\Vert",
					mode: "math"
				}], []);
				default: return {
					type: "textord",
					text: " ",
					mode: "math"
				};
			}
		}
		function parseCD(parser) {
			const parsedRows = [];
			parser.gullet.beginGroup();
			parser.gullet.macros.set("\\cr", "\\\\\\relax");
			parser.gullet.beginGroup();
			while (true) {
				parsedRows.push(parser.parseExpression(false, "\\\\"));
				parser.gullet.endGroup();
				parser.gullet.beginGroup();
				const next = parser.fetch().text;
				if (next === "&" || next === "\\\\") parser.consume();
				else if (next === "\\end") {
					if (parsedRows[parsedRows.length - 1].length === 0) parsedRows.pop();
					break;
				} else throw new ParseError("Expected \\\\ or \\cr or \\end", parser.nextToken);
			}
			let row = [];
			const body = [row];
			for (let i = 0; i < parsedRows.length; i++) {
				const rowNodes = parsedRows[i];
				let cell = newCell();
				for (let j = 0; j < rowNodes.length; j++) if (!isStartOfArrow(rowNodes[j])) cell.body.push(rowNodes[j]);
				else {
					row.push(cell);
					j += 1;
					const arrowChar = assertSymbolNodeType(rowNodes[j]).text;
					const labels = new Array(2);
					labels[0] = {
						type: "ordgroup",
						mode: "math",
						body: []
					};
					labels[1] = {
						type: "ordgroup",
						mode: "math",
						body: []
					};
					if ("=|.".indexOf(arrowChar) > -1);
					else if ("<>AV".indexOf(arrowChar) > -1) for (let labelNum = 0; labelNum < 2; labelNum++) {
						let inLabel = true;
						for (let k = j + 1; k < rowNodes.length; k++) {
							if (isLabelEnd(rowNodes[k], arrowChar)) {
								inLabel = false;
								j = k;
								break;
							}
							if (isStartOfArrow(rowNodes[k])) throw new ParseError("Missing a " + arrowChar + " character to complete a CD arrow.", rowNodes[k]);
							labels[labelNum].body.push(rowNodes[k]);
						}
						if (inLabel) throw new ParseError("Missing a " + arrowChar + " character to complete a CD arrow.", rowNodes[j]);
					}
					else throw new ParseError(`Expected one of "<>AV=|." after @.`);
					const arrow = cdArrow(arrowChar, labels, parser);
					row.push(arrow);
					cell = newCell();
				}
				if (i % 2 === 0) row.push(cell);
				else row.shift();
				row = [];
				body.push(row);
			}
			body.pop();
			parser.gullet.endGroup();
			parser.gullet.endGroup();
			return {
				type: "array",
				mode: "math",
				body,
				tags: null,
				labels: new Array(body.length + 1).fill(""),
				envClasses: ["jot", "cd"],
				cols: [],
				hLinesBeforeRow: new Array(body.length + 1).fill([])
			};
		}
		function defineMacro(name, body) {
			_macros[name] = body;
		}
		function recreateArgStr(context) {
			const tokens = context.consumeArgs(1)[0];
			let str = "";
			let expectedLoc = tokens[tokens.length - 1].loc.start;
			for (let i = tokens.length - 1; i >= 0; i--) {
				const actualLoc = tokens[i].loc.start;
				if (actualLoc > expectedLoc) {
					str += " ";
					expectedLoc = actualLoc;
				}
				str += tokens[i].text;
				expectedLoc += tokens[i].text.length;
			}
			return str;
		}
		function getHLines(parser) {
			const hlineInfo = [];
			parser.consumeSpaces();
			let nxt = parser.fetch().text;
			if (nxt === "\\relax") {
				parser.consume();
				parser.consumeSpaces();
				nxt = parser.fetch().text;
			}
			while (nxt === "\\hline" || nxt === "\\hdashline") {
				parser.consume();
				hlineInfo.push(nxt === "\\hdashline");
				parser.consumeSpaces();
				nxt = parser.fetch().text;
			}
			return hlineInfo;
		}
		function getAutoTag(name) {
			if (name.indexOf("ed") === -1) return name.indexOf("*") === -1;
		}
		/**
		* Parse the body of the environment, with rows delimited by \\ and
		* columns delimited by &, and create a nested list in row-major order
		* with one group per cell.  If given an optional argument scriptLevel
		* ("text", "display", etc.), then each cell is cast into that scriptLevel.
		*/
		function parseArray(parser, { cols, envClasses, autoTag, singleRow, emptySingleRow, maxNumCols, leqno, arraystretch, arraycolsep }, scriptLevel) {
			const endToken = envClasses && envClasses.includes("bordermatrix") ? "}" : "\\end";
			parser.gullet.beginGroup();
			if (!singleRow) parser.gullet.macros.set("\\cr", "\\\\\\relax");
			parser.gullet.beginGroup();
			let row = [];
			const body = [row];
			const rowGaps = [];
			const labels = [];
			const hLinesBeforeRow = [];
			const tags = autoTag != null ? [] : void 0;
			function beginRow() {
				if (autoTag) parser.gullet.macros.set("\\@eqnsw", "1", true);
			}
			function endRow() {
				if (tags) {
					if (parser.gullet.macros.get("\\df@tag")) {
						tags.push(parser.subparse([new Token("\\df@tag")]));
						parser.gullet.macros.set("\\df@tag", void 0, true);
					} else tags.push(Boolean(autoTag) && parser.gullet.macros.get("\\@eqnsw") === "1");
				}
			}
			beginRow();
			hLinesBeforeRow.push(getHLines(parser));
			while (true) {
				let cell = parser.parseExpression(false, singleRow ? "\\end" : "\\\\");
				parser.gullet.endGroup();
				parser.gullet.beginGroup();
				cell = {
					type: "ordgroup",
					mode: parser.mode,
					body: cell,
					semisimple: true
				};
				row.push(cell);
				const next = parser.fetch().text;
				if (next === "&") {
					if (maxNumCols && row.length === maxNumCols) {
						if (envClasses.includes("array")) {
							if (parser.settings.strict) throw new ParseError("Too few columns specified in the {array} column argument.", parser.nextToken);
						} else if (maxNumCols === 2) throw new ParseError("The split environment accepts no more than two columns", parser.nextToken);
						else throw new ParseError("The equation environment accepts only one column", parser.nextToken);
					}
					parser.consume();
				} else if (next === endToken) {
					endRow();
					if (row.length === 1 && cell.body.length === 0 && (body.length > 1 || !emptySingleRow)) body.pop();
					labels.push(checkCellForLabels(cell.body));
					if (hLinesBeforeRow.length < body.length + 1) hLinesBeforeRow.push([]);
					break;
				} else if (next === "\\\\") {
					parser.consume();
					let size;
					if (parser.gullet.future().text !== " ") size = parser.parseSizeGroup(true);
					rowGaps.push(size ? size.value : null);
					endRow();
					labels.push(checkCellForLabels(cell.body));
					hLinesBeforeRow.push(getHLines(parser));
					row = [];
					body.push(row);
					beginRow();
				} else throw new ParseError("Expected & or \\\\ or \\cr or " + endToken, parser.nextToken);
			}
			parser.gullet.endGroup();
			parser.gullet.endGroup();
			return {
				type: "array",
				mode: parser.mode,
				body,
				cols,
				rowGaps,
				hLinesBeforeRow,
				envClasses,
				autoTag,
				scriptLevel,
				tags,
				labels,
				leqno,
				arraystretch,
				arraycolsep
			};
		}
		function dCellStyle(envName) {
			return envName.slice(0, 1) === "d" ? "display" : "text";
		}
		function checkDelimiter(delim, context) {
			if (delim.type === "ordgroup" && delim.body.length === 1) delim = delim.body[0];
			const symDelim = checkSymbolNodeType(delim);
			if (symDelim && delimiters.has(symDelim.text)) {
				if (symDelim.text === "<" || symDelim.text === "\\lt") symDelim.text = "⟨";
				if (symDelim.text === ">" || symDelim.text === "\\gt") symDelim.text = "⟩";
				return symDelim;
			} else if (symDelim) throw new ParseError(`Invalid delimiter '${symDelim.text}' after '${context.funcName}'`, delim);
			else throw new ParseError(`Invalid delimiter type '${delim.type}'`, delim);
		}
		function assertParsed(group) {
			if (!group.body) throw new Error("Bug: The delim ParseNode wasn't fully parsed.");
		}
		function mathmlBuilder$3(group, style) {
			let node;
			const inner = buildExpression(group.body, style);
			if (group.mclass === "minner") node = new MathNode("mpadded", inner);
			else if (group.mclass === "mord") {
				if (group.isCharacterBox || inner[0].type === "mathord") {
					node = inner[0];
					node.type = "mi";
					if (node.children.length === 1 && node.children[0].text && node.children[0].text === "∇") node.setAttribute("mathvariant", "normal");
				} else node = new MathNode("mi", inner);
			} else {
				node = new MathNode("mrow", inner);
				if (group.mustPromote) {
					node = inner[0];
					node.type = "mo";
					if (group.isCharacterBox && group.body[0].text && /[A-Za-z]/.test(group.body[0].text)) node.setAttribute("mathvariant", "italic");
				} else node = new MathNode("mrow", inner);
				const doSpacing = style.level < 2;
				if (node.type === "mrow") {
					if (doSpacing) {
						if (group.mclass === "mbin") {
							node.children.unshift(padding(.2222));
							node.children.push(padding(.2222));
						} else if (group.mclass === "mrel") {
							node.children.unshift(padding(.2778));
							node.children.push(padding(.2778));
						} else if (group.mclass === "mpunct") node.children.push(padding(.1667));
						else if (group.mclass === "minner") {
							node.children.unshift(padding(.0556));
							node.children.push(padding(.0556));
						}
					}
				} else if (group.mclass === "mbin") {
					node.attributes.lspace = doSpacing ? "0.2222em" : "0";
					node.attributes.rspace = doSpacing ? "0.2222em" : "0";
				} else if (group.mclass === "mrel") {
					node.attributes.lspace = doSpacing ? "0.2778em" : "0";
					node.attributes.rspace = doSpacing ? "0.2778em" : "0";
				} else if (group.mclass === "mpunct") {
					node.attributes.lspace = "0em";
					node.attributes.rspace = doSpacing ? "0.1667em" : "0";
				} else if (group.mclass === "mopen" || group.mclass === "mclose") {
					node.attributes.lspace = "0em";
					node.attributes.rspace = "0em";
				} else if (group.mclass === "minner" && doSpacing) {
					node.attributes.lspace = "0.0556em";
					node.attributes.width = "+0.1111em";
				}
				if (!(group.mclass === "mopen" || group.mclass === "mclose")) {
					delete node.attributes.stretchy;
					delete node.attributes.form;
				}
			}
			return node;
		}
		function postProcess(block) {
			const labelMap = {};
			let i = 0;
			const amsEqns = document.getElementsByClassName("tml-eqn");
			for (let parent of amsEqns) {
				i += 1;
				parent.setAttribute("id", "tml-eqn-" + String(i));
				while (true) {
					if (parent.tagName === "mtable") break;
					if (parent.getElementsByClassName("tml-label").length > 0) {
						const id = parent.attributes.id.value;
						labelMap[id] = String(i);
						break;
					} else parent = parent.parentElement;
				}
			}
			const taggedEqns = document.getElementsByClassName("tml-tageqn");
			for (const parent of taggedEqns) if (parent.getElementsByClassName("tml-label").length > 0) {
				const tags = parent.getElementsByClassName("tml-tag");
				if (tags.length > 0) {
					const id = parent.attributes.id.value;
					labelMap[id] = tags[0].textContent;
				}
			}
			[...block.getElementsByClassName("tml-ref")].forEach((ref) => {
				const attr = ref.getAttribute("href");
				let str = labelMap[attr.slice(1)];
				if (ref.className.indexOf("tml-eqref") === -1) {
					str = str.replace(/^\(/, "");
					str = str.replace(/\)$/, "");
				} else {
					if (str.charAt(0) !== "(") str = "(" + str;
					if (str.slice(-1) !== ")") str = str + ")";
				}
				const mtext = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mtext");
				mtext.appendChild(document.createTextNode(str));
				const math = document.createElementNS("http://www.w3.org/1998/Math/MathML", "math");
				math.appendChild(mtext);
				ref.textContent = "";
				ref.appendChild(math);
			});
		}
		var ParseError, deflt, uppercase, hyphenate, ESCAPE_LOOKUP, ESCAPE_REGEX, getBaseElem, isCharacterBox, assert, protocolFromUrl, round, smalls, Settings, _functions, _mathmlGroupBuilders, normalizeArgument, ordargument, DocumentFragment, createClass, initNode, toNode, toMarkup, Span, TextNode$1, AnchorNode, Img, MathNode, TextNode, wrapWithMstyle, estimatedWidth, stretchyCodePoint, mathMLnode, wideHats, accentNode, ATOMS, NON_ATOMS, symbols, math, text, accent, bin, close, inner, mathord, op, open, punct, rel, spacing, textord, ligatures, mathTextSymbols, textSymbols, letters, narrow, wideChar, makeText, copyChar, consolidateText, makeRow, isComma, isRel, buildExpression, buildExpressionRow, buildGroup$1, glue$1, labelContainers, getLabel, taggedExpression, smallNudge, mediumNudge, largeNudge, mathmlBuilder$a, nonStretchyAccents, needsWebkitVerticalShift, combiningChar, ptPerUnit, validUnits, validUnit, emScale, calculateSize, padding, paddedNode, labelSize, munderoverNode, arrowComponent, _environments, cdArrowFunctionName, newCell, isStartOfArrow, isLabelEnd, ordGroup, phantom, bordermatrixParseTree, SourceLocation, Token, StyleLevel, _macros, macros, stringFromArg, digitToNumber, nextCharNumber, appendCharNumbers, dotsByToken, spaceAfterDots, replaceVert, pdvHelper, chemParse, mhchemParser, texify, validateAmsEnvironmentContext, sizeRegEx$1, arrayGaps, checkCellForLabels, alignMap, glue, mathmlBuilder$9, alignedHandler, environments, htmlRegEx, htmlOrNameRegEx, RGBregEx, rgbRegEx, xcolorHtmlRegEx, toHex, xcolors, colorFromSpec, validateColor, mathmlBuilder$8, globalMap, checkControlSequence, getRHS, letCommand, delimiterSizes, leftToRight, leftDelimiterNames, delimiters, dels, isDelimiter, sizeToMaxHeight, needExplicitStretch, makeFenceMo, boxTags, mathmlBuilder$7, script, frak, bbb, bold, boldItalic, boldsf, bisf, offset, variantChar, smallCaps, varNameFonts, isLongVariableName, mathmlBuilder$6, fontAliases, stylArray, scriptLevel, adjustStyle, mathmlBuilder$5, delimFromValue, mathmlBuilder$4, sizeData, spaceCharacter, invalidIdRegEx, textModeLap, chooseStyle, textAtomTypes, binrelClass, buildGroup, ordAtomTypes, noSuccessor, ordTypes, setSpacing, mathmlBuilder$2, singleCharBigOps, singleCharIntegrals, mathmlBuilder$1, mathmlBuilder, numRegEx, unicodeNumSubs, unicodeNumSups, sizeMap, xHeights, styleMap, styleAttributes, symbolRegEx, smallPad, mediumPad, largePad, short, arrows, isArrow, fontMap, getVariant, numberRegEx, latinRegEx, primes, italicNumber, cssSpace, regularSpace, textFontFamilies, textFontWeights, textFontShapes, styleWithFont, makeVerb, functions, spaceRegexString, controlWordRegexString, controlSymbolRegexString, controlWordWhitespaceRegexString, controlSpaceRegexString, combiningDiacriticalMarkString, combiningDiacriticalMarksEndRegex, tokenRegexString, Lexer, Namespace, implicitCommands, MacroExpander, unicodeSubRegEx, uSubsAndSups, asciiFromScript, unicodeAccents, unicodeSymbols, binLeftCancellers, sizeRegEx, textRegEx, Parser, parseTree, subOrSupLevel, Style, version, findEndOfMath, escapeRegex, amsRegex, splitAtDelimiters, defaultDelimiters, firstDraftDelimiters, amsDelimiters, delimitersFromKey, renderMathInText, renderElem, renderMathInElement, render, renderToString, generateParseTree, definePreamble, renderError, renderToMathMLTree, temml$1;
		var init_temml = __esmMin((() => {
			ParseError = class ParseError {
				constructor(message, token) {
					let error = " " + message;
					let start;
					const loc = token && token.loc;
					if (loc && loc.start <= loc.end) {
						const input = loc.lexer.input;
						start = loc.start;
						const end = loc.end;
						if (start === input.length) error += " at end of input: ";
						else error += " at position " + (start + 1) + ": \n";
						const underlined = input.slice(start, end).replace(/[^]/g, "$&̲");
						let left;
						if (start > 15) left = "…" + input.slice(start - 15, start);
						else left = input.slice(0, start);
						let right;
						if (end + 15 < input.length) right = input.slice(end, end + 15) + "…";
						else right = input.slice(end);
						error += left + underlined + right;
					}
					const self = new Error(error);
					self.name = "ParseError";
					self.__proto__ = ParseError.prototype;
					self.position = start;
					return self;
				}
			};
			ParseError.prototype.__proto__ = Error.prototype;
			deflt = function(setting, defaultIfUndefined) {
				return setting === void 0 ? defaultIfUndefined : setting;
			};
			uppercase = /([A-Z])/g;
			hyphenate = function(str) {
				return str.replace(uppercase, "-$1").toLowerCase();
			};
			ESCAPE_LOOKUP = {
				"&": "&amp;",
				">": "&gt;",
				"<": "&lt;",
				"\"": "&quot;",
				"'": "&#x27;"
			};
			ESCAPE_REGEX = /[&><"']/g;
			getBaseElem = function(group) {
				if (group.type === "ordgroup") {
					if (group.body.length === 1) return getBaseElem(group.body[0]);
					else return group;
				} else if (group.type === "color") {
					if (group.body.length === 1) return getBaseElem(group.body[0]);
					else return group;
				} else if (group.type === "font") return getBaseElem(group.body);
				else return group;
			};
			isCharacterBox = function(group) {
				const baseElem = getBaseElem(group);
				return baseElem.type === "mathord" || baseElem.type === "textord" || baseElem.type === "atom";
			};
			assert = function(value) {
				if (!value) throw new Error("Expected non-null, but got " + String(value));
				return value;
			};
			protocolFromUrl = function(url) {
				const protocol = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(url);
				if (!protocol) return "_relative";
				if (protocol[2] !== ":") return null;
				if (!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(protocol[1])) return null;
				return protocol[1].toLowerCase();
			};
			round = function(n) {
				return +n.toFixed(4);
			};
			smalls = "acegıȷmnopqrsuvwxyzαγεηικμνοπρςστυχωϕ𝐚𝐜𝐞𝐠𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐮𝐯𝐰𝐱𝐲𝐳";
			Settings = class {
				constructor(options) {
					options = options || {};
					this.displayMode = deflt(options.displayMode, false);
					this.annotate = deflt(options.annotate, false);
					this.leqno = deflt(options.leqno, false);
					this.throwOnError = deflt(options.throwOnError, false);
					this.errorColor = deflt(options.errorColor, "#b22222");
					this.macros = options.macros || {};
					this.wrap = deflt(options.wrap, "none");
					this.xml = deflt(options.xml, false);
					this.colorIsTextColor = deflt(options.colorIsTextColor, false);
					this.strict = deflt(options.strict, false);
					this.trust = deflt(options.trust, false);
					this.maxSize = options.maxSize === void 0 ? [Infinity, Infinity] : Array.isArray(options.maxSize) ? options.maxSize : [Infinity, Infinity];
					this.maxExpand = Math.max(0, deflt(options.maxExpand, 1e3));
					this.wrapDelimiterPairs = true;
				}
				/**
				* Check whether to test potentially dangerous input, and return
				* `true` (trusted) or `false` (untrusted).  The sole argument `context`
				* should be an object with `command` field specifying the relevant LaTeX
				* command (as a string starting with `\`), and any other arguments, etc.
				* If `context` has a `url` field, a `protocol` field will automatically
				* get added by this function (changing the specified object).
				*/
				isTrusted(context) {
					if (context.url && !context.protocol) {
						const protocol = protocolFromUrl(context.url);
						if (protocol == null) return false;
						context.protocol = protocol;
					}
					const trust = typeof this.trust === "function" ? this.trust(context) : this.trust;
					return Boolean(trust);
				}
			};
			_functions = {};
			_mathmlGroupBuilders = {};
			normalizeArgument = function(arg) {
				return arg.type === "ordgroup" && arg.body.length === 1 ? arg.body[0] : arg;
			};
			ordargument = function(arg) {
				return arg.type === "ordgroup" ? arg.body : [arg];
			};
			DocumentFragment = class {
				constructor(children) {
					this.children = children;
					this.classes = [];
					this.style = {};
				}
				hasClass(className) {
					return this.classes.includes(className);
				}
				/** Convert the fragment into a node. */
				toNode() {
					const frag = document.createDocumentFragment();
					for (let i = 0; i < this.children.length; i++) frag.appendChild(this.children[i].toNode());
					return frag;
				}
				/** Convert the fragment into HTML markup. */
				toMarkup() {
					let markup = "";
					for (let i = 0; i < this.children.length; i++) markup += this.children[i].toMarkup();
					return markup;
				}
				/**
				* Converts the math node into a string, similar to innerText. Applies to
				* MathDomNode's only.
				*/
				toText() {
					const toText = (child) => child.toText();
					return this.children.map(toText).join("");
				}
			};
			createClass = function(classes) {
				return classes.filter((cls) => cls).join(" ");
			};
			initNode = function(classes, style) {
				this.classes = classes || [];
				this.attributes = {};
				this.style = style || {};
			};
			toNode = function(tagName) {
				const node = document.createElement(tagName);
				node.className = createClass(this.classes);
				for (const style in this.style) if (Object.prototype.hasOwnProperty.call(this.style, style)) node.style[style] = this.style[style];
				for (const attr in this.attributes) if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) node.setAttribute(attr, this.attributes[attr]);
				for (let i = 0; i < this.children.length; i++) node.appendChild(this.children[i].toNode());
				return node;
			};
			toMarkup = function(tagName) {
				let markup = `<${tagName}`;
				if (this.classes.length) markup += ` class="${escape(createClass(this.classes))}"`;
				let styles = "";
				for (const style in this.style) if (Object.prototype.hasOwnProperty.call(this.style, style)) styles += `${hyphenate(style)}:${this.style[style]};`;
				if (styles) markup += ` style="${styles}"`;
				for (const attr in this.attributes) if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) markup += ` ${attr}="${escape(this.attributes[attr])}"`;
				markup += ">";
				for (let i = 0; i < this.children.length; i++) markup += this.children[i].toMarkup();
				markup += `</${tagName}>`;
				return markup;
			};
			Span = class {
				constructor(classes, children, style) {
					initNode.call(this, classes, style);
					this.children = children || [];
				}
				setAttribute(attribute, value) {
					this.attributes[attribute] = value;
				}
				toNode() {
					return toNode.call(this, "span");
				}
				toMarkup() {
					return toMarkup.call(this, "span");
				}
			};
			TextNode$1 = class TextNode {
				constructor(text) {
					this.text = text;
				}
				toNode() {
					return document.createTextNode(this.text);
				}
				toMarkup() {
					return escape(this.text);
				}
			};
			AnchorNode = class {
				constructor(href, classes, children) {
					this.href = href;
					this.classes = classes;
					this.children = children || [];
				}
				toNode() {
					const node = document.createElement("a");
					node.setAttribute("href", this.href);
					if (this.classes.length > 0) node.className = createClass(this.classes);
					for (let i = 0; i < this.children.length; i++) node.appendChild(this.children[i].toNode());
					return node;
				}
				toMarkup() {
					let markup = `<a href='${escape(this.href)}'`;
					if (this.classes.length > 0) markup += ` class="${escape(createClass(this.classes))}"`;
					markup += ">";
					for (let i = 0; i < this.children.length; i++) markup += this.children[i].toMarkup();
					markup += "</a>";
					return markup;
				}
			};
			Img = class {
				constructor(src, alt, style) {
					this.alt = alt;
					this.src = src;
					this.classes = ["mord"];
					this.style = style;
				}
				hasClass(className) {
					return this.classes.includes(className);
				}
				toNode() {
					const node = document.createElement("img");
					node.src = this.src;
					node.alt = this.alt;
					node.className = "mord";
					for (const style in this.style) if (Object.prototype.hasOwnProperty.call(this.style, style)) node.style[style] = this.style[style];
					return node;
				}
				toMarkup() {
					let markup = `<img src='${this.src}' alt='${this.alt}'`;
					let styles = "";
					for (const style in this.style) if (Object.prototype.hasOwnProperty.call(this.style, style)) styles += `${hyphenate(style)}:${this.style[style]};`;
					if (styles) markup += ` style="${escape(styles)}"`;
					markup += ">";
					return markup;
				}
			};
			MathNode = class {
				constructor(type, children, classes, style) {
					this.type = type;
					this.attributes = {};
					this.children = children || [];
					this.classes = classes || [];
					this.style = style || {};
					this.label = "";
				}
				/**
				* Sets an attribute on a MathML node. MathML depends on attributes to convey a
				* semantic content, so this is used heavily.
				*/
				setAttribute(name, value) {
					this.attributes[name] = value;
				}
				/**
				* Gets an attribute on a MathML node.
				*/
				getAttribute(name) {
					return this.attributes[name];
				}
				setLabel(value) {
					this.label = value;
				}
				/**
				* Converts the math node into a MathML-namespaced DOM element.
				*/
				toNode() {
					const node = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
					for (const attr in this.attributes) if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) node.setAttribute(attr, this.attributes[attr]);
					if (this.classes.length > 0) node.className = createClass(this.classes);
					for (const style in this.style) if (Object.prototype.hasOwnProperty.call(this.style, style)) node.style[style] = this.style[style];
					for (let i = 0; i < this.children.length; i++) node.appendChild(this.children[i].toNode());
					return node;
				}
				/**
				* Converts the math node into an HTML markup string.
				*/
				toMarkup() {
					let markup = "<" + this.type;
					for (const attr in this.attributes) if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
						markup += " " + attr + "=\"";
						markup += escape(this.attributes[attr]);
						markup += "\"";
					}
					if (this.classes.length > 0) markup += ` class="${escape(createClass(this.classes))}"`;
					let styles = "";
					for (const style in this.style) if (Object.prototype.hasOwnProperty.call(this.style, style)) styles += `${hyphenate(style)}:${this.style[style]};`;
					if (styles) markup += ` style="${styles}"`;
					markup += ">";
					for (let i = 0; i < this.children.length; i++) markup += this.children[i].toMarkup();
					markup += "</" + this.type + ">";
					return markup;
				}
				/**
				* Converts the math node into a string, similar to innerText, but escaped.
				*/
				toText() {
					return this.children.map((child) => child.toText()).join("");
				}
			};
			TextNode = class {
				constructor(text) {
					this.text = text;
				}
				/**
				* Converts the text node into a DOM text node.
				*/
				toNode() {
					return document.createTextNode(this.text);
				}
				/**
				* Converts the text node into escaped HTML markup
				* (representing the text itself).
				*/
				toMarkup() {
					return escape(this.toText());
				}
				/**
				* Converts the text node into a string
				* (representing the text itself).
				*/
				toText() {
					return this.text;
				}
			};
			wrapWithMstyle = (expression) => {
				let node;
				if (expression.length === 1 && expression[0].type === "mrow") {
					node = expression.pop();
					node.type = "mstyle";
				} else node = new MathNode("mstyle", expression);
				return node;
			};
			estimatedWidth = (node) => {
				let width = 0;
				if (node.body && Array.isArray(node.body)) for (const item of node.body) width += estimatedWidth(item);
				else if (node.body) width += estimatedWidth(node.body);
				else if (node.type === "supsub") {
					width += estimatedWidth(node.base);
					if (node.sub) width += .7 * estimatedWidth(node.sub);
					if (node.sup) width += .7 * estimatedWidth(node.sup);
				} else if (node.type === "mathord" || node.type === "textord") for (const ch of node.text.split("")) {
					const codePoint = ch.codePointAt(0);
					if (96 < codePoint && codePoint < 123 || 944 < codePoint && codePoint < 970) width += .56;
					else if (47 < codePoint && codePoint < 58) width += .5;
					else width += .92;
				}
				else width += 1;
				return width;
			};
			stretchyCodePoint = {
				widehat: "ˆ",
				widecheck: "ˇ",
				widetilde: "~",
				wideparen: "⏜",
				utilde: "~",
				overleftarrow: "←",
				underleftarrow: "←",
				xleftarrow: "←",
				overrightarrow: "→",
				underrightarrow: "→",
				xrightarrow: "→",
				underbrace: "⏟",
				overbrace: "⏞",
				overbracket: "⎴",
				underbracket: "⎵",
				overgroup: "⏠",
				overparen: "⏜",
				undergroup: "⏡",
				underparen: "⏝",
				overleftrightarrow: "↔",
				underleftrightarrow: "↔",
				xleftrightarrow: "↔",
				Overrightarrow: "⇒",
				xRightarrow: "⇒",
				overleftharpoon: "↼",
				xleftharpoonup: "↼",
				overrightharpoon: "⇀",
				xrightharpoonup: "⇀",
				xLeftarrow: "⇐",
				xLeftrightarrow: "⇔",
				xhookleftarrow: "↩",
				xhookrightarrow: "↪",
				xmapsto: "↦",
				xrightharpoondown: "⇁",
				xleftharpoondown: "↽",
				xtwoheadleftarrow: "↞",
				xtwoheadrightarrow: "↠",
				xlongequal: "=",
				xrightleftarrows: "⇄",
				xtofrom: "⇄",
				xleftrightharpoons: "⇋",
				xrightleftharpoons: "⇌",
				yields: "→",
				yieldsLeft: "←",
				mesomerism: "↔",
				longrightharpoonup: "⇀",
				longleftharpoondown: "↽",
				eqrightharpoonup: "⇀",
				eqleftharpoondown: "↽",
				"\\cdrightarrow": "→",
				"\\cdleftarrow": "←",
				"\\cdlongequal": "=",
				yieldsLeftRight: "⇄",
				chemequilibrium: "⇌"
			};
			mathMLnode = function(label) {
				const child = new TextNode(stretchyCodePoint[label.slice(1)]);
				const node = new MathNode("mo", [child]);
				node.setAttribute("stretchy", "true");
				return node;
			};
			wideHats = ["\\widehat", "\\widecheck"];
			accentNode = (group) => {
				const mo = mathMLnode(group.label);
				if (group.label.indexOf("tilde") > -1) {
					const width = estimatedWidth(group.base);
					if (1 < width && width < 1.6) mo.classes.push("tml-tilde-2");
					else if (1.6 <= width && width < 2.5) mo.classes.push("tml-tilde-3");
					else if (2.5 <= width) mo.classes.push("tml-tilde-4");
				} else if (wideHats.includes(group.label)) {
					const width = estimatedWidth(group.base);
					if (0 < width && width <= 1) mo.classes.push("tml-hat-1");
					else if (1 < width && width < 1.6) mo.classes.push("tml-hat-2");
					else if (1.6 <= width && width < 2.5) mo.classes.push("tml-hat-3");
					else if (2.5 <= width) mo.classes.push("tml-hat-4");
				}
				return mo;
			};
			ATOMS = {
				bin: 1,
				close: 1,
				inner: 1,
				open: 1,
				punct: 1,
				rel: 1
			};
			NON_ATOMS = {
				"accent-token": 1,
				mathord: 1,
				"op-token": 1,
				spacing: 1,
				textord: 1
			};
			symbols = {
				math: {},
				text: {}
			};
			math = "math";
			text = "text";
			accent = "accent-token";
			bin = "bin";
			close = "close";
			inner = "inner";
			mathord = "mathord";
			op = "op-token";
			open = "open";
			punct = "punct";
			rel = "rel";
			spacing = "spacing";
			textord = "textord";
			defineSymbol(math, rel, "≡", "\\equiv", true);
			defineSymbol(math, rel, "≺", "\\prec", true);
			defineSymbol(math, rel, "≻", "\\succ", true);
			defineSymbol(math, rel, "∼", "\\sim", true);
			defineSymbol(math, rel, "⟂", "\\perp", true);
			defineSymbol(math, rel, "⪯", "\\preceq", true);
			defineSymbol(math, rel, "⪰", "\\succeq", true);
			defineSymbol(math, rel, "≃", "\\simeq", true);
			defineSymbol(math, rel, "≌", "\\backcong", true);
			defineSymbol(math, rel, "|", "\\mid", true);
			defineSymbol(math, rel, "≪", "\\ll", true);
			defineSymbol(math, rel, "≫", "\\gg", true);
			defineSymbol(math, rel, "≍", "\\asymp", true);
			defineSymbol(math, rel, "∥", "\\parallel");
			defineSymbol(math, rel, "⌣", "\\smile", true);
			defineSymbol(math, rel, "⊑", "\\sqsubseteq", true);
			defineSymbol(math, rel, "⊒", "\\sqsupseteq", true);
			defineSymbol(math, rel, "≐", "\\doteq", true);
			defineSymbol(math, rel, "⌢", "\\frown", true);
			defineSymbol(math, rel, "∋", "\\ni", true);
			defineSymbol(math, rel, "∌", "\\notni", true);
			defineSymbol(math, rel, "∝", "\\propto", true);
			defineSymbol(math, rel, "⊢", "\\vdash", true);
			defineSymbol(math, rel, "⊣", "\\dashv", true);
			defineSymbol(math, rel, "∋", "\\owns");
			defineSymbol(math, rel, "≘", "\\arceq", true);
			defineSymbol(math, rel, "≙", "\\wedgeq", true);
			defineSymbol(math, rel, "≚", "\\veeeq", true);
			defineSymbol(math, rel, "≛", "\\stareq", true);
			defineSymbol(math, rel, "≝", "\\eqdef", true);
			defineSymbol(math, rel, "≞", "\\measeq", true);
			defineSymbol(math, rel, "≟", "\\questeq", true);
			defineSymbol(math, rel, "≠", "\\ne", true);
			defineSymbol(math, rel, "≠", "\\neq");
			defineSymbol(math, rel, "⩵", "\\eqeq", true);
			defineSymbol(math, rel, "⩶", "\\eqeqeq", true);
			defineSymbol(math, rel, "∷", "\\dblcolon", true);
			defineSymbol(math, rel, "≔", "\\coloneqq", true);
			defineSymbol(math, rel, "≕", "\\eqqcolon", true);
			defineSymbol(math, rel, "∹", "\\eqcolon", true);
			defineSymbol(math, rel, "⩴", "\\Coloneqq", true);
			defineSymbol(math, punct, ".", "\\ldotp");
			defineSymbol(math, punct, "·", "\\cdotp");
			defineSymbol(math, textord, "#", "\\#");
			defineSymbol(text, textord, "#", "\\#");
			defineSymbol(math, textord, "&", "\\&");
			defineSymbol(text, textord, "&", "\\&");
			defineSymbol(math, textord, "ℵ", "\\aleph", true);
			defineSymbol(math, textord, "∀", "\\forall", true);
			defineSymbol(math, textord, "ℏ", "\\hbar", true);
			defineSymbol(math, textord, "∃", "\\exists", true);
			defineSymbol(math, open, "∇", "\\nabla", true);
			defineSymbol(math, textord, "♭", "\\flat", true);
			defineSymbol(math, textord, "ℓ", "\\ell", true);
			defineSymbol(math, textord, "♮", "\\natural", true);
			defineSymbol(math, textord, "Å", "\\Angstrom", true);
			defineSymbol(text, textord, "Å", "\\Angstrom", true);
			defineSymbol(math, textord, "♣", "\\clubsuit", true);
			defineSymbol(math, textord, "♧", "\\varclubsuit", true);
			defineSymbol(math, textord, "℘", "\\wp", true);
			defineSymbol(math, textord, "♯", "\\sharp", true);
			defineSymbol(math, textord, "♢", "\\diamondsuit", true);
			defineSymbol(math, textord, "♦", "\\vardiamondsuit", true);
			defineSymbol(math, textord, "ℜ", "\\Re", true);
			defineSymbol(math, textord, "♡", "\\heartsuit", true);
			defineSymbol(math, textord, "♥", "\\varheartsuit", true);
			defineSymbol(math, textord, "ℑ", "\\Im", true);
			defineSymbol(math, textord, "♠", "\\spadesuit", true);
			defineSymbol(math, textord, "♤", "\\varspadesuit", true);
			defineSymbol(math, textord, "♀", "\\female", true);
			defineSymbol(math, textord, "♂", "\\male", true);
			defineSymbol(math, textord, "§", "\\S", true);
			defineSymbol(text, textord, "§", "\\S");
			defineSymbol(math, textord, "¶", "\\P", true);
			defineSymbol(text, textord, "¶", "\\P");
			defineSymbol(text, textord, "☺", "\\smiley", true);
			defineSymbol(math, textord, "☺", "\\smiley", true);
			defineSymbol(math, textord, "†", "\\dag");
			defineSymbol(text, textord, "†", "\\dag");
			defineSymbol(text, textord, "†", "\\textdagger");
			defineSymbol(math, textord, "‡", "\\ddag");
			defineSymbol(text, textord, "‡", "\\ddag");
			defineSymbol(text, textord, "‡", "\\textdaggerdbl");
			defineSymbol(math, close, "⎱", "\\rmoustache", true);
			defineSymbol(math, open, "⎰", "\\lmoustache", true);
			defineSymbol(math, close, "⟯", "\\rgroup", true);
			defineSymbol(math, open, "⟮", "\\lgroup", true);
			defineSymbol(math, bin, "∓", "\\mp", true);
			defineSymbol(math, bin, "⊖", "\\ominus", true);
			defineSymbol(math, bin, "⊎", "\\uplus", true);
			defineSymbol(math, bin, "⊓", "\\sqcap", true);
			defineSymbol(math, bin, "∗", "\\ast");
			defineSymbol(math, bin, "⊔", "\\sqcup", true);
			defineSymbol(math, bin, "◯", "\\bigcirc", true);
			defineSymbol(math, bin, "∙", "\\bullet", true);
			defineSymbol(math, bin, "‡", "\\ddagger");
			defineSymbol(math, bin, "≀", "\\wr", true);
			defineSymbol(math, bin, "⨿", "\\amalg");
			defineSymbol(math, bin, "&", "\\And");
			defineSymbol(math, bin, "⫽", "\\sslash", true);
			defineSymbol(math, rel, "⟵", "\\longleftarrow", true);
			defineSymbol(math, rel, "⇐", "\\Leftarrow", true);
			defineSymbol(math, rel, "⟸", "\\Longleftarrow", true);
			defineSymbol(math, rel, "⟶", "\\longrightarrow", true);
			defineSymbol(math, rel, "⇒", "\\Rightarrow", true);
			defineSymbol(math, rel, "⟹", "\\Longrightarrow", true);
			defineSymbol(math, rel, "↔", "\\leftrightarrow", true);
			defineSymbol(math, rel, "⟷", "\\longleftrightarrow", true);
			defineSymbol(math, rel, "⇔", "\\Leftrightarrow", true);
			defineSymbol(math, rel, "⟺", "\\Longleftrightarrow", true);
			defineSymbol(math, rel, "↤", "\\mapsfrom", true);
			defineSymbol(math, rel, "↦", "\\mapsto", true);
			defineSymbol(math, rel, "⟼", "\\longmapsto", true);
			defineSymbol(math, rel, "↗", "\\nearrow", true);
			defineSymbol(math, rel, "↩", "\\hookleftarrow", true);
			defineSymbol(math, rel, "↪", "\\hookrightarrow", true);
			defineSymbol(math, rel, "↘", "\\searrow", true);
			defineSymbol(math, rel, "↼", "\\leftharpoonup", true);
			defineSymbol(math, rel, "⇀", "\\rightharpoonup", true);
			defineSymbol(math, rel, "↙", "\\swarrow", true);
			defineSymbol(math, rel, "↽", "\\leftharpoondown", true);
			defineSymbol(math, rel, "⇁", "\\rightharpoondown", true);
			defineSymbol(math, rel, "↖", "\\nwarrow", true);
			defineSymbol(math, rel, "⇌", "\\rightleftharpoons", true);
			defineSymbol(math, mathord, "↯", "\\lightning", true);
			defineSymbol(math, mathord, "∎", "\\QED", true);
			defineSymbol(math, mathord, "‰", "\\permil", true);
			defineSymbol(text, textord, "‰", "\\permil");
			defineSymbol(math, mathord, "☉", "\\astrosun", true);
			defineSymbol(math, mathord, "☼", "\\sun", true);
			defineSymbol(math, mathord, "☾", "\\leftmoon", true);
			defineSymbol(math, mathord, "☽", "\\rightmoon", true);
			defineSymbol(math, mathord, "⊕", "\\Earth");
			defineSymbol(math, rel, "≮", "\\nless", true);
			defineSymbol(math, rel, "⪇", "\\lneq", true);
			defineSymbol(math, rel, "≨", "\\lneqq", true);
			defineSymbol(math, rel, "≨︀", "\\lvertneqq");
			defineSymbol(math, rel, "⋦", "\\lnsim", true);
			defineSymbol(math, rel, "⪉", "\\lnapprox", true);
			defineSymbol(math, rel, "⊀", "\\nprec", true);
			defineSymbol(math, rel, "⋠", "\\npreceq", true);
			defineSymbol(math, rel, "⋨", "\\precnsim", true);
			defineSymbol(math, rel, "⪹", "\\precnapprox", true);
			defineSymbol(math, rel, "≁", "\\nsim", true);
			defineSymbol(math, rel, "∤", "\\nmid", true);
			defineSymbol(math, rel, "∤", "\\nshortmid");
			defineSymbol(math, rel, "⊬", "\\nvdash", true);
			defineSymbol(math, rel, "⊭", "\\nvDash", true);
			defineSymbol(math, rel, "⋪", "\\ntriangleleft");
			defineSymbol(math, rel, "⋬", "\\ntrianglelefteq", true);
			defineSymbol(math, rel, "⊄", "\\nsubset", true);
			defineSymbol(math, rel, "⊅", "\\nsupset", true);
			defineSymbol(math, rel, "⊊", "\\subsetneq", true);
			defineSymbol(math, rel, "⊊︀", "\\varsubsetneq");
			defineSymbol(math, rel, "⫋", "\\subsetneqq", true);
			defineSymbol(math, rel, "⫋︀", "\\varsubsetneqq");
			defineSymbol(math, rel, "≯", "\\ngtr", true);
			defineSymbol(math, rel, "⪈", "\\gneq", true);
			defineSymbol(math, rel, "≩", "\\gneqq", true);
			defineSymbol(math, rel, "≩︀", "\\gvertneqq");
			defineSymbol(math, rel, "⋧", "\\gnsim", true);
			defineSymbol(math, rel, "⪊", "\\gnapprox", true);
			defineSymbol(math, rel, "⊁", "\\nsucc", true);
			defineSymbol(math, rel, "⋡", "\\nsucceq", true);
			defineSymbol(math, rel, "⋩", "\\succnsim", true);
			defineSymbol(math, rel, "⪺", "\\succnapprox", true);
			defineSymbol(math, rel, "≆", "\\ncong", true);
			defineSymbol(math, rel, "∦", "\\nparallel", true);
			defineSymbol(math, rel, "∦", "\\nshortparallel");
			defineSymbol(math, rel, "⊯", "\\nVDash", true);
			defineSymbol(math, rel, "⋫", "\\ntriangleright");
			defineSymbol(math, rel, "⋭", "\\ntrianglerighteq", true);
			defineSymbol(math, rel, "⊋", "\\supsetneq", true);
			defineSymbol(math, rel, "⊋", "\\varsupsetneq");
			defineSymbol(math, rel, "⫌", "\\supsetneqq", true);
			defineSymbol(math, rel, "⫌︀", "\\varsupsetneqq");
			defineSymbol(math, rel, "⊮", "\\nVdash", true);
			defineSymbol(math, rel, "⪵", "\\precneqq", true);
			defineSymbol(math, rel, "⪶", "\\succneqq", true);
			defineSymbol(math, bin, "⊴", "\\unlhd");
			defineSymbol(math, bin, "⊵", "\\unrhd");
			defineSymbol(math, rel, "↚", "\\nleftarrow", true);
			defineSymbol(math, rel, "↛", "\\nrightarrow", true);
			defineSymbol(math, rel, "⇍", "\\nLeftarrow", true);
			defineSymbol(math, rel, "⇏", "\\nRightarrow", true);
			defineSymbol(math, rel, "↮", "\\nleftrightarrow", true);
			defineSymbol(math, rel, "⇎", "\\nLeftrightarrow", true);
			defineSymbol(math, rel, "△", "\\vartriangle");
			defineSymbol(math, textord, "ℏ", "\\hslash");
			defineSymbol(math, textord, "▽", "\\triangledown");
			defineSymbol(math, textord, "◊", "\\lozenge");
			defineSymbol(math, textord, "Ⓢ", "\\circledS");
			defineSymbol(math, textord, "®", "\\circledR", true);
			defineSymbol(text, textord, "®", "\\circledR");
			defineSymbol(text, textord, "®", "\\textregistered");
			defineSymbol(math, textord, "∡", "\\measuredangle", true);
			defineSymbol(math, textord, "∄", "\\nexists");
			defineSymbol(math, textord, "℧", "\\mho");
			defineSymbol(math, textord, "Ⅎ", "\\Finv", true);
			defineSymbol(math, textord, "⅁", "\\Game", true);
			defineSymbol(math, textord, "‵", "\\backprime");
			defineSymbol(math, textord, "‶", "\\backdprime");
			defineSymbol(math, textord, "‷", "\\backtrprime");
			defineSymbol(math, textord, "▲", "\\blacktriangle");
			defineSymbol(math, textord, "▼", "\\blacktriangledown");
			defineSymbol(math, textord, "■", "\\blacksquare");
			defineSymbol(math, textord, "⧫", "\\blacklozenge");
			defineSymbol(math, textord, "★", "\\bigstar");
			defineSymbol(math, textord, "∢", "\\sphericalangle", true);
			defineSymbol(math, textord, "∁", "\\complement", true);
			defineSymbol(math, textord, "╱", "\\diagup");
			defineSymbol(math, textord, "╲", "\\diagdown");
			defineSymbol(math, textord, "□", "\\square");
			defineSymbol(math, textord, "□", "\\Box");
			defineSymbol(math, textord, "◊", "\\Diamond");
			defineSymbol(math, textord, "¥", "\\yen", true);
			defineSymbol(text, textord, "¥", "\\yen", true);
			defineSymbol(math, textord, "✓", "\\checkmark", true);
			defineSymbol(text, textord, "✓", "\\checkmark");
			defineSymbol(math, textord, "✗", "\\ballotx", true);
			defineSymbol(text, textord, "✗", "\\ballotx");
			defineSymbol(text, textord, "•", "\\textbullet");
			defineSymbol(math, textord, "ℶ", "\\beth", true);
			defineSymbol(math, textord, "ℸ", "\\daleth", true);
			defineSymbol(math, textord, "ℷ", "\\gimel", true);
			defineSymbol(math, textord, "ϝ", "\\digamma", true);
			defineSymbol(math, textord, "ϰ", "\\varkappa");
			defineSymbol(math, open, "⌜", "\\ulcorner", true);
			defineSymbol(math, close, "⌝", "\\urcorner", true);
			defineSymbol(math, open, "⌞", "\\llcorner", true);
			defineSymbol(math, close, "⌟", "\\lrcorner", true);
			defineSymbol(math, rel, "≦", "\\leqq", true);
			defineSymbol(math, rel, "⩽", "\\leqslant", true);
			defineSymbol(math, rel, "⪕", "\\eqslantless", true);
			defineSymbol(math, rel, "≲", "\\lesssim", true);
			defineSymbol(math, rel, "⪅", "\\lessapprox", true);
			defineSymbol(math, rel, "≊", "\\approxeq", true);
			defineSymbol(math, bin, "⋖", "\\lessdot");
			defineSymbol(math, rel, "⋘", "\\lll", true);
			defineSymbol(math, rel, "≶", "\\lessgtr", true);
			defineSymbol(math, rel, "⋚", "\\lesseqgtr", true);
			defineSymbol(math, rel, "⪋", "\\lesseqqgtr", true);
			defineSymbol(math, rel, "≑", "\\doteqdot");
			defineSymbol(math, rel, "≓", "\\risingdotseq", true);
			defineSymbol(math, rel, "≒", "\\fallingdotseq", true);
			defineSymbol(math, rel, "∽", "\\backsim", true);
			defineSymbol(math, rel, "⋍", "\\backsimeq", true);
			defineSymbol(math, rel, "⫅", "\\subseteqq", true);
			defineSymbol(math, rel, "⋐", "\\Subset", true);
			defineSymbol(math, rel, "⊏", "\\sqsubset", true);
			defineSymbol(math, rel, "≼", "\\preccurlyeq", true);
			defineSymbol(math, rel, "⋞", "\\curlyeqprec", true);
			defineSymbol(math, rel, "≾", "\\precsim", true);
			defineSymbol(math, rel, "⪷", "\\precapprox", true);
			defineSymbol(math, rel, "⊲", "\\vartriangleleft");
			defineSymbol(math, rel, "⊴", "\\trianglelefteq");
			defineSymbol(math, rel, "⊨", "\\vDash", true);
			defineSymbol(math, rel, "⊫", "\\VDash", true);
			defineSymbol(math, rel, "⊪", "\\Vvdash", true);
			defineSymbol(math, rel, "⌣", "\\smallsmile");
			defineSymbol(math, rel, "⌢", "\\smallfrown");
			defineSymbol(math, rel, "≏", "\\bumpeq", true);
			defineSymbol(math, rel, "≎", "\\Bumpeq", true);
			defineSymbol(math, rel, "≧", "\\geqq", true);
			defineSymbol(math, rel, "⩾", "\\geqslant", true);
			defineSymbol(math, rel, "⪖", "\\eqslantgtr", true);
			defineSymbol(math, rel, "≳", "\\gtrsim", true);
			defineSymbol(math, rel, "⪆", "\\gtrapprox", true);
			defineSymbol(math, bin, "⋗", "\\gtrdot");
			defineSymbol(math, rel, "⋙", "\\ggg", true);
			defineSymbol(math, rel, "≷", "\\gtrless", true);
			defineSymbol(math, rel, "⋛", "\\gtreqless", true);
			defineSymbol(math, rel, "⪌", "\\gtreqqless", true);
			defineSymbol(math, rel, "≖", "\\eqcirc", true);
			defineSymbol(math, rel, "≗", "\\circeq", true);
			defineSymbol(math, rel, "≜", "\\triangleq", true);
			defineSymbol(math, rel, "∼", "\\thicksim");
			defineSymbol(math, rel, "≈", "\\thickapprox");
			defineSymbol(math, rel, "⫆", "\\supseteqq", true);
			defineSymbol(math, rel, "⋑", "\\Supset", true);
			defineSymbol(math, rel, "⊐", "\\sqsupset", true);
			defineSymbol(math, rel, "≽", "\\succcurlyeq", true);
			defineSymbol(math, rel, "⋟", "\\curlyeqsucc", true);
			defineSymbol(math, rel, "≿", "\\succsim", true);
			defineSymbol(math, rel, "⪸", "\\succapprox", true);
			defineSymbol(math, rel, "⊳", "\\vartriangleright");
			defineSymbol(math, rel, "⊵", "\\trianglerighteq");
			defineSymbol(math, rel, "⊩", "\\Vdash", true);
			defineSymbol(math, rel, "∣", "\\shortmid");
			defineSymbol(math, rel, "∥", "\\shortparallel");
			defineSymbol(math, rel, "≬", "\\between", true);
			defineSymbol(math, rel, "⋔", "\\pitchfork", true);
			defineSymbol(math, rel, "∝", "\\varpropto");
			defineSymbol(math, rel, "◀", "\\blacktriangleleft");
			defineSymbol(math, rel, "∴", "\\therefore", true);
			defineSymbol(math, rel, "∍", "\\backepsilon");
			defineSymbol(math, rel, "▶", "\\blacktriangleright");
			defineSymbol(math, rel, "∵", "\\because", true);
			defineSymbol(math, rel, "⋘", "\\llless");
			defineSymbol(math, rel, "⋙", "\\gggtr");
			defineSymbol(math, bin, "⊲", "\\lhd");
			defineSymbol(math, bin, "⊳", "\\rhd");
			defineSymbol(math, rel, "≂", "\\eqsim", true);
			defineSymbol(math, rel, "≑", "\\Doteq", true);
			defineSymbol(math, rel, "⥽", "\\strictif", true);
			defineSymbol(math, rel, "⥼", "\\strictfi", true);
			defineSymbol(math, bin, "∔", "\\dotplus", true);
			defineSymbol(math, bin, "∖", "\\smallsetminus");
			defineSymbol(math, bin, "⋒", "\\Cap", true);
			defineSymbol(math, bin, "⋓", "\\Cup", true);
			defineSymbol(math, bin, "⩞", "\\doublebarwedge", true);
			defineSymbol(math, bin, "⊟", "\\boxminus", true);
			defineSymbol(math, bin, "⊞", "\\boxplus", true);
			defineSymbol(math, bin, "⧄", "\\boxslash", true);
			defineSymbol(math, bin, "⋇", "\\divideontimes", true);
			defineSymbol(math, bin, "⋉", "\\ltimes", true);
			defineSymbol(math, bin, "⋊", "\\rtimes", true);
			defineSymbol(math, bin, "⋋", "\\leftthreetimes", true);
			defineSymbol(math, bin, "⋌", "\\rightthreetimes", true);
			defineSymbol(math, bin, "⋏", "\\curlywedge", true);
			defineSymbol(math, bin, "⋎", "\\curlyvee", true);
			defineSymbol(math, bin, "⊝", "\\circleddash", true);
			defineSymbol(math, bin, "⊛", "\\circledast", true);
			defineSymbol(math, bin, "⊺", "\\intercal", true);
			defineSymbol(math, bin, "⋒", "\\doublecap");
			defineSymbol(math, bin, "⋓", "\\doublecup");
			defineSymbol(math, bin, "⊠", "\\boxtimes", true);
			defineSymbol(math, bin, "⋈", "\\bowtie", true);
			defineSymbol(math, bin, "⋈", "\\Join");
			defineSymbol(math, bin, "⟕", "\\leftouterjoin", true);
			defineSymbol(math, bin, "⟖", "\\rightouterjoin", true);
			defineSymbol(math, bin, "⟗", "\\fullouterjoin", true);
			defineSymbol(math, bin, "∸", "\\dotminus", true);
			defineSymbol(math, bin, "⟑", "\\wedgedot", true);
			defineSymbol(math, bin, "⟇", "\\veedot", true);
			defineSymbol(math, bin, "⩢", "\\doublebarvee", true);
			defineSymbol(math, bin, "⩣", "\\veedoublebar", true);
			defineSymbol(math, bin, "⩟", "\\wedgebar", true);
			defineSymbol(math, bin, "⩠", "\\wedgedoublebar", true);
			defineSymbol(math, bin, "⩔", "\\Vee", true);
			defineSymbol(math, bin, "⩓", "\\Wedge", true);
			defineSymbol(math, bin, "⩃", "\\barcap", true);
			defineSymbol(math, bin, "⩂", "\\barcup", true);
			defineSymbol(math, bin, "⩈", "\\capbarcup", true);
			defineSymbol(math, bin, "⩀", "\\capdot", true);
			defineSymbol(math, bin, "⩇", "\\capovercup", true);
			defineSymbol(math, bin, "⩆", "\\cupovercap", true);
			defineSymbol(math, bin, "⩍", "\\closedvarcap", true);
			defineSymbol(math, bin, "⩌", "\\closedvarcup", true);
			defineSymbol(math, bin, "⨪", "\\minusdot", true);
			defineSymbol(math, bin, "⨫", "\\minusfdots", true);
			defineSymbol(math, bin, "⨬", "\\minusrdots", true);
			defineSymbol(math, bin, "⊻", "\\Xor", true);
			defineSymbol(math, bin, "⊼", "\\Nand", true);
			defineSymbol(math, bin, "⊽", "\\Nor", true);
			defineSymbol(math, bin, "⊽", "\\barvee");
			defineSymbol(math, bin, "⫴", "\\interleave", true);
			defineSymbol(math, bin, "⧢", "\\shuffle", true);
			defineSymbol(math, bin, "⫶", "\\threedotcolon", true);
			defineSymbol(math, bin, "⦂", "\\typecolon", true);
			defineSymbol(math, bin, "∾", "\\invlazys", true);
			defineSymbol(math, bin, "⩋", "\\twocaps", true);
			defineSymbol(math, bin, "⩊", "\\twocups", true);
			defineSymbol(math, bin, "⩎", "\\Sqcap", true);
			defineSymbol(math, bin, "⩏", "\\Sqcup", true);
			defineSymbol(math, bin, "⩖", "\\veeonvee", true);
			defineSymbol(math, bin, "⩕", "\\wedgeonwedge", true);
			defineSymbol(math, bin, "⧗", "\\blackhourglass", true);
			defineSymbol(math, bin, "⧆", "\\boxast", true);
			defineSymbol(math, bin, "⧈", "\\boxbox", true);
			defineSymbol(math, bin, "⧇", "\\boxcircle", true);
			defineSymbol(math, bin, "⊜", "\\circledequal", true);
			defineSymbol(math, bin, "⦷", "\\circledparallel", true);
			defineSymbol(math, bin, "⦶", "\\circledvert", true);
			defineSymbol(math, bin, "⦵", "\\circlehbar", true);
			defineSymbol(math, bin, "⟡", "\\concavediamond", true);
			defineSymbol(math, bin, "⟢", "\\concavediamondtickleft", true);
			defineSymbol(math, bin, "⟣", "\\concavediamondtickright", true);
			defineSymbol(math, bin, "⋄", "\\diamond", true);
			defineSymbol(math, bin, "⧖", "\\hourglass", true);
			defineSymbol(math, bin, "⟠", "\\lozengeminus", true);
			defineSymbol(math, bin, "⌽", "\\obar", true);
			defineSymbol(math, bin, "⦸", "\\obslash", true);
			defineSymbol(math, bin, "⨸", "\\odiv", true);
			defineSymbol(math, bin, "⧁", "\\ogreaterthan", true);
			defineSymbol(math, bin, "⧀", "\\olessthan", true);
			defineSymbol(math, bin, "⦹", "\\operp", true);
			defineSymbol(math, bin, "⨷", "\\Otimes", true);
			defineSymbol(math, bin, "⨶", "\\otimeshat", true);
			defineSymbol(math, bin, "⋆", "\\star", true);
			defineSymbol(math, bin, "△", "\\triangle", true);
			defineSymbol(math, bin, "⨺", "\\triangleminus", true);
			defineSymbol(math, bin, "⨹", "\\triangleplus", true);
			defineSymbol(math, bin, "⨻", "\\triangletimes", true);
			defineSymbol(math, bin, "⟤", "\\whitesquaretickleft", true);
			defineSymbol(math, bin, "⟥", "\\whitesquaretickright", true);
			defineSymbol(math, bin, "⨳", "\\smashtimes", true);
			defineSymbol(math, rel, "⇢", "\\dashrightarrow", true);
			defineSymbol(math, rel, "⇠", "\\dashleftarrow", true);
			defineSymbol(math, rel, "⇇", "\\leftleftarrows", true);
			defineSymbol(math, rel, "⇆", "\\leftrightarrows", true);
			defineSymbol(math, rel, "⇚", "\\Lleftarrow", true);
			defineSymbol(math, rel, "↞", "\\twoheadleftarrow", true);
			defineSymbol(math, rel, "↢", "\\leftarrowtail", true);
			defineSymbol(math, rel, "↫", "\\looparrowleft", true);
			defineSymbol(math, rel, "⇋", "\\leftrightharpoons", true);
			defineSymbol(math, rel, "↶", "\\curvearrowleft", true);
			defineSymbol(math, rel, "↺", "\\circlearrowleft", true);
			defineSymbol(math, rel, "↰", "\\Lsh", true);
			defineSymbol(math, rel, "⇈", "\\upuparrows", true);
			defineSymbol(math, rel, "↿", "\\upharpoonleft", true);
			defineSymbol(math, rel, "⇃", "\\downharpoonleft", true);
			defineSymbol(math, rel, "⊶", "\\origof", true);
			defineSymbol(math, rel, "⊷", "\\imageof", true);
			defineSymbol(math, rel, "⊸", "\\multimap", true);
			defineSymbol(math, rel, "↭", "\\leftrightsquigarrow", true);
			defineSymbol(math, rel, "⇉", "\\rightrightarrows", true);
			defineSymbol(math, rel, "⇄", "\\rightleftarrows", true);
			defineSymbol(math, rel, "↠", "\\twoheadrightarrow", true);
			defineSymbol(math, rel, "↣", "\\rightarrowtail", true);
			defineSymbol(math, rel, "↬", "\\looparrowright", true);
			defineSymbol(math, rel, "↷", "\\curvearrowright", true);
			defineSymbol(math, rel, "↻", "\\circlearrowright", true);
			defineSymbol(math, rel, "↱", "\\Rsh", true);
			defineSymbol(math, rel, "⇊", "\\downdownarrows", true);
			defineSymbol(math, rel, "↾", "\\upharpoonright", true);
			defineSymbol(math, rel, "⇂", "\\downharpoonright", true);
			defineSymbol(math, rel, "⇝", "\\rightsquigarrow", true);
			defineSymbol(math, rel, "⇝", "\\leadsto");
			defineSymbol(math, rel, "⇛", "\\Rrightarrow", true);
			defineSymbol(math, rel, "↾", "\\restriction");
			defineSymbol(math, textord, "‘", "`");
			defineSymbol(math, textord, "$", "\\$");
			defineSymbol(text, textord, "$", "\\$");
			defineSymbol(text, textord, "$", "\\textdollar");
			defineSymbol(math, textord, "¢", "\\cent");
			defineSymbol(text, textord, "¢", "\\cent");
			defineSymbol(math, textord, "%", "\\%");
			defineSymbol(text, textord, "%", "\\%");
			defineSymbol(math, textord, "_", "\\_");
			defineSymbol(text, textord, "_", "\\_");
			defineSymbol(text, textord, "_", "\\textunderscore");
			defineSymbol(text, textord, "␣", "\\textvisiblespace", true);
			defineSymbol(math, textord, "∠", "\\angle", true);
			defineSymbol(math, textord, "∞", "\\infty", true);
			defineSymbol(math, textord, "′", "\\prime");
			defineSymbol(math, textord, "″", "\\dprime");
			defineSymbol(math, textord, "‴", "\\trprime");
			defineSymbol(math, textord, "⁗", "\\qprime");
			defineSymbol(math, textord, "△", "\\triangle");
			defineSymbol(text, textord, "Α", "\\Alpha", true);
			defineSymbol(text, textord, "Β", "\\Beta", true);
			defineSymbol(text, textord, "Γ", "\\Gamma", true);
			defineSymbol(text, textord, "Δ", "\\Delta", true);
			defineSymbol(text, textord, "Ε", "\\Epsilon", true);
			defineSymbol(text, textord, "Ζ", "\\Zeta", true);
			defineSymbol(text, textord, "Η", "\\Eta", true);
			defineSymbol(text, textord, "Θ", "\\Theta", true);
			defineSymbol(text, textord, "Ι", "\\Iota", true);
			defineSymbol(text, textord, "Κ", "\\Kappa", true);
			defineSymbol(text, textord, "Λ", "\\Lambda", true);
			defineSymbol(text, textord, "Μ", "\\Mu", true);
			defineSymbol(text, textord, "Ν", "\\Nu", true);
			defineSymbol(text, textord, "Ξ", "\\Xi", true);
			defineSymbol(text, textord, "Ο", "\\Omicron", true);
			defineSymbol(text, textord, "Π", "\\Pi", true);
			defineSymbol(text, textord, "Ρ", "\\Rho", true);
			defineSymbol(text, textord, "Σ", "\\Sigma", true);
			defineSymbol(text, textord, "Τ", "\\Tau", true);
			defineSymbol(text, textord, "Υ", "\\Upsilon", true);
			defineSymbol(text, textord, "Φ", "\\Phi", true);
			defineSymbol(text, textord, "Χ", "\\Chi", true);
			defineSymbol(text, textord, "Ψ", "\\Psi", true);
			defineSymbol(text, textord, "Ω", "\\Omega", true);
			defineSymbol(math, mathord, "Α", "\\Alpha", true);
			defineSymbol(math, mathord, "Β", "\\Beta", true);
			defineSymbol(math, mathord, "Γ", "\\Gamma", true);
			defineSymbol(math, mathord, "Δ", "\\Delta", true);
			defineSymbol(math, mathord, "Ε", "\\Epsilon", true);
			defineSymbol(math, mathord, "Ζ", "\\Zeta", true);
			defineSymbol(math, mathord, "Η", "\\Eta", true);
			defineSymbol(math, mathord, "Θ", "\\Theta", true);
			defineSymbol(math, mathord, "Ι", "\\Iota", true);
			defineSymbol(math, mathord, "Κ", "\\Kappa", true);
			defineSymbol(math, mathord, "Λ", "\\Lambda", true);
			defineSymbol(math, mathord, "Μ", "\\Mu", true);
			defineSymbol(math, mathord, "Ν", "\\Nu", true);
			defineSymbol(math, mathord, "Ξ", "\\Xi", true);
			defineSymbol(math, mathord, "Ο", "\\Omicron", true);
			defineSymbol(math, mathord, "Π", "\\Pi", true);
			defineSymbol(math, mathord, "Ρ", "\\Rho", true);
			defineSymbol(math, mathord, "Σ", "\\Sigma", true);
			defineSymbol(math, mathord, "Τ", "\\Tau", true);
			defineSymbol(math, mathord, "Υ", "\\Upsilon", true);
			defineSymbol(math, mathord, "Φ", "\\Phi", true);
			defineSymbol(math, mathord, "Χ", "\\Chi", true);
			defineSymbol(math, mathord, "Ψ", "\\Psi", true);
			defineSymbol(math, mathord, "Ω", "\\Omega", true);
			defineSymbol(math, open, "¬", "\\neg", true);
			defineSymbol(math, open, "¬", "\\lnot");
			defineSymbol(math, textord, "⊤", "\\top");
			defineSymbol(math, textord, "⊥", "\\bot");
			defineSymbol(math, textord, "∅", "\\emptyset");
			defineSymbol(math, textord, "⌀", "\\varnothing");
			defineSymbol(math, mathord, "α", "\\alpha", true);
			defineSymbol(math, mathord, "β", "\\beta", true);
			defineSymbol(math, mathord, "γ", "\\gamma", true);
			defineSymbol(math, mathord, "δ", "\\delta", true);
			defineSymbol(math, mathord, "ϵ", "\\epsilon", true);
			defineSymbol(math, mathord, "ζ", "\\zeta", true);
			defineSymbol(math, mathord, "η", "\\eta", true);
			defineSymbol(math, mathord, "θ", "\\theta", true);
			defineSymbol(math, mathord, "ι", "\\iota", true);
			defineSymbol(math, mathord, "κ", "\\kappa", true);
			defineSymbol(math, mathord, "λ", "\\lambda", true);
			defineSymbol(math, mathord, "μ", "\\mu", true);
			defineSymbol(math, mathord, "ν", "\\nu", true);
			defineSymbol(math, mathord, "ξ", "\\xi", true);
			defineSymbol(math, mathord, "ο", "\\omicron", true);
			defineSymbol(math, mathord, "π", "\\pi", true);
			defineSymbol(math, mathord, "ρ", "\\rho", true);
			defineSymbol(math, mathord, "σ", "\\sigma", true);
			defineSymbol(math, mathord, "τ", "\\tau", true);
			defineSymbol(math, mathord, "υ", "\\upsilon", true);
			defineSymbol(math, mathord, "ϕ", "\\phi", true);
			defineSymbol(math, mathord, "χ", "\\chi", true);
			defineSymbol(math, mathord, "ψ", "\\psi", true);
			defineSymbol(math, mathord, "ω", "\\omega", true);
			defineSymbol(math, mathord, "ε", "\\varepsilon", true);
			defineSymbol(math, mathord, "ϑ", "\\vartheta", true);
			defineSymbol(math, mathord, "ϖ", "\\varpi", true);
			defineSymbol(math, mathord, "ϱ", "\\varrho", true);
			defineSymbol(math, mathord, "ς", "\\varsigma", true);
			defineSymbol(math, mathord, "φ", "\\varphi", true);
			defineSymbol(math, mathord, "Ϙ", "\\Coppa", true);
			defineSymbol(math, mathord, "ϙ", "\\coppa", true);
			defineSymbol(math, mathord, "ϙ", "\\varcoppa", true);
			defineSymbol(math, mathord, "Ϟ", "\\Koppa", true);
			defineSymbol(math, mathord, "ϟ", "\\koppa", true);
			defineSymbol(math, mathord, "Ϡ", "\\Sampi", true);
			defineSymbol(math, mathord, "ϡ", "\\sampi", true);
			defineSymbol(math, mathord, "Ϛ", "\\Stigma", true);
			defineSymbol(math, mathord, "ϛ", "\\stigma", true);
			defineSymbol(math, mathord, "⫫", "\\Bot");
			defineSymbol(math, textord, "ð", "\\eth", true);
			defineSymbol(text, textord, "ð", "ð");
			defineSymbol(math, textord, "Å", "\\AA");
			defineSymbol(text, textord, "Å", "\\AA", true);
			defineSymbol(math, textord, "Æ", "\\AE", true);
			defineSymbol(text, textord, "Æ", "\\AE", true);
			defineSymbol(math, textord, "Ð", "\\DH", true);
			defineSymbol(text, textord, "Ð", "\\DH", true);
			defineSymbol(math, textord, "Þ", "\\TH", true);
			defineSymbol(text, textord, "Þ", "\\TH", true);
			defineSymbol(math, textord, "ß", "\\ss", true);
			defineSymbol(text, textord, "ß", "\\ss", true);
			defineSymbol(math, textord, "å", "\\aa");
			defineSymbol(text, textord, "å", "\\aa", true);
			defineSymbol(math, textord, "æ", "\\ae", true);
			defineSymbol(text, textord, "æ", "\\ae", true);
			defineSymbol(math, textord, "ð", "\\dh");
			defineSymbol(text, textord, "ð", "\\dh", true);
			defineSymbol(math, textord, "þ", "\\th", true);
			defineSymbol(text, textord, "þ", "\\th", true);
			defineSymbol(math, textord, "Đ", "\\DJ", true);
			defineSymbol(text, textord, "Đ", "\\DJ", true);
			defineSymbol(math, textord, "đ", "\\dj", true);
			defineSymbol(text, textord, "đ", "\\dj", true);
			defineSymbol(math, textord, "Ł", "\\L", true);
			defineSymbol(text, textord, "Ł", "\\L", true);
			defineSymbol(math, textord, "Ł", "\\l", true);
			defineSymbol(text, textord, "Ł", "\\l", true);
			defineSymbol(math, textord, "Ŋ", "\\NG", true);
			defineSymbol(text, textord, "Ŋ", "\\NG", true);
			defineSymbol(math, textord, "ŋ", "\\ng", true);
			defineSymbol(text, textord, "ŋ", "\\ng", true);
			defineSymbol(math, textord, "Œ", "\\OE", true);
			defineSymbol(text, textord, "Œ", "\\OE", true);
			defineSymbol(math, textord, "œ", "\\oe", true);
			defineSymbol(text, textord, "œ", "\\oe", true);
			defineSymbol(math, bin, "∗", "∗", true);
			defineSymbol(math, bin, "+", "+");
			defineSymbol(math, bin, "∗", "*");
			defineSymbol(math, bin, "⁄", "/", true);
			defineSymbol(math, bin, "⁄", "⁄");
			defineSymbol(math, bin, "−", "-", true);
			defineSymbol(math, bin, "⋅", "\\cdot", true);
			defineSymbol(math, bin, "∘", "\\circ", true);
			defineSymbol(math, bin, "÷", "\\div", true);
			defineSymbol(math, bin, "±", "\\pm", true);
			defineSymbol(math, bin, "×", "\\times", true);
			defineSymbol(math, bin, "∩", "\\cap", true);
			defineSymbol(math, bin, "∪", "\\cup", true);
			defineSymbol(math, bin, "∖", "\\setminus", true);
			defineSymbol(math, bin, "∧", "\\land");
			defineSymbol(math, bin, "∨", "\\lor");
			defineSymbol(math, bin, "∧", "\\wedge", true);
			defineSymbol(math, bin, "∨", "\\vee", true);
			defineSymbol(math, open, "⟦", "\\llbracket", true);
			defineSymbol(math, close, "⟧", "\\rrbracket", true);
			defineSymbol(math, open, "⟨", "\\langle", true);
			defineSymbol(math, open, "⟪", "\\lAngle", true);
			defineSymbol(math, open, "⦉", "\\llangle", true);
			defineSymbol(math, open, "|", "\\lvert");
			defineSymbol(math, open, "‖", "\\lVert", true);
			defineSymbol(math, textord, "!", "\\oc");
			defineSymbol(math, textord, "?", "\\wn");
			defineSymbol(math, textord, "↓", "\\shpos");
			defineSymbol(math, textord, "↕", "\\shift");
			defineSymbol(math, textord, "↑", "\\shneg");
			defineSymbol(math, close, "?", "?");
			defineSymbol(math, close, "!", "!");
			defineSymbol(math, close, "‼", "‼");
			defineSymbol(math, close, "⟩", "\\rangle", true);
			defineSymbol(math, close, "⟫", "\\rAngle", true);
			defineSymbol(math, close, "⦊", "\\rrangle", true);
			defineSymbol(math, close, "|", "\\rvert");
			defineSymbol(math, close, "‖", "\\rVert");
			defineSymbol(math, open, "⦃", "\\lBrace", true);
			defineSymbol(math, close, "⦄", "\\rBrace", true);
			defineSymbol(math, rel, "=", "\\equal", true);
			defineSymbol(math, rel, ":", ":");
			defineSymbol(math, rel, "≈", "\\approx", true);
			defineSymbol(math, rel, "≅", "\\cong", true);
			defineSymbol(math, rel, "≥", "\\ge");
			defineSymbol(math, rel, "≥", "\\geq", true);
			defineSymbol(math, rel, "←", "\\gets");
			defineSymbol(math, rel, ">", "\\gt", true);
			defineSymbol(math, rel, "∈", "\\in", true);
			defineSymbol(math, rel, "∉", "\\notin", true);
			defineSymbol(math, rel, "", "\\@not");
			defineSymbol(math, rel, "⊂", "\\subset", true);
			defineSymbol(math, rel, "⊃", "\\supset", true);
			defineSymbol(math, rel, "⊆", "\\subseteq", true);
			defineSymbol(math, rel, "⊇", "\\supseteq", true);
			defineSymbol(math, rel, "⊈", "\\nsubseteq", true);
			defineSymbol(math, rel, "⊈", "\\nsubseteqq");
			defineSymbol(math, rel, "⊉", "\\nsupseteq", true);
			defineSymbol(math, rel, "⊉", "\\nsupseteqq");
			defineSymbol(math, rel, "⊨", "\\models");
			defineSymbol(math, rel, "←", "\\leftarrow", true);
			defineSymbol(math, rel, "≤", "\\le");
			defineSymbol(math, rel, "≤", "\\leq", true);
			defineSymbol(math, rel, "<", "\\lt", true);
			defineSymbol(math, rel, "→", "\\rightarrow", true);
			defineSymbol(math, rel, "→", "\\to");
			defineSymbol(math, rel, "≱", "\\ngeq", true);
			defineSymbol(math, rel, "≱", "\\ngeqq");
			defineSymbol(math, rel, "≱", "\\ngeqslant");
			defineSymbol(math, rel, "≰", "\\nleq", true);
			defineSymbol(math, rel, "≰", "\\nleqq");
			defineSymbol(math, rel, "≰", "\\nleqslant");
			defineSymbol(math, rel, "⫫", "\\Perp", true);
			defineSymbol(math, spacing, "\xA0", "\\ ");
			defineSymbol(math, spacing, "\xA0", "\\space");
			defineSymbol(math, spacing, "\xA0", "\\nobreakspace");
			defineSymbol(text, spacing, "\xA0", "\\ ");
			defineSymbol(text, spacing, "\xA0", " ");
			defineSymbol(text, spacing, "\xA0", "\\space");
			defineSymbol(text, spacing, "\xA0", "\\nobreakspace");
			defineSymbol(math, spacing, null, "\\nobreak");
			defineSymbol(math, spacing, null, "\\allowbreak");
			defineSymbol(math, punct, ",", ",");
			defineSymbol(text, punct, ":", ":");
			defineSymbol(math, punct, ";", ";");
			defineSymbol(math, bin, "⊼", "\\barwedge");
			defineSymbol(math, bin, "⊻", "\\veebar");
			defineSymbol(math, bin, "⊙", "\\odot", true);
			defineSymbol(math, bin, "⊕︎", "\\oplus");
			defineSymbol(math, bin, "⊗", "\\otimes", true);
			defineSymbol(math, textord, "∂", "\\partial", true);
			defineSymbol(math, bin, "⊘", "\\oslash", true);
			defineSymbol(math, bin, "⊚", "\\circledcirc", true);
			defineSymbol(math, bin, "⊡", "\\boxdot", true);
			defineSymbol(math, bin, "△", "\\bigtriangleup");
			defineSymbol(math, bin, "▽", "\\bigtriangledown");
			defineSymbol(math, bin, "†", "\\dagger");
			defineSymbol(math, bin, "⋄", "\\diamond");
			defineSymbol(math, bin, "◃", "\\triangleleft");
			defineSymbol(math, bin, "▹", "\\triangleright");
			defineSymbol(math, open, "{", "\\{");
			defineSymbol(text, textord, "{", "\\{");
			defineSymbol(text, textord, "{", "\\textbraceleft");
			defineSymbol(math, close, "}", "\\}");
			defineSymbol(text, textord, "}", "\\}");
			defineSymbol(text, textord, "}", "\\textbraceright");
			defineSymbol(math, open, "{", "\\lbrace");
			defineSymbol(math, close, "}", "\\rbrace");
			defineSymbol(math, open, "[", "\\lbrack", true);
			defineSymbol(text, textord, "[", "\\lbrack", true);
			defineSymbol(math, close, "]", "\\rbrack", true);
			defineSymbol(text, textord, "]", "\\rbrack", true);
			defineSymbol(math, open, "(", "\\lparen", true);
			defineSymbol(math, close, ")", "\\rparen", true);
			defineSymbol(math, open, "⦇", "\\llparenthesis", true);
			defineSymbol(math, close, "⦈", "\\rrparenthesis", true);
			defineSymbol(text, textord, "<", "\\textless", true);
			defineSymbol(text, textord, ">", "\\textgreater", true);
			defineSymbol(math, open, "⌊", "\\lfloor", true);
			defineSymbol(math, close, "⌋", "\\rfloor", true);
			defineSymbol(math, open, "⌈", "\\lceil", true);
			defineSymbol(math, close, "⌉", "\\rceil", true);
			defineSymbol(math, textord, "\\", "\\backslash");
			defineSymbol(math, textord, "|", "|");
			defineSymbol(math, textord, "|", "\\vert");
			defineSymbol(text, textord, "|", "\\textbar", true);
			defineSymbol(math, textord, "‖", "\\|");
			defineSymbol(math, textord, "‖", "\\Vert");
			defineSymbol(text, textord, "‖", "\\textbardbl");
			defineSymbol(text, textord, "~", "\\textasciitilde");
			defineSymbol(text, textord, "\\", "\\textbackslash");
			defineSymbol(text, textord, "^", "\\textasciicircum");
			defineSymbol(math, rel, "↑", "\\uparrow", true);
			defineSymbol(math, rel, "⇑", "\\Uparrow", true);
			defineSymbol(math, rel, "↓", "\\downarrow", true);
			defineSymbol(math, rel, "⇓", "\\Downarrow", true);
			defineSymbol(math, rel, "↕", "\\updownarrow", true);
			defineSymbol(math, rel, "⇕", "\\Updownarrow", true);
			defineSymbol(math, op, "∐", "\\coprod");
			defineSymbol(math, op, "⋁", "\\bigvee");
			defineSymbol(math, op, "⋀", "\\bigwedge");
			defineSymbol(math, op, "⨄", "\\biguplus");
			defineSymbol(math, op, "⨄", "\\bigcupplus");
			defineSymbol(math, op, "⨃", "\\bigcupdot");
			defineSymbol(math, op, "⨇", "\\bigdoublevee");
			defineSymbol(math, op, "⨈", "\\bigdoublewedge");
			defineSymbol(math, op, "⋂", "\\bigcap");
			defineSymbol(math, op, "⋃", "\\bigcup");
			defineSymbol(math, op, "∫", "\\int");
			defineSymbol(math, op, "∫", "\\intop");
			defineSymbol(math, op, "∬", "\\iint");
			defineSymbol(math, op, "∭", "\\iiint");
			defineSymbol(math, op, "∏", "\\prod");
			defineSymbol(math, op, "∑", "\\sum");
			defineSymbol(math, op, "⨂", "\\bigotimes");
			defineSymbol(math, op, "⨁", "\\bigoplus");
			defineSymbol(math, op, "⨀", "\\bigodot");
			defineSymbol(math, op, "⨉", "\\bigtimes");
			defineSymbol(math, op, "∮", "\\oint");
			defineSymbol(math, op, "∯", "\\oiint");
			defineSymbol(math, op, "∰", "\\oiiint");
			defineSymbol(math, op, "∱", "\\intclockwise");
			defineSymbol(math, op, "∲", "\\varointclockwise");
			defineSymbol(math, op, "⨌", "\\iiiint");
			defineSymbol(math, op, "⨍", "\\intbar");
			defineSymbol(math, op, "⨎", "\\intBar");
			defineSymbol(math, op, "⨏", "\\fint");
			defineSymbol(math, op, "⨒", "\\rppolint");
			defineSymbol(math, op, "⨓", "\\scpolint");
			defineSymbol(math, op, "⨕", "\\pointint");
			defineSymbol(math, op, "⨖", "\\sqint");
			defineSymbol(math, op, "⨗", "\\intlarhk");
			defineSymbol(math, op, "⨘", "\\intx");
			defineSymbol(math, op, "⨙", "\\intcap");
			defineSymbol(math, op, "⨚", "\\intcup");
			defineSymbol(math, op, "⨅", "\\bigsqcap");
			defineSymbol(math, op, "⨆", "\\bigsqcup");
			defineSymbol(math, op, "∫", "\\smallint");
			defineSymbol(text, inner, "…", "\\textellipsis");
			defineSymbol(math, inner, "…", "\\mathellipsis");
			defineSymbol(text, inner, "…", "\\ldots", true);
			defineSymbol(math, inner, "…", "\\ldots", true);
			defineSymbol(math, inner, "⋰", "\\iddots", true);
			defineSymbol(math, inner, "⋯", "\\@cdots", true);
			defineSymbol(math, inner, "⋱", "\\ddots", true);
			defineSymbol(math, textord, "⋮", "\\varvdots");
			defineSymbol(text, textord, "⋮", "\\varvdots");
			defineSymbol(math, accent, "´", "\\acute");
			defineSymbol(math, accent, "`", "\\grave");
			defineSymbol(math, accent, "¨", "\\ddot");
			defineSymbol(math, accent, "…", "\\dddot");
			defineSymbol(math, accent, "….", "\\ddddot");
			defineSymbol(math, accent, "~", "\\tilde");
			defineSymbol(math, accent, "‾", "\\bar");
			defineSymbol(math, accent, "˘", "\\breve");
			defineSymbol(math, accent, "ˇ", "\\check");
			defineSymbol(math, accent, "ˆ", "\\hat");
			defineSymbol(math, accent, "→", "\\vec");
			defineSymbol(math, accent, "˙", "\\dot");
			defineSymbol(math, accent, "˚", "\\mathring");
			defineSymbol(math, mathord, "ı", "\\imath", true);
			defineSymbol(math, mathord, "ȷ", "\\jmath", true);
			defineSymbol(math, textord, "ı", "ı");
			defineSymbol(math, textord, "ȷ", "ȷ");
			defineSymbol(text, textord, "ı", "\\i", true);
			defineSymbol(text, textord, "ȷ", "\\j", true);
			defineSymbol(text, textord, "ø", "\\o", true);
			defineSymbol(math, mathord, "ø", "\\o", true);
			defineSymbol(text, textord, "Ø", "\\O", true);
			defineSymbol(math, mathord, "Ø", "\\O", true);
			defineSymbol(text, accent, "ˊ", "\\'");
			defineSymbol(text, accent, "ˋ", "\\`");
			defineSymbol(text, accent, "ˆ", "\\^");
			defineSymbol(text, accent, "~", "\\~");
			defineSymbol(text, accent, "ˉ", "\\=");
			defineSymbol(text, accent, "˘", "\\u");
			defineSymbol(text, accent, "˙", "\\.");
			defineSymbol(text, accent, "¸", "\\c");
			defineSymbol(text, accent, "˚", "\\r");
			defineSymbol(text, accent, "ˇ", "\\v");
			defineSymbol(text, accent, "¨", "\\\"");
			defineSymbol(text, accent, "˝", "\\H");
			defineSymbol(math, accent, "ˊ", "\\'");
			defineSymbol(math, accent, "ˋ", "\\`");
			defineSymbol(math, accent, "ˆ", "\\^");
			defineSymbol(math, accent, "~", "\\~");
			defineSymbol(math, accent, "ˉ", "\\=");
			defineSymbol(math, accent, "˘", "\\u");
			defineSymbol(math, accent, "˙", "\\.");
			defineSymbol(math, accent, "¸", "\\c");
			defineSymbol(math, accent, "˚", "\\r");
			defineSymbol(math, accent, "ˇ", "\\v");
			defineSymbol(math, accent, "¨", "\\\"");
			defineSymbol(math, accent, "˝", "\\H");
			ligatures = {
				"--": true,
				"---": true,
				"``": true,
				"''": true
			};
			defineSymbol(text, textord, "–", "--", true);
			defineSymbol(text, textord, "–", "\\textendash");
			defineSymbol(text, textord, "—", "---", true);
			defineSymbol(text, textord, "—", "\\textemdash");
			defineSymbol(text, textord, "‘", "`", true);
			defineSymbol(text, textord, "‘", "\\textquoteleft");
			defineSymbol(text, textord, "’", "'", true);
			defineSymbol(text, textord, "’", "\\textquoteright");
			defineSymbol(text, textord, "“", "``", true);
			defineSymbol(text, textord, "“", "\\textquotedblleft");
			defineSymbol(text, textord, "”", "''", true);
			defineSymbol(text, textord, "”", "\\textquotedblright");
			defineSymbol(math, textord, "°", "\\degree", true);
			defineSymbol(text, textord, "°", "\\degree");
			defineSymbol(text, textord, "°", "\\textdegree", true);
			defineSymbol(math, textord, "£", "\\pounds");
			defineSymbol(math, textord, "£", "\\mathsterling", true);
			defineSymbol(text, textord, "£", "\\pounds");
			defineSymbol(text, textord, "£", "\\textsterling", true);
			defineSymbol(math, textord, "✠", "\\maltese");
			defineSymbol(text, textord, "✠", "\\maltese");
			defineSymbol(math, textord, "€", "\\euro", true);
			defineSymbol(text, textord, "€", "\\euro", true);
			defineSymbol(text, textord, "€", "\\texteuro");
			defineSymbol(math, textord, "©", "\\copyright", true);
			defineSymbol(text, textord, "©", "\\textcopyright");
			defineSymbol(math, textord, "⌀", "\\diameter", true);
			defineSymbol(text, textord, "⌀", "\\diameter");
			defineSymbol(math, textord, "𝛤", "\\varGamma");
			defineSymbol(math, textord, "𝛥", "\\varDelta");
			defineSymbol(math, textord, "𝛩", "\\varTheta");
			defineSymbol(math, textord, "𝛬", "\\varLambda");
			defineSymbol(math, textord, "𝛯", "\\varXi");
			defineSymbol(math, textord, "𝛱", "\\varPi");
			defineSymbol(math, textord, "𝛴", "\\varSigma");
			defineSymbol(math, textord, "𝛶", "\\varUpsilon");
			defineSymbol(math, textord, "𝛷", "\\varPhi");
			defineSymbol(math, textord, "𝛹", "\\varPsi");
			defineSymbol(math, textord, "𝛺", "\\varOmega");
			defineSymbol(text, textord, "𝛤", "\\varGamma");
			defineSymbol(text, textord, "𝛥", "\\varDelta");
			defineSymbol(text, textord, "𝛩", "\\varTheta");
			defineSymbol(text, textord, "𝛬", "\\varLambda");
			defineSymbol(text, textord, "𝛯", "\\varXi");
			defineSymbol(text, textord, "𝛱", "\\varPi");
			defineSymbol(text, textord, "𝛴", "\\varSigma");
			defineSymbol(text, textord, "𝛶", "\\varUpsilon");
			defineSymbol(text, textord, "𝛷", "\\varPhi");
			defineSymbol(text, textord, "𝛹", "\\varPsi");
			defineSymbol(text, textord, "𝛺", "\\varOmega");
			mathTextSymbols = "0123456789/@.\"";
			for (let i = 0; i < 14; i++) {
				const ch = mathTextSymbols.charAt(i);
				defineSymbol(math, textord, ch, ch);
			}
			textSymbols = "0123456789!@*()-=+\";:?/.,";
			for (let i = 0; i < 25; i++) {
				const ch = textSymbols.charAt(i);
				defineSymbol(text, textord, ch, ch);
			}
			letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			for (let i = 0; i < 52; i++) {
				const ch = letters.charAt(i);
				defineSymbol(math, mathord, ch, ch);
				defineSymbol(text, textord, ch, ch);
			}
			narrow = "ÇÐÞçþℂℍℕℙℚℝℤℎℏℊℋℌℐℑℒℓ℘ℛℜℬℰℱℳℭℨ";
			for (let i = 0; i < 30; i++) {
				const ch = narrow.charAt(i);
				defineSymbol(math, mathord, ch, ch);
				defineSymbol(text, textord, ch, ch);
			}
			wideChar = "";
			for (let i = 0; i < 52; i++) {
				wideChar = String.fromCharCode(55349, 56320 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
				wideChar = String.fromCharCode(55349, 56372 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
				wideChar = String.fromCharCode(55349, 56424 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
				wideChar = String.fromCharCode(55349, 56580 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
				wideChar = String.fromCharCode(55349, 56736 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
				wideChar = String.fromCharCode(55349, 56788 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
				wideChar = String.fromCharCode(55349, 56840 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
				wideChar = String.fromCharCode(55349, 56944 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
				wideChar = String.fromCharCode(55349, 56632 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
				const ch = letters.charAt(i);
				wideChar = String.fromCharCode(55349, 56476 + i);
				defineSymbol(math, mathord, ch, wideChar);
				defineSymbol(text, textord, ch, wideChar);
			}
			for (let i = 0; i < 10; i++) {
				wideChar = String.fromCharCode(55349, 57294 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
				wideChar = String.fromCharCode(55349, 57314 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
				wideChar = String.fromCharCode(55349, 57324 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
				wideChar = String.fromCharCode(55349, 57334 + i);
				defineSymbol(math, mathord, wideChar, wideChar);
				defineSymbol(text, textord, wideChar, wideChar);
			}
			makeText = function(text, mode, style) {
				if (symbols[mode][text] && symbols[mode][text].replace && text.charCodeAt(0) !== 55349 && !(Object.prototype.hasOwnProperty.call(ligatures, text) && style && (style.fontFamily && style.fontFamily.slice(4, 6) === "tt" || style.font && style.font.slice(4, 6) === "tt"))) text = symbols[mode][text].replace;
				return new TextNode(text);
			};
			copyChar = (newRow, child) => {
				if (newRow.children.length === 0 || newRow.children[newRow.children.length - 1].type !== "mtext") {
					const mtext = new MathNode("mtext", [new TextNode(child.children[0].text)]);
					newRow.children.push(mtext);
				} else newRow.children[newRow.children.length - 1].children[0].text += child.children[0].text;
			};
			consolidateText = (mrow) => {
				if (mrow.type !== "mrow" && mrow.type !== "mstyle") return mrow;
				if (mrow.children.length === 0) return mrow;
				const newRow = new MathNode("mrow");
				for (let i = 0; i < mrow.children.length; i++) {
					const child = mrow.children[i];
					if (child.type === "mtext" && Object.keys(child.attributes).length === 0) copyChar(newRow, child);
					else if (child.type === "mrow") {
						let canConsolidate = true;
						for (let j = 0; j < child.children.length; j++) if (child.children[j].type !== "mtext" || Object.keys(child.attributes).length !== 0) {
							canConsolidate = false;
							break;
						}
						if (canConsolidate) for (let j = 0; j < child.children.length; j++) {
							const grandChild = child.children[j];
							copyChar(newRow, grandChild);
						}
						else newRow.children.push(child);
					} else newRow.children.push(child);
				}
				for (let i = 0; i < newRow.children.length; i++) if (newRow.children[i].type === "mtext") {
					const mtext = newRow.children[i];
					if (mtext.children[0].text.charAt(0) === " ") mtext.children[0].text = "\xA0" + mtext.children[0].text.slice(1);
					const L = mtext.children[0].text.length;
					if (L > 0 && mtext.children[0].text.charAt(L - 1) === " ") mtext.children[0].text = mtext.children[0].text.slice(0, -1) + "\xA0";
					for (const [key, value] of Object.entries(mrow.attributes)) mtext.attributes[key] = value;
				}
				if (newRow.children.length === 1 && newRow.children[0].type === "mtext") return newRow.children[0];
				else return newRow;
			};
			makeRow = function(body, semisimple = false) {
				if (body.length === 1 && !(body[0] instanceof DocumentFragment)) return body[0];
				else if (!semisimple) {
					if (body[0] instanceof MathNode && body[0].type === "mo" && !body[0].attributes.fence) {
						body[0].attributes.lspace = "0em";
						body[0].attributes.rspace = "0em";
					}
					const end = body.length - 1;
					if (body[end] instanceof MathNode && body[end].type === "mo" && !body[end].attributes.fence) {
						body[end].attributes.lspace = "0em";
						body[end].attributes.rspace = "0em";
					}
				}
				return new MathNode("mrow", body);
			};
			isComma = (expression, i) => {
				const node = expression[i];
				const followingNode = expression[i + 1];
				return node.type === "atom" && node.text === "," && node.loc && followingNode.loc && node.loc.end === followingNode.loc.start;
			};
			isRel = (item) => {
				return item.type === "atom" && item.family === "rel" || item.type === "mclass" && item.mclass === "mrel";
			};
			buildExpression = function(expression, style, semisimple = false) {
				if (!semisimple && expression.length === 1) {
					const group = buildGroup$1(expression[0], style);
					if (group instanceof MathNode && group.type === "mo") {
						group.setAttribute("lspace", "0em");
						group.setAttribute("rspace", "0em");
					}
					return [group];
				}
				const groups = [];
				const groupArray = [];
				let lastGroup;
				for (let i = 0; i < expression.length; i++) groupArray.push(buildGroup$1(expression[i], style));
				for (let i = 0; i < groupArray.length; i++) {
					const group = groupArray[i];
					if (i < expression.length - 1 && isRel(expression[i]) && isRel(expression[i + 1])) group.setAttribute("rspace", "0em");
					if (i > 0 && isRel(expression[i]) && isRel(expression[i - 1])) group.setAttribute("lspace", "0em");
					if (group.type === "mn" && lastGroup && lastGroup.type === "mn") {
						lastGroup.children.push(...group.children);
						continue;
					} else if (isNumberPunctuation(group) && lastGroup && lastGroup.type === "mn") {
						lastGroup.children.push(...group.children);
						continue;
					} else if (lastGroup && lastGroup.type === "mn" && i < groupArray.length - 1 && groupArray[i + 1].type === "mn" && isComma(expression, i)) {
						lastGroup.children.push(...group.children);
						continue;
					} else if (group.type === "mn" && isNumberPunctuation(lastGroup)) {
						group.children = [...lastGroup.children, ...group.children];
						groups.pop();
					} else if ((group.type === "msup" || group.type === "msub") && group.children.length >= 1 && lastGroup && (lastGroup.type === "mn" || isNumberPunctuation(lastGroup))) {
						const base = group.children[0];
						if (base instanceof MathNode && base.type === "mn" && lastGroup) {
							base.children = [...lastGroup.children, ...base.children];
							groups.pop();
						}
					}
					groups.push(group);
					lastGroup = group;
				}
				return groups;
			};
			buildExpressionRow = function(expression, style, semisimple = false) {
				return makeRow(buildExpression(expression, style, semisimple), semisimple);
			};
			buildGroup$1 = function(group, style) {
				if (!group) return new MathNode("mrow");
				if (_mathmlGroupBuilders[group.type]) return _mathmlGroupBuilders[group.type](group, style);
				else throw new ParseError("Got group of unknown type: '" + group.type + "'");
			};
			glue$1 = (_) => {
				return new MathNode("mtd", [], [], {
					padding: "0",
					width: "50%"
				});
			};
			labelContainers = [
				"mrow",
				"mtd",
				"mtable",
				"mtr"
			];
			getLabel = (parent) => {
				for (const node of parent.children) if (node.type && labelContainers.includes(node.type)) {
					if (node.classes && node.classes[0] === "tml-label") return node.label;
					else {
						const label = getLabel(node);
						if (label) return label;
					}
				} else if (!node.type) {
					const label = getLabel(node);
					if (label) return label;
				}
			};
			taggedExpression = (expression, tag, style, leqno) => {
				tag = buildExpressionRow(tag[0].body, style);
				tag = consolidateText(tag);
				tag.classes.push("tml-tag");
				const label = getLabel(expression);
				expression = new MathNode("mtd", [expression]);
				const rowArray = [
					glue$1(),
					expression,
					glue$1()
				];
				rowArray[leqno ? 0 : 2].children.push(tag);
				const mtr = new MathNode("mtr", rowArray, ["tml-tageqn"]);
				if (label) mtr.setAttribute("id", label);
				const table = new MathNode("mtable", [mtr]);
				table.style.width = "100%";
				table.setAttribute("displaystyle", "true");
				return table;
			};
			smallNudge = "DHKLUcegorsuvxyzΠΥΨαδηιμνοτυχϵ";
			mediumNudge = "BCEGIMNOPQRSTXZlpqtwΓΘΞΣΦΩβεζθξρςφψϑϕϱ";
			largeNudge = "AFJdfΔΛ";
			mathmlBuilder$a = (group, style) => {
				const accentNode$1 = group.isStretchy ? accentNode(group) : new MathNode("mo", [makeText(group.label, group.mode)]);
				if (!group.isStretchy) accentNode$1.setAttribute("stretchy", "false");
				if (group.label !== "\\vec") accentNode$1.style.mathDepth = "0";
				const tag = group.label === "\\c" ? "munder" : "mover";
				const needsWbkVertShift = needsWebkitVerticalShift.has(group.label);
				if (tag === "mover" && group.mode === "math" && !group.isStretchy && group.base.text && group.base.text.length === 1) {
					const text = group.base.text;
					const isVec = group.label === "\\vec";
					const vecPostfix = isVec === "\\vec" ? "-vec" : "";
					if (isVec) accentNode$1.classes.push("tml-vec");
					const wbkPostfix = isVec ? "-vec" : needsWbkVertShift ? "-acc" : "";
					if (smallNudge.indexOf(text) > -1) {
						accentNode$1.classes.push(`chr-sml${vecPostfix}`);
						accentNode$1.classes.push(`wbk-sml${wbkPostfix}`);
					} else if (mediumNudge.indexOf(text) > -1) {
						accentNode$1.classes.push(`chr-med${vecPostfix}`);
						accentNode$1.classes.push(`wbk-med${wbkPostfix}`);
					} else if (largeNudge.indexOf(text) > -1) {
						accentNode$1.classes.push(`chr-lrg${vecPostfix}`);
						accentNode$1.classes.push(`wbk-lrg${wbkPostfix}`);
					} else if (isVec) accentNode$1.classes.push(`wbk-vec`);
					else if (needsWbkVertShift) accentNode$1.classes.push(`wbk-acc`);
				} else if (needsWbkVertShift) accentNode$1.classes.push("wbk-acc");
				return new MathNode(tag, [buildGroup$1(group.base, style), accentNode$1]);
			};
			nonStretchyAccents = /* @__PURE__ */ new Set([
				"\\acute",
				"\\check",
				"\\grave",
				"\\ddot",
				"\\dddot",
				"\\ddddot",
				"\\tilde",
				"\\bar",
				"\\breve",
				"\\check",
				"\\hat",
				"\\vec",
				"\\dot",
				"\\mathring"
			]);
			needsWebkitVerticalShift = /* @__PURE__ */ new Set([
				"\\acute",
				"\\bar",
				"\\breve",
				"\\check",
				"\\dot",
				"\\ddot",
				"\\grave",
				"\\hat",
				"\\mathring",
				"\\`",
				"\\'",
				"\\^",
				"\\=",
				"\\u",
				"\\.",
				"\\\"",
				"\\r",
				"\\H",
				"\\v"
			]);
			combiningChar = {
				"\\`": "̀",
				"\\'": "́",
				"\\^": "̂",
				"\\~": "̃",
				"\\=": "̄",
				"\\u": "̆",
				"\\.": "̇",
				"\\\"": "̈",
				"\\r": "̊",
				"\\H": "̋",
				"\\v": "̌",
				"\\c": "̧"
			};
			defineFunction({
				type: "accent",
				names: [
					"\\acute",
					"\\grave",
					"\\ddot",
					"\\dddot",
					"\\ddddot",
					"\\tilde",
					"\\bar",
					"\\breve",
					"\\check",
					"\\hat",
					"\\vec",
					"\\dot",
					"\\mathring",
					"\\overparen",
					"\\widecheck",
					"\\widehat",
					"\\wideparen",
					"\\widetilde",
					"\\overrightarrow",
					"\\overleftarrow",
					"\\Overrightarrow",
					"\\overleftrightarrow",
					"\\overgroup",
					"\\overleftharpoon",
					"\\overrightharpoon"
				],
				props: { numArgs: 1 },
				handler: (context, args) => {
					const base = normalizeArgument(args[0]);
					const isStretchy = !nonStretchyAccents.has(context.funcName);
					return {
						type: "accent",
						mode: context.parser.mode,
						label: context.funcName,
						isStretchy,
						base
					};
				},
				mathmlBuilder: mathmlBuilder$a
			});
			defineFunction({
				type: "accent",
				names: [
					"\\'",
					"\\`",
					"\\^",
					"\\~",
					"\\=",
					"\\c",
					"\\u",
					"\\.",
					"\\\"",
					"\\r",
					"\\H",
					"\\v"
				],
				props: {
					numArgs: 1,
					allowedInText: true,
					allowedInMath: true,
					argTypes: ["primitive"]
				},
				handler: (context, args) => {
					const base = normalizeArgument(args[0]);
					const mode = context.parser.mode;
					if (mode === "math" && context.parser.settings.strict) console.log(`Temml parse error: Command ${context.funcName} is invalid in math mode.`);
					if (mode === "text" && base.text && base.text.length === 1 && context.funcName in combiningChar && smalls.indexOf(base.text) > -1) return {
						type: "textord",
						mode: "text",
						text: base.text + combiningChar[context.funcName]
					};
					else if (context.funcName === "\\c" && mode === "text" && base.text && base.text.length === 1) return {
						type: "textord",
						mode: "text",
						text: base.text + "̧"
					};
					else return {
						type: "accent",
						mode,
						label: context.funcName,
						isStretchy: false,
						base
					};
				},
				mathmlBuilder: mathmlBuilder$a
			});
			defineFunction({
				type: "accentUnder",
				names: [
					"\\underleftarrow",
					"\\underrightarrow",
					"\\underleftrightarrow",
					"\\undergroup",
					"\\underparen",
					"\\utilde"
				],
				props: { numArgs: 1 },
				handler: ({ parser, funcName }, args) => {
					const base = args[0];
					return {
						type: "accentUnder",
						mode: parser.mode,
						label: funcName,
						base
					};
				},
				mathmlBuilder: (group, style) => {
					const accentNode$1 = accentNode(group);
					accentNode$1.style["math-depth"] = 0;
					return new MathNode("munder", [buildGroup$1(group.base, style), accentNode$1]);
				}
			});
			ptPerUnit = {
				pt: 800 / 803,
				pc: 9600 / 803,
				dd: 1238 / 1157 * 800 / 803,
				cc: 14856 / 1157 * 800 / 803,
				nd: 685 / 642 * 800 / 803,
				nc: 1370 / 107 * 800 / 803,
				sp: 1 / 65536 * 800 / 803,
				mm: 25.4 / 72,
				cm: 2.54 / 72,
				in: 1 / 72,
				px: 96 / 72
			};
			validUnits = [
				"em",
				"ex",
				"mu",
				"pt",
				"mm",
				"cm",
				"in",
				"px",
				"bp",
				"pc",
				"dd",
				"cc",
				"nd",
				"nc",
				"sp"
			];
			validUnit = function(unit) {
				if (typeof unit !== "string") unit = unit.unit;
				return validUnits.indexOf(unit) > -1;
			};
			emScale = (styleLevel) => {
				return [
					1,
					.7,
					.5
				][Math.max(styleLevel - 1, 0)];
			};
			calculateSize = function(sizeValue, style) {
				let number = sizeValue.number;
				if (style.maxSize[0] < 0 && number > 0) return {
					number: 0,
					unit: "em"
				};
				const unit = sizeValue.unit;
				switch (unit) {
					case "mm":
					case "cm":
					case "in":
					case "px":
						if (number * ptPerUnit[unit] > style.maxSize[1]) return {
							number: style.maxSize[1],
							unit: "pt"
						};
						return {
							number,
							unit
						};
					case "em":
					case "ex":
						if (unit === "ex") number *= .431;
						number = Math.min(number / emScale(style.level), style.maxSize[0]);
						return {
							number: round(number),
							unit: "em"
						};
					case "bp":
						if (number > style.maxSize[1]) number = style.maxSize[1];
						return {
							number,
							unit: "pt"
						};
					case "pt":
					case "pc":
					case "dd":
					case "cc":
					case "nd":
					case "nc":
					case "sp":
						number = Math.min(number * ptPerUnit[unit], style.maxSize[1]);
						return {
							number: round(number),
							unit: "pt"
						};
					case "mu":
						number = Math.min(number / 18, style.maxSize[0]);
						return {
							number: round(number),
							unit: "em"
						};
					default: throw new ParseError("Invalid unit: '" + unit + "'");
				}
			};
			padding = (width) => {
				const node = new MathNode("mspace");
				node.setAttribute("width", width + "em");
				return node;
			};
			paddedNode = (group, lspace = .3, rspace = 0, mustSmash = false) => {
				if (group == null && rspace === 0) return padding(lspace);
				const row = group ? [group] : [];
				if (lspace !== 0) row.unshift(padding(lspace));
				if (rspace > 0) row.push(padding(rspace));
				if (mustSmash) {
					const mpadded = new MathNode("mpadded", row);
					mpadded.setAttribute("height", "0.1px");
					return mpadded;
				} else return new MathNode("mrow", row);
			};
			labelSize = (size, scriptLevel) => Number(size) / emScale(scriptLevel);
			munderoverNode = (fName, body, below, style) => {
				const arrowNode = mathMLnode(fName);
				const isEq = fName.slice(1, 3) === "eq";
				const minWidth = fName.charAt(1) === "x" ? "1.75" : fName.slice(2, 4) === "cd" ? "3.0" : isEq ? "1.0" : "2.0";
				arrowNode.setAttribute("lspace", "0");
				arrowNode.setAttribute("rspace", isEq ? "0.5em" : "0");
				const labelStyle = style.withLevel(style.level < 2 ? 2 : 3);
				const minArrowWidth = labelSize(minWidth, labelStyle.level);
				const dummyWidth = labelSize(minWidth, 3);
				const emptyLabel = paddedNode(null, minArrowWidth.toFixed(4), 0);
				const dummyNode = paddedNode(null, dummyWidth.toFixed(4), 0);
				const space = labelSize(isEq ? 0 : .3, labelStyle.level).toFixed(4);
				let upperNode;
				let lowerNode;
				const gotUpper = body && body.body && (body.body.body || body.body.length > 0);
				if (gotUpper) {
					let label = buildGroup$1(body, labelStyle);
					label = paddedNode(label, space, space, fName === "\\\\cdrightarrow" || fName === "\\\\cdleftarrow");
					upperNode = new MathNode("mover", [label, dummyNode]);
				}
				const gotLower = below && below.body && (below.body.body || below.body.length > 0);
				if (gotLower) {
					let label = buildGroup$1(below, labelStyle);
					label = paddedNode(label, space, space);
					lowerNode = new MathNode("munder", [label, dummyNode]);
				}
				let node;
				if (!gotUpper && !gotLower) node = new MathNode("mover", [arrowNode, emptyLabel]);
				else if (gotUpper && gotLower) node = new MathNode("munderover", [
					arrowNode,
					lowerNode,
					upperNode
				]);
				else if (gotUpper) node = new MathNode("mover", [arrowNode, upperNode]);
				else node = new MathNode("munder", [arrowNode, lowerNode]);
				if (minWidth === "3.0") node.style.height = "1em";
				node.setAttribute("accent", "false");
				return node;
			};
			defineFunction({
				type: "xArrow",
				names: [
					"\\xleftarrow",
					"\\xrightarrow",
					"\\xLeftarrow",
					"\\xRightarrow",
					"\\xleftrightarrow",
					"\\xLeftrightarrow",
					"\\xhookleftarrow",
					"\\xhookrightarrow",
					"\\xmapsto",
					"\\xrightharpoondown",
					"\\xrightharpoonup",
					"\\xleftharpoondown",
					"\\xleftharpoonup",
					"\\xlongequal",
					"\\xtwoheadrightarrow",
					"\\xtwoheadleftarrow",
					"\\xtofrom",
					"\\xleftrightharpoons",
					"\\xrightleftharpoons",
					"\\yields",
					"\\yieldsLeft",
					"\\mesomerism",
					"\\longrightharpoonup",
					"\\longleftharpoondown",
					"\\yieldsLeftRight",
					"\\chemequilibrium",
					"\\\\cdrightarrow",
					"\\\\cdleftarrow",
					"\\\\cdlongequal"
				],
				props: {
					numArgs: 1,
					numOptionalArgs: 1
				},
				handler({ parser, funcName }, args, optArgs) {
					return {
						type: "xArrow",
						mode: parser.mode,
						name: funcName,
						body: args[0],
						below: optArgs[0]
					};
				},
				mathmlBuilder(group, style) {
					const row = [munderoverNode(group.name, group.body, group.below, style)];
					row.unshift(padding(.2778));
					row.push(padding(.2778));
					return new MathNode("mrow", row);
				}
			});
			arrowComponent = {
				"\\equilibriumRight": ["\\longrightharpoonup", "\\eqleftharpoondown"],
				"\\equilibriumLeft": ["\\eqrightharpoonup", "\\longleftharpoondown"]
			};
			defineFunction({
				type: "stackedArrow",
				names: ["\\equilibriumRight", "\\equilibriumLeft"],
				props: {
					numArgs: 1,
					numOptionalArgs: 1
				},
				handler({ parser, funcName }, args, optArgs) {
					const lowerArrowBody = args[0] ? {
						type: "hphantom",
						mode: parser.mode,
						body: args[0]
					} : null;
					const upperArrowBelow = optArgs[0] ? {
						type: "hphantom",
						mode: parser.mode,
						body: optArgs[0]
					} : null;
					return {
						type: "stackedArrow",
						mode: parser.mode,
						name: funcName,
						body: args[0],
						upperArrowBelow,
						lowerArrowBody,
						below: optArgs[0]
					};
				},
				mathmlBuilder(group, style) {
					const topLabel = arrowComponent[group.name][0];
					const botLabel = arrowComponent[group.name][1];
					const topArrow = munderoverNode(topLabel, group.body, group.upperArrowBelow, style);
					const botArrow = munderoverNode(botLabel, group.lowerArrowBody, group.below, style);
					let wrapper;
					const raiseNode = new MathNode("mpadded", [topArrow]);
					raiseNode.setAttribute("voffset", "0.3em");
					raiseNode.setAttribute("height", "+0.3em");
					raiseNode.setAttribute("depth", "-0.3em");
					if (group.name === "\\equilibriumLeft") {
						const botNode = new MathNode("mpadded", [botArrow]);
						botNode.setAttribute("width", "0.5em");
						wrapper = new MathNode("mpadded", [
							padding(.2778),
							botNode,
							raiseNode,
							padding(.2778)
						]);
					} else {
						raiseNode.setAttribute("width", group.name === "\\equilibriumRight" ? "0.5em" : "0");
						wrapper = new MathNode("mpadded", [
							padding(.2778),
							raiseNode,
							botArrow,
							padding(.2778)
						]);
					}
					wrapper.setAttribute("voffset", "-0.18em");
					wrapper.setAttribute("height", "-0.18em");
					wrapper.setAttribute("depth", "+0.18em");
					return wrapper;
				}
			});
			_environments = {};
			cdArrowFunctionName = {
				">": "\\\\cdrightarrow",
				"<": "\\\\cdleftarrow",
				"=": "\\\\cdlongequal",
				A: "\\uparrow",
				V: "\\downarrow",
				"|": "\\Vert",
				".": "no arrow"
			};
			newCell = () => {
				return {
					type: "styling",
					body: [],
					mode: "math",
					scriptLevel: "display"
				};
			};
			isStartOfArrow = (node) => {
				return node.type === "textord" && node.text === "@";
			};
			isLabelEnd = (node, endChar) => {
				return (node.type === "mathord" || node.type === "atom") && node.text === endChar;
			};
			defineFunction({
				type: "cdlabel",
				names: ["\\\\cdleft", "\\\\cdright"],
				props: { numArgs: 1 },
				handler({ parser, funcName }, args) {
					return {
						type: "cdlabel",
						mode: parser.mode,
						side: funcName.slice(4),
						label: args[0]
					};
				},
				mathmlBuilder(group, style) {
					if (group.label.body.length === 0) return new MathNode("mrow", style);
					const mrow = buildGroup$1(group.label, style);
					if (group.side === "left") mrow.classes.push("tml-shift-left");
					const mtd = new MathNode("mtd", [mrow]);
					mtd.style.padding = "0";
					const mtr = new MathNode("mtr", [mtd]);
					const mtable = new MathNode("mtable", [mtr]);
					const label = new MathNode("mpadded", [mtable]);
					label.setAttribute("width", "0.1px");
					label.setAttribute("displaystyle", "false");
					label.setAttribute("scriptlevel", "1");
					return label;
				}
			});
			defineFunction({
				type: "cdlabelparent",
				names: ["\\\\cdparent"],
				props: { numArgs: 1 },
				handler({ parser }, args) {
					return {
						type: "cdlabelparent",
						mode: parser.mode,
						fragment: args[0]
					};
				},
				mathmlBuilder(group, style) {
					return new MathNode("mrow", [buildGroup$1(group.fragment, style)]);
				}
			});
			ordGroup = (body) => {
				return {
					"type": "ordgroup",
					"mode": "math",
					"body": body,
					"semisimple": true
				};
			};
			phantom = (body, type) => {
				return {
					"type": type,
					"mode": "math",
					"body": ordGroup(body)
				};
			};
			bordermatrixParseTree = (matrix, delimiters) => {
				const body = matrix.body;
				body[0].shift();
				const leftColumnBody = new Array(body.length - 1).fill().map(() => []);
				for (let i = 1; i < body.length; i++) {
					leftColumnBody[i - 1].push(body[i].shift());
					const phantomBody = [];
					for (let j = 0; j < body[i].length; j++) phantomBody.push(body[i][j]);
					leftColumnBody[i - 1].push(phantom(phantomBody, "vphantom"));
				}
				const topRowBody = new Array(body.length).fill().map(() => []);
				for (let j = 0; j < body[0].length; j++) topRowBody[0].push(body[0][j]);
				for (let i = 1; i < body.length; i++) for (let j = 0; j < body[0].length; j++) topRowBody[i].push(phantom(body[i][j].body, "hphantom"));
				for (let j = 0; j < body[0].length; j++) body[0][j] = phantom(body[0][j].body, "hphantom");
				const leftColumn = {
					type: "array",
					mode: "math",
					body: leftColumnBody,
					cols: [{
						type: "align",
						align: "c"
					}],
					rowGaps: new Array(leftColumnBody.length - 1).fill(null),
					hLinesBeforeRow: new Array(leftColumnBody.length + 1).fill().map(() => []),
					envClasses: [],
					scriptLevel: "text",
					arraystretch: 1,
					labels: new Array(leftColumnBody.length).fill(""),
					arraycolsep: {
						"number": .04,
						unit: "em"
					}
				};
				const topWrapper = {
					type: "styling",
					mode: "math",
					scriptLevel: "text",
					body: [{
						type: "array",
						mode: "math",
						body: topRowBody,
						cols: new Array(topRowBody.length).fill({
							type: "align",
							align: "c"
						}),
						rowGaps: new Array(topRowBody.length - 1).fill(null),
						hLinesBeforeRow: new Array(topRowBody.length + 1).fill().map(() => []),
						envClasses: [],
						scriptLevel: "text",
						arraystretch: 1,
						labels: new Array(topRowBody.length).fill(""),
						arraycolsep: null
					}]
				};
				const mover = {
					type: "supsub",
					mode: "math",
					stack: true,
					base: {
						type: "op",
						mode: "math",
						limits: true,
						alwaysHandleSupSub: true,
						parentIsSupSub: true,
						symbol: false,
						suppressBaseShift: true,
						body: [{
							type: "leftright",
							mode: "math",
							body: [matrix],
							left: delimiters ? delimiters[0] : "(",
							right: delimiters ? delimiters[1] : ")",
							rightColor: void 0
						}]
					},
					sup: topWrapper,
					sub: null
				};
				return ordGroup([leftColumn, mover]);
			};
			SourceLocation = class SourceLocation {
				constructor(lexer, start, end) {
					this.lexer = lexer;
					this.start = start;
					this.end = end;
				}
				/**
				* Merges two `SourceLocation`s from location providers, given they are
				* provided in order of appearance.
				* - Returns the first one's location if only the first is provided.
				* - Returns a merged range of the first and the last if both are provided
				*   and their lexers match.
				* - Otherwise, returns null.
				*/
				static range(first, second) {
					if (!second) return first && first.loc;
					else if (!first || !first.loc || !second.loc || first.loc.lexer !== second.loc.lexer) return null;
					else return new SourceLocation(first.loc.lexer, first.loc.start, second.loc.end);
				}
			};
			Token = class Token {
				constructor(text, loc) {
					this.text = text;
					this.loc = loc;
				}
				/**
				* Given a pair of tokens (this and endToken), compute a `Token` encompassing
				* the whole input range enclosed by these two.
				*/
				range(endToken, text) {
					return new Token(text, SourceLocation.range(this, endToken));
				}
			};
			StyleLevel = {
				DISPLAY: 0,
				TEXT: 1,
				SCRIPT: 2,
				SCRIPTSCRIPT: 3
			};
			_macros = {};
			macros = _macros;
			defineMacro("\\noexpand", function(context) {
				const t = context.popToken();
				if (context.isExpandable(t.text)) {
					t.noexpand = true;
					t.treatAsRelax = true;
				}
				return {
					tokens: [t],
					numArgs: 0
				};
			});
			defineMacro("\\expandafter", function(context) {
				const t = context.popToken();
				context.expandOnce(true);
				return {
					tokens: [t],
					numArgs: 0
				};
			});
			defineMacro("\\@firstoftwo", function(context) {
				return {
					tokens: context.consumeArgs(2)[0],
					numArgs: 0
				};
			});
			defineMacro("\\@secondoftwo", function(context) {
				return {
					tokens: context.consumeArgs(2)[1],
					numArgs: 0
				};
			});
			defineMacro("\\@ifnextchar", function(context) {
				const args = context.consumeArgs(3);
				context.consumeSpaces();
				const nextToken = context.future();
				if (args[0].length === 1 && args[0][0].text === nextToken.text) return {
					tokens: args[1],
					numArgs: 0
				};
				else return {
					tokens: args[2],
					numArgs: 0
				};
			});
			defineMacro("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
			defineMacro("\\TextOrMath", function(context) {
				const args = context.consumeArgs(2);
				if (context.mode === "text") return {
					tokens: args[0],
					numArgs: 0
				};
				else return {
					tokens: args[1],
					numArgs: 0
				};
			});
			stringFromArg = (arg) => {
				let str = "";
				for (let i = arg.length - 1; i > -1; i--) str += arg[i].text;
				return str;
			};
			digitToNumber = {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				6: 6,
				7: 7,
				8: 8,
				9: 9,
				a: 10,
				A: 10,
				b: 11,
				B: 11,
				c: 12,
				C: 12,
				d: 13,
				D: 13,
				e: 14,
				E: 14,
				f: 15,
				F: 15
			};
			nextCharNumber = (context) => {
				const numStr = context.future().text;
				if (numStr === "EOF") return [null, ""];
				return [digitToNumber[numStr.charAt(0)], numStr];
			};
			appendCharNumbers = (number, numStr, base) => {
				for (let i = 1; i < numStr.length; i++) {
					const digit = digitToNumber[numStr.charAt(i)];
					number *= base;
					number += digit;
				}
				return number;
			};
			defineMacro("\\char", function(context) {
				let token = context.popToken();
				let base;
				let number = "";
				if (token.text === "'") {
					base = 8;
					token = context.popToken();
				} else if (token.text === "\"") {
					base = 16;
					token = context.popToken();
				} else if (token.text === "`") {
					token = context.popToken();
					if (token.text[0] === "\\") number = token.text.charCodeAt(1);
					else if (token.text === "EOF") throw new ParseError("\\char` missing argument");
					else number = token.text.charCodeAt(0);
				} else base = 10;
				if (base) {
					let numStr = token.text;
					number = digitToNumber[numStr.charAt(0)];
					if (number == null || number >= base) throw new ParseError(`Invalid base-${base} digit ${token.text}`);
					number = appendCharNumbers(number, numStr, base);
					let digit;
					[digit, numStr] = nextCharNumber(context);
					while (digit != null && digit < base) {
						number *= base;
						number += digit;
						number = appendCharNumbers(number, numStr, base);
						context.popToken();
						[digit, numStr] = nextCharNumber(context);
					}
				}
				return `\\@char{${number}}`;
			});
			defineMacro("\\surd", "\\sqrt{\\vphantom{|}}");
			defineMacro("⊕", "\\oplus");
			defineMacro("\\long", "");
			defineMacro("\\bgroup", "{");
			defineMacro("\\egroup", "}");
			defineMacro("~", "\\nobreakspace");
			defineMacro("\\lq", "`");
			defineMacro("\\rq", "'");
			defineMacro("\\aa", "\\r a");
			defineMacro("\\Bbbk", "\\Bbb{k}");
			defineMacro("\\mathstrut", "\\vphantom{(}");
			defineMacro("\\underbar", "\\underline{\\text{#1}}");
			defineMacro("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
			defineMacro("⋮", "\\vdots");
			defineMacro("\\arraystretch", "1");
			defineMacro("\\arraycolsep", "6pt");
			defineMacro("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
			defineMacro("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
			defineMacro("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
			defineMacro("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
			dotsByToken = {
				",": "\\dotsc",
				"\\not": "\\dotsb",
				"+": "\\dotsb",
				"=": "\\dotsb",
				"<": "\\dotsb",
				">": "\\dotsb",
				"-": "\\dotsb",
				"*": "\\dotsb",
				":": "\\dotsb",
				"\\DOTSB": "\\dotsb",
				"\\coprod": "\\dotsb",
				"\\bigvee": "\\dotsb",
				"\\bigwedge": "\\dotsb",
				"\\biguplus": "\\dotsb",
				"\\bigcap": "\\dotsb",
				"\\bigcup": "\\dotsb",
				"\\prod": "\\dotsb",
				"\\sum": "\\dotsb",
				"\\bigotimes": "\\dotsb",
				"\\bigoplus": "\\dotsb",
				"\\bigodot": "\\dotsb",
				"\\bigsqcap": "\\dotsb",
				"\\bigsqcup": "\\dotsb",
				"\\bigtimes": "\\dotsb",
				"\\And": "\\dotsb",
				"\\longrightarrow": "\\dotsb",
				"\\Longrightarrow": "\\dotsb",
				"\\longleftarrow": "\\dotsb",
				"\\Longleftarrow": "\\dotsb",
				"\\longleftrightarrow": "\\dotsb",
				"\\Longleftrightarrow": "\\dotsb",
				"\\mapsto": "\\dotsb",
				"\\longmapsto": "\\dotsb",
				"\\hookrightarrow": "\\dotsb",
				"\\doteq": "\\dotsb",
				"\\mathbin": "\\dotsb",
				"\\mathrel": "\\dotsb",
				"\\relbar": "\\dotsb",
				"\\Relbar": "\\dotsb",
				"\\xrightarrow": "\\dotsb",
				"\\xleftarrow": "\\dotsb",
				"\\DOTSI": "\\dotsi",
				"\\int": "\\dotsi",
				"\\oint": "\\dotsi",
				"\\iint": "\\dotsi",
				"\\iiint": "\\dotsi",
				"\\iiiint": "\\dotsi",
				"\\DOTSX": "\\dotsx"
			};
			defineMacro("\\dots", function(context) {
				let thedots = "\\dotso";
				const next = context.expandAfterFuture().text;
				if (next in dotsByToken) thedots = dotsByToken[next];
				else if (next.slice(0, 4) === "\\not") thedots = "\\dotsb";
				else if (next in symbols.math) {
					if (["bin", "rel"].includes(symbols.math[next].group)) thedots = "\\dotsb";
				}
				return thedots;
			});
			spaceAfterDots = {
				")": true,
				"]": true,
				"\\rbrack": true,
				"\\}": true,
				"\\rbrace": true,
				"\\rangle": true,
				"\\rceil": true,
				"\\rfloor": true,
				"\\rgroup": true,
				"\\rmoustache": true,
				"\\right": true,
				"\\bigr": true,
				"\\biggr": true,
				"\\Bigr": true,
				"\\Biggr": true,
				$: true,
				";": true,
				".": true,
				",": true
			};
			defineMacro("\\dotso", function(context) {
				if (context.future().text in spaceAfterDots) return "\\ldots\\,";
				else return "\\ldots";
			});
			defineMacro("\\dotsc", function(context) {
				const next = context.future().text;
				if (next in spaceAfterDots && next !== ",") return "\\ldots\\,";
				else return "\\ldots";
			});
			defineMacro("\\cdots", function(context) {
				if (context.future().text in spaceAfterDots) return "\\@cdots\\,";
				else return "\\@cdots";
			});
			defineMacro("\\dotsb", "\\cdots");
			defineMacro("\\dotsm", "\\cdots");
			defineMacro("\\dotsi", "\\!\\cdots");
			defineMacro("\\idotsint", "\\int\\!\\cdots\\!\\int");
			defineMacro("\\dotsx", "\\ldots\\,");
			defineMacro("\\DOTSI", "\\relax");
			defineMacro("\\DOTSB", "\\relax");
			defineMacro("\\DOTSX", "\\relax");
			defineMacro("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
			defineMacro("\\,", "{\\tmspace+{3mu}{.1667em}}");
			defineMacro("\\thinspace", "\\,");
			defineMacro("\\>", "\\mskip{4mu}");
			defineMacro("\\:", "{\\tmspace+{4mu}{.2222em}}");
			defineMacro("\\medspace", "\\:");
			defineMacro("\\;", "{\\tmspace+{5mu}{.2777em}}");
			defineMacro("\\thickspace", "\\;");
			defineMacro("\\!", "{\\tmspace-{3mu}{.1667em}}");
			defineMacro("\\negthinspace", "\\!");
			defineMacro("\\negmedspace", "{\\tmspace-{4mu}{.2222em}}");
			defineMacro("\\negthickspace", "{\\tmspace-{5mu}{.277em}}");
			defineMacro("\\enspace", "\\kern.5em ");
			defineMacro("\\enskip", "\\hskip.5em\\relax");
			defineMacro("\\quad", "\\hskip1em\\relax");
			defineMacro("\\qquad", "\\hskip2em\\relax");
			defineMacro("\\AA", "\\TextOrMath{\\Angstrom}{\\mathring{A}}\\relax");
			defineMacro("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
			defineMacro("\\tag@paren", "\\tag@literal{({#1})}");
			defineMacro("\\tag@literal", (context) => {
				if (context.macros.get("\\df@tag")) throw new ParseError("Multiple \\tag");
				return "\\gdef\\df@tag{\\text{#1}}";
			});
			defineMacro("\\notag", "\\nonumber");
			defineMacro("\\nonumber", "\\gdef\\@eqnsw{0}");
			defineMacro("\\bmod", "\\mathbin{\\text{mod}}");
			defineMacro("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
			defineMacro("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
			defineMacro("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
			defineMacro("\\newline", "\\\\\\relax");
			defineMacro("\\TeX", "\\textrm{T}\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125em\\textrm{X}");
			defineMacro("\\LaTeX", "\\textrm{L}\\kern-.35em\\raisebox{0.2em}{\\scriptstyle A}\\kern-.15em\\TeX");
			defineMacro("\\Temml", "\\textrm{T}\\kern-0.2em\\lower{0.2em}{\\textrm{E}}\\kern-0.08em{\\textrm{M}\\kern-0.08em\\raise{0.2em}\\textrm{M}\\kern-0.08em\\textrm{L}}");
			defineMacro("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
			defineMacro("\\@hspace", "\\hskip #1\\relax");
			defineMacro("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
			defineMacro("\\colon", `\\mathpunct{\\char"3a}`);
			defineMacro("\\prescript", "\\pres@cript{_{#1}^{#2}}{}{#3}");
			defineMacro("\\ordinarycolon", `\\char"3a`);
			defineMacro("\\vcentcolon", "\\mathrel{\\raisebox{0.035em}{\\ordinarycolon}}");
			defineMacro("\\coloneq", "\\mathrel{\\raisebox{0.035em}{\\ordinarycolon}\\char\"2212}");
			defineMacro("\\Coloneq", "\\mathrel{\\char\"2237\\char\"2212}");
			defineMacro("\\Eqqcolon", "\\mathrel{\\char\"3d\\char\"2237}");
			defineMacro("\\Eqcolon", "\\mathrel{\\char\"2212\\char\"2237}");
			defineMacro("\\colonapprox", "\\mathrel{\\raisebox{0.035em}{\\ordinarycolon}\\char\"2248}");
			defineMacro("\\Colonapprox", "\\mathrel{\\char\"2237\\char\"2248}");
			defineMacro("\\colonsim", "\\mathrel{\\raisebox{0.035em}{\\ordinarycolon}\\char\"223c}");
			defineMacro("\\Colonsim", "\\mathrel{\\raisebox{0.035em}{\\ordinarycolon}\\char\"223c}");
			defineMacro("\\ratio", "\\vcentcolon");
			defineMacro("\\coloncolon", "\\dblcolon");
			defineMacro("\\colonequals", "\\coloneqq");
			defineMacro("\\coloncolonequals", "\\Coloneqq");
			defineMacro("\\equalscolon", "\\eqqcolon");
			defineMacro("\\equalscoloncolon", "\\Eqqcolon");
			defineMacro("\\colonminus", "\\coloneq");
			defineMacro("\\coloncolonminus", "\\Coloneq");
			defineMacro("\\minuscolon", "\\eqcolon");
			defineMacro("\\minuscoloncolon", "\\Eqcolon");
			defineMacro("\\coloncolonapprox", "\\Colonapprox");
			defineMacro("\\coloncolonsim", "\\Colonsim");
			defineMacro("\\notni", "\\mathrel{\\char`∌}");
			defineMacro("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
			defineMacro("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
			defineMacro("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
			defineMacro("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
			defineMacro("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{\\text{lim}}}");
			defineMacro("\\varliminf", "\\DOTSB\\operatorname*{\\underline{\\text{lim}}}");
			defineMacro("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{\\text{lim}}}");
			defineMacro("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{\\text{lim}}}");
			defineMacro("\\centerdot", "{\\medspace\\rule{0.167em}{0.189em}\\medspace}");
			defineMacro("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
			defineMacro("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
			defineMacro("\\plim", "\\DOTSB\\operatorname*{plim}");
			defineMacro("\\leftmodels", "\\mathop{\\reflectbox{$\\models$}}");
			defineMacro("\\bra", "\\mathinner{\\langle{#1}|}");
			defineMacro("\\ket", "\\mathinner{|{#1}\\rangle}");
			defineMacro("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
			defineMacro("\\Bra", "\\left\\langle#1\\right|");
			defineMacro("\\Ket", "\\left|#1\\right\\rangle");
			replaceVert = (argStr, match) => {
				const replaceStr = `}\\,\\middle${match[0] === "|" ? "\\vert" : "\\Vert"}\\,{`;
				return argStr.slice(0, match.index) + replaceStr + argStr.slice(match.index + match[0].length);
			};
			defineMacro("\\Braket", function(context) {
				let argStr = recreateArgStr(context);
				const regEx = /\|\||\||\\\|/g;
				let match;
				while ((match = regEx.exec(argStr)) !== null) argStr = replaceVert(argStr, match);
				return "\\left\\langle{" + argStr + "}\\right\\rangle";
			});
			defineMacro("\\Set", function(context) {
				let argStr = recreateArgStr(context);
				const match = /\|\||\||\\\|/.exec(argStr);
				if (match) argStr = replaceVert(argStr, match);
				return "\\left\\{\\:{" + argStr + "}\\:\\right\\}";
			});
			defineMacro("\\set", function(context) {
				return "\\{{" + recreateArgStr(context).replace(/\|/, "}\\mid{") + "}\\}";
			});
			defineMacro("\\angln", "{\\angl n}");
			defineMacro("\\odv", "\\@ifstar\\odv@next\\odv@numerator");
			defineMacro("\\odv@numerator", "\\frac{\\mathrm{d}#1}{\\mathrm{d}#2}");
			defineMacro("\\odv@next", "\\frac{\\mathrm{d}}{\\mathrm{d}#2}#1");
			defineMacro("\\pdv", "\\@ifstar\\pdv@next\\pdv@numerator");
			pdvHelper = (args) => {
				const numerator = args[0][0].text;
				const denoms = stringFromArg(args[1]).split(",");
				const power = String(denoms.length);
				const numOp = power === "1" ? "\\partial" : `\\partial^${power}`;
				let denominator = "";
				denoms.map((e) => {
					denominator += "\\partial " + e.trim() + "\\,";
				});
				return [
					numerator,
					numOp,
					denominator.replace(/\\,$/, "")
				];
			};
			defineMacro("\\pdv@numerator", function(context) {
				const [numerator, numOp, denominator] = pdvHelper(context.consumeArgs(2));
				return `\\frac{${numOp} ${numerator}}{${denominator}}`;
			});
			defineMacro("\\pdv@next", function(context) {
				const [numerator, numOp, denominator] = pdvHelper(context.consumeArgs(2));
				return `\\frac{${numOp}}{${denominator}} ${numerator}`;
			});
			defineMacro("\\upalpha", "\\up@greek{\\alpha}");
			defineMacro("\\upbeta", "\\up@greek{\\beta}");
			defineMacro("\\upgamma", "\\up@greek{\\gamma}");
			defineMacro("\\updelta", "\\up@greek{\\delta}");
			defineMacro("\\upepsilon", "\\up@greek{\\epsilon}");
			defineMacro("\\upzeta", "\\up@greek{\\zeta}");
			defineMacro("\\upeta", "\\up@greek{\\eta}");
			defineMacro("\\uptheta", "\\up@greek{\\theta}");
			defineMacro("\\upiota", "\\up@greek{\\iota}");
			defineMacro("\\upkappa", "\\up@greek{\\kappa}");
			defineMacro("\\uplambda", "\\up@greek{\\lambda}");
			defineMacro("\\upmu", "\\up@greek{\\mu}");
			defineMacro("\\upnu", "\\up@greek{\\nu}");
			defineMacro("\\upxi", "\\up@greek{\\xi}");
			defineMacro("\\upomicron", "\\up@greek{\\omicron}");
			defineMacro("\\uppi", "\\up@greek{\\pi}");
			defineMacro("\\upalpha", "\\up@greek{\\alpha}");
			defineMacro("\\uprho", "\\up@greek{\\rho}");
			defineMacro("\\upsigma", "\\up@greek{\\sigma}");
			defineMacro("\\uptau", "\\up@greek{\\tau}");
			defineMacro("\\upupsilon", "\\up@greek{\\upsilon}");
			defineMacro("\\upphi", "\\up@greek{\\phi}");
			defineMacro("\\upchi", "\\up@greek{\\chi}");
			defineMacro("\\uppsi", "\\up@greek{\\psi}");
			defineMacro("\\upomega", "\\up@greek{\\omega}");
			defineMacro("\\invamp", "\\mathbin{\\char\"214b}");
			defineMacro("\\parr", "\\mathbin{\\char\"214b}");
			defineMacro("\\upand", "\\mathbin{\\char\"214b}");
			defineMacro("\\with", "\\mathbin{\\char\"26}");
			defineMacro("\\multimapinv", "\\mathrel{\\char\"27dc}");
			defineMacro("\\multimapboth", "\\mathrel{\\char\"29df}");
			defineMacro("\\scoh", "{\\mkern5mu\\char\"2322\\mkern5mu}");
			defineMacro("\\sincoh", "{\\mkern5mu\\char\"2323\\mkern5mu}");
			defineMacro("\\coh", `{\\mkern5mu\\rule{}{0.7em}\\mathrlap{\\smash{\\raise2mu{\\char"2322}}}
{\\smash{\\lower4mu{\\char"2323}}}\\mkern5mu}`);
			defineMacro("\\incoh", `{\\mkern5mu\\rule{}{0.7em}\\mathrlap{\\smash{\\raise2mu{\\char"2323}}}
{\\smash{\\lower4mu{\\char"2322}}}\\mkern5mu}`);
			defineMacro("\\standardstate", "\\text{\\tiny\\char`⦵}");
			/*************************************************************
			*
			*  Temml mhchem.js
			*
			*  This file implements a Temml version of mhchem version 3.3.0.
			*  It is adapted from MathJax/extensions/TeX/mhchem.js
			*  It differs from the MathJax version as follows:
			*    1. The interface is changed so that it can be called from Temml, not MathJax.
			*    2. \rlap and \llap are replaced with \mathrlap and \mathllap.
			*    3. The reaction arrow code is simplified. All reaction arrows are rendered
			*       using Temml extensible arrows instead of building non-extensible arrows.
			*    4. The ~bond forms are composed entirely of \rule elements.
			*    5. Two dashes in _getBond are wrapped in braces to suppress spacing. i.e., {-}
			*    6. The electron dot uses \textbullet instead of \bullet.
			*    7. \smash[T] has been removed. (WebKit hides anything inside \smash{…})
			*
			*    This code, as other Temml code, is released under the MIT license.
			* 
			* /*************************************************************
			*
			*  MathJax/extensions/TeX/mhchem.js
			*
			*  Implements the \ce command for handling chemical formulas
			*  from the mhchem LaTeX package.
			*
			*  ---------------------------------------------------------------------
			*
			*  Copyright (c) 2011-2015 The MathJax Consortium
			*  Copyright (c) 2015-2018 Martin Hensel
			*
			*  Licensed under the Apache License, Version 2.0 (the "License");
			*  you may not use this file except in compliance with the License.
			*  You may obtain a copy of the License at
			*
			*      http://www.apache.org/licenses/LICENSE-2.0
			*
			*  Unless required by applicable law or agreed to in writing, software
			*  distributed under the License is distributed on an "AS IS" BASIS,
			*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
			*  See the License for the specific language governing permissions and
			*  limitations under the License.
			*/
			defineMacro("\\ce", function(context) {
				return chemParse(context.consumeArgs(1)[0], "ce");
			});
			defineMacro("\\pu", function(context) {
				return chemParse(context.consumeArgs(1)[0], "pu");
			});
			defineMacro("\\uniDash", `{\\rule{0.672em}{0.06em}}`);
			defineMacro("\\triDash", `{\\rule{0.15em}{0.06em}\\kern2mu\\rule{0.15em}{0.06em}\\kern2mu\\rule{0.15em}{0.06em}}`);
			defineMacro("\\tripleDash", `\\kern0.075em\\raise0.25em{\\triDash}\\kern0.075em`);
			defineMacro("\\tripleDashOverLine", `\\kern0.075em\\mathrlap{\\raise0.125em{\\uniDash}}\\raise0.34em{\\triDash}\\kern0.075em`);
			defineMacro("\\tripleDashOverDoubleLine", `\\kern0.075em\\mathrlap{\\mathrlap{\\raise0.48em{\\triDash}}\\raise0.27em{\\uniDash}}{\\raise0.05em{\\uniDash}}\\kern0.075em`);
			defineMacro("\\tripleDashBetweenDoubleLine", `\\kern0.075em\\mathrlap{\\mathrlap{\\raise0.48em{\\uniDash}}\\raise0.27em{\\triDash}}{\\raise0.05em{\\uniDash}}\\kern0.075em`);
			chemParse = function(tokens, stateMachine) {
				var str = "";
				var expectedLoc = tokens.length && tokens[tokens.length - 1].loc.start;
				for (var i = tokens.length - 1; i >= 0; i--) {
					if (tokens[i].loc.start > expectedLoc) {
						str += " ";
						expectedLoc = tokens[i].loc.start;
					}
					str += tokens[i].text;
					expectedLoc += tokens[i].text.length;
				}
				return texify.go(mhchemParser.go(str, stateMachine));
			};
			mhchemParser = {
				go: function(input, stateMachine) {
					if (!input) return [];
					if (stateMachine === void 0) stateMachine = "ce";
					var state = "0";
					/** @type {Buffer} */
					var buffer = {};
					buffer["parenthesisLevel"] = 0;
					input = input.replace(/\n/g, " ");
					input = input.replace(/[\u2212\u2013\u2014\u2010]/g, "-");
					input = input.replace(/[\u2026]/g, "...");
					var lastInput;
					var watchdog = 10;
					/** @type {ParserOutput[]} */
					var output = [];
					while (true) {
						if (lastInput !== input) {
							watchdog = 10;
							lastInput = input;
						} else watchdog--;
						var machine = mhchemParser.stateMachines[stateMachine];
						var t = machine.transitions[state] || machine.transitions["*"];
						iterateTransitions: for (var i = 0; i < t.length; i++) {
							var matches = mhchemParser.patterns.match_(t[i].pattern, input);
							if (matches) {
								var task = t[i].task;
								for (var iA = 0; iA < task.action_.length; iA++) {
									var o;
									if (machine.actions[task.action_[iA].type_]) o = machine.actions[task.action_[iA].type_](buffer, matches.match_, task.action_[iA].option);
									else if (mhchemParser.actions[task.action_[iA].type_]) o = mhchemParser.actions[task.action_[iA].type_](buffer, matches.match_, task.action_[iA].option);
									else throw ["MhchemBugA", "mhchem bug A. Please report. (" + task.action_[iA].type_ + ")"];
									mhchemParser.concatArray(output, o);
								}
								state = task.nextState || state;
								if (input.length > 0) {
									if (!task.revisit) input = matches.remainder;
									if (!task.toContinue) break iterateTransitions;
								} else return output;
							}
						}
						if (watchdog <= 0) throw ["MhchemBugU", "mhchem bug U. Please report."];
					}
				},
				concatArray: function(a, b) {
					if (b) {
						if (Array.isArray(b)) for (var iB = 0; iB < b.length; iB++) a.push(b[iB]);
						else a.push(b);
					}
				},
				patterns: {
					patterns: {
						"empty": /^$/,
						"else": /^./,
						"else2": /^./,
						"space": /^\s/,
						"space A": /^\s(?=[A-Z\\$])/,
						"space$": /^\s$/,
						"a-z": /^[a-z]/,
						"x": /^x/,
						"x$": /^x$/,
						"i$": /^i$/,
						"letters": /^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,
						"\\greek": /^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,
						"one lowercase latin letter $": /^(?:([a-z])(?:$|[^a-zA-Z]))$/,
						"$one lowercase latin letter$ $": /^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,
						"one lowercase greek letter $": /^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,
						"digits": /^[0-9]+/,
						"-9.,9": /^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,
						"-9.,9 no missing 0": /^[+\-]?[0-9]+(?:[.,][0-9]+)?/,
						"(-)(9.,9)(e)(99)": function(input) {
							var m = input.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:([eE]|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/);
							if (m && m[0]) return {
								match_: m.splice(1),
								remainder: input.substr(m[0].length)
							};
							return null;
						},
						"(-)(9)^(-9)": function(input) {
							var m = input.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/);
							if (m && m[0]) return {
								match_: m.splice(1),
								remainder: input.substr(m[0].length)
							};
							return null;
						},
						"state of aggregation $": function(input) {
							var a = mhchemParser.patterns.findObserveGroups(input, "", /^\([a-z]{1,3}(?=[\),])/, ")", "");
							if (a && a.remainder.match(/^($|[\s,;\)\]\}])/)) return a;
							var m = input.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);
							if (m) return {
								match_: m[0],
								remainder: input.substr(m[0].length)
							};
							return null;
						},
						"_{(state of aggregation)}$": /^_\{(\([a-z]{1,3}\))\}/,
						"{[(": /^(?:\\\{|\[|\()/,
						")]}": /^(?:\)|\]|\\\})/,
						", ": /^[,;]\s*/,
						",": /^[,;]/,
						".": /^[.]/,
						". ": /^([.\u22C5\u00B7\u2022])\s*/,
						"...": /^\.\.\.(?=$|[^.])/,
						"* ": /^([*])\s*/,
						"^{(...)}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "^{", "", "", "}");
						},
						"^($...$)": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "^", "$", "$", "");
						},
						"^a": /^\^([0-9]+|[^\\_])/,
						"^\\x{}{}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "^", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", true);
						},
						"^\\x{}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "^", /^\\[a-zA-Z]+\{/, "}", "");
						},
						"^\\x": /^\^(\\[a-zA-Z]+)\s*/,
						"^(-1)": /^\^(-?\d+)/,
						"'": /^'/,
						"_{(...)}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "_{", "", "", "}");
						},
						"_($...$)": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "_", "$", "$", "");
						},
						"_9": /^_([+\-]?[0-9]+|[^\\])/,
						"_\\x{}{}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "_", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", true);
						},
						"_\\x{}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "_", /^\\[a-zA-Z]+\{/, "}", "");
						},
						"_\\x": /^_(\\[a-zA-Z]+)\s*/,
						"^_": /^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,
						"{}": /^\{\}/,
						"{...}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "", "{", "}", "");
						},
						"{(...)}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "{", "", "", "}");
						},
						"$...$": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "", "$", "$", "");
						},
						"${(...)}$": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "${", "", "", "}$");
						},
						"$(...)$": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "$", "", "", "$");
						},
						"=<>": /^[=<>]/,
						"#": /^[#\u2261]/,
						"+": /^\+/,
						"-$": /^-(?=[\s_},;\]/]|$|\([a-z]+\))/,
						"-9": /^-(?=[0-9])/,
						"- orbital overlap": /^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,
						"-": /^-/,
						"pm-operator": /^(?:\\pm|\$\\pm\$|\+-|\+\/-)/,
						"operator": /^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/,
						"arrowUpDown": /^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,
						"\\bond{(...)}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "\\bond{", "", "", "}");
						},
						"->": /^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,
						"CMT": /^[CMT](?=\[)/,
						"[(...)]": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "[", "", "", "]");
						},
						"1st-level escape": /^(&|\\\\|\\hline)\s*/,
						"\\,": /^(?:\\[,\ ;:])/,
						"\\x{}{}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", true);
						},
						"\\x{}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "", /^\\[a-zA-Z]+\{/, "}", "");
						},
						"\\ca": /^\\ca(?:\s+|(?![a-zA-Z]))/,
						"\\x": /^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,
						"orbital": /^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,
						"others": /^[\/~|]/,
						"\\frac{(...)}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "\\frac{", "", "", "}", "{", "", "", "}");
						},
						"\\overset{(...)}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "\\overset{", "", "", "}", "{", "", "", "}");
						},
						"\\underset{(...)}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "\\underset{", "", "", "}", "{", "", "", "}");
						},
						"\\underbrace{(...)}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "\\underbrace{", "", "", "}_", "{", "", "", "}");
						},
						"\\color{(...)}0": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "\\color{", "", "", "}");
						},
						"\\color{(...)}{(...)}1": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "\\color{", "", "", "}", "{", "", "", "}");
						},
						"\\color(...){(...)}2": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "\\color", "\\", "", /^(?=\{)/, "{", "", "", "}");
						},
						"\\ce{(...)}": function(input) {
							return mhchemParser.patterns.findObserveGroups(input, "\\ce{", "", "", "}");
						},
						"oxidation$": /^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,
						"d-oxidation$": /^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,
						"roman numeral": /^[IVX]+/,
						"1/2$": /^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/,
						"amount": function(input) {
							var match = input.match(/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/);
							if (match) return {
								match_: match[0],
								remainder: input.substr(match[0].length)
							};
							var a = mhchemParser.patterns.findObserveGroups(input, "", "$", "$", "");
							if (a) {
								match = a.match_.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/);
								if (match) return {
									match_: match[0],
									remainder: input.substr(match[0].length)
								};
							}
							return null;
						},
						"amount2": function(input) {
							return this["amount"](input);
						},
						"(KV letters),": /^(?:[A-Z][a-z]{0,2}|i)(?=,)/,
						"formula$": function(input) {
							if (input.match(/^\([a-z]+\)$/)) return null;
							var match = input.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);
							if (match) return {
								match_: match[0],
								remainder: input.substr(match[0].length)
							};
							return null;
						},
						"uprightEntities": /^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,
						"/": /^\s*(\/)\s*/,
						"//": /^\s*(\/\/)\s*/,
						"*": /^\s*[*.]\s*/
					},
					findObserveGroups: function(input, begExcl, begIncl, endIncl, endExcl, beg2Excl, beg2Incl, end2Incl, end2Excl, combine) {
						/** @type {{(input: string, pattern: string | RegExp): string | string[] | null;}} */
						var _match = function(input, pattern) {
							if (typeof pattern === "string") {
								if (input.indexOf(pattern) !== 0) return null;
								return pattern;
							} else {
								var match = input.match(pattern);
								if (!match) return null;
								return match[0];
							}
						};
						/** @type {{(input: string, i: number, endChars: string | RegExp): {endMatchBegin: number, endMatchEnd: number} | null;}} */
						var _findObserveGroups = function(input, i, endChars) {
							var braces = 0;
							while (i < input.length) {
								var a = input.charAt(i);
								var match = _match(input.substr(i), endChars);
								if (match !== null && braces === 0) return {
									endMatchBegin: i,
									endMatchEnd: i + match.length
								};
								else if (a === "{") braces++;
								else if (a === "}") {
									if (braces === 0) throw ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"];
									else braces--;
								}
								i++;
							}
							if (braces > 0) return null;
							return null;
						};
						var match = _match(input, begExcl);
						if (match === null) return null;
						input = input.substr(match.length);
						match = _match(input, begIncl);
						if (match === null) return null;
						var e = _findObserveGroups(input, match.length, endIncl || endExcl);
						if (e === null) return null;
						var match1 = input.substring(0, endIncl ? e.endMatchEnd : e.endMatchBegin);
						if (!(beg2Excl || beg2Incl)) return {
							match_: match1,
							remainder: input.substr(e.endMatchEnd)
						};
						else {
							var group2 = this.findObserveGroups(input.substr(e.endMatchEnd), beg2Excl, beg2Incl, end2Incl, end2Excl);
							if (group2 === null) return null;
							/** @type {string[]} */
							var matchRet = [match1, group2.match_];
							return {
								match_: combine ? matchRet.join("") : matchRet,
								remainder: group2.remainder
							};
						}
					},
					match_: function(m, input) {
						var pattern = mhchemParser.patterns.patterns[m];
						if (pattern === void 0) throw ["MhchemBugP", "mhchem bug P. Please report. (" + m + ")"];
						else if (typeof pattern === "function") return mhchemParser.patterns.patterns[m](input);
						else {
							var match = input.match(pattern);
							if (match) {
								var mm;
								if (match[2]) mm = [match[1], match[2]];
								else if (match[1]) mm = match[1];
								else mm = match[0];
								return {
									match_: mm,
									remainder: input.substr(match[0].length)
								};
							}
							return null;
						}
					}
				},
				actions: {
					"a=": function(buffer, m) {
						buffer.a = (buffer.a || "") + m;
					},
					"b=": function(buffer, m) {
						buffer.b = (buffer.b || "") + m;
					},
					"p=": function(buffer, m) {
						buffer.p = (buffer.p || "") + m;
					},
					"o=": function(buffer, m) {
						buffer.o = (buffer.o || "") + m;
					},
					"q=": function(buffer, m) {
						buffer.q = (buffer.q || "") + m;
					},
					"d=": function(buffer, m) {
						buffer.d = (buffer.d || "") + m;
					},
					"rm=": function(buffer, m) {
						buffer.rm = (buffer.rm || "") + m;
					},
					"text=": function(buffer, m) {
						buffer.text_ = (buffer.text_ || "") + m;
					},
					"insert": function(buffer, m, a) {
						return { type_: a };
					},
					"insert+p1": function(buffer, m, a) {
						return {
							type_: a,
							p1: m
						};
					},
					"insert+p1+p2": function(buffer, m, a) {
						return {
							type_: a,
							p1: m[0],
							p2: m[1]
						};
					},
					"copy": function(buffer, m) {
						return m;
					},
					"rm": function(buffer, m) {
						return {
							type_: "rm",
							p1: m || ""
						};
					},
					"text": function(buffer, m) {
						return mhchemParser.go(m, "text");
					},
					"{text}": function(buffer, m) {
						var ret = ["{"];
						mhchemParser.concatArray(ret, mhchemParser.go(m, "text"));
						ret.push("}");
						return ret;
					},
					"tex-math": function(buffer, m) {
						return mhchemParser.go(m, "tex-math");
					},
					"tex-math tight": function(buffer, m) {
						return mhchemParser.go(m, "tex-math tight");
					},
					"bond": function(buffer, m, k) {
						return {
							type_: "bond",
							kind_: k || m
						};
					},
					"color0-output": function(buffer, m) {
						return {
							type_: "color0",
							color: m[0]
						};
					},
					"ce": function(buffer, m) {
						return mhchemParser.go(m);
					},
					"1/2": function(buffer, m) {
						/** @type {ParserOutput[]} */
						var ret = [];
						if (m.match(/^[+\-]/)) {
							ret.push(m.substr(0, 1));
							m = m.substr(1);
						}
						var n = m.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);
						n[1] = n[1].replace(/\$/g, "");
						ret.push({
							type_: "frac",
							p1: n[1],
							p2: n[2]
						});
						if (n[3]) {
							n[3] = n[3].replace(/\$/g, "");
							ret.push({
								type_: "tex-math",
								p1: n[3]
							});
						}
						return ret;
					},
					"9,9": function(buffer, m) {
						return mhchemParser.go(m, "9,9");
					}
				},
				createTransitions: function(o) {
					var pattern, state;
					/** @type {string[]} */
					var stateArray;
					var i;
					/** @type {Transitions} */
					var transitions = {};
					for (pattern in o) for (state in o[pattern]) {
						stateArray = state.split("|");
						o[pattern][state].stateArray = stateArray;
						for (i = 0; i < stateArray.length; i++) transitions[stateArray[i]] = [];
					}
					for (pattern in o) for (state in o[pattern]) {
						stateArray = o[pattern][state].stateArray || [];
						for (i = 0; i < stateArray.length; i++) {
							/** @type {any} */
							var p = o[pattern][state];
							if (p.action_) {
								p.action_ = [].concat(p.action_);
								for (var k = 0; k < p.action_.length; k++) if (typeof p.action_[k] === "string") p.action_[k] = { type_: p.action_[k] };
							} else p.action_ = [];
							var patternArray = pattern.split("|");
							for (var j = 0; j < patternArray.length; j++) if (stateArray[i] === "*") for (var t in transitions) transitions[t].push({
								pattern: patternArray[j],
								task: p
							});
							else transitions[stateArray[i]].push({
								pattern: patternArray[j],
								task: p
							});
						}
					}
					return transitions;
				},
				stateMachines: {}
			};
			mhchemParser.stateMachines = {
				"ce": {
					transitions: mhchemParser.createTransitions({
						"empty": { "*": { action_: "output" } },
						"else": { "0|1|2": {
							action_: "beginsWithBond=false",
							revisit: true,
							toContinue: true
						} },
						"oxidation$": { "0": { action_: "oxidation-output" } },
						"CMT": {
							"r": {
								action_: "rdt=",
								nextState: "rt"
							},
							"rd": {
								action_: "rqt=",
								nextState: "rdt"
							}
						},
						"arrowUpDown": { "0|1|2|as": {
							action_: [
								"sb=false",
								"output",
								"operator"
							],
							nextState: "1"
						} },
						"uprightEntities": { "0|1|2": {
							action_: ["o=", "output"],
							nextState: "1"
						} },
						"orbital": { "0|1|2|3": {
							action_: "o=",
							nextState: "o"
						} },
						"->": {
							"0|1|2|3": {
								action_: "r=",
								nextState: "r"
							},
							"a|as": {
								action_: ["output", "r="],
								nextState: "r"
							},
							"*": {
								action_: ["output", "r="],
								nextState: "r"
							}
						},
						"+": {
							"o": {
								action_: "d= kv",
								nextState: "d"
							},
							"d|D": {
								action_: "d=",
								nextState: "d"
							},
							"q": {
								action_: "d=",
								nextState: "qd"
							},
							"qd|qD": {
								action_: "d=",
								nextState: "qd"
							},
							"dq": {
								action_: ["output", "d="],
								nextState: "d"
							},
							"3": {
								action_: [
									"sb=false",
									"output",
									"operator"
								],
								nextState: "0"
							}
						},
						"amount": { "0|2": {
							action_: "a=",
							nextState: "a"
						} },
						"pm-operator": { "0|1|2|a|as": {
							action_: [
								"sb=false",
								"output",
								{
									type_: "operator",
									option: "\\pm"
								}
							],
							nextState: "0"
						} },
						"operator": { "0|1|2|a|as": {
							action_: [
								"sb=false",
								"output",
								"operator"
							],
							nextState: "0"
						} },
						"-$": {
							"o|q": {
								action_: ["charge or bond", "output"],
								nextState: "qd"
							},
							"d": {
								action_: "d=",
								nextState: "d"
							},
							"D": {
								action_: ["output", {
									type_: "bond",
									option: "-"
								}],
								nextState: "3"
							},
							"q": {
								action_: "d=",
								nextState: "qd"
							},
							"qd": {
								action_: "d=",
								nextState: "qd"
							},
							"qD|dq": {
								action_: ["output", {
									type_: "bond",
									option: "-"
								}],
								nextState: "3"
							}
						},
						"-9": { "3|o": {
							action_: ["output", {
								type_: "insert",
								option: "hyphen"
							}],
							nextState: "3"
						} },
						"- orbital overlap": {
							"o": {
								action_: ["output", {
									type_: "insert",
									option: "hyphen"
								}],
								nextState: "2"
							},
							"d": {
								action_: ["output", {
									type_: "insert",
									option: "hyphen"
								}],
								nextState: "2"
							}
						},
						"-": {
							"0|1|2": {
								action_: [
									{
										type_: "output",
										option: 1
									},
									"beginsWithBond=true",
									{
										type_: "bond",
										option: "-"
									}
								],
								nextState: "3"
							},
							"3": { action_: {
								type_: "bond",
								option: "-"
							} },
							"a": {
								action_: ["output", {
									type_: "insert",
									option: "hyphen"
								}],
								nextState: "2"
							},
							"as": {
								action_: [{
									type_: "output",
									option: 2
								}, {
									type_: "bond",
									option: "-"
								}],
								nextState: "3"
							},
							"b": { action_: "b=" },
							"o": {
								action_: {
									type_: "- after o/d",
									option: false
								},
								nextState: "2"
							},
							"q": {
								action_: {
									type_: "- after o/d",
									option: false
								},
								nextState: "2"
							},
							"d|qd|dq": {
								action_: {
									type_: "- after o/d",
									option: true
								},
								nextState: "2"
							},
							"D|qD|p": {
								action_: ["output", {
									type_: "bond",
									option: "-"
								}],
								nextState: "3"
							}
						},
						"amount2": { "1|3": {
							action_: "a=",
							nextState: "a"
						} },
						"letters": {
							"0|1|2|3|a|as|b|p|bp|o": {
								action_: "o=",
								nextState: "o"
							},
							"q|dq": {
								action_: ["output", "o="],
								nextState: "o"
							},
							"d|D|qd|qD": {
								action_: "o after d",
								nextState: "o"
							}
						},
						"digits": {
							"o": {
								action_: "q=",
								nextState: "q"
							},
							"d|D": {
								action_: "q=",
								nextState: "dq"
							},
							"q": {
								action_: ["output", "o="],
								nextState: "o"
							},
							"a": {
								action_: "o=",
								nextState: "o"
							}
						},
						"space A": { "b|p|bp": {} },
						"space": {
							"a": { nextState: "as" },
							"0": { action_: "sb=false" },
							"1|2": { action_: "sb=true" },
							"r|rt|rd|rdt|rdq": {
								action_: "output",
								nextState: "0"
							},
							"*": {
								action_: ["output", "sb=true"],
								nextState: "1"
							}
						},
						"1st-level escape": {
							"1|2": { action_: ["output", {
								type_: "insert+p1",
								option: "1st-level escape"
							}] },
							"*": {
								action_: ["output", {
									type_: "insert+p1",
									option: "1st-level escape"
								}],
								nextState: "0"
							}
						},
						"[(...)]": {
							"r|rt": {
								action_: "rd=",
								nextState: "rd"
							},
							"rd|rdt": {
								action_: "rq=",
								nextState: "rdq"
							}
						},
						"...": {
							"o|d|D|dq|qd|qD": {
								action_: ["output", {
									type_: "bond",
									option: "..."
								}],
								nextState: "3"
							},
							"*": {
								action_: [{
									type_: "output",
									option: 1
								}, {
									type_: "insert",
									option: "ellipsis"
								}],
								nextState: "1"
							}
						},
						". |* ": { "*": {
							action_: ["output", {
								type_: "insert",
								option: "addition compound"
							}],
							nextState: "1"
						} },
						"state of aggregation $": { "*": {
							action_: ["output", "state of aggregation"],
							nextState: "1"
						} },
						"{[(": {
							"a|as|o": {
								action_: [
									"o=",
									"output",
									"parenthesisLevel++"
								],
								nextState: "2"
							},
							"0|1|2|3": {
								action_: [
									"o=",
									"output",
									"parenthesisLevel++"
								],
								nextState: "2"
							},
							"*": {
								action_: [
									"output",
									"o=",
									"output",
									"parenthesisLevel++"
								],
								nextState: "2"
							}
						},
						")]}": {
							"0|1|2|3|b|p|bp|o": {
								action_: ["o=", "parenthesisLevel--"],
								nextState: "o"
							},
							"a|as|d|D|q|qd|qD|dq": {
								action_: [
									"output",
									"o=",
									"parenthesisLevel--"
								],
								nextState: "o"
							}
						},
						", ": { "*": {
							action_: ["output", "comma"],
							nextState: "0"
						} },
						"^_": { "*": {} },
						"^{(...)}|^($...$)": {
							"0|1|2|as": {
								action_: "b=",
								nextState: "b"
							},
							"p": {
								action_: "b=",
								nextState: "bp"
							},
							"3|o": {
								action_: "d= kv",
								nextState: "D"
							},
							"q": {
								action_: "d=",
								nextState: "qD"
							},
							"d|D|qd|qD|dq": {
								action_: ["output", "d="],
								nextState: "D"
							}
						},
						"^a|^\\x{}{}|^\\x{}|^\\x|'": {
							"0|1|2|as": {
								action_: "b=",
								nextState: "b"
							},
							"p": {
								action_: "b=",
								nextState: "bp"
							},
							"3|o": {
								action_: "d= kv",
								nextState: "d"
							},
							"q": {
								action_: "d=",
								nextState: "qd"
							},
							"d|qd|D|qD": { action_: "d=" },
							"dq": {
								action_: ["output", "d="],
								nextState: "d"
							}
						},
						"_{(state of aggregation)}$": { "d|D|q|qd|qD|dq": {
							action_: ["output", "q="],
							nextState: "q"
						} },
						"_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x": {
							"0|1|2|as": {
								action_: "p=",
								nextState: "p"
							},
							"b": {
								action_: "p=",
								nextState: "bp"
							},
							"3|o": {
								action_: "q=",
								nextState: "q"
							},
							"d|D": {
								action_: "q=",
								nextState: "dq"
							},
							"q|qd|qD|dq": {
								action_: ["output", "q="],
								nextState: "q"
							}
						},
						"=<>": { "0|1|2|3|a|as|o|q|d|D|qd|qD|dq": {
							action_: [{
								type_: "output",
								option: 2
							}, "bond"],
							nextState: "3"
						} },
						"#": { "0|1|2|3|a|as|o": {
							action_: [{
								type_: "output",
								option: 2
							}, {
								type_: "bond",
								option: "#"
							}],
							nextState: "3"
						} },
						"{}": { "*": {
							action_: {
								type_: "output",
								option: 1
							},
							nextState: "1"
						} },
						"{...}": {
							"0|1|2|3|a|as|b|p|bp": {
								action_: "o=",
								nextState: "o"
							},
							"o|d|D|q|qd|qD|dq": {
								action_: ["output", "o="],
								nextState: "o"
							}
						},
						"$...$": {
							"a": { action_: "a=" },
							"0|1|2|3|as|b|p|bp|o": {
								action_: "o=",
								nextState: "o"
							},
							"as|o": { action_: "o=" },
							"q|d|D|qd|qD|dq": {
								action_: ["output", "o="],
								nextState: "o"
							}
						},
						"\\bond{(...)}": { "*": {
							action_: [{
								type_: "output",
								option: 2
							}, "bond"],
							nextState: "3"
						} },
						"\\frac{(...)}": { "*": {
							action_: [{
								type_: "output",
								option: 1
							}, "frac-output"],
							nextState: "3"
						} },
						"\\overset{(...)}": { "*": {
							action_: [{
								type_: "output",
								option: 2
							}, "overset-output"],
							nextState: "3"
						} },
						"\\underset{(...)}": { "*": {
							action_: [{
								type_: "output",
								option: 2
							}, "underset-output"],
							nextState: "3"
						} },
						"\\underbrace{(...)}": { "*": {
							action_: [{
								type_: "output",
								option: 2
							}, "underbrace-output"],
							nextState: "3"
						} },
						"\\color{(...)}{(...)}1|\\color(...){(...)}2": { "*": {
							action_: [{
								type_: "output",
								option: 2
							}, "color-output"],
							nextState: "3"
						} },
						"\\color{(...)}0": { "*": { action_: [{
							type_: "output",
							option: 2
						}, "color0-output"] } },
						"\\ce{(...)}": { "*": {
							action_: [{
								type_: "output",
								option: 2
							}, "ce"],
							nextState: "3"
						} },
						"\\,": { "*": {
							action_: [{
								type_: "output",
								option: 1
							}, "copy"],
							nextState: "1"
						} },
						"\\x{}{}|\\x{}|\\x": {
							"0|1|2|3|a|as|b|p|bp|o|c0": {
								action_: ["o=", "output"],
								nextState: "3"
							},
							"*": {
								action_: [
									"output",
									"o=",
									"output"
								],
								nextState: "3"
							}
						},
						"others": { "*": {
							action_: [{
								type_: "output",
								option: 1
							}, "copy"],
							nextState: "3"
						} },
						"else2": {
							"a": {
								action_: "a to o",
								nextState: "o",
								revisit: true
							},
							"as": {
								action_: ["output", "sb=true"],
								nextState: "1",
								revisit: true
							},
							"r|rt|rd|rdt|rdq": {
								action_: ["output"],
								nextState: "0",
								revisit: true
							},
							"*": {
								action_: ["output", "copy"],
								nextState: "3"
							}
						}
					}),
					actions: {
						"o after d": function(buffer, m) {
							var ret;
							if ((buffer.d || "").match(/^[0-9]+$/)) {
								var tmp = buffer.d;
								buffer.d = void 0;
								ret = this["output"](buffer);
								buffer.b = tmp;
							} else ret = this["output"](buffer);
							mhchemParser.actions["o="](buffer, m);
							return ret;
						},
						"d= kv": function(buffer, m) {
							buffer.d = m;
							buffer.dType = "kv";
						},
						"charge or bond": function(buffer, m) {
							if (buffer["beginsWithBond"]) {
								/** @type {ParserOutput[]} */
								var ret = [];
								mhchemParser.concatArray(ret, this["output"](buffer));
								mhchemParser.concatArray(ret, mhchemParser.actions["bond"](buffer, m, "-"));
								return ret;
							} else buffer.d = m;
						},
						"- after o/d": function(buffer, m, isAfterD) {
							var c1 = mhchemParser.patterns.match_("orbital", buffer.o || "");
							var c2 = mhchemParser.patterns.match_("one lowercase greek letter $", buffer.o || "");
							var c3 = mhchemParser.patterns.match_("one lowercase latin letter $", buffer.o || "");
							var c4 = mhchemParser.patterns.match_("$one lowercase latin letter$ $", buffer.o || "");
							var hyphenFollows = m === "-" && (c1 && c1.remainder === "" || c2 || c3 || c4);
							if (hyphenFollows && !buffer.a && !buffer.b && !buffer.p && !buffer.d && !buffer.q && !c1 && c3) buffer.o = "$" + buffer.o + "$";
							/** @type {ParserOutput[]} */
							var ret = [];
							if (hyphenFollows) {
								mhchemParser.concatArray(ret, this["output"](buffer));
								ret.push({ type_: "hyphen" });
							} else {
								c1 = mhchemParser.patterns.match_("digits", buffer.d || "");
								if (isAfterD && c1 && c1.remainder === "") {
									mhchemParser.concatArray(ret, mhchemParser.actions["d="](buffer, m));
									mhchemParser.concatArray(ret, this["output"](buffer));
								} else {
									mhchemParser.concatArray(ret, this["output"](buffer));
									mhchemParser.concatArray(ret, mhchemParser.actions["bond"](buffer, m, "-"));
								}
							}
							return ret;
						},
						"a to o": function(buffer) {
							buffer.o = buffer.a;
							buffer.a = void 0;
						},
						"sb=true": function(buffer) {
							buffer.sb = true;
						},
						"sb=false": function(buffer) {
							buffer.sb = false;
						},
						"beginsWithBond=true": function(buffer) {
							buffer["beginsWithBond"] = true;
						},
						"beginsWithBond=false": function(buffer) {
							buffer["beginsWithBond"] = false;
						},
						"parenthesisLevel++": function(buffer) {
							buffer["parenthesisLevel"]++;
						},
						"parenthesisLevel--": function(buffer) {
							buffer["parenthesisLevel"]--;
						},
						"state of aggregation": function(buffer, m) {
							return {
								type_: "state of aggregation",
								p1: mhchemParser.go(m, "o")
							};
						},
						"comma": function(buffer, m) {
							var a = m.replace(/\s*$/, "");
							if (a !== m && buffer["parenthesisLevel"] === 0) return {
								type_: "comma enumeration L",
								p1: a
							};
							else return {
								type_: "comma enumeration M",
								p1: a
							};
						},
						"output": function(buffer, m, entityFollows) {
							/** @type {ParserOutput | ParserOutput[]} */
							var ret;
							if (!buffer.r) {
								ret = [];
								if (!buffer.a && !buffer.b && !buffer.p && !buffer.o && !buffer.q && !buffer.d && !entityFollows) {} else {
									if (buffer.sb) ret.push({ type_: "entitySkip" });
									if (!buffer.o && !buffer.q && !buffer.d && !buffer.b && !buffer.p && entityFollows !== 2) {
										buffer.o = buffer.a;
										buffer.a = void 0;
									} else if (!buffer.o && !buffer.q && !buffer.d && (buffer.b || buffer.p)) {
										buffer.o = buffer.a;
										buffer.d = buffer.b;
										buffer.q = buffer.p;
										buffer.a = buffer.b = buffer.p = void 0;
									} else if (buffer.o && buffer.dType === "kv" && mhchemParser.patterns.match_("d-oxidation$", buffer.d || "")) buffer.dType = "oxidation";
									else if (buffer.o && buffer.dType === "kv" && !buffer.q) buffer.dType = void 0;
									ret.push({
										type_: "chemfive",
										a: mhchemParser.go(buffer.a, "a"),
										b: mhchemParser.go(buffer.b, "bd"),
										p: mhchemParser.go(buffer.p, "pq"),
										o: mhchemParser.go(buffer.o, "o"),
										q: mhchemParser.go(buffer.q, "pq"),
										d: mhchemParser.go(buffer.d, buffer.dType === "oxidation" ? "oxidation" : "bd"),
										dType: buffer.dType
									});
								}
							} else {
								/** @type {ParserOutput[]} */
								var rd;
								if (buffer.rdt === "M") rd = mhchemParser.go(buffer.rd, "tex-math");
								else if (buffer.rdt === "T") rd = [{
									type_: "text",
									p1: buffer.rd || ""
								}];
								else rd = mhchemParser.go(buffer.rd);
								/** @type {ParserOutput[]} */
								var rq;
								if (buffer.rqt === "M") rq = mhchemParser.go(buffer.rq, "tex-math");
								else if (buffer.rqt === "T") rq = [{
									type_: "text",
									p1: buffer.rq || ""
								}];
								else rq = mhchemParser.go(buffer.rq);
								ret = {
									type_: "arrow",
									r: buffer.r,
									rd,
									rq
								};
							}
							for (var p in buffer) if (p !== "parenthesisLevel" && p !== "beginsWithBond") delete buffer[p];
							return ret;
						},
						"oxidation-output": function(buffer, m) {
							var ret = ["{"];
							mhchemParser.concatArray(ret, mhchemParser.go(m, "oxidation"));
							ret.push("}");
							return ret;
						},
						"frac-output": function(buffer, m) {
							return {
								type_: "frac-ce",
								p1: mhchemParser.go(m[0]),
								p2: mhchemParser.go(m[1])
							};
						},
						"overset-output": function(buffer, m) {
							return {
								type_: "overset",
								p1: mhchemParser.go(m[0]),
								p2: mhchemParser.go(m[1])
							};
						},
						"underset-output": function(buffer, m) {
							return {
								type_: "underset",
								p1: mhchemParser.go(m[0]),
								p2: mhchemParser.go(m[1])
							};
						},
						"underbrace-output": function(buffer, m) {
							return {
								type_: "underbrace",
								p1: mhchemParser.go(m[0]),
								p2: mhchemParser.go(m[1])
							};
						},
						"color-output": function(buffer, m) {
							return {
								type_: "color",
								color1: m[0],
								color2: mhchemParser.go(m[1])
							};
						},
						"r=": function(buffer, m) {
							buffer.r = m;
						},
						"rdt=": function(buffer, m) {
							buffer.rdt = m;
						},
						"rd=": function(buffer, m) {
							buffer.rd = m;
						},
						"rqt=": function(buffer, m) {
							buffer.rqt = m;
						},
						"rq=": function(buffer, m) {
							buffer.rq = m;
						},
						"operator": function(buffer, m, p1) {
							return {
								type_: "operator",
								kind_: p1 || m
							};
						}
					}
				},
				"a": {
					transitions: mhchemParser.createTransitions({
						"empty": { "*": {} },
						"1/2$": { "0": { action_: "1/2" } },
						"else": { "0": {
							nextState: "1",
							revisit: true
						} },
						"$(...)$": { "*": {
							action_: "tex-math tight",
							nextState: "1"
						} },
						",": { "*": { action_: {
							type_: "insert",
							option: "commaDecimal"
						} } },
						"else2": { "*": { action_: "copy" } }
					}),
					actions: {}
				},
				"o": {
					transitions: mhchemParser.createTransitions({
						"empty": { "*": {} },
						"1/2$": { "0": { action_: "1/2" } },
						"else": { "0": {
							nextState: "1",
							revisit: true
						} },
						"letters": { "*": { action_: "rm" } },
						"\\ca": { "*": { action_: {
							type_: "insert",
							option: "circa"
						} } },
						"\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } },
						"${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
						"{(...)}": { "*": { action_: "{text}" } },
						"else2": { "*": { action_: "copy" } }
					}),
					actions: {}
				},
				"text": {
					transitions: mhchemParser.createTransitions({
						"empty": { "*": { action_: "output" } },
						"{...}": { "*": { action_: "text=" } },
						"${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
						"\\greek": { "*": { action_: ["output", "rm"] } },
						"\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: ["output", "copy"] } },
						"else": { "*": { action_: "text=" } }
					}),
					actions: { "output": function(buffer) {
						if (buffer.text_) {
							/** @type {ParserOutput} */
							var ret = {
								type_: "text",
								p1: buffer.text_
							};
							for (var p in buffer) delete buffer[p];
							return ret;
						}
					} }
				},
				"pq": {
					transitions: mhchemParser.createTransitions({
						"empty": { "*": {} },
						"state of aggregation $": { "*": { action_: "state of aggregation" } },
						"i$": { "0": {
							nextState: "!f",
							revisit: true
						} },
						"(KV letters),": { "0": {
							action_: "rm",
							nextState: "0"
						} },
						"formula$": { "0": {
							nextState: "f",
							revisit: true
						} },
						"1/2$": { "0": { action_: "1/2" } },
						"else": { "0": {
							nextState: "!f",
							revisit: true
						} },
						"${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
						"{(...)}": { "*": { action_: "text" } },
						"a-z": { "f": { action_: "tex-math" } },
						"letters": { "*": { action_: "rm" } },
						"-9.,9": { "*": { action_: "9,9" } },
						",": { "*": { action_: {
							type_: "insert+p1",
							option: "comma enumeration S"
						} } },
						"\\color{(...)}{(...)}1|\\color(...){(...)}2": { "*": { action_: "color-output" } },
						"\\color{(...)}0": { "*": { action_: "color0-output" } },
						"\\ce{(...)}": { "*": { action_: "ce" } },
						"\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } },
						"else2": { "*": { action_: "copy" } }
					}),
					actions: {
						"state of aggregation": function(buffer, m) {
							return {
								type_: "state of aggregation subscript",
								p1: mhchemParser.go(m, "o")
							};
						},
						"color-output": function(buffer, m) {
							return {
								type_: "color",
								color1: m[0],
								color2: mhchemParser.go(m[1], "pq")
							};
						}
					}
				},
				"bd": {
					transitions: mhchemParser.createTransitions({
						"empty": { "*": {} },
						"x$": { "0": {
							nextState: "!f",
							revisit: true
						} },
						"formula$": { "0": {
							nextState: "f",
							revisit: true
						} },
						"else": { "0": {
							nextState: "!f",
							revisit: true
						} },
						"-9.,9 no missing 0": { "*": { action_: "9,9" } },
						".": { "*": { action_: {
							type_: "insert",
							option: "electron dot"
						} } },
						"a-z": { "f": { action_: "tex-math" } },
						"x": { "*": { action_: {
							type_: "insert",
							option: "KV x"
						} } },
						"letters": { "*": { action_: "rm" } },
						"'": { "*": { action_: {
							type_: "insert",
							option: "prime"
						} } },
						"${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
						"{(...)}": { "*": { action_: "text" } },
						"\\color{(...)}{(...)}1|\\color(...){(...)}2": { "*": { action_: "color-output" } },
						"\\color{(...)}0": { "*": { action_: "color0-output" } },
						"\\ce{(...)}": { "*": { action_: "ce" } },
						"\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } },
						"else2": { "*": { action_: "copy" } }
					}),
					actions: { "color-output": function(buffer, m) {
						return {
							type_: "color",
							color1: m[0],
							color2: mhchemParser.go(m[1], "bd")
						};
					} }
				},
				"oxidation": {
					transitions: mhchemParser.createTransitions({
						"empty": { "*": {} },
						"roman numeral": { "*": { action_: "roman-numeral" } },
						"${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
						"else": { "*": { action_: "copy" } }
					}),
					actions: { "roman-numeral": function(buffer, m) {
						return {
							type_: "roman numeral",
							p1: m || ""
						};
					} }
				},
				"tex-math": {
					transitions: mhchemParser.createTransitions({
						"empty": { "*": { action_: "output" } },
						"\\ce{(...)}": { "*": { action_: ["output", "ce"] } },
						"{...}|\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "o=" } },
						"else": { "*": { action_: "o=" } }
					}),
					actions: { "output": function(buffer) {
						if (buffer.o) {
							/** @type {ParserOutput} */
							var ret = {
								type_: "tex-math",
								p1: buffer.o
							};
							for (var p in buffer) delete buffer[p];
							return ret;
						}
					} }
				},
				"tex-math tight": {
					transitions: mhchemParser.createTransitions({
						"empty": { "*": { action_: "output" } },
						"\\ce{(...)}": { "*": { action_: ["output", "ce"] } },
						"{...}|\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "o=" } },
						"-|+": { "*": { action_: "tight operator" } },
						"else": { "*": { action_: "o=" } }
					}),
					actions: {
						"tight operator": function(buffer, m) {
							buffer.o = (buffer.o || "") + "{" + m + "}";
						},
						"output": function(buffer) {
							if (buffer.o) {
								/** @type {ParserOutput} */
								var ret = {
									type_: "tex-math",
									p1: buffer.o
								};
								for (var p in buffer) delete buffer[p];
								return ret;
							}
						}
					}
				},
				"9,9": {
					transitions: mhchemParser.createTransitions({
						"empty": { "*": {} },
						",": { "*": { action_: "comma" } },
						"else": { "*": { action_: "copy" } }
					}),
					actions: { "comma": function() {
						return { type_: "commaDecimal" };
					} }
				},
				"pu": {
					transitions: mhchemParser.createTransitions({
						"empty": { "*": { action_: "output" } },
						"space$": { "*": { action_: ["output", "space"] } },
						"{[(|)]}": { "0|a": { action_: "copy" } },
						"(-)(9)^(-9)": { "0": {
							action_: "number^",
							nextState: "a"
						} },
						"(-)(9.,9)(e)(99)": { "0": {
							action_: "enumber",
							nextState: "a"
						} },
						"space": { "0|a": {} },
						"pm-operator": { "0|a": {
							action_: {
								type_: "operator",
								option: "\\pm"
							},
							nextState: "0"
						} },
						"operator": { "0|a": {
							action_: "copy",
							nextState: "0"
						} },
						"//": { "d": {
							action_: "o=",
							nextState: "/"
						} },
						"/": { "d": {
							action_: "o=",
							nextState: "/"
						} },
						"{...}|else": {
							"0|d": {
								action_: "d=",
								nextState: "d"
							},
							"a": {
								action_: ["space", "d="],
								nextState: "d"
							},
							"/|q": {
								action_: "q=",
								nextState: "q"
							}
						}
					}),
					actions: {
						"enumber": function(buffer, m) {
							/** @type {ParserOutput[]} */
							var ret = [];
							if (m[0] === "+-" || m[0] === "+/-") ret.push("\\pm ");
							else if (m[0]) ret.push(m[0]);
							if (m[1]) {
								mhchemParser.concatArray(ret, mhchemParser.go(m[1], "pu-9,9"));
								if (m[2]) {
									if (m[2].match(/[,.]/)) mhchemParser.concatArray(ret, mhchemParser.go(m[2], "pu-9,9"));
									else ret.push(m[2]);
								}
								m[3] = m[4] || m[3];
								if (m[3]) {
									m[3] = m[3].trim();
									if (m[3] === "e" || m[3].substr(0, 1) === "*") ret.push({ type_: "cdot" });
									else ret.push({ type_: "times" });
								}
							}
							if (m[3]) ret.push("10^{" + m[5] + "}");
							return ret;
						},
						"number^": function(buffer, m) {
							/** @type {ParserOutput[]} */
							var ret = [];
							if (m[0] === "+-" || m[0] === "+/-") ret.push("\\pm ");
							else if (m[0]) ret.push(m[0]);
							mhchemParser.concatArray(ret, mhchemParser.go(m[1], "pu-9,9"));
							ret.push("^{" + m[2] + "}");
							return ret;
						},
						"operator": function(buffer, m, p1) {
							return {
								type_: "operator",
								kind_: p1 || m
							};
						},
						"space": function() {
							return { type_: "pu-space-1" };
						},
						"output": function(buffer) {
							/** @type {ParserOutput | ParserOutput[]} */
							var ret;
							var md = mhchemParser.patterns.match_("{(...)}", buffer.d || "");
							if (md && md.remainder === "") buffer.d = md.match_;
							var mq = mhchemParser.patterns.match_("{(...)}", buffer.q || "");
							if (mq && mq.remainder === "") buffer.q = mq.match_;
							if (buffer.d) {
								buffer.d = buffer.d.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C");
								buffer.d = buffer.d.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F");
							}
							if (buffer.q) {
								buffer.q = buffer.q.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C");
								buffer.q = buffer.q.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F");
								var b5 = {
									d: mhchemParser.go(buffer.d, "pu"),
									q: mhchemParser.go(buffer.q, "pu")
								};
								if (buffer.o === "//") ret = {
									type_: "pu-frac",
									p1: b5.d,
									p2: b5.q
								};
								else {
									ret = b5.d;
									if (b5.d.length > 1 || b5.q.length > 1) ret.push({ type_: " / " });
									else ret.push({ type_: "/" });
									mhchemParser.concatArray(ret, b5.q);
								}
							} else ret = mhchemParser.go(buffer.d, "pu-2");
							for (var p in buffer) delete buffer[p];
							return ret;
						}
					}
				},
				"pu-2": {
					transitions: mhchemParser.createTransitions({
						"empty": { "*": { action_: "output" } },
						"*": { "*": {
							action_: ["output", "cdot"],
							nextState: "0"
						} },
						"\\x": { "*": { action_: "rm=" } },
						"space": { "*": {
							action_: ["output", "space"],
							nextState: "0"
						} },
						"^{(...)}|^(-1)": { "1": { action_: "^(-1)" } },
						"-9.,9": {
							"0": {
								action_: "rm=",
								nextState: "0"
							},
							"1": {
								action_: "^(-1)",
								nextState: "0"
							}
						},
						"{...}|else": { "*": {
							action_: "rm=",
							nextState: "1"
						} }
					}),
					actions: {
						"cdot": function() {
							return { type_: "tight cdot" };
						},
						"^(-1)": function(buffer, m) {
							buffer.rm += "^{" + m + "}";
						},
						"space": function() {
							return { type_: "pu-space-2" };
						},
						"output": function(buffer) {
							/** @type {ParserOutput | ParserOutput[]} */
							var ret = [];
							if (buffer.rm) {
								var mrm = mhchemParser.patterns.match_("{(...)}", buffer.rm || "");
								if (mrm && mrm.remainder === "") ret = mhchemParser.go(mrm.match_, "pu");
								else ret = {
									type_: "rm",
									p1: buffer.rm
								};
							}
							for (var p in buffer) delete buffer[p];
							return ret;
						}
					}
				},
				"pu-9,9": {
					transitions: mhchemParser.createTransitions({
						"empty": {
							"0": { action_: "output-0" },
							"o": { action_: "output-o" }
						},
						",": { "0": {
							action_: ["output-0", "comma"],
							nextState: "o"
						} },
						".": { "0": {
							action_: ["output-0", "copy"],
							nextState: "o"
						} },
						"else": { "*": { action_: "text=" } }
					}),
					actions: {
						"comma": function() {
							return { type_: "commaDecimal" };
						},
						"output-0": function(buffer) {
							/** @type {ParserOutput[]} */
							var ret = [];
							buffer.text_ = buffer.text_ || "";
							if (buffer.text_.length > 4) {
								var a = buffer.text_.length % 3;
								if (a === 0) a = 3;
								for (var i = buffer.text_.length - 3; i > 0; i -= 3) {
									ret.push(buffer.text_.substr(i, 3));
									ret.push({ type_: "1000 separator" });
								}
								ret.push(buffer.text_.substr(0, a));
								ret.reverse();
							} else ret.push(buffer.text_);
							for (var p in buffer) delete buffer[p];
							return ret;
						},
						"output-o": function(buffer) {
							/** @type {ParserOutput[]} */
							var ret = [];
							buffer.text_ = buffer.text_ || "";
							if (buffer.text_.length > 4) {
								var a = buffer.text_.length - 3;
								for (var i = 0; i < a; i += 3) {
									ret.push(buffer.text_.substr(i, 3));
									ret.push({ type_: "1000 separator" });
								}
								ret.push(buffer.text_.substr(i));
							} else ret.push(buffer.text_);
							for (var p in buffer) delete buffer[p];
							return ret;
						}
					}
				}
			};
			texify = {
				go: function(input, isInner) {
					if (!input) return "";
					var res = "";
					var cee = false;
					for (var i = 0; i < input.length; i++) {
						var inputi = input[i];
						if (typeof inputi === "string") res += inputi;
						else {
							res += texify._go2(inputi);
							if (inputi.type_ === "1st-level escape") cee = true;
						}
					}
					if (!isInner && !cee && res) res = "{" + res + "}";
					return res;
				},
				_goInner: function(input) {
					if (!input) return input;
					return texify.go(input, true);
				},
				_go2: function(buf) {
					/** @type {undefined | string} */
					var res;
					switch (buf.type_) {
						case "chemfive":
							res = "";
							var b5 = {
								a: texify._goInner(buf.a),
								b: texify._goInner(buf.b),
								p: texify._goInner(buf.p),
								o: texify._goInner(buf.o),
								q: texify._goInner(buf.q),
								d: texify._goInner(buf.d)
							};
							if (b5.a) {
								if (b5.a.match(/^[+\-]/)) b5.a = "{" + b5.a + "}";
								res += b5.a + "\\,";
							}
							if (b5.b || b5.p) {
								res += "{\\vphantom{X}}";
								res += "^{\\hphantom{" + (b5.b || "") + "}}_{\\hphantom{" + (b5.p || "") + "}}";
								res += "{\\vphantom{X}}";
								res += "^{\\vphantom{2}\\mathllap{" + (b5.b || "") + "}}";
								res += "_{\\vphantom{2}\\mathllap{" + (b5.p || "") + "}}";
							}
							if (b5.o) {
								if (b5.o.match(/^[+\-]/)) b5.o = "{" + b5.o + "}";
								res += b5.o;
							}
							if (buf.dType === "kv") {
								if (b5.d || b5.q) res += "{\\vphantom{X}}";
								if (b5.d) res += "^{" + b5.d + "}";
								if (b5.q) res += "_{" + b5.q + "}";
							} else if (buf.dType === "oxidation") {
								if (b5.d) {
									res += "{\\vphantom{X}}";
									res += "^{" + b5.d + "}";
								}
								if (b5.q) {
									res += "{{}}";
									res += "_{" + b5.q + "}";
								}
							} else {
								if (b5.q) {
									res += "{{}}";
									res += "_{" + b5.q + "}";
								}
								if (b5.d) {
									res += "{{}}";
									res += "^{" + b5.d + "}";
								}
							}
							break;
						case "rm":
							res = "\\mathrm{" + buf.p1 + "}";
							break;
						case "text":
							if (buf.p1.match(/[\^_]/)) {
								buf.p1 = buf.p1.replace(" ", "~").replace("-", "\\text{-}");
								res = "\\mathrm{" + buf.p1 + "}";
							} else res = "\\text{" + buf.p1 + "}";
							break;
						case "roman numeral":
							res = "\\mathrm{" + buf.p1 + "}";
							break;
						case "state of aggregation":
							res = "\\mskip2mu " + texify._goInner(buf.p1);
							break;
						case "state of aggregation subscript":
							res = "\\mskip1mu " + texify._goInner(buf.p1);
							break;
						case "bond":
							res = texify._getBond(buf.kind_);
							if (!res) throw ["MhchemErrorBond", "mhchem Error. Unknown bond type (" + buf.kind_ + ")"];
							break;
						case "frac":
							var c = "\\frac{" + buf.p1 + "}{" + buf.p2 + "}";
							res = "\\mathchoice{\\textstyle" + c + "}{" + c + "}{" + c + "}{" + c + "}";
							break;
						case "pu-frac":
							var d = "\\frac{" + texify._goInner(buf.p1) + "}{" + texify._goInner(buf.p2) + "}";
							res = "\\mathchoice{\\textstyle" + d + "}{" + d + "}{" + d + "}{" + d + "}";
							break;
						case "tex-math":
							res = buf.p1 + " ";
							break;
						case "frac-ce":
							res = "\\frac{" + texify._goInner(buf.p1) + "}{" + texify._goInner(buf.p2) + "}";
							break;
						case "overset":
							res = "\\overset{" + texify._goInner(buf.p1) + "}{" + texify._goInner(buf.p2) + "}";
							break;
						case "underset":
							res = "\\underset{" + texify._goInner(buf.p1) + "}{" + texify._goInner(buf.p2) + "}";
							break;
						case "underbrace":
							res = "\\underbrace{" + texify._goInner(buf.p1) + "}_{" + texify._goInner(buf.p2) + "}";
							break;
						case "color":
							res = "{\\color{" + buf.color1 + "}{" + texify._goInner(buf.color2) + "}}";
							break;
						case "color0":
							res = "\\color{" + buf.color + "}";
							break;
						case "arrow":
							var b6 = {
								rd: texify._goInner(buf.rd),
								rq: texify._goInner(buf.rq)
							};
							var arrow = texify._getArrow(buf.r);
							if (b6.rq) arrow += "[{\\rm " + b6.rq + "}]";
							if (b6.rd) arrow += "{\\rm " + b6.rd + "}";
							else arrow += "{}";
							res = arrow;
							break;
						case "operator":
							res = texify._getOperator(buf.kind_);
							break;
						case "1st-level escape":
							res = buf.p1 + " ";
							break;
						case "space":
							res = " ";
							break;
						case "entitySkip":
							res = "~";
							break;
						case "pu-space-1":
							res = "~";
							break;
						case "pu-space-2":
							res = "\\mkern3mu ";
							break;
						case "1000 separator":
							res = "\\mkern2mu ";
							break;
						case "commaDecimal":
							res = "{,}";
							break;
						case "comma enumeration L":
							res = "{" + buf.p1 + "}\\mkern6mu ";
							break;
						case "comma enumeration M":
							res = "{" + buf.p1 + "}\\mkern3mu ";
							break;
						case "comma enumeration S":
							res = "{" + buf.p1 + "}\\mkern1mu ";
							break;
						case "hyphen":
							res = "\\text{-}";
							break;
						case "addition compound":
							res = "\\,{\\cdot}\\,";
							break;
						case "electron dot":
							res = "\\mkern1mu \\text{\\textbullet}\\mkern1mu ";
							break;
						case "KV x":
							res = "{\\times}";
							break;
						case "prime":
							res = "\\prime ";
							break;
						case "cdot":
							res = "\\cdot ";
							break;
						case "tight cdot":
							res = "\\mkern1mu{\\cdot}\\mkern1mu ";
							break;
						case "times":
							res = "\\times ";
							break;
						case "circa":
							res = "{\\sim}";
							break;
						case "^":
							res = "uparrow";
							break;
						case "v":
							res = "downarrow";
							break;
						case "ellipsis":
							res = "\\ldots ";
							break;
						case "/":
							res = "/";
							break;
						case " / ":
							res = "\\,/\\,";
							break;
						default: throw ["MhchemBugT", "mhchem bug T. Please report."];
					}
					return res;
				},
				_getArrow: function(a) {
					switch (a) {
						case "->": return "\\yields";
						case "→": return "\\yields";
						case "⟶": return "\\yields";
						case "<-": return "\\yieldsLeft";
						case "<->": return "\\mesomerism";
						case "<-->": return "\\yieldsLeftRight";
						case "<=>": return "\\chemequilibrium";
						case "⇌": return "\\chemequilibrium";
						case "<=>>": return "\\equilibriumRight";
						case "<<=>": return "\\equilibriumLeft";
						default: throw ["MhchemBugT", "mhchem bug T. Please report."];
					}
				},
				_getBond: function(a) {
					switch (a) {
						case "-": return "{-}";
						case "1": return "{-}";
						case "=": return "{=}";
						case "2": return "{=}";
						case "#": return "{\\equiv}";
						case "3": return "{\\equiv}";
						case "~": return "{\\tripleDash}";
						case "~-": return "{\\tripleDashOverLine}";
						case "~=": return "{\\tripleDashOverDoubleLine}";
						case "~--": return "{\\tripleDashOverDoubleLine}";
						case "-~-": return "{\\tripleDashBetweenDoubleLine}";
						case "...": return "{{\\cdot}{\\cdot}{\\cdot}}";
						case "....": return "{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";
						case "->": return "{\\rightarrow}";
						case "<-": return "{\\leftarrow}";
						case "<": return "{<}";
						case ">": return "{>}";
						default: throw ["MhchemBugT", "mhchem bug T. Please report."];
					}
				},
				_getOperator: function(a) {
					switch (a) {
						case "+": return " {}+{} ";
						case "-": return " {}-{} ";
						case "=": return " {}={} ";
						case "<": return " {}<{} ";
						case ">": return " {}>{} ";
						case "<<": return " {}\\ll{} ";
						case ">>": return " {}\\gg{} ";
						case "\\pm": return " {}\\pm{} ";
						case "\\approx": return " {}\\approx{} ";
						case "$\\approx$": return " {}\\approx{} ";
						case "v": return " \\downarrow{} ";
						case "(v)": return " \\downarrow{} ";
						case "^": return " \\uparrow{} ";
						case "(^)": return " \\uparrow{} ";
						default: throw ["MhchemBugT", "mhchem bug T. Please report."];
					}
				}
			};
			defineMacro("\\darr", "\\downarrow");
			defineMacro("\\dArr", "\\Downarrow");
			defineMacro("\\Darr", "\\Downarrow");
			defineMacro("\\lang", "\\langle");
			defineMacro("\\rang", "\\rangle");
			defineMacro("\\uarr", "\\uparrow");
			defineMacro("\\uArr", "\\Uparrow");
			defineMacro("\\Uarr", "\\Uparrow");
			defineMacro("\\N", "\\mathbb{N}");
			defineMacro("\\R", "\\mathbb{R}");
			defineMacro("\\Z", "\\mathbb{Z}");
			defineMacro("\\alef", "\\aleph");
			defineMacro("\\alefsym", "\\aleph");
			defineMacro("\\bull", "\\bullet");
			defineMacro("\\clubs", "\\clubsuit");
			defineMacro("\\cnums", "\\mathbb{C}");
			defineMacro("\\Complex", "\\mathbb{C}");
			defineMacro("\\Dagger", "\\ddagger");
			defineMacro("\\diamonds", "\\diamondsuit");
			defineMacro("\\empty", "\\emptyset");
			defineMacro("\\exist", "\\exists");
			defineMacro("\\harr", "\\leftrightarrow");
			defineMacro("\\hArr", "\\Leftrightarrow");
			defineMacro("\\Harr", "\\Leftrightarrow");
			defineMacro("\\hearts", "\\heartsuit");
			defineMacro("\\image", "\\Im");
			defineMacro("\\infin", "\\infty");
			defineMacro("\\isin", "\\in");
			defineMacro("\\larr", "\\leftarrow");
			defineMacro("\\lArr", "\\Leftarrow");
			defineMacro("\\Larr", "\\Leftarrow");
			defineMacro("\\lrarr", "\\leftrightarrow");
			defineMacro("\\lrArr", "\\Leftrightarrow");
			defineMacro("\\Lrarr", "\\Leftrightarrow");
			defineMacro("\\natnums", "\\mathbb{N}");
			defineMacro("\\plusmn", "\\pm");
			defineMacro("\\rarr", "\\rightarrow");
			defineMacro("\\rArr", "\\Rightarrow");
			defineMacro("\\Rarr", "\\Rightarrow");
			defineMacro("\\real", "\\Re");
			defineMacro("\\reals", "\\mathbb{R}");
			defineMacro("\\Reals", "\\mathbb{R}");
			defineMacro("\\sdot", "\\cdot");
			defineMacro("\\sect", "\\S");
			defineMacro("\\spades", "\\spadesuit");
			defineMacro("\\sub", "\\subset");
			defineMacro("\\sube", "\\subseteq");
			defineMacro("\\supe", "\\supseteq");
			defineMacro("\\thetasym", "\\vartheta");
			defineMacro("\\weierp", "\\wp");
			/****************************************************
			*
			*  physics.js
			*
			*  Implements the Physics Package for LaTeX input.
			*
			*  ---------------------------------------------------------------------
			*
			*  The original version of this file is licensed as follows:
			*  Copyright (c) 2015-2016 Kolen Cheung <https://github.com/ickc/MathJax-third-party-extensions>.
			*
			*  Licensed under the Apache License, Version 2.0 (the "License");
			*  you may not use this file except in compliance with the License.
			*  You may obtain a copy of the License at
			*
			*      http://www.apache.org/licenses/LICENSE-2.0
			*
			*  Unless required by applicable law or agreed to in writing, software
			*  distributed under the License is distributed on an "AS IS" BASIS,
			*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
			*  See the License for the specific language governing permissions and
			*  limitations under the License.
			*
			*  ---------------------------------------------------------------------
			*
			*  This file has been revised from the original in the following ways:
			*  1. The interface is changed so that it can be called from Temml, not MathJax.
			*  2. \Re and \Im are not used, to avoid conflict with existing LaTeX letters.
			*
			*  This revision of the file is released under the MIT license.
			*  https://mit-license.org/
			*/
			defineMacro("\\quantity", "{\\left\\{ #1 \\right\\}}");
			defineMacro("\\qty", "{\\left\\{ #1 \\right\\}}");
			defineMacro("\\pqty", "{\\left( #1 \\right)}");
			defineMacro("\\bqty", "{\\left[ #1 \\right]}");
			defineMacro("\\vqty", "{\\left\\vert #1 \\right\\vert}");
			defineMacro("\\Bqty", "{\\left\\{ #1 \\right\\}}");
			defineMacro("\\absolutevalue", "{\\left\\vert #1 \\right\\vert}");
			defineMacro("\\abs", "{\\left\\vert #1 \\right\\vert}");
			defineMacro("\\norm", "{\\left\\Vert #1 \\right\\Vert}");
			defineMacro("\\evaluated", "{\\left.#1 \\right\\vert}");
			defineMacro("\\eval", "{\\left.#1 \\right\\vert}");
			defineMacro("\\order", "{\\mathcal{O} \\left( #1 \\right)}");
			defineMacro("\\commutator", "{\\left[ #1 , #2 \\right]}");
			defineMacro("\\comm", "{\\left[ #1 , #2 \\right]}");
			defineMacro("\\anticommutator", "{\\left\\{ #1 , #2 \\right\\}}");
			defineMacro("\\acomm", "{\\left\\{ #1 , #2 \\right\\}}");
			defineMacro("\\poissonbracket", "{\\left\\{ #1 , #2 \\right\\}}");
			defineMacro("\\pb", "{\\left\\{ #1 , #2 \\right\\}}");
			defineMacro("\\vectorbold", "{\\boldsymbol{ #1 }}");
			defineMacro("\\vb", "{\\boldsymbol{ #1 }}");
			defineMacro("\\vectorarrow", "{\\vec{\\boldsymbol{ #1 }}}");
			defineMacro("\\va", "{\\vec{\\boldsymbol{ #1 }}}");
			defineMacro("\\vectorunit", "{{\\boldsymbol{\\hat{ #1 }}}}");
			defineMacro("\\vu", "{{\\boldsymbol{\\hat{ #1 }}}}");
			defineMacro("\\dotproduct", "\\mathbin{\\boldsymbol\\cdot}");
			defineMacro("\\vdot", "{\\boldsymbol\\cdot}");
			defineMacro("\\crossproduct", "\\mathbin{\\boldsymbol\\times}");
			defineMacro("\\cross", "\\mathbin{\\boldsymbol\\times}");
			defineMacro("\\cp", "\\mathbin{\\boldsymbol\\times}");
			defineMacro("\\gradient", "{\\boldsymbol\\nabla}");
			defineMacro("\\grad", "{\\boldsymbol\\nabla}");
			defineMacro("\\divergence", "{\\grad\\vdot}");
			defineMacro("\\curl", "{\\grad\\cross}");
			defineMacro("\\laplacian", "\\nabla^2");
			defineMacro("\\tr", "{\\operatorname{tr}}");
			defineMacro("\\Tr", "{\\operatorname{Tr}}");
			defineMacro("\\rank", "{\\operatorname{rank}}");
			defineMacro("\\erf", "{\\operatorname{erf}}");
			defineMacro("\\Res", "{\\operatorname{Res}}");
			defineMacro("\\principalvalue", "{\\mathcal{P}}");
			defineMacro("\\pv", "{\\mathcal{P}}");
			defineMacro("\\PV", "{\\operatorname{P.V.}}");
			defineMacro("\\qqtext", "{\\quad\\text{ #1 }\\quad}");
			defineMacro("\\qq", "{\\quad\\text{ #1 }\\quad}");
			defineMacro("\\qcomma", "{\\text{,}\\quad}");
			defineMacro("\\qc", "{\\text{,}\\quad}");
			defineMacro("\\qcc", "{\\quad\\text{c.c.}\\quad}");
			defineMacro("\\qif", "{\\quad\\text{if}\\quad}");
			defineMacro("\\qthen", "{\\quad\\text{then}\\quad}");
			defineMacro("\\qelse", "{\\quad\\text{else}\\quad}");
			defineMacro("\\qotherwise", "{\\quad\\text{otherwise}\\quad}");
			defineMacro("\\qunless", "{\\quad\\text{unless}\\quad}");
			defineMacro("\\qgiven", "{\\quad\\text{given}\\quad}");
			defineMacro("\\qusing", "{\\quad\\text{using}\\quad}");
			defineMacro("\\qassume", "{\\quad\\text{assume}\\quad}");
			defineMacro("\\qsince", "{\\quad\\text{since}\\quad}");
			defineMacro("\\qlet", "{\\quad\\text{let}\\quad}");
			defineMacro("\\qfor", "{\\quad\\text{for}\\quad}");
			defineMacro("\\qall", "{\\quad\\text{all}\\quad}");
			defineMacro("\\qeven", "{\\quad\\text{even}\\quad}");
			defineMacro("\\qodd", "{\\quad\\text{odd}\\quad}");
			defineMacro("\\qinteger", "{\\quad\\text{integer}\\quad}");
			defineMacro("\\qand", "{\\quad\\text{and}\\quad}");
			defineMacro("\\qor", "{\\quad\\text{or}\\quad}");
			defineMacro("\\qas", "{\\quad\\text{as}\\quad}");
			defineMacro("\\qin", "{\\quad\\text{in}\\quad}");
			defineMacro("\\differential", "{\\text{d}}");
			defineMacro("\\dd", "{\\text{d}}");
			defineMacro("\\derivative", "{\\frac{\\text{d}{ #1 }}{\\text{d}{ #2 }}}");
			defineMacro("\\dv", "{\\frac{\\text{d}{ #1 }}{\\text{d}{ #2 }}}");
			defineMacro("\\partialderivative", "{\\frac{\\partial{ #1 }}{\\partial{ #2 }}}");
			defineMacro("\\variation", "{\\delta}");
			defineMacro("\\var", "{\\delta}");
			defineMacro("\\functionalderivative", "{\\frac{\\delta{ #1 }}{\\delta{ #2 }}}");
			defineMacro("\\fdv", "{\\frac{\\delta{ #1 }}{\\delta{ #2 }}}");
			defineMacro("\\innerproduct", "{\\left\\langle {#1} \\mid { #2} \\right\\rangle}");
			defineMacro("\\outerproduct", "{\\left\\vert { #1 } \\right\\rangle\\left\\langle { #2} \\right\\vert}");
			defineMacro("\\dyad", "{\\left\\vert { #1 } \\right\\rangle\\left\\langle { #2} \\right\\vert}");
			defineMacro("\\ketbra", "{\\left\\vert { #1 } \\right\\rangle\\left\\langle { #2} \\right\\vert}");
			defineMacro("\\op", "{\\left\\vert { #1 } \\right\\rangle\\left\\langle { #2} \\right\\vert}");
			defineMacro("\\expectationvalue", "{\\left\\langle {#1 } \\right\\rangle}");
			defineMacro("\\expval", "{\\left\\langle {#1 } \\right\\rangle}");
			defineMacro("\\ev", "{\\left\\langle {#1 } \\right\\rangle}");
			defineMacro("\\matrixelement", "{\\left\\langle{ #1 }\\right\\vert{ #2 }\\left\\vert{#3}\\right\\rangle}");
			defineMacro("\\matrixel", "{\\left\\langle{ #1 }\\right\\vert{ #2 }\\left\\vert{#3}\\right\\rangle}");
			defineMacro("\\mel", "{\\left\\langle{ #1 }\\right\\vert{ #2 }\\left\\vert{#3}\\right\\rangle}");
			validateAmsEnvironmentContext = (context) => {
				if (!context.parser.settings.displayMode) throw new ParseError(`{${context.envName}} can be used only in display mode.`);
			};
			sizeRegEx$1 = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/;
			arrayGaps = (macros) => {
				let arraystretch = macros.get("\\arraystretch");
				if (typeof arraystretch !== "string") arraystretch = stringFromArg(arraystretch.tokens);
				arraystretch = isNaN(arraystretch) ? null : Number(arraystretch);
				let arraycolsepStr = macros.get("\\arraycolsep");
				if (typeof arraycolsepStr !== "string") arraycolsepStr = stringFromArg(arraycolsepStr.tokens);
				const match = sizeRegEx$1.exec(arraycolsepStr);
				const arraycolsep = match ? {
					number: +(match[1] + match[2]),
					unit: match[3]
				} : null;
				return [arraystretch, arraycolsep];
			};
			checkCellForLabels = (cell) => {
				let rowLabel = "";
				for (let i = 0; i < cell.length; i++) if (cell[i].type === "label") {
					if (rowLabel) throw new ParseError("Multiple \\labels in one row");
					rowLabel = cell[i].string;
				}
				return rowLabel;
			};
			alignMap = {
				c: "center ",
				l: "left ",
				r: "right "
			};
			glue = (group) => {
				const glueNode = new MathNode("mtd", []);
				glueNode.style = {
					padding: "0",
					width: "50%"
				};
				if (group.envClasses.includes("multline")) glueNode.style.width = "7.5%";
				return glueNode;
			};
			mathmlBuilder$9 = function(group, style) {
				const tbl = [];
				const numRows = group.body.length;
				const hlines = group.hLinesBeforeRow;
				const tagIsPresent = group.tags && group.tags.some((tag) => tag);
				for (let i = 0; i < numRows; i++) {
					const rw = group.body[i];
					const row = [];
					const cellLevel = group.scriptLevel === "text" ? StyleLevel.TEXT : group.scriptLevel === "script" ? StyleLevel.SCRIPT : StyleLevel.DISPLAY;
					for (let j = 0; j < rw.length; j++) {
						const mtd = new MathNode("mtd", [buildGroup$1(rw[j], style.withLevel(cellLevel))]);
						if (group.envClasses.includes("multline")) {
							const align = i === 0 ? "left" : i === numRows - 1 ? "right" : "center";
							if (align !== "center") mtd.classes.push("tml-" + align);
						}
						row.push(mtd);
					}
					const numColumns = group.body[0].length;
					for (let k = 0; k < numColumns - rw.length; k++) row.push(new MathNode("mtd", [], [], style));
					if (tagIsPresent) {
						const tag = group.tags[i];
						let tagElement;
						if (tag === true) tagElement = new MathNode("mtext", [new Span(["tml-eqn"])]);
						else if (tag === false) tagElement = new MathNode("mtext", [], []);
						else {
							tagElement = buildExpressionRow(tag[0].body, style.withLevel(cellLevel), true);
							tagElement = consolidateText(tagElement);
							tagElement.classes = ["tml-tag"];
						}
						if (tagElement) {
							row.unshift(glue(group));
							row.push(glue(group));
							if (group.leqno) row[0].children.push(tagElement);
							else row[row.length - 1].children.push(tagElement);
						}
					}
					const mtr = new MathNode("mtr", row, []);
					const label = group.labels.shift();
					if (label && group.tags && group.tags[i]) {
						mtr.setAttribute("id", label);
						if (Array.isArray(group.tags[i])) mtr.classes.push("tml-tageqn");
					}
					if (i === 0 && hlines[0].length > 0) {
						if (hlines[0].length === 2) mtr.children.forEach((cell) => {
							cell.style.borderTop = "0.15em double";
						});
						else mtr.children.forEach((cell) => {
							cell.style.borderTop = hlines[0][0] ? "0.06em dashed" : "0.06em solid";
						});
					}
					if (hlines[i + 1].length > 0) {
						if (hlines[i + 1].length === 2) mtr.children.forEach((cell) => {
							cell.style.borderBottom = "0.15em double";
						});
						else mtr.children.forEach((cell) => {
							cell.style.borderBottom = hlines[i + 1][0] ? "0.06em dashed" : "0.06em solid";
						});
					}
					let mustSquashRow = true;
					for (let j = 0; j < mtr.children.length; j++) {
						const child = mtr.children[j].children[0];
						if (!(child && child.type === "mpadded" && child.attributes.height === "0px")) {
							mustSquashRow = false;
							break;
						}
					}
					if (mustSquashRow) {
						mtr.classes.push("ff-squash");
						for (let j = 0; j < mtr.children.length; j++) {
							mtr.children[j].style.paddingTop = "0";
							mtr.children[j].style.paddingBottom = "0";
						}
					}
					tbl.push(mtr);
				}
				if (group.arraystretch && group.arraystretch !== 1) {
					const pad = String(1.4 * group.arraystretch - .8) + "ex";
					for (let i = 0; i < tbl.length; i++) for (let j = 0; j < tbl[i].children.length; j++) {
						tbl[i].children[j].style.paddingTop = pad;
						tbl[i].children[j].style.paddingBottom = pad;
					}
				}
				let sidePadding;
				let sidePadUnit;
				if (group.envClasses.length > 0) {
					sidePadding = group.envClasses.includes("abut") ? "0" : group.envClasses.includes("cases") ? "0" : group.envClasses.includes("small") ? "0.1389" : group.envClasses.includes("cd") ? "0.25" : "0.4";
					sidePadUnit = "em";
				}
				if (group.arraycolsep) {
					const arraySidePad = calculateSize(group.arraycolsep, style);
					sidePadding = arraySidePad.number.toFixed(4);
					sidePadUnit = arraySidePad.unit;
				}
				if (sidePadding) {
					const numCols = tbl.length === 0 ? 0 : tbl[0].children.length;
					const sidePad = (j, hand) => {
						if (j === 0 && hand === 0) return "0";
						if (j === numCols - 1 && hand === 1) return "0";
						if (group.envClasses[0] !== "align") return sidePadding;
						if (hand === 1) return "0";
						if (tagIsPresent) return j % 2 ? "1" : "0";
						else return j % 2 ? "0" : "1";
					};
					for (let i = 0; i < tbl.length; i++) for (let j = 0; j < tbl[i].children.length; j++) {
						tbl[i].children[j].style.paddingLeft = `${sidePad(j, 0)}${sidePadUnit}`;
						tbl[i].children[j].style.paddingRight = `${sidePad(j, 1)}${sidePadUnit}`;
					}
				}
				if (group.envClasses.length === 0) for (let i = 0; i < tbl.length; i++) {
					tbl[i].children[0].style.paddingLeft = "0em";
					if (tbl[i].children.length === tbl[0].children.length) tbl[i].children[tbl[i].children.length - 1].style.paddingRight = "0em";
				}
				if (group.envClasses.length > 0) {
					const align = group.envClasses.includes("align") || group.envClasses.includes("alignat");
					for (let i = 0; i < tbl.length; i++) {
						const row = tbl[i];
						if (align) {
							for (let j = 0; j < row.children.length; j++) row.children[j].classes = ["tml-" + (j % 2 ? "left" : "right")];
							if (tagIsPresent) {
								const k = group.leqno ? 0 : row.children.length - 1;
								row.children[k].classes = [];
							}
						}
						if (row.children.length > 1 && group.envClasses.includes("cases")) row.children[1].style.paddingLeft = "1em";
						if (group.envClasses.includes("cases") || group.envClasses.includes("subarray")) for (const cell of row.children) cell.classes.push("tml-left");
					}
				}
				let table = new MathNode("mtable", tbl);
				if (group.envClasses.length > 0) {
					if (group.envClasses.includes("jot")) table.classes.push("tml-jot");
					else if (group.envClasses.includes("small")) table.classes.push("tml-small");
				}
				if (group.scriptLevel === "display") table.setAttribute("displaystyle", "true");
				if (group.autoTag || group.envClasses.includes("multline")) table.style.width = "100%";
				if (group.cols && group.cols.length > 0) {
					const cols = group.cols;
					let prevTypeWasAlign = false;
					let iStart = 0;
					let iEnd = cols.length;
					while (cols[iStart].type === "separator") iStart += 1;
					while (cols[iEnd - 1].type === "separator") iEnd -= 1;
					if (cols[0].type === "separator") {
						const sep = cols[1].type === "separator" ? "0.15em double" : cols[0].separator === "|" ? "0.06em solid " : "0.06em dashed ";
						for (const row of table.children) row.children[0].style.borderLeft = sep;
					}
					let iCol = tagIsPresent ? 0 : -1;
					for (let i = iStart; i < iEnd; i++) if (cols[i].type === "align") {
						const colAlign = alignMap[cols[i].align];
						iCol += 1;
						for (const row of table.children) if (colAlign.trim() !== "center" && iCol < row.children.length) row.children[iCol].classes = ["tml-" + colAlign.trim()];
						prevTypeWasAlign = true;
					} else if (cols[i].type === "separator") {
						if (prevTypeWasAlign) {
							const sep = cols[i + 1].type === "separator" ? "0.15em double" : cols[i].separator === "|" ? "0.06em solid" : "0.06em dashed";
							for (const row of table.children) if (iCol < row.children.length) row.children[iCol].style.borderRight = sep;
						}
						prevTypeWasAlign = false;
					}
					if (cols[cols.length - 1].type === "separator") {
						const sep = cols[cols.length - 2].type === "separator" ? "0.15em double" : cols[cols.length - 1].separator === "|" ? "0.06em solid" : "0.06em dashed";
						for (const row of table.children) {
							row.children[row.children.length - 1].style.borderRight = sep;
							row.children[row.children.length - 1].style.paddingRight = "0.4em";
						}
					}
				}
				if (group.envClasses.includes("small")) {
					table = new MathNode("mstyle", [table]);
					table.setAttribute("scriptlevel", "1");
				}
				return table;
			};
			alignedHandler = function(context, args) {
				if (context.envName.indexOf("ed") === -1) validateAmsEnvironmentContext(context);
				const isSplit = context.envName === "split";
				const cols = [];
				const res = parseArray(context.parser, {
					cols,
					emptySingleRow: true,
					autoTag: isSplit ? void 0 : getAutoTag(context.envName),
					envClasses: ["abut", "jot"],
					maxNumCols: context.envName === "split" ? 2 : void 0,
					leqno: context.parser.settings.leqno
				}, "display");
				let numMaths;
				let numCols = 0;
				const isAlignedAt = context.envName.indexOf("at") > -1;
				if (args[0] && isAlignedAt) {
					let arg0 = "";
					for (let i = 0; i < args[0].body.length; i++) {
						const textord = assertNodeType(args[0].body[i], "textord");
						arg0 += textord.text;
					}
					if (isNaN(arg0)) throw new ParseError("The alignat enviroment requires a numeric first argument.");
					numMaths = Number(arg0);
					numCols = numMaths * 2;
				}
				res.body.forEach(function(row) {
					if (isAlignedAt) {
						const curMaths = row.length / 2;
						if (numMaths < curMaths) throw new ParseError(`Too many math in a row: expected ${numMaths}, but got ${curMaths}`, row[0]);
					} else if (numCols < row.length) numCols = row.length;
				});
				for (let i = 0; i < numCols; ++i) {
					let align = "r";
					if (i % 2 === 1) align = "l";
					cols[i] = {
						type: "align",
						align
					};
				}
				if (context.envName === "split");
				else if (isAlignedAt) res.envClasses.push("alignat");
				else res.envClasses[0] = "align";
				return res;
			};
			defineEnvironment({
				type: "array",
				names: ["array", "darray"],
				props: { numArgs: 1 },
				handler(context, args) {
					const cols = (checkSymbolNodeType(args[0]) ? [args[0]] : assertNodeType(args[0], "ordgroup").body).map(function(nde) {
						const ca = assertSymbolNodeType(nde).text;
						if ("lcr".indexOf(ca) !== -1) return {
							type: "align",
							align: ca
						};
						else if (ca === "|") return {
							type: "separator",
							separator: "|"
						};
						else if (ca === ":") return {
							type: "separator",
							separator: ":"
						};
						throw new ParseError("Unknown column alignment: " + ca, nde);
					});
					const [arraystretch, arraycolsep] = arrayGaps(context.parser.gullet.macros);
					const res = {
						cols,
						envClasses: ["array"],
						maxNumCols: cols.length,
						arraystretch,
						arraycolsep
					};
					return parseArray(context.parser, res, dCellStyle(context.envName));
				},
				mathmlBuilder: mathmlBuilder$9
			});
			defineEnvironment({
				type: "array",
				names: [
					"matrix",
					"pmatrix",
					"bmatrix",
					"Bmatrix",
					"vmatrix",
					"Vmatrix",
					"matrix*",
					"pmatrix*",
					"bmatrix*",
					"Bmatrix*",
					"vmatrix*",
					"Vmatrix*"
				],
				props: { numArgs: 0 },
				handler(context) {
					const delimiters = {
						matrix: null,
						pmatrix: ["(", ")"],
						bmatrix: ["[", "]"],
						Bmatrix: ["\\{", "\\}"],
						vmatrix: ["|", "|"],
						Vmatrix: ["\\Vert", "\\Vert"]
					}[context.envName.replace("*", "")];
					let colAlign = "c";
					const payload = {
						envClasses: [],
						cols: []
					};
					if (context.envName.charAt(context.envName.length - 1) === "*") {
						const parser = context.parser;
						parser.consumeSpaces();
						if (parser.fetch().text === "[") {
							parser.consume();
							parser.consumeSpaces();
							colAlign = parser.fetch().text;
							if ("lcr".indexOf(colAlign) === -1) throw new ParseError("Expected l or c or r", parser.nextToken);
							parser.consume();
							parser.consumeSpaces();
							parser.expect("]");
							parser.consume();
							payload.cols = [];
						}
					}
					const res = parseArray(context.parser, payload, "text");
					res.cols = res.body.length > 0 ? new Array(res.body[0].length).fill({
						type: "align",
						align: colAlign
					}) : [];
					const [arraystretch, arraycolsep] = arrayGaps(context.parser.gullet.macros);
					res.arraystretch = arraystretch;
					if (arraycolsep && !(arraycolsep === 6 && arraycolsep === "pt")) res.arraycolsep = arraycolsep;
					return delimiters ? {
						type: "leftright",
						mode: context.mode,
						body: [res],
						left: delimiters[0],
						right: delimiters[1],
						rightColor: void 0
					} : res;
				},
				mathmlBuilder: mathmlBuilder$9
			});
			defineEnvironment({
				type: "array",
				names: ["bordermatrix"],
				props: { numArgs: 0 },
				handler(context) {
					const res = parseArray(context.parser, {
						cols: [],
						envClasses: ["bordermatrix"]
					}, "text");
					res.cols = res.body.length > 0 ? new Array(res.body[0].length).fill({
						type: "align",
						align: "c"
					}) : [];
					res.envClasses = [];
					res.arraystretch = 1;
					if (context.envName === "matrix") return res;
					return bordermatrixParseTree(res, context.delimiters);
				},
				mathmlBuilder: mathmlBuilder$9
			});
			defineEnvironment({
				type: "array",
				names: ["smallmatrix"],
				props: { numArgs: 0 },
				handler(context) {
					return parseArray(context.parser, { envClasses: ["small"] }, "script");
				},
				mathmlBuilder: mathmlBuilder$9
			});
			defineEnvironment({
				type: "array",
				names: ["subarray"],
				props: { numArgs: 1 },
				handler(context, args) {
					const cols = (checkSymbolNodeType(args[0]) ? [args[0]] : assertNodeType(args[0], "ordgroup").body).map(function(nde) {
						const ca = assertSymbolNodeType(nde).text;
						if ("lc".indexOf(ca) !== -1) return {
							type: "align",
							align: ca
						};
						throw new ParseError("Unknown column alignment: " + ca, nde);
					});
					if (cols.length > 1) throw new ParseError("{subarray} can contain only one column");
					let res = {
						cols,
						envClasses: ["small"]
					};
					res = parseArray(context.parser, res, "script");
					if (res.body.length > 0 && res.body[0].length > 1) throw new ParseError("{subarray} can contain only one column");
					return res;
				},
				mathmlBuilder: mathmlBuilder$9
			});
			defineEnvironment({
				type: "array",
				names: [
					"cases",
					"dcases",
					"rcases",
					"drcases"
				],
				props: { numArgs: 0 },
				handler(context) {
					const res = parseArray(context.parser, {
						cols: [],
						envClasses: ["cases"]
					}, dCellStyle(context.envName));
					return {
						type: "leftright",
						mode: context.mode,
						body: [res],
						left: context.envName.indexOf("r") > -1 ? "." : "\\{",
						right: context.envName.indexOf("r") > -1 ? "\\}" : ".",
						rightColor: void 0
					};
				},
				mathmlBuilder: mathmlBuilder$9
			});
			defineEnvironment({
				type: "array",
				names: [
					"align",
					"align*",
					"aligned",
					"split"
				],
				props: { numArgs: 0 },
				handler: alignedHandler,
				mathmlBuilder: mathmlBuilder$9
			});
			defineEnvironment({
				type: "array",
				names: [
					"alignat",
					"alignat*",
					"alignedat"
				],
				props: { numArgs: 1 },
				handler: alignedHandler,
				mathmlBuilder: mathmlBuilder$9
			});
			defineEnvironment({
				type: "array",
				names: [
					"gathered",
					"gather",
					"gather*"
				],
				props: { numArgs: 0 },
				handler(context) {
					if (context.envName !== "gathered") validateAmsEnvironmentContext(context);
					const res = {
						cols: [],
						envClasses: ["abut", "jot"],
						autoTag: getAutoTag(context.envName),
						emptySingleRow: true,
						leqno: context.parser.settings.leqno
					};
					return parseArray(context.parser, res, "display");
				},
				mathmlBuilder: mathmlBuilder$9
			});
			defineEnvironment({
				type: "array",
				names: ["equation", "equation*"],
				props: { numArgs: 0 },
				handler(context) {
					validateAmsEnvironmentContext(context);
					const res = {
						autoTag: getAutoTag(context.envName),
						emptySingleRow: true,
						singleRow: true,
						maxNumCols: 1,
						envClasses: ["align"],
						leqno: context.parser.settings.leqno
					};
					return parseArray(context.parser, res, "display");
				},
				mathmlBuilder: mathmlBuilder$9
			});
			defineEnvironment({
				type: "array",
				names: ["multline", "multline*"],
				props: { numArgs: 0 },
				handler(context) {
					validateAmsEnvironmentContext(context);
					const res = {
						autoTag: context.envName === "multline",
						maxNumCols: 1,
						envClasses: ["jot", "multline"],
						leqno: context.parser.settings.leqno
					};
					return parseArray(context.parser, res, "display");
				},
				mathmlBuilder: mathmlBuilder$9
			});
			defineEnvironment({
				type: "array",
				names: ["CD"],
				props: { numArgs: 0 },
				handler(context) {
					validateAmsEnvironmentContext(context);
					return parseCD(context.parser);
				},
				mathmlBuilder: mathmlBuilder$9
			});
			defineFunction({
				type: "text",
				names: ["\\hline", "\\hdashline"],
				props: {
					numArgs: 0,
					allowedInText: true,
					allowedInMath: true
				},
				handler(context, args) {
					throw new ParseError(`${context.funcName} valid only within array environment`);
				}
			});
			environments = _environments;
			defineFunction({
				type: "bordermatrix",
				names: ["\\bordermatrix", "\\matrix"],
				props: {
					numArgs: 0,
					numOptionalArgs: 1
				},
				handler: ({ parser, funcName }, args, optArgs) => {
					let delimiters = ["(", ")"];
					if (funcName === "\\bordermatrix" && optArgs[0] && optArgs[0].body) {
						const body = optArgs[0].body;
						if (body.length === 1 && body[0].type === "delimiter") delimiters = [body[0].left, body[0].right];
					}
					parser.consumeSpaces();
					parser.consume();
					const env = environments["bordermatrix"];
					const context = {
						mode: parser.mode,
						envName: funcName.slice(1),
						delimiters,
						parser
					};
					const result = env.handler(context);
					parser.expect("}", true);
					return result;
				}
			});
			defineFunction({
				type: "cancelto",
				names: ["\\cancelto"],
				props: { numArgs: 2 },
				handler({ parser }, args) {
					const to = args[0];
					const body = args[1];
					return {
						type: "cancelto",
						mode: parser.mode,
						body,
						to,
						isCharacterBox: isCharacterBox(body)
					};
				},
				mathmlBuilder(group, style) {
					const fromNode = new MathNode("mrow", [buildGroup$1(group.body, style)], ["ff-narrow"]);
					const phantom = new MathNode("mphantom", [buildGroup$1(group.body, style)]);
					const arrow = new MathNode("mrow", [phantom], ["tml-cancelto"]);
					arrow.style.color = style.color;
					if (group.isCharacterBox && smalls.indexOf(group.body.body[0].text) > -1) {
						arrow.style.left = "0.1em";
						arrow.style.width = "90%";
					}
					const node = new MathNode("mrow", [fromNode, arrow], ["menclose"]);
					if (!group.isCharacterBox || /[f∫∑]/.test(group.body.body[0].text)) phantom.style.paddingRight = "0.2em";
					else {
						phantom.style.padding = "0.5ex 0.1em 0 0";
						const strut = new MathNode("mspace", []);
						strut.setAttribute("height", "0.85em");
						fromNode.children.push(strut);
					}
					let dummyNode;
					if (group.isCharacterBox) {
						dummyNode = new MathNode("mspace", []);
						dummyNode.setAttribute("height", "1em");
					} else {
						const inner = buildGroup$1(group.body, style);
						const zeroWidthNode = new MathNode("mpadded", [inner]);
						zeroWidthNode.setAttribute("width", "0.1px");
						dummyNode = new MathNode("mphantom", [zeroWidthNode]);
					}
					const toNode = buildGroup$1(group.to, style);
					toNode.style.color = style.color;
					const zeroWidthToNode = new MathNode("mpadded", [toNode]);
					if (!group.isCharacterBox || /[f∫∑]/.test(group.body.body[0].text)) {
						const w = new MathNode("mspace", []);
						w.setAttribute("width", "0.2em");
						zeroWidthToNode.children.unshift(w);
					}
					zeroWidthToNode.setAttribute("width", "0.1px");
					const mover = new MathNode("mover", [dummyNode, zeroWidthToNode]);
					const nudgeLeft = new MathNode("mrow", [], ["ff-nudge-left"]);
					return newDocumentFragment([makeRow([node, mover]), nudgeLeft]);
				}
			});
			defineFunction({
				type: "textord",
				names: ["\\@char"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler({ parser, token }, args) {
					const group = assertNodeType(args[0], "ordgroup").body;
					let number = "";
					for (let i = 0; i < group.length; i++) {
						const node = assertNodeType(group[i], "textord");
						number += node.text;
					}
					const code = parseInt(number);
					if (isNaN(code)) throw new ParseError(`\\@char has non-numeric argument ${number}`, token);
					return {
						type: "textord",
						mode: parser.mode,
						text: String.fromCodePoint(code)
					};
				}
			});
			htmlRegEx = /^(#[a-f0-9]{3}|#?[a-f0-9]{6})$/i;
			htmlOrNameRegEx = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i;
			RGBregEx = /^ *\d{1,3} *(?:, *\d{1,3} *){2}$/;
			rgbRegEx = /^ *[10](?:\.\d*)? *(?:, *[10](?:\.\d*)? *){2}$/;
			xcolorHtmlRegEx = /^[a-f0-9]{6}$/i;
			toHex = (num) => {
				let str = num.toString(16);
				if (str.length === 1) str = "0" + str;
				return str;
			};
			xcolors = JSON.parse(`{
  "Apricot": "#ffb484",
  "Aquamarine": "#08b4bc",
  "Bittersweet": "#c84c14",
  "blue": "#0000FF",
  "Blue": "#303494",
  "BlueGreen": "#08b4bc",
  "BlueViolet": "#503c94",
  "BrickRed": "#b8341c",
  "brown": "#BF8040",
  "Brown": "#802404",
  "BurntOrange": "#f8941c",
  "CadetBlue": "#78749c",
  "CarnationPink": "#f884b4",
  "Cerulean": "#08a4e4",
  "CornflowerBlue": "#40ace4",
  "cyan": "#00FFFF",
  "Cyan": "#08acec",
  "Dandelion": "#ffbc44",
  "darkgray": "#404040",
  "DarkOrchid": "#a8548c",
  "Emerald": "#08ac9c",
  "ForestGreen": "#089c54",
  "Fuchsia": "#90348c",
  "Goldenrod": "#ffdc44",
  "gray": "#808080",
  "Gray": "#98949c",
  "green": "#00FF00",
  "Green": "#08a44c",
  "GreenYellow": "#e0e474",
  "JungleGreen": "#08ac9c",
  "Lavender": "#f89cc4",
  "lightgray": "#c0c0c0",
  "lime": "#BFFF00",
  "LimeGreen": "#90c43c",
  "magenta": "#FF00FF",
  "Magenta": "#f0048c",
  "Mahogany": "#b0341c",
  "Maroon": "#b03434",
  "Melon": "#f89c7c",
  "MidnightBlue": "#086494",
  "Mulberry": "#b03c94",
  "NavyBlue": "#086cbc",
  "olive": "#7F7F00",
  "OliveGreen": "#407c34",
  "orange": "#FF8000",
  "Orange": "#f8843c",
  "OrangeRed": "#f0145c",
  "Orchid": "#b074ac",
  "Peach": "#f8945c",
  "Periwinkle": "#8074bc",
  "PineGreen": "#088c74",
  "pink": "#ff7f7f",
  "Plum": "#98248c",
  "ProcessBlue": "#08b4ec",
  "purple": "#BF0040",
  "Purple": "#a0449c",
  "RawSienna": "#983c04",
  "red": "#ff0000",
  "Red": "#f01c24",
  "RedOrange": "#f86434",
  "RedViolet": "#a0246c",
  "Rhodamine": "#f0549c",
  "Royallue": "#0874bc",
  "RoyalPurple": "#683c9c",
  "RubineRed": "#f0047c",
  "Salmon": "#f8948c",
  "SeaGreen": "#30bc9c",
  "Sepia": "#701404",
  "SkyBlue": "#48c4dc",
  "SpringGreen": "#c8dc64",
  "Tan": "#e09c74",
  "teal": "#007F7F",
  "TealBlue": "#08acb4",
  "Thistle": "#d884b4",
  "Turquoise": "#08b4cc",
  "violet": "#800080",
  "Violet": "#60449c",
  "VioletRed": "#f054a4",
  "WildStrawberry": "#f0246c",
  "yellow": "#FFFF00",
  "Yellow": "#fff404",
  "YellowGreen": "#98cc6c",
  "YellowOrange": "#ffa41c"
}`);
			colorFromSpec = (model, spec) => {
				let color = "";
				if (model === "HTML") {
					if (!htmlRegEx.test(spec)) throw new ParseError("Invalid HTML input.");
					color = spec;
				} else if (model === "RGB") {
					if (!RGBregEx.test(spec)) throw new ParseError("Invalid RGB input.");
					spec.split(",").map((e) => {
						color += toHex(Number(e.trim()));
					});
				} else {
					if (!rgbRegEx.test(spec)) throw new ParseError("Invalid rbg input.");
					spec.split(",").map((e) => {
						const num = Number(e.trim());
						if (num > 1) throw new ParseError("Color rgb input must be < 1.");
						color += toHex(Number((num * 255).toFixed(0)));
					});
				}
				if (color.charAt(0) !== "#") color = "#" + color;
				return color;
			};
			validateColor = (color, macros, token) => {
				const macroName = `\\\\color@${color}`;
				if (!htmlOrNameRegEx.exec(color)) throw new ParseError("Invalid color: '" + color + "'", token);
				if (xcolorHtmlRegEx.test(color)) return "#" + color;
				else if (color.charAt(0) === "#") return color;
				else if (macros.has(macroName)) color = macros.get(macroName).tokens[0].text;
				else if (xcolors[color]) color = xcolors[color];
				return color;
			};
			mathmlBuilder$8 = (group, style) => {
				let expr = buildExpression(group.body, style.withColor(group.color));
				if (expr.length === 0) expr.push(new MathNode("mrow"));
				expr = expr.map((e) => {
					e.style.color = group.color;
					return e;
				});
				return newDocumentFragment(expr);
			};
			defineFunction({
				type: "color",
				names: ["\\textcolor"],
				props: {
					numArgs: 2,
					numOptionalArgs: 1,
					allowedInText: true,
					argTypes: [
						"raw",
						"raw",
						"original"
					]
				},
				handler({ parser, token }, args, optArgs) {
					const model = optArgs[0] && assertNodeType(optArgs[0], "raw").string;
					let color = "";
					if (model) {
						const spec = assertNodeType(args[0], "raw").string;
						color = colorFromSpec(model, spec);
					} else color = validateColor(assertNodeType(args[0], "raw").string, parser.gullet.macros, token);
					const body = args[1];
					return {
						type: "color",
						mode: parser.mode,
						color,
						isTextColor: true,
						body: ordargument(body)
					};
				},
				mathmlBuilder: mathmlBuilder$8
			});
			defineFunction({
				type: "color",
				names: ["\\color"],
				props: {
					numArgs: 1,
					numOptionalArgs: 1,
					allowedInText: true,
					argTypes: ["raw", "raw"]
				},
				handler({ parser, breakOnTokenText, token }, args, optArgs) {
					const model = optArgs[0] && assertNodeType(optArgs[0], "raw").string;
					let color = "";
					if (model) {
						const spec = assertNodeType(args[0], "raw").string;
						color = colorFromSpec(model, spec);
					} else color = validateColor(assertNodeType(args[0], "raw").string, parser.gullet.macros, token);
					const body = parser.parseExpression(true, breakOnTokenText, true);
					return {
						type: "color",
						mode: parser.mode,
						color,
						isTextColor: false,
						body
					};
				},
				mathmlBuilder: mathmlBuilder$8
			});
			defineFunction({
				type: "color",
				names: ["\\definecolor"],
				props: {
					numArgs: 3,
					allowedInText: true,
					argTypes: [
						"raw",
						"raw",
						"raw"
					]
				},
				handler({ parser, funcName, token }, args) {
					const name = assertNodeType(args[0], "raw").string;
					if (!/^[A-Za-z]+$/.test(name)) throw new ParseError("Color name must be latin letters.", token);
					const model = assertNodeType(args[1], "raw").string;
					if (![
						"HTML",
						"RGB",
						"rgb"
					].includes(model)) throw new ParseError("Color model must be HTML, RGB, or rgb.", token);
					const spec = assertNodeType(args[2], "raw").string;
					const color = colorFromSpec(model, spec);
					parser.gullet.macros.set(`\\\\color@${name}`, {
						tokens: [{ text: color }],
						numArgs: 0
					});
					return {
						type: "internal",
						mode: parser.mode
					};
				}
			});
			defineFunction({
				type: "cr",
				names: ["\\\\"],
				props: {
					numArgs: 0,
					numOptionalArgs: 0,
					allowedInText: true
				},
				handler({ parser }, args, optArgs) {
					const size = parser.gullet.future().text === "[" ? parser.parseSizeGroup(true) : null;
					const newLine = !parser.settings.displayMode;
					return {
						type: "cr",
						mode: parser.mode,
						newLine,
						size: size && assertNodeType(size, "size").value
					};
				},
				mathmlBuilder(group, style) {
					const node = new MathNode("mo");
					if (group.newLine) {
						node.setAttribute("linebreak", "newline");
						if (group.size) {
							const size = calculateSize(group.size, style);
							node.setAttribute("height", size.number + size.unit);
						}
					}
					return node;
				}
			});
			globalMap = {
				"\\global": "\\global",
				"\\long": "\\\\globallong",
				"\\\\globallong": "\\\\globallong",
				"\\def": "\\gdef",
				"\\gdef": "\\gdef",
				"\\edef": "\\xdef",
				"\\xdef": "\\xdef",
				"\\let": "\\\\globallet",
				"\\futurelet": "\\\\globalfuture"
			};
			checkControlSequence = (tok) => {
				const name = tok.text;
				if (/^(?:[\\{}$&#^_]|EOF)$/.test(name)) throw new ParseError("Expected a control sequence", tok);
				return name;
			};
			getRHS = (parser) => {
				let tok = parser.gullet.popToken();
				if (tok.text === "=") {
					tok = parser.gullet.popToken();
					if (tok.text === " ") tok = parser.gullet.popToken();
				}
				return tok;
			};
			letCommand = (parser, name, tok, global) => {
				let macro = parser.gullet.macros.get(tok.text);
				if (macro == null) {
					tok.noexpand = true;
					macro = {
						tokens: [tok],
						numArgs: 0,
						unexpandable: !parser.gullet.isExpandable(tok.text)
					};
				}
				parser.gullet.macros.set(name, macro, global);
			};
			defineFunction({
				type: "internal",
				names: [
					"\\global",
					"\\long",
					"\\\\globallong"
				],
				props: {
					numArgs: 0,
					allowedInText: true
				},
				handler({ parser, funcName }) {
					parser.consumeSpaces();
					const token = parser.fetch();
					if (globalMap[token.text]) {
						if (funcName === "\\global" || funcName === "\\\\globallong") token.text = globalMap[token.text];
						return assertNodeType(parser.parseFunction(), "internal");
					}
					throw new ParseError(`Invalid token after macro prefix`, token);
				}
			});
			defineFunction({
				type: "internal",
				names: [
					"\\def",
					"\\gdef",
					"\\edef",
					"\\xdef"
				],
				props: {
					numArgs: 0,
					allowedInText: true,
					primitive: true
				},
				handler({ parser, funcName }) {
					let tok = parser.gullet.popToken();
					const name = tok.text;
					if (/^(?:[\\{}$&#^_]|EOF)$/.test(name)) throw new ParseError("Expected a control sequence", tok);
					let numArgs = 0;
					let insert;
					const delimiters = [[]];
					while (parser.gullet.future().text !== "{") {
						tok = parser.gullet.popToken();
						if (tok.text === "#") {
							if (parser.gullet.future().text === "{") {
								insert = parser.gullet.future();
								delimiters[numArgs].push("{");
								break;
							}
							tok = parser.gullet.popToken();
							if (!/^[1-9]$/.test(tok.text)) throw new ParseError(`Invalid argument number "${tok.text}"`);
							if (parseInt(tok.text) !== numArgs + 1) throw new ParseError(`Argument number "${tok.text}" out of order`);
							numArgs++;
							delimiters.push([]);
						} else if (tok.text === "EOF") throw new ParseError("Expected a macro definition");
						else delimiters[numArgs].push(tok.text);
					}
					let { tokens } = parser.gullet.consumeArg();
					if (insert) tokens.unshift(insert);
					if (funcName === "\\edef" || funcName === "\\xdef") {
						tokens = parser.gullet.expandTokens(tokens);
						if (tokens.length > parser.gullet.settings.maxExpand) throw new ParseError("Too many expansions in an " + funcName);
						tokens.reverse();
					}
					parser.gullet.macros.set(name, {
						tokens,
						numArgs,
						delimiters
					}, funcName === globalMap[funcName]);
					return {
						type: "internal",
						mode: parser.mode
					};
				}
			});
			defineFunction({
				type: "internal",
				names: ["\\let", "\\\\globallet"],
				props: {
					numArgs: 0,
					allowedInText: true,
					primitive: true
				},
				handler({ parser, funcName }) {
					const name = checkControlSequence(parser.gullet.popToken());
					parser.gullet.consumeSpaces();
					const tok = getRHS(parser);
					letCommand(parser, name, tok, funcName === "\\\\globallet");
					return {
						type: "internal",
						mode: parser.mode
					};
				}
			});
			defineFunction({
				type: "internal",
				names: ["\\futurelet", "\\\\globalfuture"],
				props: {
					numArgs: 0,
					allowedInText: true,
					primitive: true
				},
				handler({ parser, funcName }) {
					const name = checkControlSequence(parser.gullet.popToken());
					const middle = parser.gullet.popToken();
					const tok = parser.gullet.popToken();
					letCommand(parser, name, tok, funcName === "\\\\globalfuture");
					parser.gullet.pushToken(tok);
					parser.gullet.pushToken(middle);
					return {
						type: "internal",
						mode: parser.mode
					};
				}
			});
			defineFunction({
				type: "internal",
				names: [
					"\\newcommand",
					"\\renewcommand",
					"\\providecommand"
				],
				props: {
					numArgs: 0,
					allowedInText: true,
					primitive: true
				},
				handler({ parser, funcName }) {
					let name = "";
					const tok = parser.gullet.popToken();
					if (tok.text === "{") {
						name = checkControlSequence(parser.gullet.popToken());
						parser.gullet.popToken();
					} else name = checkControlSequence(tok);
					const exists = parser.gullet.isDefined(name);
					if (exists && funcName === "\\newcommand") throw new ParseError(`\\newcommand{${name}} attempting to redefine ${name}; use \\renewcommand`);
					if (!exists && funcName === "\\renewcommand") throw new ParseError(`\\renewcommand{${name}} when command ${name} does not yet exist; use \\newcommand`);
					let numArgs = 0;
					if (parser.gullet.future().text === "[") {
						let tok = parser.gullet.popToken();
						tok = parser.gullet.popToken();
						if (!/^[0-9]$/.test(tok.text)) throw new ParseError(`Invalid number of arguments: "${tok.text}"`);
						numArgs = parseInt(tok.text);
						tok = parser.gullet.popToken();
						if (tok.text !== "]") throw new ParseError(`Invalid argument "${tok.text}"`);
					}
					const { tokens } = parser.gullet.consumeArg();
					if (!(funcName === "\\providecommand" && parser.gullet.macros.has(name))) parser.gullet.macros.set(name, {
						tokens,
						numArgs
					});
					return {
						type: "internal",
						mode: parser.mode
					};
				}
			});
			delimiterSizes = {
				"\\bigl": {
					mclass: "mopen",
					size: 1
				},
				"\\Bigl": {
					mclass: "mopen",
					size: 2
				},
				"\\biggl": {
					mclass: "mopen",
					size: 3
				},
				"\\Biggl": {
					mclass: "mopen",
					size: 4
				},
				"\\bigr": {
					mclass: "mclose",
					size: 1
				},
				"\\Bigr": {
					mclass: "mclose",
					size: 2
				},
				"\\biggr": {
					mclass: "mclose",
					size: 3
				},
				"\\Biggr": {
					mclass: "mclose",
					size: 4
				},
				"\\bigm": {
					mclass: "mrel",
					size: 1
				},
				"\\Bigm": {
					mclass: "mrel",
					size: 2
				},
				"\\biggm": {
					mclass: "mrel",
					size: 3
				},
				"\\Biggm": {
					mclass: "mrel",
					size: 4
				},
				"\\big": {
					mclass: "mord",
					size: 1
				},
				"\\Big": {
					mclass: "mord",
					size: 2
				},
				"\\bigg": {
					mclass: "mord",
					size: 3
				},
				"\\Bigg": {
					mclass: "mord",
					size: 4
				}
			};
			leftToRight = {
				"(": ")",
				"\\lparen": "\\rparen",
				"[": "]",
				"\\lbrack": "\\rbrack",
				"\\{": "\\}",
				"\\lbrace": "\\rbrace",
				"⦇": "⦈",
				"\\llparenthesis": "\\rrparenthesis",
				"\\lfloor": "\\rfloor",
				"⌊": "⌋",
				"\\lceil": "\\rceil",
				"⌈": "⌉",
				"\\langle": "\\rangle",
				"⟨": "⟩",
				"\\lAngle": "\\rAngle",
				"⟪": "⟫",
				"\\llangle": "\\rrangle",
				"⦉": "⦊",
				"\\lvert": "\\rvert",
				"\\lVert": "\\rVert",
				"\\lgroup": "\\rgroup",
				"⟮": "⟯",
				"\\lmoustache": "\\rmoustache",
				"⎰": "⎱",
				"\\llbracket": "\\rrbracket",
				"⟦": "⟧",
				"\\lBrace": "\\rBrace",
				"⦃": "⦄"
			};
			leftDelimiterNames = new Set(Object.keys(leftToRight));
			new Set(Object.values(leftToRight));
			delimiters = /* @__PURE__ */ new Set([
				"(",
				"\\lparen",
				")",
				"\\rparen",
				"[",
				"\\lbrack",
				"]",
				"\\rbrack",
				"\\{",
				"\\lbrace",
				"\\}",
				"\\rbrace",
				"⦇",
				"\\llparenthesis",
				"⦈",
				"\\rrparenthesis",
				"\\lfloor",
				"\\rfloor",
				"⌊",
				"⌋",
				"\\lceil",
				"\\rceil",
				"⌈",
				"⌉",
				"<",
				">",
				"\\langle",
				"⟨",
				"\\rangle",
				"⟩",
				"\\lAngle",
				"⟪",
				"\\rAngle",
				"⟫",
				"\\llangle",
				"⦉",
				"\\rrangle",
				"⦊",
				"\\lt",
				"\\gt",
				"\\lvert",
				"\\rvert",
				"\\lVert",
				"\\rVert",
				"\\lgroup",
				"\\rgroup",
				"⟮",
				"⟯",
				"\\lmoustache",
				"\\rmoustache",
				"⎰",
				"⎱",
				"\\llbracket",
				"\\rrbracket",
				"⟦",
				"⟧",
				"\\lBrace",
				"\\rBrace",
				"⦃",
				"⦄",
				"/",
				"\\backslash",
				"|",
				"\\vert",
				"\\|",
				"\\Vert",
				"‖",
				"\\uparrow",
				"\\Uparrow",
				"\\downarrow",
				"\\Downarrow",
				"\\updownarrow",
				"\\Updownarrow",
				"."
			]);
			dels = /* @__PURE__ */ new Set([
				"}",
				"\\left",
				"\\middle",
				"\\right"
			]);
			isDelimiter = (str) => str.length > 0 && (delimiters.has(str) || delimiterSizes[str] || dels.has(str));
			sizeToMaxHeight = [
				0,
				1.2,
				1.8,
				2.4,
				3
			];
			needExplicitStretch = /* @__PURE__ */ new Set([
				"/",
				"\\",
				"\\backslash",
				"∖",
				"\\vert",
				"|"
			]);
			makeFenceMo = (delim, mode, form, isStretchy) => {
				const node = new MathNode("mo", [makeText(delim === "." ? "" : delim, mode)]);
				node.setAttribute("fence", "true");
				node.setAttribute("form", form);
				node.setAttribute("stretchy", isStretchy ? "true" : "false");
				return node;
			};
			defineFunction({
				type: "delimsizing",
				names: [
					"\\bigl",
					"\\Bigl",
					"\\biggl",
					"\\Biggl",
					"\\bigr",
					"\\Bigr",
					"\\biggr",
					"\\Biggr",
					"\\bigm",
					"\\Bigm",
					"\\biggm",
					"\\Biggm",
					"\\big",
					"\\Big",
					"\\bigg",
					"\\Bigg"
				],
				props: {
					numArgs: 1,
					argTypes: ["primitive"]
				},
				handler: (context, args) => {
					const delim = checkDelimiter(args[0], context);
					const delimNode = {
						type: "delimsizing",
						mode: context.parser.mode,
						size: delimiterSizes[context.funcName].size,
						mclass: delimiterSizes[context.funcName].mclass,
						delim: delim.text
					};
					const nextToken = context.parser.fetch().text;
					if (nextToken !== "^" && nextToken !== "_") return delimNode;
					else return {
						type: "ordgroup",
						mode: "math",
						body: [delimNode, {
							type: "ordgroup",
							mode: "math",
							body: []
						}]
					};
				},
				mathmlBuilder: (group) => {
					const children = [];
					const delim = group.delim === "." ? "" : group.delim;
					children.push(makeText(delim, group.mode));
					const node = new MathNode("mo", children);
					if (group.mclass === "mopen" || group.mclass === "mclose") node.setAttribute("fence", "true");
					else node.setAttribute("fence", "false");
					if (needExplicitStretch.has(delim) || delim.indexOf("arrow") > -1) node.setAttribute("stretchy", "true");
					node.setAttribute("symmetric", "true");
					node.setAttribute("minsize", sizeToMaxHeight[group.size] + "em");
					node.setAttribute("maxsize", sizeToMaxHeight[group.size] + "em");
					return node;
				}
			});
			defineFunction({
				type: "leftright-right",
				names: ["\\right"],
				props: {
					numArgs: 1,
					argTypes: ["primitive"]
				},
				handler: (context, args) => {
					return {
						type: "leftright-right",
						mode: context.parser.mode,
						delim: checkDelimiter(args[0], context).text
					};
				}
			});
			defineFunction({
				type: "leftright",
				names: ["\\left"],
				props: {
					numArgs: 1,
					argTypes: ["primitive"]
				},
				handler: (context, args) => {
					const delim = checkDelimiter(args[0], context);
					const parser = context.parser;
					++parser.leftrightDepth;
					let body = parser.parseExpression(false, "\\right", true);
					let nextToken = parser.fetch();
					while (nextToken.text === "\\middle") {
						parser.consume();
						const middle = parser.fetch().text;
						if (!symbols.math[middle]) throw new ParseError(`Invalid delimiter '${middle}' after '\\middle'`);
						checkDelimiter({
							type: "atom",
							mode: "math",
							text: middle
						}, { funcName: "\\middle" });
						body.push({
							type: "middle",
							mode: "math",
							delim: middle
						});
						parser.consume();
						body = body.concat(parser.parseExpression(false, "\\right", true));
						nextToken = parser.fetch();
					}
					--parser.leftrightDepth;
					parser.expect("\\right", false);
					const right = assertNodeType(parser.parseFunction(), "leftright-right");
					return {
						type: "leftright",
						mode: parser.mode,
						body,
						left: delim.text,
						right: right.delim,
						isStretchy: true
					};
				},
				mathmlBuilder: (group, style) => {
					assertParsed(group);
					const inner = buildExpression(group.body, style);
					const leftNode = makeFenceMo(group.left, group.mode, "prefix", true);
					inner.unshift(leftNode);
					const rightNode = makeFenceMo(group.right, group.mode, "postfix", true);
					if (group.body.length > 0) {
						const lastElement = group.body[group.body.length - 1];
						if (lastElement.type === "color" && !lastElement.isTextColor) rightNode.setAttribute("mathcolor", lastElement.color);
					}
					inner.push(rightNode);
					return makeRow(inner);
				}
			});
			defineFunction({
				type: "delimiter",
				names: Array.from(leftDelimiterNames),
				props: {
					numArgs: 0,
					allowedInText: true,
					allowedInMath: true,
					allowedInArgument: true
				},
				handler: ({ parser, funcName, token }) => {
					if (parser.mode === "text") return {
						type: "textord",
						mode: "text",
						text: funcName,
						loc: token.loc
					};
					else if (!parser.settings.wrapDelimiterPairs) return {
						type: "atom",
						mode: "math",
						family: "open",
						loc: token.loc,
						text: funcName
					};
					const rightDelim = leftToRight[funcName];
					const body = parser.parseExpression(false, rightDelim, false);
					if (parser.fetch().text !== rightDelim) throw new ParseError("Unmatched delimiter");
					parser.consume();
					return {
						type: "delimiter",
						mode: parser.mode,
						body,
						left: funcName,
						right: rightDelim
					};
				},
				mathmlBuilder: (group, style) => {
					assertParsed(group);
					const inner = buildExpression(group.body, style);
					const leftNode = makeFenceMo(group.left, group.mode, "prefix", false);
					inner.unshift(leftNode);
					const rightNode = makeFenceMo(group.right, group.mode, "postfix", false);
					if (group.body.length > 0) {
						const lastElement = group.body[group.body.length - 1];
						if (lastElement.type === "color" && !lastElement.isTextColor) rightNode.setAttribute("mathcolor", lastElement.color);
					}
					inner.push(rightNode);
					return makeRow(inner);
				}
			});
			defineFunction({
				type: "middle",
				names: ["\\middle"],
				props: {
					numArgs: 1,
					argTypes: ["primitive"]
				},
				handler: (context, args) => {
					const delim = checkDelimiter(args[0], context);
					if (!context.parser.leftrightDepth) throw new ParseError("\\middle without preceding \\left", delim);
					return {
						type: "middle",
						mode: context.parser.mode,
						delim: delim.text
					};
				},
				mathmlBuilder: (group) => {
					const textNode = makeText(group.delim, group.mode);
					const middleNode = new MathNode("mo", [textNode]);
					middleNode.setAttribute("stretchy", "true");
					middleNode.setAttribute("form", "infix");
					if (textNode.text !== "/") {
						middleNode.setAttribute("lspace", "0.05em");
						middleNode.setAttribute("rspace", "0.05em");
					}
					return middleNode;
				}
			});
			boxTags = [
				"\\boxed",
				"\\fcolorbox",
				"\\colorbox"
			];
			mathmlBuilder$7 = (group, style) => {
				const tag = boxTags.includes(group.label) ? "mrow" : "menclose";
				const node = new MathNode(tag, [buildGroup$1(group.body, style)]);
				switch (group.label) {
					case "\\overline":
						node.setAttribute("notation", "top");
						node.classes.push("tml-overline");
						break;
					case "\\underline":
						node.setAttribute("notation", "bottom");
						node.classes.push("tml-underline");
						break;
					case "\\cancel":
						node.setAttribute("notation", "updiagonalstrike");
						node.children.push(new MathNode("mrow", [], ["tml-cancel", "upstrike"]));
						break;
					case "\\bcancel":
						node.setAttribute("notation", "downdiagonalstrike");
						node.children.push(new MathNode("mrow", [], ["tml-cancel", "downstrike"]));
						break;
					case "\\sout":
						node.setAttribute("notation", "horizontalstrike");
						node.children.push(new MathNode("mrow", [], ["tml-cancel", "sout"]));
						break;
					case "\\xcancel":
						node.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
						node.children.push(new MathNode("mrow", [], ["tml-cancel", "tml-xcancel"]));
						break;
					case "\\longdiv":
						node.setAttribute("notation", "longdiv");
						node.classes.push("longdiv-top");
						node.children.push(new MathNode("mrow", [], ["longdiv-arc"]));
						break;
					case "\\phase":
						node.setAttribute("notation", "phasorangle");
						node.classes.push("phasor-bottom");
						node.children.push(new MathNode("mrow", [], ["phasor-angle"]));
						break;
					case "\\textcircled":
						node.setAttribute("notation", "circle");
						node.classes.push("circle-pad");
						node.children.push(new MathNode("mrow", [], ["textcircle"]));
						break;
					case "\\angl":
						node.setAttribute("notation", "actuarial");
						node.classes.push("actuarial");
						break;
					case "\\boxed":
						node.style.padding = "3pt";
						node.style.border = "1px solid";
						node.setAttribute("scriptlevel", "0");
						node.setAttribute("displaystyle", "true");
						break;
					case "\\fbox":
						node.setAttribute("notation", "box");
						node.classes.push("tml-fbox");
						break;
					case "\\fcolorbox":
					case "\\colorbox":
						node.style.padding = "0.3em";
						if (group.label === "\\fcolorbox") node.style.border = "0.0667em solid " + String(group.borderColor);
				}
				if (group.backgroundColor) node.setAttribute("mathbackground", group.backgroundColor);
				return node;
			};
			defineFunction({
				type: "enclose",
				names: ["\\colorbox"],
				props: {
					numArgs: 2,
					numOptionalArgs: 1,
					allowedInText: true,
					argTypes: [
						"raw",
						"raw",
						"text"
					]
				},
				handler({ parser, funcName }, args, optArgs) {
					const model = optArgs[0] && assertNodeType(optArgs[0], "raw").string;
					let color = "";
					if (model) {
						const spec = assertNodeType(args[0], "raw").string;
						color = colorFromSpec(model, spec);
					} else color = validateColor(assertNodeType(args[0], "raw").string, parser.gullet.macros);
					const body = args[1];
					return {
						type: "enclose",
						mode: parser.mode,
						label: funcName,
						backgroundColor: color,
						body
					};
				},
				mathmlBuilder: mathmlBuilder$7
			});
			defineFunction({
				type: "enclose",
				names: ["\\fcolorbox"],
				props: {
					numArgs: 3,
					numOptionalArgs: 1,
					allowedInText: true,
					argTypes: [
						"raw",
						"raw",
						"raw",
						"text"
					]
				},
				handler({ parser, funcName }, args, optArgs) {
					const model = optArgs[0] && assertNodeType(optArgs[0], "raw").string;
					let borderColor = "";
					let backgroundColor;
					if (model) {
						const borderSpec = assertNodeType(args[0], "raw").string;
						const backgroundSpec = assertNodeType(args[0], "raw").string;
						borderColor = colorFromSpec(model, borderSpec);
						backgroundColor = colorFromSpec(model, backgroundSpec);
					} else {
						borderColor = validateColor(assertNodeType(args[0], "raw").string, parser.gullet.macros);
						backgroundColor = validateColor(assertNodeType(args[1], "raw").string, parser.gullet.macros);
					}
					const body = args[2];
					return {
						type: "enclose",
						mode: parser.mode,
						label: funcName,
						backgroundColor,
						borderColor,
						body
					};
				},
				mathmlBuilder: mathmlBuilder$7
			});
			defineFunction({
				type: "enclose",
				names: ["\\fbox"],
				props: {
					numArgs: 1,
					argTypes: ["hbox"],
					allowedInText: true
				},
				handler({ parser }, args) {
					return {
						type: "enclose",
						mode: parser.mode,
						label: "\\fbox",
						body: args[0]
					};
				}
			});
			defineFunction({
				type: "enclose",
				names: [
					"\\angl",
					"\\cancel",
					"\\bcancel",
					"\\xcancel",
					"\\overline",
					"\\boxed",
					"\\longdiv",
					"\\phase"
				],
				props: { numArgs: 1 },
				handler({ parser, funcName }, args) {
					const body = args[0];
					return {
						type: "enclose",
						mode: parser.mode,
						label: funcName,
						body
					};
				},
				mathmlBuilder: mathmlBuilder$7
			});
			defineFunction({
				type: "enclose",
				names: ["\\sout"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler({ parser, funcName }, args) {
					const body = args[0];
					return {
						type: "enclose",
						mode: parser.mode,
						label: funcName,
						body
					};
				},
				mathmlBuilder: mathmlBuilder$7
			});
			defineFunction({
				type: "enclose",
				names: ["\\underline"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler({ parser, funcName }, args) {
					const body = args[0];
					return {
						type: "enclose",
						mode: parser.mode,
						label: funcName,
						body
					};
				},
				mathmlBuilder: mathmlBuilder$7
			});
			defineFunction({
				type: "enclose",
				names: ["\\textcircled"],
				props: {
					numArgs: 1,
					argTypes: ["text"],
					allowedInArgument: true,
					allowedInText: true
				},
				handler({ parser, funcName }, args) {
					const body = args[0];
					return {
						type: "enclose",
						mode: parser.mode,
						label: funcName,
						body
					};
				},
				mathmlBuilder: mathmlBuilder$7
			});
			defineFunction({
				type: "environment",
				names: ["\\begin", "\\end"],
				props: {
					numArgs: 1,
					argTypes: ["text"]
				},
				handler({ parser, funcName }, args) {
					const nameGroup = args[0];
					if (nameGroup.type !== "ordgroup") throw new ParseError("Invalid environment name", nameGroup);
					let envName = "";
					for (let i = 0; i < nameGroup.body.length; ++i) envName += assertNodeType(nameGroup.body[i], "textord").text;
					if (funcName === "\\begin") {
						if (!Object.prototype.hasOwnProperty.call(environments, envName)) throw new ParseError("No such environment: " + envName, nameGroup);
						const env = environments[envName];
						const { args, optArgs } = parser.parseArguments("\\begin{" + envName + "}", env);
						const context = {
							mode: parser.mode,
							envName,
							parser
						};
						const result = env.handler(context, args, optArgs);
						parser.expect("\\end", false);
						const endNameToken = parser.nextToken;
						const end = assertNodeType(parser.parseFunction(), "environment");
						if (end.name !== envName) throw new ParseError(`Mismatch: \\begin{${envName}} matched by \\end{${end.name}}`, endNameToken);
						return result;
					}
					return {
						type: "environment",
						mode: parser.mode,
						name: envName,
						nameGroup
					};
				}
			});
			defineFunction({
				type: "envTag",
				names: ["\\env@tag"],
				props: {
					numArgs: 1,
					argTypes: ["math"]
				},
				handler({ parser }, args) {
					return {
						type: "envTag",
						mode: parser.mode,
						body: args[0]
					};
				},
				mathmlBuilder(group, style) {
					return new MathNode("mrow");
				}
			});
			defineFunction({
				type: "noTag",
				names: ["\\env@notag"],
				props: { numArgs: 0 },
				handler({ parser }) {
					return {
						type: "noTag",
						mode: parser.mode
					};
				},
				mathmlBuilder(group, style) {
					return new MathNode("mrow");
				}
			});
			script = Object.freeze({
				B: 8426,
				E: 8427,
				F: 8427,
				H: 8387,
				I: 8391,
				L: 8390,
				M: 8422,
				R: 8393,
				e: 8394,
				g: 8355,
				o: 8389
			});
			frak = Object.freeze({
				C: 8426,
				H: 8388,
				I: 8392,
				R: 8394,
				Z: 8398
			});
			bbb = Object.freeze({
				C: 8383,
				H: 8389,
				N: 8391,
				P: 8393,
				Q: 8393,
				R: 8395,
				Z: 8394
			});
			bold = Object.freeze({
				"ϵ": 119527,
				"ϑ": 119564,
				"ϰ": 119534,
				"φ": 119577,
				"ϱ": 119535,
				"ϖ": 119563
			});
			boldItalic = Object.freeze({
				"ϵ": 119643,
				"ϑ": 119680,
				"ϰ": 119650,
				"φ": 119693,
				"ϱ": 119651,
				"ϖ": 119679
			});
			boldsf = Object.freeze({
				"ϵ": 119701,
				"ϑ": 119738,
				"ϰ": 119708,
				"φ": 119751,
				"ϱ": 119709,
				"ϖ": 119737
			});
			bisf = Object.freeze({
				"ϵ": 119759,
				"ϑ": 119796,
				"ϰ": 119766,
				"φ": 119809,
				"ϱ": 119767,
				"ϖ": 119795
			});
			offset = Object.freeze({
				upperCaseLatin: {
					"normal": (ch) => {
						return 0;
					},
					"bold": (ch) => {
						return 119743;
					},
					"italic": (ch) => {
						return 119795;
					},
					"bold-italic": (ch) => {
						return 119847;
					},
					"script": (ch) => {
						return script[ch] || 119899;
					},
					"script-bold": (ch) => {
						return 119951;
					},
					"fraktur": (ch) => {
						return frak[ch] || 120003;
					},
					"fraktur-bold": (ch) => {
						return 120107;
					},
					"double-struck": (ch) => {
						return bbb[ch] || 120055;
					},
					"sans-serif": (ch) => {
						return 120159;
					},
					"sans-serif-bold": (ch) => {
						return 120211;
					},
					"sans-serif-italic": (ch) => {
						return 120263;
					},
					"sans-serif-bold-italic": (ch) => {
						return 120380;
					},
					"monospace": (ch) => {
						return 120367;
					}
				},
				lowerCaseLatin: {
					"normal": (ch) => {
						return 0;
					},
					"bold": (ch) => {
						return 119737;
					},
					"italic": (ch) => {
						return ch === "h" ? 8358 : 119789;
					},
					"bold-italic": (ch) => {
						return 119841;
					},
					"script": (ch) => {
						return script[ch] || 119893;
					},
					"script-bold": (ch) => {
						return 119945;
					},
					"fraktur": (ch) => {
						return 119997;
					},
					"fraktur-bold": (ch) => {
						return 120101;
					},
					"double-struck": (ch) => {
						return 120049;
					},
					"sans-serif": (ch) => {
						return 120153;
					},
					"sans-serif-bold": (ch) => {
						return 120205;
					},
					"sans-serif-italic": (ch) => {
						return 120257;
					},
					"sans-serif-bold-italic": (ch) => {
						return 120309;
					},
					"monospace": (ch) => {
						return 120361;
					}
				},
				upperCaseGreek: {
					"normal": (ch) => {
						return 0;
					},
					"bold": (ch) => {
						return 119575;
					},
					"italic": (ch) => {
						return 119633;
					},
					"bold-italic": (ch) => {
						return 119575;
					},
					"script": (ch) => {
						return 0;
					},
					"script-bold": (ch) => {
						return 0;
					},
					"fraktur": (ch) => {
						return 0;
					},
					"fraktur-bold": (ch) => {
						return 0;
					},
					"double-struck": (ch) => {
						return 0;
					},
					"sans-serif": (ch) => {
						return 119749;
					},
					"sans-serif-bold": (ch) => {
						return 119749;
					},
					"sans-serif-italic": (ch) => {
						return 0;
					},
					"sans-serif-bold-italic": (ch) => {
						return 119807;
					},
					"monospace": (ch) => {
						return 0;
					}
				},
				lowerCaseGreek: {
					"normal": (ch) => {
						return 0;
					},
					"bold": (ch) => {
						return 119569;
					},
					"italic": (ch) => {
						return 119627;
					},
					"bold-italic": (ch) => {
						return ch === "ϕ" ? 119678 : 119685;
					},
					"script": (ch) => {
						return 0;
					},
					"script-bold": (ch) => {
						return 0;
					},
					"fraktur": (ch) => {
						return 0;
					},
					"fraktur-bold": (ch) => {
						return 0;
					},
					"double-struck": (ch) => {
						return 0;
					},
					"sans-serif": (ch) => {
						return 119743;
					},
					"sans-serif-bold": (ch) => {
						return 119743;
					},
					"sans-serif-italic": (ch) => {
						return 0;
					},
					"sans-serif-bold-italic": (ch) => {
						return 119801;
					},
					"monospace": (ch) => {
						return 0;
					}
				},
				varGreek: {
					"normal": (ch) => {
						return 0;
					},
					"bold": (ch) => {
						return bold[ch] || -51;
					},
					"italic": (ch) => {
						return 0;
					},
					"bold-italic": (ch) => {
						return boldItalic[ch] || 58;
					},
					"script": (ch) => {
						return 0;
					},
					"script-bold": (ch) => {
						return 0;
					},
					"fraktur": (ch) => {
						return 0;
					},
					"fraktur-bold": (ch) => {
						return 0;
					},
					"double-struck": (ch) => {
						return 0;
					},
					"sans-serif": (ch) => {
						return boldsf[ch] || 116;
					},
					"sans-serif-bold": (ch) => {
						return boldsf[ch] || 116;
					},
					"sans-serif-italic": (ch) => {
						return 0;
					},
					"sans-serif-bold-italic": (ch) => {
						return bisf[ch] || 174;
					},
					"monospace": (ch) => {
						return 0;
					}
				},
				numeral: {
					"normal": (ch) => {
						return 0;
					},
					"bold": (ch) => {
						return 120734;
					},
					"italic": (ch) => {
						return 0;
					},
					"bold-italic": (ch) => {
						return 0;
					},
					"script": (ch) => {
						return 0;
					},
					"script-bold": (ch) => {
						return 0;
					},
					"fraktur": (ch) => {
						return 0;
					},
					"fraktur-bold": (ch) => {
						return 0;
					},
					"double-struck": (ch) => {
						return 120744;
					},
					"sans-serif": (ch) => {
						return 120754;
					},
					"sans-serif-bold": (ch) => {
						return 120764;
					},
					"sans-serif-italic": (ch) => {
						return 0;
					},
					"sans-serif-bold-italic": (ch) => {
						return 0;
					},
					"monospace": (ch) => {
						return 120774;
					}
				}
			});
			variantChar = (ch, variant) => {
				const codePoint = ch.codePointAt(0);
				const block = 64 < codePoint && codePoint < 91 ? "upperCaseLatin" : 96 < codePoint && codePoint < 123 ? "lowerCaseLatin" : 912 < codePoint && codePoint < 938 ? "upperCaseGreek" : 944 < codePoint && codePoint < 970 || ch === "ϕ" ? "lowerCaseGreek" : 120545 < codePoint && codePoint < 120572 || bold[ch] ? "varGreek" : 47 < codePoint && codePoint < 58 ? "numeral" : "other";
				return block === "other" ? ch : String.fromCodePoint(codePoint + offset[block][variant](ch));
			};
			smallCaps = Object.freeze({
				a: "ᴀ",
				b: "ʙ",
				c: "ᴄ",
				d: "ᴅ",
				e: "ᴇ",
				f: "ꜰ",
				g: "ɢ",
				h: "ʜ",
				i: "ɪ",
				j: "ᴊ",
				k: "ᴋ",
				l: "ʟ",
				m: "ᴍ",
				n: "ɴ",
				o: "ᴏ",
				p: "ᴘ",
				q: "ǫ",
				r: "ʀ",
				s: "s",
				t: "ᴛ",
				u: "ᴜ",
				v: "ᴠ",
				w: "ᴡ",
				x: "x",
				y: "ʏ",
				z: "ᴢ"
			});
			varNameFonts = ["mathrm", "mathit"];
			isLongVariableName = (group, font) => {
				if (!varNameFonts.includes(font) || !group.body || group.body.type !== "ordgroup" || group.body.body.length === 1) return false;
				if (group.body.body[0].type !== "mathord") return false;
				for (let i = 1; i < group.body.body.length; i++) {
					const parseNodeType = group.body.body[i].type;
					if (!(parseNodeType === "mathord" || parseNodeType === "textord" && !isNaN(group.body.body[i].text))) return false;
				}
				return true;
			};
			mathmlBuilder$6 = (group, style) => {
				const font = group.font;
				const newStyle = style.withFont(font);
				const mathGroup = buildGroup$1(group.body, newStyle);
				if (mathGroup.children.length === 0) return mathGroup;
				if (font === "boldsymbol" && [
					"mo",
					"mpadded",
					"mrow"
				].includes(mathGroup.type)) {
					mathGroup.style.fontWeight = "bold";
					return mathGroup;
				}
				if (isLongVariableName(group, font)) {
					const mi = mathGroup.children[0].children[0].children ? mathGroup.children[0].children[0] : mathGroup.children[0];
					delete mi.attributes.mathvariant;
					for (let i = 1; i < mathGroup.children.length; i++) mi.children[0].text += mathGroup.children[i].children[0].children ? mathGroup.children[i].children[0].children[0].text : mathGroup.children[i].children[0].text;
					if (font === "mathit") {
						mi.children[0].text = mi.children[0].text.split("").map((c) => variantChar(c, "italic")).join("");
						return mi;
					}
					const mpadded = new MathNode("mpadded", [mi]);
					mpadded.setAttribute("lspace", "0");
					return mpadded;
				}
				let canConsolidate = mathGroup.children[0].type === "mo";
				for (let i = 1; i < mathGroup.children.length; i++) {
					if (mathGroup.children[i].type === "mo" && font === "boldsymbol") mathGroup.children[i].style.fontWeight = "bold";
					if (mathGroup.children[i].type !== "mi") canConsolidate = false;
					if ((mathGroup.children[i].attributes && mathGroup.children[i].attributes.mathvariant || "") !== "normal") canConsolidate = false;
				}
				if (!canConsolidate) return mathGroup;
				const mi = mathGroup.children[0];
				for (let i = 1; i < mathGroup.children.length; i++) mi.children.push(mathGroup.children[i].children[0]);
				if (mi.attributes.mathvariant && mi.attributes.mathvariant === "normal") {
					const bogus = new MathNode("mtext", new TextNode("​"));
					return new MathNode("mrow", [bogus, mi]);
				}
				return mi;
			};
			fontAliases = {
				"\\Bbb": "\\mathbb",
				"\\bold": "\\mathbf",
				"\\frak": "\\mathfrak",
				"\\bm": "\\boldsymbol"
			};
			defineFunction({
				type: "font",
				names: [
					"\\mathrm",
					"\\mathit",
					"\\mathbf",
					"\\mathnormal",
					"\\up@greek",
					"\\boldsymbol",
					"\\mathbb",
					"\\mathcal",
					"\\mathfrak",
					"\\mathscr",
					"\\mathsf",
					"\\mathsfit",
					"\\mathtt",
					"\\Bbb",
					"\\bm",
					"\\bold",
					"\\frak"
				],
				props: {
					numArgs: 1,
					allowedInArgument: true
				},
				handler: ({ parser, funcName }, args) => {
					const body = normalizeArgument(args[0]);
					let func = funcName;
					if (func in fontAliases) func = fontAliases[func];
					return {
						type: "font",
						mode: parser.mode,
						font: func.slice(1),
						body
					};
				},
				mathmlBuilder: mathmlBuilder$6
			});
			defineFunction({
				type: "font",
				names: [
					"\\rm",
					"\\sf",
					"\\tt",
					"\\bf",
					"\\it",
					"\\cal"
				],
				props: {
					numArgs: 0,
					allowedInText: true
				},
				handler: ({ parser, funcName, breakOnTokenText }, args) => {
					const { mode } = parser;
					const body = parser.parseExpression(true, breakOnTokenText, true);
					return {
						type: "font",
						mode,
						font: `math${funcName.slice(1)}`,
						body: {
							type: "ordgroup",
							mode: parser.mode,
							body
						}
					};
				},
				mathmlBuilder: mathmlBuilder$6
			});
			stylArray = [
				"display",
				"text",
				"script",
				"scriptscript"
			];
			scriptLevel = {
				auto: -1,
				display: 0,
				text: 0,
				script: 1,
				scriptscript: 2
			};
			adjustStyle = (functionSize, originalStyle) => {
				let style = originalStyle;
				if (functionSize === "display") {
					const newSize = style.level >= StyleLevel.SCRIPT ? StyleLevel.TEXT : StyleLevel.DISPLAY;
					style = style.withLevel(newSize);
				} else if (functionSize === "text" && style.level === StyleLevel.DISPLAY) style = style.withLevel(StyleLevel.TEXT);
				else if (functionSize === "auto") style = style.incrementLevel();
				else if (functionSize === "script") style = style.withLevel(StyleLevel.SCRIPT);
				else if (functionSize === "scriptscript") style = style.withLevel(StyleLevel.SCRIPTSCRIPT);
				return style;
			};
			mathmlBuilder$5 = (group, style) => {
				style = adjustStyle(group.scriptLevel, style);
				const numer = buildGroup$1(group.numer, style);
				const denom = buildGroup$1(group.denom, style);
				if (style.level === 3) {
					numer.style.mathDepth = "2";
					numer.setAttribute("scriptlevel", "2");
					denom.style.mathDepth = "2";
					denom.setAttribute("scriptlevel", "2");
				}
				let node = new MathNode("mfrac", [numer, denom]);
				if (!group.hasBarLine) node.setAttribute("linethickness", "0px");
				else if (group.barSize) {
					const ruleWidth = calculateSize(group.barSize, style);
					node.setAttribute("linethickness", ruleWidth.number + ruleWidth.unit);
				}
				if (group.leftDelim != null || group.rightDelim != null) {
					const withDelims = [];
					if (group.leftDelim != null) {
						const leftOp = new MathNode("mo", [new TextNode(group.leftDelim.replace("\\", ""))]);
						leftOp.setAttribute("fence", "true");
						withDelims.push(leftOp);
					}
					withDelims.push(node);
					if (group.rightDelim != null) {
						const rightOp = new MathNode("mo", [new TextNode(group.rightDelim.replace("\\", ""))]);
						rightOp.setAttribute("fence", "true");
						withDelims.push(rightOp);
					}
					node = makeRow(withDelims);
				}
				if (group.scriptLevel !== "auto") {
					node = new MathNode("mstyle", [node]);
					node.setAttribute("displaystyle", String(group.scriptLevel === "display"));
					node.setAttribute("scriptlevel", scriptLevel[group.scriptLevel]);
				}
				return node;
			};
			defineFunction({
				type: "genfrac",
				names: [
					"\\cfrac",
					"\\dfrac",
					"\\frac",
					"\\tfrac",
					"\\dbinom",
					"\\binom",
					"\\tbinom",
					"\\\\atopfrac",
					"\\\\bracefrac",
					"\\\\brackfrac"
				],
				props: {
					numArgs: 2,
					allowedInArgument: true
				},
				handler: ({ parser, funcName }, args) => {
					const numer = args[0];
					const denom = args[1];
					let hasBarLine = false;
					let leftDelim = null;
					let rightDelim = null;
					let scriptLevel = "auto";
					switch (funcName) {
						case "\\cfrac":
						case "\\dfrac":
						case "\\frac":
						case "\\tfrac":
							hasBarLine = true;
							break;
						case "\\\\atopfrac":
							hasBarLine = false;
							break;
						case "\\dbinom":
						case "\\binom":
						case "\\tbinom":
							leftDelim = "(";
							rightDelim = ")";
							break;
						case "\\\\bracefrac":
							leftDelim = "\\{";
							rightDelim = "\\}";
							break;
						case "\\\\brackfrac":
							leftDelim = "[";
							rightDelim = "]";
							break;
						default: throw new Error("Unrecognized genfrac command");
					}
					if (funcName === "\\cfrac" || funcName.startsWith("\\d")) scriptLevel = "display";
					else if (funcName.startsWith("\\t")) scriptLevel = "text";
					return {
						type: "genfrac",
						mode: parser.mode,
						continued: false,
						numer,
						denom,
						hasBarLine,
						leftDelim,
						rightDelim,
						scriptLevel,
						barSize: null
					};
				},
				mathmlBuilder: mathmlBuilder$5
			});
			defineFunction({
				type: "infix",
				names: [
					"\\over",
					"\\choose",
					"\\atop",
					"\\brace",
					"\\brack"
				],
				props: {
					numArgs: 0,
					infix: true
				},
				handler({ parser, funcName, token }) {
					let replaceWith;
					switch (funcName) {
						case "\\over":
							replaceWith = "\\frac";
							break;
						case "\\choose":
							replaceWith = "\\binom";
							break;
						case "\\atop":
							replaceWith = "\\\\atopfrac";
							break;
						case "\\brace":
							replaceWith = "\\\\bracefrac";
							break;
						case "\\brack":
							replaceWith = "\\\\brackfrac";
							break;
						default: throw new Error("Unrecognized infix genfrac command");
					}
					return {
						type: "infix",
						mode: parser.mode,
						replaceWith,
						token
					};
				}
			});
			delimFromValue = function(delimString) {
				let delim = null;
				if (delimString.length > 0) {
					delim = delimString;
					delim = delim === "." ? null : delim;
				}
				return delim;
			};
			defineFunction({
				type: "genfrac",
				names: ["\\genfrac"],
				props: {
					numArgs: 6,
					allowedInArgument: true,
					argTypes: [
						"math",
						"math",
						"size",
						"text",
						"math",
						"math"
					]
				},
				handler({ parser }, args) {
					const numer = args[4];
					const denom = args[5];
					const leftNode = normalizeArgument(args[0]);
					const leftDelim = leftNode.type === "atom" && leftNode.family === "open" ? delimFromValue(leftNode.text) : null;
					const rightNode = normalizeArgument(args[1]);
					const rightDelim = rightNode.type === "atom" && rightNode.family === "close" ? delimFromValue(rightNode.text) : null;
					const barNode = assertNodeType(args[2], "size");
					let hasBarLine;
					let barSize = null;
					if (barNode.isBlank) hasBarLine = true;
					else {
						barSize = barNode.value;
						hasBarLine = barSize.number > 0;
					}
					let scriptLevel = "auto";
					let styl = args[3];
					if (styl.type === "ordgroup") {
						if (styl.body.length > 0) {
							const textOrd = assertNodeType(styl.body[0], "textord");
							scriptLevel = stylArray[Number(textOrd.text)];
						}
					} else {
						styl = assertNodeType(styl, "textord");
						scriptLevel = stylArray[Number(styl.text)];
					}
					return {
						type: "genfrac",
						mode: parser.mode,
						numer,
						denom,
						continued: false,
						hasBarLine,
						barSize,
						leftDelim,
						rightDelim,
						scriptLevel
					};
				},
				mathmlBuilder: mathmlBuilder$5
			});
			defineFunction({
				type: "infix",
				names: ["\\above"],
				props: {
					numArgs: 1,
					argTypes: ["size"],
					infix: true
				},
				handler({ parser, funcName, token }, args) {
					return {
						type: "infix",
						mode: parser.mode,
						replaceWith: "\\\\abovefrac",
						barSize: assertNodeType(args[0], "size").value,
						token
					};
				}
			});
			defineFunction({
				type: "genfrac",
				names: ["\\\\abovefrac"],
				props: {
					numArgs: 3,
					argTypes: [
						"math",
						"size",
						"math"
					]
				},
				handler: ({ parser, funcName }, args) => {
					const numer = args[0];
					const barSize = assert(assertNodeType(args[1], "infix").barSize);
					const denom = args[2];
					const hasBarLine = barSize.number > 0;
					return {
						type: "genfrac",
						mode: parser.mode,
						numer,
						denom,
						continued: false,
						hasBarLine,
						barSize,
						leftDelim: null,
						rightDelim: null,
						scriptLevel: "auto"
					};
				},
				mathmlBuilder: mathmlBuilder$5
			});
			defineFunction({
				type: "hbox",
				names: ["\\hbox"],
				props: {
					numArgs: 1,
					argTypes: ["hbox"],
					allowedInArgument: true,
					allowedInText: false
				},
				handler({ parser }, args) {
					return {
						type: "hbox",
						mode: parser.mode,
						body: ordargument(args[0])
					};
				},
				mathmlBuilder(group, style) {
					const newStyle = style.withLevel(StyleLevel.TEXT);
					const mrow = buildExpressionRow(group.body, newStyle);
					return consolidateText(mrow);
				}
			});
			mathmlBuilder$4 = (group, style) => {
				const accentNode = mathMLnode(group.label);
				accentNode.style["math-depth"] = 0;
				return new MathNode(group.isOver ? "mover" : "munder", [buildGroup$1(group.base, style), accentNode]);
			};
			defineFunction({
				type: "horizBracket",
				names: [
					"\\overbrace",
					"\\underbrace",
					"\\overbracket",
					"\\underbracket"
				],
				props: { numArgs: 1 },
				handler({ parser, funcName }, args) {
					return {
						type: "horizBracket",
						mode: parser.mode,
						label: funcName,
						isOver: /^\\over/.test(funcName),
						base: args[0]
					};
				},
				mathmlBuilder: mathmlBuilder$4
			});
			defineFunction({
				type: "html",
				names: [
					"\\class",
					"\\id",
					"\\style",
					"\\data"
				],
				props: {
					numArgs: 2,
					argTypes: ["raw", "original"],
					allowedInText: true
				},
				handler: ({ parser, funcName, token }, args) => {
					const value = assertNodeType(args[0], "raw").string;
					const body = args[1];
					if (parser.settings.strict) throw new ParseError(`Function "${funcName}" is disabled in strict mode`, token);
					let trustContext;
					const attributes = {};
					switch (funcName) {
						case "\\class":
							attributes.class = value;
							trustContext = {
								command: "\\class",
								class: value
							};
							break;
						case "\\id":
							attributes.id = value;
							trustContext = {
								command: "\\id",
								id: value
							};
							break;
						case "\\style":
							attributes.style = value;
							trustContext = {
								command: "\\style",
								style: value
							};
							break;
						case "\\data": {
							const data = value.split(",");
							for (let i = 0; i < data.length; i++) {
								const keyVal = data[i].split("=");
								if (keyVal.length !== 2) throw new ParseError("Error parsing key-value for \\data");
								attributes["data-" + keyVal[0].trim()] = keyVal[1].trim();
							}
							trustContext = {
								command: "\\data",
								attributes
							};
							break;
						}
						default: throw new Error("Unrecognized html command");
					}
					if (!parser.settings.isTrusted(trustContext)) throw new ParseError(`Function "${funcName}" is not trusted`, token);
					return {
						type: "html",
						mode: parser.mode,
						attributes,
						body: ordargument(body)
					};
				},
				mathmlBuilder: (group, style) => {
					const element = buildExpressionRow(group.body, style);
					const classes = [];
					if (group.attributes.class) classes.push(...group.attributes.class.trim().split(/\s+/));
					element.classes = classes;
					for (const attr in group.attributes) if (attr !== "class" && Object.prototype.hasOwnProperty.call(group.attributes, attr)) element.setAttribute(attr, group.attributes[attr]);
					return element;
				}
			});
			sizeData = function(str) {
				if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(str)) return {
					number: +str,
					unit: "bp"
				};
				else {
					const match = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(str);
					if (!match) throw new ParseError("Invalid size: '" + str + "' in \\includegraphics");
					const data = {
						number: +(match[1] + match[2]),
						unit: match[3]
					};
					if (!validUnit(data)) throw new ParseError("Invalid unit: '" + data.unit + "' in \\includegraphics.");
					return data;
				}
			};
			defineFunction({
				type: "includegraphics",
				names: ["\\includegraphics"],
				props: {
					numArgs: 1,
					numOptionalArgs: 1,
					argTypes: ["raw", "url"],
					allowedInText: false
				},
				handler: ({ parser, token }, args, optArgs) => {
					let width = {
						number: 0,
						unit: "em"
					};
					let height = {
						number: .9,
						unit: "em"
					};
					let totalheight = {
						number: 0,
						unit: "em"
					};
					let alt = "";
					if (optArgs[0]) {
						const attributes = assertNodeType(optArgs[0], "raw").string.split(",");
						for (let i = 0; i < attributes.length; i++) {
							const keyVal = attributes[i].split("=");
							if (keyVal.length === 2) {
								const str = keyVal[1].trim();
								switch (keyVal[0].trim()) {
									case "alt":
										alt = str;
										break;
									case "width":
										width = sizeData(str);
										break;
									case "height":
										height = sizeData(str);
										break;
									case "totalheight":
										totalheight = sizeData(str);
										break;
									default: throw new ParseError("Invalid key: '" + keyVal[0] + "' in \\includegraphics.");
								}
							}
						}
					}
					const src = assertNodeType(args[0], "url").url;
					if (alt === "") {
						alt = src;
						alt = alt.replace(/^.*[\\/]/, "");
						alt = alt.substring(0, alt.lastIndexOf("."));
					}
					if (!parser.settings.isTrusted({
						command: "\\includegraphics",
						url: src
					})) throw new ParseError(`Function "\\includegraphics" is not trusted`, token);
					return {
						type: "includegraphics",
						mode: parser.mode,
						alt,
						width,
						height,
						totalheight,
						src
					};
				},
				mathmlBuilder: (group, style) => {
					const height = calculateSize(group.height, style);
					const depth = {
						number: 0,
						unit: "em"
					};
					if (group.totalheight.number > 0) {
						if (group.totalheight.unit === height.unit && group.totalheight.number > height.number) {
							depth.number = group.totalheight.number - height.number;
							depth.unit = height.unit;
						}
					}
					let width = 0;
					if (group.width.number > 0) width = calculateSize(group.width, style);
					const graphicStyle = { height: height.number + depth.number + "em" };
					if (width.number > 0) graphicStyle.width = width.number + width.unit;
					if (depth.number > 0) graphicStyle.verticalAlign = -depth.number + depth.unit;
					const node = new Img(group.src, group.alt, graphicStyle);
					node.height = height;
					node.depth = depth;
					return new MathNode("mtext", [node]);
				}
			});
			defineFunction({
				type: "kern",
				names: [
					"\\kern",
					"\\mkern",
					"\\hskip",
					"\\mskip"
				],
				props: {
					numArgs: 1,
					argTypes: ["size"],
					primitive: true,
					allowedInText: true
				},
				handler({ parser, funcName, token }, args) {
					const size = assertNodeType(args[0], "size");
					if (parser.settings.strict) {
						const mathFunction = funcName[1] === "m";
						const muUnit = size.value.unit === "mu";
						if (mathFunction) {
							if (!muUnit) throw new ParseError(`LaTeX's ${funcName} supports only mu units, not ${size.value.unit} units`, token);
							if (parser.mode !== "math") throw new ParseError(`LaTeX's ${funcName} works only in math mode`, token);
						} else if (muUnit) throw new ParseError(`LaTeX's ${funcName} doesn't support mu units`, token);
					}
					return {
						type: "kern",
						mode: parser.mode,
						dimension: size.value
					};
				},
				mathmlBuilder(group, style) {
					const dimension = calculateSize(group.dimension, style);
					const ch = dimension.number > 0 && dimension.unit === "em" ? spaceCharacter(dimension.number) : "";
					if (group.mode === "text" && ch.length > 0) {
						const character = new TextNode(ch);
						return new MathNode("mtext", [character]);
					} else if (dimension.number >= 0) {
						const node = new MathNode("mspace");
						node.setAttribute("width", dimension.number + dimension.unit);
						return node;
					} else {
						const node = new MathNode("mrow");
						node.style.marginLeft = dimension.number + dimension.unit;
						return node;
					}
				}
			});
			spaceCharacter = function(width) {
				if (width >= .05555 && width <= .05556) return " ";
				else if (width >= .1666 && width <= .1667) return " ";
				else if (width >= .2222 && width <= .2223) return " ";
				else if (width >= .2777 && width <= .2778) return "  ";
				else return "";
			};
			invalidIdRegEx = /[^A-Za-z_0-9-]/g;
			defineFunction({
				type: "label",
				names: ["\\label"],
				props: {
					numArgs: 1,
					argTypes: ["raw"]
				},
				handler({ parser }, args) {
					return {
						type: "label",
						mode: parser.mode,
						string: args[0].string.replace(invalidIdRegEx, "")
					};
				},
				mathmlBuilder(group, style) {
					const node = new MathNode("mrow", [], ["tml-label"]);
					if (group.string.length > 0) node.setLabel(group.string);
					return node;
				}
			});
			textModeLap = [
				"\\clap",
				"\\llap",
				"\\rlap"
			];
			defineFunction({
				type: "lap",
				names: [
					"\\mathllap",
					"\\mathrlap",
					"\\mathclap",
					"\\clap",
					"\\llap",
					"\\rlap"
				],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler: ({ parser, funcName, token }, args) => {
					if (textModeLap.includes(funcName)) {
						if (parser.settings.strict && parser.mode !== "text") throw new ParseError(`{${funcName}} can be used only in text mode.
 Try \\math${funcName.slice(1)}`, token);
						funcName = funcName.slice(1);
					} else funcName = funcName.slice(5);
					const body = args[0];
					return {
						type: "lap",
						mode: parser.mode,
						alignment: funcName,
						body
					};
				},
				mathmlBuilder: (group, style) => {
					let strut;
					if (group.alignment === "llap") {
						const phantomInner = buildExpression(ordargument(group.body), style);
						const phantom = new MathNode("mphantom", phantomInner);
						strut = new MathNode("mpadded", [phantom]);
						strut.setAttribute("width", "0.1px");
					}
					const inner = buildGroup$1(group.body, style);
					let node;
					if (group.alignment === "llap") {
						inner.style.position = "absolute";
						inner.style.right = "0";
						inner.style.bottom = `0`;
						node = new MathNode("mpadded", [strut, inner]);
					} else node = new MathNode("mpadded", [inner]);
					if (group.alignment === "rlap") {
						if (group.body.body.length > 0 && group.body.body[0].type === "genfrac") node.setAttribute("lspace", "0.16667em");
					} else {
						const offset = group.alignment === "llap" ? "-1" : "-0.5";
						node.setAttribute("lspace", offset + "width");
						if (group.alignment === "llap") node.style.position = "relative";
						else {
							node.style.display = "flex";
							node.style.justifyContent = "center";
						}
					}
					node.setAttribute("width", "0.1px");
					return node;
				}
			});
			defineFunction({
				type: "ordgroup",
				names: ["\\(", "$"],
				props: {
					numArgs: 0,
					allowedInText: true,
					allowedInMath: false
				},
				handler({ funcName, parser }, args) {
					const outerMode = parser.mode;
					parser.switchMode("math");
					const close = funcName === "\\(" ? "\\)" : "$";
					const body = parser.parseExpression(false, close);
					parser.expect(close);
					parser.switchMode(outerMode);
					return {
						type: "ordgroup",
						mode: parser.mode,
						body
					};
				}
			});
			defineFunction({
				type: "text",
				names: ["\\)", "\\]"],
				props: {
					numArgs: 0,
					allowedInText: true,
					allowedInMath: false
				},
				handler(context, token) {
					throw new ParseError(`Mismatched ${context.funcName}`, token);
				}
			});
			chooseStyle = (group, style) => {
				switch (style.level) {
					case StyleLevel.DISPLAY: return group.display;
					case StyleLevel.TEXT: return group.text;
					case StyleLevel.SCRIPT: return group.script;
					case StyleLevel.SCRIPTSCRIPT: return group.scriptscript;
					default: return group.text;
				}
			};
			defineFunction({
				type: "mathchoice",
				names: ["\\mathchoice"],
				props: {
					numArgs: 4,
					primitive: true
				},
				handler: ({ parser }, args) => {
					return {
						type: "mathchoice",
						mode: parser.mode,
						display: ordargument(args[0]),
						text: ordargument(args[1]),
						script: ordargument(args[2]),
						scriptscript: ordargument(args[3])
					};
				},
				mathmlBuilder: (group, style) => {
					const body = chooseStyle(group, style);
					return buildExpressionRow(body, style);
				}
			});
			textAtomTypes = [
				"text",
				"textord",
				"mathord",
				"atom"
			];
			defineFunction({
				type: "mclass",
				names: [
					"\\mathord",
					"\\mathbin",
					"\\mathrel",
					"\\mathopen",
					"\\mathclose",
					"\\mathpunct",
					"\\mathinner"
				],
				props: {
					numArgs: 1,
					primitive: true
				},
				handler({ parser, funcName }, args) {
					const body = args[0];
					const isCharacterBox$1 = isCharacterBox(body);
					let mustPromote = true;
					const mord = {
						type: "mathord",
						text: "",
						mode: parser.mode
					};
					const arr = body.body ? body.body : [body];
					for (const arg of arr) if (textAtomTypes.includes(arg.type)) {
						if (symbols[parser.mode][arg.text]) mord.text += symbols[parser.mode][arg.text].replace;
						else if (arg.text) mord.text += arg.text;
						else if (arg.body) arg.body.map((e) => {
							mord.text += e.text;
						});
					} else {
						mustPromote = false;
						break;
					}
					if (mustPromote && funcName === "\\mathord" && mord.type === "mathord" && mord.text.length > 1) return mord;
					else return {
						type: "mclass",
						mode: parser.mode,
						mclass: "m" + funcName.slice(5),
						body: ordargument(mustPromote ? mord : body),
						isCharacterBox: isCharacterBox$1,
						mustPromote
					};
				},
				mathmlBuilder: mathmlBuilder$3
			});
			binrelClass = (arg) => {
				const atom = arg.type === "ordgroup" && arg.body.length && arg.body.length === 1 ? arg.body[0] : arg;
				if (atom.type === "atom") {
					const family = arg.body.length > 0 && arg.body[0].text && symbols.math[arg.body[0].text] ? symbols.math[arg.body[0].text].group : atom.family;
					if (family === "bin" || family === "rel") return "m" + family;
					else return "mord";
				} else return "mord";
			};
			defineFunction({
				type: "mclass",
				names: ["\\@binrel"],
				props: { numArgs: 2 },
				handler({ parser }, args) {
					return {
						type: "mclass",
						mode: parser.mode,
						mclass: binrelClass(args[0]),
						body: ordargument(args[1]),
						isCharacterBox: isCharacterBox(args[1])
					};
				}
			});
			defineFunction({
				type: "mclass",
				names: [
					"\\stackrel",
					"\\overset",
					"\\underset"
				],
				props: { numArgs: 2 },
				handler({ parser, funcName }, args) {
					const baseArg = args[1];
					const shiftedArg = args[0];
					let mclass;
					if (funcName !== "\\stackrel") mclass = binrelClass(baseArg);
					else mclass = "mrel";
					const baseOp = {
						type: mclass === "mrel" || mclass === "mbin" ? "op" : "ordgroup",
						mode: baseArg.mode,
						limits: true,
						alwaysHandleSupSub: true,
						parentIsSupSub: false,
						symbol: false,
						suppressBaseShift: funcName !== "\\stackrel",
						body: ordargument(baseArg)
					};
					return {
						type: "supsub",
						mode: shiftedArg.mode,
						stack: true,
						base: baseOp,
						sup: funcName === "\\underset" ? null : shiftedArg,
						sub: funcName === "\\underset" ? shiftedArg : null
					};
				},
				mathmlBuilder: mathmlBuilder$3
			});
			buildGroup = (el, style, noneNode) => {
				if (!el) return noneNode;
				const node = buildGroup$1(el, style);
				if (node.type === "mrow" && node.children.length === 0) return noneNode;
				return node;
			};
			defineFunction({
				type: "multiscript",
				names: ["\\sideset", "\\pres@cript"],
				props: { numArgs: 3 },
				handler({ parser, funcName, token }, args) {
					if (args[2].body.length === 0) throw new ParseError(funcName + `cannot parse an empty base.`);
					const base = args[2].body[0];
					if (parser.settings.strict && funcName === "\\sideset" && !base.symbol) throw new ParseError(`The base of \\sideset must be a big operator. Try \\prescript.`);
					if (args[0].body.length > 0 && args[0].body[0].type !== "supsub" || args[1].body.length > 0 && args[1].body[0].type !== "supsub") throw new ParseError("\\sideset can parse only subscripts and superscripts in its first two arguments", token);
					const prescripts = args[0].body.length > 0 ? args[0].body[0] : null;
					const postscripts = args[1].body.length > 0 ? args[1].body[0] : null;
					if (!prescripts && !postscripts) return base;
					else if (!prescripts) return {
						type: "styling",
						mode: parser.mode,
						scriptLevel: "text",
						body: [{
							type: "supsub",
							mode: parser.mode,
							base,
							sup: postscripts.sup,
							sub: postscripts.sub
						}]
					};
					else return {
						type: "multiscript",
						mode: parser.mode,
						isSideset: funcName === "\\sideset",
						prescripts,
						postscripts,
						base
					};
				},
				mathmlBuilder(group, style) {
					const base = buildGroup$1(group.base, style);
					const prescriptsNode = new MathNode("mprescripts");
					const noneNode = new MathNode("none");
					let children = [];
					const preSub = buildGroup(group.prescripts.sub, style, noneNode);
					const preSup = buildGroup(group.prescripts.sup, style, noneNode);
					if (group.isSideset) {
						preSub.setAttribute("style", "text-align: left;");
						preSup.setAttribute("style", "text-align: left;");
					}
					if (group.postscripts) children = [
						base,
						buildGroup(group.postscripts.sub, style, noneNode),
						buildGroup(group.postscripts.sup, style, noneNode),
						prescriptsNode,
						preSub,
						preSup
					];
					else children = [
						base,
						prescriptsNode,
						preSub,
						preSup
					];
					return new MathNode("mmultiscripts", children);
				}
			});
			defineFunction({
				type: "not",
				names: ["\\not"],
				props: {
					numArgs: 1,
					primitive: true,
					allowedInText: false
				},
				handler({ parser }, args) {
					const isCharacterBox$1 = isCharacterBox(args[0]);
					let body;
					if (isCharacterBox$1) {
						body = ordargument(args[0]);
						if (body[0].text.charAt(0) === "\\") body[0].text = symbols.math[body[0].text].replace;
						body[0].text = body[0].text.slice(0, 1) + "̸" + body[0].text.slice(1);
					} else body = [
						{
							type: "textord",
							mode: "math",
							text: "̸"
						},
						{
							type: "kern",
							mode: "math",
							dimension: {
								number: -.6,
								unit: "em"
							}
						},
						args[0]
					];
					return {
						type: "not",
						mode: parser.mode,
						body,
						isCharacterBox: isCharacterBox$1
					};
				},
				mathmlBuilder(group, style) {
					if (group.isCharacterBox) return buildExpression(group.body, style, true)[0];
					else return buildExpressionRow(group.body, style);
				}
			});
			ordAtomTypes = [
				"textord",
				"mathord",
				"atom"
			];
			noSuccessor = ["\\smallint"];
			ordTypes = [
				"textord",
				"mathord",
				"ordgroup",
				"close",
				"leftright",
				"font"
			];
			setSpacing = (node) => {
				node.attributes.lspace = "0.1667em";
				node.attributes.rspace = "0.1667em";
			};
			mathmlBuilder$2 = (group, style) => {
				let node;
				if (group.symbol) {
					node = new MathNode("mo", [makeText(group.name, group.mode)]);
					if (noSuccessor.includes(group.name)) node.setAttribute("largeop", "false");
					else node.setAttribute("movablelimits", "false");
					if (group.fromMathOp) setSpacing(node);
				} else if (group.body) {
					node = new MathNode("mo", buildExpression(group.body, style));
					if (group.fromMathOp) setSpacing(node);
				} else {
					node = new MathNode("mi", [new TextNode(group.name.slice(1))]);
					if (!group.parentIsSupSub) {
						const operator = new MathNode("mo", [makeText("⁡", "text")]);
						const row = [node, operator];
						if (group.needsLeadingSpace) {
							const lead = new MathNode("mspace");
							lead.setAttribute("width", "0.1667em");
							row.unshift(lead);
						}
						if (!group.isFollowedByDelimiter) {
							const trail = new MathNode("mspace");
							trail.setAttribute("width", "0.1667em");
							row.push(trail);
						}
						node = new MathNode("mrow", row);
					}
				}
				return node;
			};
			singleCharBigOps = {
				"∏": "\\prod",
				"∐": "\\coprod",
				"∑": "\\sum",
				"⋀": "\\bigwedge",
				"⋁": "\\bigvee",
				"⋂": "\\bigcap",
				"⋃": "\\bigcup",
				"⨀": "\\bigodot",
				"⨁": "\\bigoplus",
				"⨂": "\\bigotimes",
				"⨄": "\\biguplus",
				"⨅": "\\bigsqcap",
				"⨆": "\\bigsqcup",
				"⨃": "\\bigcupdot",
				"⨇": "\\bigdoublevee",
				"⨈": "\\bigdoublewedge",
				"⨉": "\\bigtimes"
			};
			defineFunction({
				type: "op",
				names: [
					"\\coprod",
					"\\bigvee",
					"\\bigwedge",
					"\\biguplus",
					"\\bigcupplus",
					"\\bigcupdot",
					"\\bigcap",
					"\\bigcup",
					"\\bigdoublevee",
					"\\bigdoublewedge",
					"\\intop",
					"\\prod",
					"\\sum",
					"\\bigotimes",
					"\\bigoplus",
					"\\bigodot",
					"\\bigsqcap",
					"\\bigsqcup",
					"\\bigtimes",
					"\\smallint",
					"∏",
					"∐",
					"∑",
					"⋀",
					"⋁",
					"⋂",
					"⋃",
					"⨀",
					"⨁",
					"⨂",
					"⨃",
					"⨄",
					"⨅",
					"⨆",
					"⨇",
					"⨈",
					"⨉"
				],
				props: { numArgs: 0 },
				handler: ({ parser, funcName }, args) => {
					let fName = funcName;
					if (fName.length === 1) fName = singleCharBigOps[fName];
					return {
						type: "op",
						mode: parser.mode,
						limits: true,
						parentIsSupSub: false,
						symbol: true,
						stack: false,
						name: fName
					};
				},
				mathmlBuilder: mathmlBuilder$2
			});
			defineFunction({
				type: "op",
				names: ["\\mathop"],
				props: {
					numArgs: 1,
					primitive: true
				},
				handler: ({ parser }, args) => {
					const body = args[0];
					const arr = body.body ? body.body : [body];
					const isSymbol = arr.length === 1 && ordAtomTypes.includes(arr[0].type);
					return {
						type: "op",
						mode: parser.mode,
						limits: true,
						parentIsSupSub: false,
						symbol: isSymbol,
						fromMathOp: true,
						stack: false,
						name: isSymbol ? arr[0].text : null,
						body: isSymbol ? null : ordargument(body)
					};
				},
				mathmlBuilder: mathmlBuilder$2
			});
			singleCharIntegrals = {
				"∫": "\\int",
				"∬": "\\iint",
				"∭": "\\iiint",
				"∮": "\\oint",
				"∯": "\\oiint",
				"∰": "\\oiiint",
				"∱": "\\intclockwise",
				"∲": "\\varointclockwise",
				"⨌": "\\iiiint",
				"⨍": "\\intbar",
				"⨎": "\\intBar",
				"⨏": "\\fint",
				"⨒": "\\rppolint",
				"⨓": "\\scpolint",
				"⨕": "\\pointint",
				"⨖": "\\sqint",
				"⨗": "\\intlarhk",
				"⨘": "\\intx",
				"⨙": "\\intcap",
				"⨚": "\\intcup"
			};
			defineFunction({
				type: "op",
				names: [
					"\\arcsin",
					"\\arccos",
					"\\arctan",
					"\\arctg",
					"\\arcctg",
					"\\arg",
					"\\ch",
					"\\cos",
					"\\cosec",
					"\\cosh",
					"\\cot",
					"\\cotg",
					"\\coth",
					"\\csc",
					"\\ctg",
					"\\cth",
					"\\deg",
					"\\dim",
					"\\exp",
					"\\hom",
					"\\ker",
					"\\lg",
					"\\ln",
					"\\log",
					"\\sec",
					"\\sin",
					"\\sinh",
					"\\sh",
					"\\sgn",
					"\\tan",
					"\\tanh",
					"\\tg",
					"\\th"
				],
				props: { numArgs: 0 },
				handler({ parser, funcName }) {
					const prevAtomType = parser.prevAtomType;
					const next = parser.gullet.future().text;
					return {
						type: "op",
						mode: parser.mode,
						limits: false,
						parentIsSupSub: false,
						symbol: false,
						stack: false,
						isFollowedByDelimiter: isDelimiter(next),
						needsLeadingSpace: prevAtomType.length > 0 && ordTypes.includes(prevAtomType),
						name: funcName
					};
				},
				mathmlBuilder: mathmlBuilder$2
			});
			defineFunction({
				type: "op",
				names: [
					"\\det",
					"\\gcd",
					"\\inf",
					"\\lim",
					"\\max",
					"\\min",
					"\\Pr",
					"\\sup"
				],
				props: { numArgs: 0 },
				handler({ parser, funcName }) {
					const prevAtomType = parser.prevAtomType;
					const next = parser.gullet.future().text;
					return {
						type: "op",
						mode: parser.mode,
						limits: true,
						parentIsSupSub: false,
						symbol: false,
						stack: false,
						isFollowedByDelimiter: isDelimiter(next),
						needsLeadingSpace: prevAtomType.length > 0 && ordTypes.includes(prevAtomType),
						name: funcName
					};
				},
				mathmlBuilder: mathmlBuilder$2
			});
			defineFunction({
				type: "op",
				names: [
					"\\int",
					"\\iint",
					"\\iiint",
					"\\iiiint",
					"\\oint",
					"\\oiint",
					"\\oiiint",
					"\\intclockwise",
					"\\varointclockwise",
					"\\intbar",
					"\\intBar",
					"\\fint",
					"\\rppolint",
					"\\scpolint",
					"\\pointint",
					"\\sqint",
					"\\intlarhk",
					"\\intx",
					"\\intcap",
					"\\intcup",
					"∫",
					"∬",
					"∭",
					"∮",
					"∯",
					"∰",
					"∱",
					"∲",
					"⨌",
					"⨍",
					"⨎",
					"⨏",
					"⨒",
					"⨓",
					"⨕",
					"⨖",
					"⨗",
					"⨘",
					"⨙",
					"⨚"
				],
				props: {
					numArgs: 0,
					allowedInArgument: true
				},
				handler({ parser, funcName }) {
					let fName = funcName;
					if (fName.length === 1) fName = singleCharIntegrals[fName];
					return {
						type: "op",
						mode: parser.mode,
						limits: false,
						parentIsSupSub: false,
						symbol: true,
						stack: false,
						name: fName
					};
				},
				mathmlBuilder: mathmlBuilder$2
			});
			mathmlBuilder$1 = (group, style) => {
				let expression = buildExpression(group.body, style.withFont("mathrm"));
				let isAllString = true;
				for (let i = 0; i < expression.length; i++) {
					let node = expression[i];
					if (node instanceof MathNode) {
						if ((node.type === "mrow" || node.type === "mpadded") && node.children.length === 1 && node.children[0] instanceof MathNode) node = node.children[0];
						else if (node.type === "mrow" && node.children.length === 2 && node.children[0] instanceof MathNode && node.children[1] instanceof MathNode && node.children[1].type === "mspace" && !node.children[1].attributes.width && node.children[1].children.length === 0) node = node.children[0];
						switch (node.type) {
							case "mi":
							case "mn":
							case "ms":
							case "mtext": break;
							case "mspace":
								if (node.attributes.width) {
									const width = node.attributes.width.replace("em", "");
									const ch = spaceCharacter(Number(width));
									if (ch === "") isAllString = false;
									else expression[i] = new MathNode("mtext", [new TextNode(ch)]);
								}
								break;
							case "mo": {
								const child = node.children[0];
								if (node.children.length === 1 && child instanceof TextNode) child.text = child.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
								else isAllString = false;
								break;
							}
							default: isAllString = false;
						}
					} else isAllString = false;
				}
				if (isAllString) {
					const word = expression.map((node) => node.toText()).join("");
					expression = [new TextNode(word)];
				} else if (expression.length === 1 && ["mover", "munder"].includes(expression[0].type) && (expression[0].children[0].type === "mi" || expression[0].children[0].type === "mtext")) {
					expression[0].children[0].type = "mi";
					if (group.parentIsSupSub) return new MathNode("mrow", expression);
					else {
						const operator = new MathNode("mo", [makeText("⁡", "text")]);
						return newDocumentFragment([expression[0], operator]);
					}
				}
				let wrapper;
				if (isAllString) {
					wrapper = new MathNode("mi", expression);
					if (expression[0].text.length === 1) wrapper.setAttribute("mathvariant", "normal");
				} else wrapper = new MathNode("mrow", expression);
				if (!group.parentIsSupSub) {
					const operator = new MathNode("mo", [makeText("⁡", "text")]);
					const fragment = [wrapper, operator];
					if (group.needsLeadingSpace) {
						const space = new MathNode("mspace");
						space.setAttribute("width", "0.1667em");
						fragment.unshift(space);
					}
					if (!group.isFollowedByDelimiter) {
						const trail = new MathNode("mspace");
						trail.setAttribute("width", "0.1667em");
						fragment.push(trail);
					}
					return newDocumentFragment(fragment);
				}
				return wrapper;
			};
			defineFunction({
				type: "operatorname",
				names: ["\\operatorname@", "\\operatornamewithlimits"],
				props: {
					numArgs: 1,
					allowedInArgument: true
				},
				handler: ({ parser, funcName }, args) => {
					const body = args[0];
					const prevAtomType = parser.prevAtomType;
					const next = parser.gullet.future().text;
					return {
						type: "operatorname",
						mode: parser.mode,
						body: ordargument(body),
						alwaysHandleSupSub: funcName === "\\operatornamewithlimits",
						limits: false,
						parentIsSupSub: false,
						isFollowedByDelimiter: isDelimiter(next),
						needsLeadingSpace: prevAtomType.length > 0 && ordTypes.includes(prevAtomType)
					};
				},
				mathmlBuilder: mathmlBuilder$1
			});
			defineMacro("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
			defineFunctionBuilders({
				type: "ordgroup",
				mathmlBuilder(group, style) {
					return buildExpressionRow(group.body, style, group.semisimple);
				}
			});
			defineFunction({
				type: "phantom",
				names: ["\\phantom"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler: ({ parser }, args) => {
					const body = args[0];
					return {
						type: "phantom",
						mode: parser.mode,
						body: ordargument(body)
					};
				},
				mathmlBuilder: (group, style) => {
					const inner = buildExpression(group.body, style);
					return new MathNode("mphantom", inner);
				}
			});
			defineFunction({
				type: "hphantom",
				names: ["\\hphantom"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler: ({ parser }, args) => {
					const body = args[0];
					return {
						type: "hphantom",
						mode: parser.mode,
						body
					};
				},
				mathmlBuilder: (group, style) => {
					const inner = buildExpression(ordargument(group.body), style);
					const phantom = new MathNode("mphantom", inner);
					const node = new MathNode("mpadded", [phantom]);
					node.setAttribute("height", "0px");
					node.setAttribute("depth", "0px");
					return node;
				}
			});
			defineFunction({
				type: "vphantom",
				names: ["\\vphantom"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler: ({ parser }, args) => {
					const body = args[0];
					return {
						type: "vphantom",
						mode: parser.mode,
						body
					};
				},
				mathmlBuilder: (group, style) => {
					const inner = buildExpression(ordargument(group.body), style);
					const phantom = new MathNode("mphantom", inner);
					const node = new MathNode("mpadded", [phantom]);
					node.setAttribute("width", "0.1px");
					return node;
				}
			});
			defineFunction({
				type: "pmb",
				names: ["\\pmb"],
				props: {
					numArgs: 1,
					allowedInText: true
				},
				handler({ parser }, args) {
					return {
						type: "pmb",
						mode: parser.mode,
						body: ordargument(args[0])
					};
				},
				mathmlBuilder(group, style) {
					const inner = buildExpression(group.body, style);
					const node = wrapWithMstyle(inner);
					node.setAttribute("style", "font-weight:bold");
					return node;
				}
			});
			mathmlBuilder = (group, style) => {
				const newStyle = style.withLevel(StyleLevel.TEXT);
				const node = new MathNode("mpadded", [buildGroup$1(group.body, newStyle)]);
				const dy = calculateSize(group.dy, style);
				node.setAttribute("voffset", dy.number + dy.unit);
				if (dy.number > 0) node.style.padding = dy.number + dy.unit + " 0 0 0";
				else node.style.padding = "0 0 " + Math.abs(dy.number) + dy.unit + " 0";
				return node;
			};
			defineFunction({
				type: "raise",
				names: ["\\raise", "\\lower"],
				props: {
					numArgs: 2,
					argTypes: ["size", "primitive"],
					primitive: true
				},
				handler({ parser, funcName }, args) {
					const amount = assertNodeType(args[0], "size").value;
					if (funcName === "\\lower") amount.number *= -1;
					const body = args[1];
					return {
						type: "raise",
						mode: parser.mode,
						dy: amount,
						body
					};
				},
				mathmlBuilder
			});
			defineFunction({
				type: "raise",
				names: ["\\raisebox"],
				props: {
					numArgs: 2,
					argTypes: ["size", "hbox"],
					allowedInText: true
				},
				handler({ parser, funcName }, args) {
					const amount = assertNodeType(args[0], "size").value;
					const body = args[1];
					return {
						type: "raise",
						mode: parser.mode,
						dy: amount,
						body
					};
				},
				mathmlBuilder
			});
			defineFunction({
				type: "ref",
				names: ["\\ref", "\\eqref"],
				props: {
					numArgs: 1,
					argTypes: ["raw"]
				},
				handler({ parser, funcName }, args) {
					return {
						type: "ref",
						mode: parser.mode,
						funcName,
						string: args[0].string.replace(invalidIdRegEx, "")
					};
				},
				mathmlBuilder(group, style) {
					const classes = group.funcName === "\\ref" ? ["tml-ref"] : ["tml-ref", "tml-eqref"];
					return new AnchorNode("#" + group.string, classes, null);
				}
			});
			defineFunction({
				type: "reflect",
				names: ["\\reflectbox"],
				props: {
					numArgs: 1,
					argTypes: ["hbox"],
					allowedInText: true
				},
				handler({ parser }, args) {
					return {
						type: "reflect",
						mode: parser.mode,
						body: args[0]
					};
				},
				mathmlBuilder(group, style) {
					const node = buildGroup$1(group.body, style);
					node.style.transform = "scaleX(-1)";
					return node;
				}
			});
			defineFunction({
				type: "internal",
				names: ["\\relax"],
				props: {
					numArgs: 0,
					allowedInText: true,
					allowedInArgument: true
				},
				handler({ parser }) {
					return {
						type: "internal",
						mode: parser.mode
					};
				}
			});
			defineFunction({
				type: "rule",
				names: ["\\rule"],
				props: {
					numArgs: 2,
					numOptionalArgs: 1,
					allowedInText: true,
					allowedInMath: true,
					argTypes: [
						"size",
						"size",
						"size"
					]
				},
				handler({ parser }, args, optArgs) {
					const shift = optArgs[0];
					const width = assertNodeType(args[0], "size");
					const height = assertNodeType(args[1], "size");
					return {
						type: "rule",
						mode: parser.mode,
						shift: shift && assertNodeType(shift, "size").value,
						width: width.value,
						height: height.value
					};
				},
				mathmlBuilder(group, style) {
					const width = calculateSize(group.width, style);
					const height = calculateSize(group.height, style);
					const shift = group.shift ? calculateSize(group.shift, style) : {
						number: 0,
						unit: "em"
					};
					const color = style.color && style.getColor() || "black";
					const rule = new MathNode("mspace");
					if (width.number > 0 && height.number > 0) rule.setAttribute("mathbackground", color);
					rule.setAttribute("width", width.number + width.unit);
					rule.setAttribute("height", height.number + height.unit);
					if (shift.number === 0) return rule;
					const wrapper = new MathNode("mpadded", [rule]);
					if (shift.number >= 0) wrapper.setAttribute("height", "+" + shift.number + shift.unit);
					else {
						wrapper.setAttribute("height", shift.number + shift.unit);
						wrapper.setAttribute("depth", "+" + -shift.number + shift.unit);
					}
					wrapper.setAttribute("voffset", shift.number + shift.unit);
					return wrapper;
				}
			});
			numRegEx = /^[0-9]$/;
			unicodeNumSubs = {
				"0": "₀",
				"1": "₁",
				"2": "₂",
				"3": "₃",
				"4": "₄",
				"5": "₅",
				"6": "₆",
				"7": "₇",
				"8": "₈",
				"9": "₉"
			};
			unicodeNumSups = {
				"0": "⁰",
				"1": "¹",
				"2": "²",
				"3": "³",
				"4": "⁴",
				"5": "⁵",
				"6": "⁶",
				"7": "⁷",
				"8": "⁸",
				"9": "⁹"
			};
			defineFunction({
				type: "sfrac",
				names: ["\\sfrac"],
				props: {
					numArgs: 2,
					allowedInText: true,
					allowedInMath: true
				},
				handler({ parser }, args) {
					let numerator = "";
					for (const node of args[0].body) {
						if (node.type !== "textord" || !numRegEx.test(node.text)) throw new ParseError("Numerator must be an integer.", node);
						numerator += node.text;
					}
					let denominator = "";
					for (const node of args[1].body) {
						if (node.type !== "textord" || !numRegEx.test(node.text)) throw new ParseError("Denominator must be an integer.", node);
						denominator += node.text;
					}
					return {
						type: "sfrac",
						mode: parser.mode,
						numerator,
						denominator
					};
				},
				mathmlBuilder(group, style) {
					const numerator = group.numerator.split("").map((c) => unicodeNumSups[c]).join("");
					const denominator = group.denominator.split("").map((c) => unicodeNumSubs[c]).join("");
					const text = new TextNode(numerator + "⁄" + denominator, group.mode, style);
					return new MathNode("mn", [text], ["special-fraction"]);
				}
			});
			sizeMap = {
				"\\tiny": .5,
				"\\sixptsize": .6,
				"\\Tiny": .6,
				"\\scriptsize": .7,
				"\\footnotesize": .8,
				"\\small": .9,
				"\\normalsize": 1,
				"\\large": 1.2,
				"\\Large": 1.44,
				"\\LARGE": 1.728,
				"\\huge": 2.074,
				"\\Huge": 2.488
			};
			defineFunction({
				type: "sizing",
				names: [
					"\\tiny",
					"\\sixptsize",
					"\\Tiny",
					"\\scriptsize",
					"\\footnotesize",
					"\\small",
					"\\normalsize",
					"\\large",
					"\\Large",
					"\\LARGE",
					"\\huge",
					"\\Huge"
				],
				props: {
					numArgs: 0,
					allowedInText: true
				},
				handler: ({ breakOnTokenText, funcName, parser }, args) => {
					if (parser.settings.strict && parser.mode === "math") console.log(`Temml strict-mode warning: Command ${funcName} is invalid in math mode.`);
					const body = parser.parseExpression(false, breakOnTokenText, true);
					return {
						type: "sizing",
						mode: parser.mode,
						funcName,
						body
					};
				},
				mathmlBuilder: (group, style) => {
					const newStyle = style.withFontSize(sizeMap[group.funcName]);
					const inner = buildExpression(group.body, newStyle);
					const node = wrapWithMstyle(inner);
					const factor = (sizeMap[group.funcName] / style.fontSize).toFixed(4);
					node.setAttribute("mathsize", factor + "em");
					return node;
				}
			});
			defineFunction({
				type: "smash",
				names: ["\\smash"],
				props: {
					numArgs: 1,
					numOptionalArgs: 1,
					allowedInText: true
				},
				handler: ({ parser }, args, optArgs) => {
					let smashHeight = false;
					let smashDepth = false;
					const tbArg = optArgs[0] && assertNodeType(optArgs[0], "ordgroup");
					if (tbArg) {
						let letter = "";
						for (let i = 0; i < tbArg.body.length; ++i) {
							letter = tbArg.body[i].text;
							if (letter === "t") smashHeight = true;
							else if (letter === "b") smashDepth = true;
							else {
								smashHeight = false;
								smashDepth = false;
								break;
							}
						}
					} else {
						smashHeight = true;
						smashDepth = true;
					}
					const body = args[0];
					return {
						type: "smash",
						mode: parser.mode,
						body,
						smashHeight,
						smashDepth
					};
				},
				mathmlBuilder: (group, style) => {
					const node = new MathNode("mpadded", [buildGroup$1(group.body, style)]);
					if (group.smashHeight) node.setAttribute("height", "0px");
					if (group.smashDepth) node.setAttribute("depth", "0px");
					return node;
				}
			});
			xHeights = [
				"a",
				"c",
				"e",
				"ı",
				"m",
				"n",
				"o",
				"r",
				"s",
				"u",
				"v",
				"w",
				"x",
				"z",
				"α",
				"ε",
				"ι",
				"κ",
				"ν",
				"ο",
				"π",
				"σ",
				"τ",
				"υ",
				"ω",
				"\\alpha",
				"\\epsilon",
				"\\iota",
				"\\kappa",
				"\\nu",
				"\\omega",
				"\\pi",
				"\\tau",
				"\\omega"
			];
			defineFunction({
				type: "sqrt",
				names: ["\\sqrt"],
				props: {
					numArgs: 1,
					numOptionalArgs: 1
				},
				handler({ parser }, args, optArgs) {
					const index = optArgs[0];
					const body = args[0];
					if (body.body && body.body.length === 1 && body.body[0].text && xHeights.includes(body.body[0].text)) body.body.push({
						"type": "rule",
						"mode": "math",
						"shift": null,
						"width": {
							"number": 0,
							"unit": "pt"
						},
						"height": {
							"number": .5,
							"unit": "em"
						}
					});
					return {
						type: "sqrt",
						mode: parser.mode,
						body,
						index
					};
				},
				mathmlBuilder(group, style) {
					const { body, index } = group;
					return index ? new MathNode("mroot", [buildGroup$1(body, style), buildGroup$1(index, style.incrementLevel())]) : new MathNode("msqrt", [buildGroup$1(body, style)]);
				}
			});
			styleMap = {
				display: 0,
				text: 1,
				script: 2,
				scriptscript: 3
			};
			styleAttributes = {
				display: ["0", "true"],
				text: ["0", "false"],
				script: ["1", "false"],
				scriptscript: ["2", "false"]
			};
			defineFunction({
				type: "styling",
				names: [
					"\\displaystyle",
					"\\textstyle",
					"\\scriptstyle",
					"\\scriptscriptstyle"
				],
				props: {
					numArgs: 0,
					allowedInText: true,
					primitive: true
				},
				handler({ breakOnTokenText, funcName, parser }, args) {
					const body = parser.parseExpression(true, breakOnTokenText, true);
					const scriptLevel = funcName.slice(1, funcName.length - 5);
					return {
						type: "styling",
						mode: parser.mode,
						scriptLevel,
						body
					};
				},
				mathmlBuilder(group, style) {
					const newStyle = style.withLevel(styleMap[group.scriptLevel]);
					const inner = buildExpression(group.body, newStyle);
					const node = wrapWithMstyle(inner);
					const attr = styleAttributes[group.scriptLevel];
					node.setAttribute("scriptlevel", attr[0]);
					node.setAttribute("displaystyle", attr[1]);
					return node;
				}
			});
			symbolRegEx = /^m(over|under|underover)$/;
			smallPad = "DHKLUcegorsuvxyzΠΥΨαδηιμνοτυχϵ";
			mediumPad = "BCEFGIMNOPQRSTXZlpqtwΓΘΞΣΦΩβεζθξρςφψϑϕϱ";
			largePad = "AJdfΔΛ";
			defineFunctionBuilders({
				type: "supsub",
				mathmlBuilder(group, style) {
					let isBracket = false;
					let isOver;
					let isSup;
					let appendApplyFunction = false;
					let appendSpace = false;
					let needsLeadingSpace = false;
					if (group.base && group.base.type === "horizBracket") {
						isSup = !!group.sup;
						if (isSup === group.base.isOver) {
							isBracket = true;
							isOver = group.base.isOver;
						}
					}
					if (group.base && !group.stack && (group.base.type === "op" || group.base.type === "operatorname")) {
						group.base.parentIsSupSub = true;
						appendApplyFunction = !group.base.symbol;
						appendSpace = appendApplyFunction && !group.isFollowedByDelimiter;
						needsLeadingSpace = group.base.needsLeadingSpace;
					}
					const children = group.stack && group.base.body.length === 1 ? [buildGroup$1(group.base.body[0], style)] : [buildGroup$1(group.base, style)];
					const childStyle = style.inSubOrSup();
					if (group.sub) {
						const sub = buildGroup$1(group.sub, childStyle);
						if (style.level === 3) sub.setAttribute("scriptlevel", "2");
						children.push(sub);
					}
					if (group.sup) {
						const sup = buildGroup$1(group.sup, childStyle);
						if (style.level === 3) sup.setAttribute("scriptlevel", "2");
						if (group.base && group.base.text && group.base.text.length === 1) {
							const text = group.base.text;
							if (smallPad.indexOf(text) > -1) sup.classes.push("tml-sml-pad");
							else if (mediumPad.indexOf(text) > -1) sup.classes.push("tml-med-pad");
							else if (largePad.indexOf(text) > -1) sup.classes.push("tml-lrg-pad");
						}
						children.push(sup);
					}
					let nodeType;
					if (isBracket) nodeType = isOver ? "mover" : "munder";
					else if (!group.sub) {
						const base = group.base;
						if (base && base.type === "op" && base.limits && (style.level === StyleLevel.DISPLAY || base.alwaysHandleSupSub)) nodeType = "mover";
						else if (base && base.type === "operatorname" && base.alwaysHandleSupSub && (base.limits || style.level === StyleLevel.DISPLAY)) nodeType = "mover";
						else nodeType = "msup";
					} else if (!group.sup) {
						const base = group.base;
						if (group.stack) nodeType = "munder";
						else if (base && base.type === "op" && base.limits && (style.level === StyleLevel.DISPLAY || base.alwaysHandleSupSub)) nodeType = "munder";
						else if (base && base.type === "operatorname" && base.alwaysHandleSupSub && (base.limits || style.level === StyleLevel.DISPLAY)) nodeType = "munder";
						else nodeType = "msub";
					} else {
						const base = group.base;
						if (base && (base.type === "op" && base.limits || base.type === "multiscript") && (style.level === StyleLevel.DISPLAY || base.alwaysHandleSupSub)) nodeType = "munderover";
						else if (base && base.type === "operatorname" && base.alwaysHandleSupSub && (style.level === StyleLevel.DISPLAY || base.limits)) nodeType = "munderover";
						else nodeType = "msubsup";
					}
					let node = new MathNode(nodeType, children);
					if (appendApplyFunction) {
						const operator = new MathNode("mo", [makeText("⁡", "text")]);
						if (needsLeadingSpace) {
							const space = new MathNode("mspace");
							space.setAttribute("width", "0.1667em");
							node = newDocumentFragment([
								space,
								node,
								operator
							]);
						} else node = newDocumentFragment([node, operator]);
						if (appendSpace) {
							const space = new MathNode("mspace");
							space.setAttribute("width", "0.1667em");
							node.children.push(space);
						}
					} else if (symbolRegEx.test(nodeType)) node = new MathNode("mrow", [node]);
					return node;
				}
			});
			short = [
				"\\shortmid",
				"\\nshortmid",
				"\\shortparallel",
				"\\nshortparallel",
				"\\smallsetminus"
			];
			arrows = [
				"\\Rsh",
				"\\Lsh",
				"\\restriction"
			];
			isArrow = (str) => {
				if (str.length === 1) {
					const codePoint = str.codePointAt(0);
					return 8591 < codePoint && codePoint < 8704;
				}
				return str.indexOf("arrow") > -1 || str.indexOf("harpoon") > -1 || arrows.includes(str);
			};
			defineFunctionBuilders({
				type: "atom",
				mathmlBuilder(group, style) {
					const node = new MathNode("mo", [makeText(group.text, group.mode)]);
					if (group.family === "punct") node.setAttribute("separator", "true");
					else if (group.family === "open" || group.family === "close") {
						if (group.family === "open") {
							node.setAttribute("form", "prefix");
							node.setAttribute("stretchy", "false");
						} else if (group.family === "close") {
							node.setAttribute("form", "postfix");
							node.setAttribute("stretchy", "false");
						}
					} else if (group.text === "\\mid") {
						node.setAttribute("lspace", "0.22em");
						node.setAttribute("rspace", "0.22em");
						node.setAttribute("stretchy", "false");
					} else if (group.family === "rel" && isArrow(group.text)) node.setAttribute("stretchy", "false");
					else if (short.includes(group.text)) node.setAttribute("mathsize", "70%");
					else if (group.text === ":") {
						node.attributes.lspace = "0.2222em";
						node.attributes.rspace = "0.2222em";
					} else if (group.needsSpacing) {
						if (group.family === "bin") return new MathNode("mrow", [
							padding(.222),
							node,
							padding(.222)
						]);
						else return new MathNode("mrow", [
							padding(.2778),
							node,
							padding(.2778)
						]);
					}
					return node;
				}
			});
			fontMap = {
				mathbf: "bold",
				mathrm: "normal",
				textit: "italic",
				mathit: "italic",
				mathnormal: "italic",
				mathbb: "double-struck",
				mathcal: "script",
				mathfrak: "fraktur",
				mathscr: "script",
				mathsf: "sans-serif",
				mathtt: "monospace"
			};
			getVariant = function(group, style) {
				if (style.fontFamily === "texttt") return "monospace";
				else if (style.fontFamily === "textsc") return "normal";
				else if (style.fontFamily === "textsf") {
					if (style.fontShape === "textit" && style.fontWeight === "textbf") return "sans-serif-bold-italic";
					else if (style.fontShape === "textit") return "sans-serif-italic";
					else if (style.fontWeight === "textbf") return "sans-serif-bold";
					else return "sans-serif";
				} else if (style.fontShape === "textit" && style.fontWeight === "textbf") return "bold-italic";
				else if (style.fontShape === "textit") return "italic";
				else if (style.fontWeight === "textbf") return "bold";
				const font = style.font;
				if (!font || font === "mathnormal") return null;
				const mode = group.mode;
				switch (font) {
					case "mathit": return "italic";
					case "mathrm": {
						const codePoint = group.text.codePointAt(0);
						return 939 < codePoint && codePoint < 975 ? "italic" : "normal";
					}
					case "greekItalic": return "italic";
					case "up@greek": return "normal";
					case "boldsymbol":
					case "mathboldsymbol": return "bold-italic";
					case "mathbf": return "bold";
					case "mathbb": return "double-struck";
					case "mathfrak": return "fraktur";
					case "mathscr":
					case "mathcal": return "script";
					case "mathsf": return "sans-serif";
					case "mathsfit": return "sans-serif-italic";
					case "mathtt": return "monospace";
				}
				let text = group.text;
				if (symbols[mode][text] && symbols[mode][text].replace) text = symbols[mode][text].replace;
				return Object.prototype.hasOwnProperty.call(fontMap, font) ? fontMap[font] : null;
			};
			numberRegEx = /^\d(?:[\d,.]*\d)?$/;
			latinRegEx = /[A-Ba-z]/;
			primes = /* @__PURE__ */ new Set([
				"\\prime",
				"\\dprime",
				"\\trprime",
				"\\qprime",
				"\\backprime",
				"\\backdprime",
				"\\backtrprime"
			]);
			italicNumber = (text, variant, tag) => {
				const mn = new MathNode(tag, [text]);
				const wrapper = new MathNode("mstyle", [mn]);
				wrapper.style["font-style"] = "italic";
				wrapper.style["font-family"] = "Cambria, 'Times New Roman', serif";
				if (variant === "bold-italic") wrapper.style["font-weight"] = "bold";
				return wrapper;
			};
			defineFunctionBuilders({
				type: "mathord",
				mathmlBuilder(group, style) {
					const text = makeText(group.text, group.mode, style);
					const codePoint = text.text.codePointAt(0);
					const defaultVariant = 912 < codePoint && codePoint < 938 ? "normal" : "italic";
					const variant = getVariant(group, style) || defaultVariant;
					if (variant === "script") {
						text.text = variantChar(text.text, variant);
						return new MathNode("mi", [text], [style.font]);
					} else if (variant !== "italic") text.text = variantChar(text.text, variant);
					let node = new MathNode("mi", [text]);
					if (variant === "normal") {
						node.setAttribute("mathvariant", "normal");
						if (text.text.length === 1) {
							const mspace = new MathNode("mspace", []);
							node = new MathNode("mrow", [node, mspace]);
						}
					}
					return node;
				}
			});
			defineFunctionBuilders({
				type: "textord",
				mathmlBuilder(group, style) {
					let ch = group.text;
					const codePoint = ch.codePointAt(0);
					if (style.fontFamily === "textsc") {
						if (96 < codePoint && codePoint < 123) ch = smallCaps[ch];
					}
					const text = makeText(ch, group.mode, style);
					const variant = getVariant(group, style) || "normal";
					let node;
					if (numberRegEx.test(group.text)) {
						const tag = group.mode === "text" ? "mtext" : "mn";
						if (variant === "italic" || variant === "bold-italic") return italicNumber(text, variant, tag);
						else {
							if (variant !== "normal") text.text = text.text.split("").map((c) => variantChar(c, variant)).join("");
							node = new MathNode(tag, [text]);
						}
					} else if (group.mode === "text") {
						if (variant !== "normal") text.text = variantChar(text.text, variant);
						node = new MathNode("mtext", [text]);
					} else if (primes.has(group.text)) {
						node = new MathNode("mo", [text]);
						node.classes.push("tml-prime");
					} else {
						const origText = text.text;
						if (variant !== "italic") text.text = variantChar(text.text, variant);
						node = new MathNode("mi", [text]);
						if (text.text === origText && latinRegEx.test(origText)) node.setAttribute("mathvariant", "italic");
					}
					return node;
				}
			});
			cssSpace = {
				"\\nobreak": "nobreak",
				"\\allowbreak": "allowbreak"
			};
			regularSpace = {
				" ": {},
				"\\ ": {},
				"~": { className: "nobreak" },
				"\\space": {},
				"\\nobreakspace": { className: "nobreak" }
			};
			defineFunctionBuilders({
				type: "spacing",
				mathmlBuilder(group, style) {
					let node;
					if (Object.prototype.hasOwnProperty.call(regularSpace, group.text)) node = new MathNode("mtext", [new TextNode("\xA0")]);
					else if (Object.prototype.hasOwnProperty.call(cssSpace, group.text)) {
						node = new MathNode("mo");
						if (group.text === "\\nobreak") node.setAttribute("linebreak", "nobreak");
					} else throw new ParseError(`Unknown type of space "${group.text}"`);
					return node;
				}
			});
			defineFunctionBuilders({ type: "tag" });
			textFontFamilies = {
				"\\text": void 0,
				"\\textrm": "textrm",
				"\\textsf": "textsf",
				"\\texttt": "texttt",
				"\\textnormal": "textrm",
				"\\textsc": "textsc"
			};
			textFontWeights = {
				"\\textbf": "textbf",
				"\\textmd": "textmd"
			};
			textFontShapes = {
				"\\textit": "textit",
				"\\textup": "textup"
			};
			styleWithFont = (group, style) => {
				const font = group.font;
				if (!font) return style;
				else if (textFontFamilies[font]) return style.withTextFontFamily(textFontFamilies[font]);
				else if (textFontWeights[font]) return style.withTextFontWeight(textFontWeights[font]);
				else if (font === "\\emph") return style.fontShape === "textit" ? style.withTextFontShape("textup") : style.withTextFontShape("textit");
				return style.withTextFontShape(textFontShapes[font]);
			};
			defineFunction({
				type: "text",
				names: [
					"\\text",
					"\\textrm",
					"\\textsf",
					"\\texttt",
					"\\textnormal",
					"\\textsc",
					"\\textbf",
					"\\textmd",
					"\\textit",
					"\\textup",
					"\\emph"
				],
				props: {
					numArgs: 1,
					argTypes: ["text"],
					allowedInArgument: true,
					allowedInText: true
				},
				handler({ parser, funcName }, args) {
					const body = args[0];
					return {
						type: "text",
						mode: parser.mode,
						body: ordargument(body),
						font: funcName
					};
				},
				mathmlBuilder(group, style) {
					const newStyle = styleWithFont(group, style);
					const mrow = buildExpressionRow(group.body, newStyle);
					return consolidateText(mrow);
				}
			});
			defineFunction({
				type: "vcenter",
				names: ["\\vcenter"],
				props: {
					numArgs: 1,
					argTypes: ["original"],
					allowedInText: false
				},
				handler({ parser }, args) {
					return {
						type: "vcenter",
						mode: parser.mode,
						body: args[0]
					};
				},
				mathmlBuilder(group, style) {
					const mtd = new MathNode("mtd", [buildGroup$1(group.body, style)]);
					mtd.style.padding = "0";
					const mtr = new MathNode("mtr", [mtd]);
					return new MathNode("mtable", [mtr]);
				}
			});
			defineFunction({
				type: "verb",
				names: ["\\verb"],
				props: {
					numArgs: 0,
					allowedInText: true
				},
				handler(context, args, optArgs) {
					throw new ParseError("\\verb ended by end of line instead of matching delimiter");
				},
				mathmlBuilder(group, style) {
					const text = new TextNode(makeVerb(group));
					const node = new MathNode("mtext", [text]);
					node.setAttribute("mathvariant", "monospace");
					return node;
				}
			});
			makeVerb = (group) => group.body.replace(/ /g, group.star ? "␣" : "\xA0");
			functions = _functions;
			spaceRegexString = "[ \r\n	]";
			controlWordRegexString = "\\\\[a-zA-Z@]+";
			controlSymbolRegexString = "\\\\[^\ud800-\udfff]";
			controlWordWhitespaceRegexString = `(${controlWordRegexString})${spaceRegexString}*`;
			controlSpaceRegexString = "\\\\(\n|[ \r	]+\n?)[ \r	]*";
			combiningDiacriticalMarkString = "[̀-ͯ]";
			combiningDiacriticalMarksEndRegex = new RegExp(`${combiningDiacriticalMarkString}+$`);
			tokenRegexString = `(${spaceRegexString}+)|${controlSpaceRegexString}|([!-\\[\\]-‧‪-퟿豈-￿]${combiningDiacriticalMarkString}*|[\ud800-\udbff][\udc00-\udfff]${combiningDiacriticalMarkString}*|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5|${controlWordWhitespaceRegexString}|${controlSymbolRegexString})`;
			Lexer = class {
				constructor(input, settings) {
					this.input = input;
					this.settings = settings;
					this.tokenRegex = new RegExp(tokenRegexString, "g");
					this.catcodes = {
						"%": 14,
						"~": 13
					};
				}
				setCatcode(char, code) {
					this.catcodes[char] = code;
				}
				/**
				* This function lexes a single token.
				*/
				lex() {
					const input = this.input;
					const pos = this.tokenRegex.lastIndex;
					if (pos === input.length) return new Token("EOF", new SourceLocation(this, pos, pos));
					const match = this.tokenRegex.exec(input);
					if (match === null || match.index !== pos) throw new ParseError(`Unexpected character: '${input[pos]}'`, new Token(input[pos], new SourceLocation(this, pos, pos + 1)));
					const text = match[6] || match[3] || (match[2] ? "\\ " : " ");
					if (this.catcodes[text] === 14) {
						const nlIndex = input.indexOf("\n", this.tokenRegex.lastIndex);
						if (nlIndex === -1) {
							this.tokenRegex.lastIndex = input.length;
							if (this.settings.strict) throw new ParseError("% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode");
						} else this.tokenRegex.lastIndex = nlIndex + 1;
						return this.lex();
					}
					return new Token(text, new SourceLocation(this, pos, this.tokenRegex.lastIndex));
				}
			};
			Namespace = class {
				/**
				* Both arguments are optional.  The first argument is an object of
				* built-in mappings which never change.  The second argument is an object
				* of initial (global-level) mappings, which will constantly change
				* according to any global/top-level `set`s done.
				*/
				constructor(builtins = {}, globalMacros = {}) {
					this.current = globalMacros;
					this.builtins = builtins;
					this.undefStack = [];
				}
				/**
				* Start a new nested group, affecting future local `set`s.
				*/
				beginGroup() {
					this.undefStack.push({});
				}
				/**
				* End current nested group, restoring values before the group began.
				*/
				endGroup() {
					if (this.undefStack.length === 0) throw new ParseError("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
					const undefs = this.undefStack.pop();
					for (const undef in undefs) if (Object.prototype.hasOwnProperty.call(undefs, undef)) {
						if (undefs[undef] === void 0) delete this.current[undef];
						else this.current[undef] = undefs[undef];
					}
				}
				/**
				* Detect whether `name` has a definition.  Equivalent to
				* `get(name) != null`.
				*/
				has(name) {
					return Object.prototype.hasOwnProperty.call(this.current, name) || Object.prototype.hasOwnProperty.call(this.builtins, name);
				}
				/**
				* Get the current value of a name, or `undefined` if there is no value.
				*
				* Note: Do not use `if (namespace.get(...))` to detect whether a macro
				* is defined, as the definition may be the empty string which evaluates
				* to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
				* `if (namespace.has(...))`.
				*/
				get(name) {
					if (Object.prototype.hasOwnProperty.call(this.current, name)) return this.current[name];
					else return this.builtins[name];
				}
				/**
				* Set the current value of a name, and optionally set it globally too.
				* Local set() sets the current value and (when appropriate) adds an undo
				* operation to the undo stack.  Global set() may change the undo
				* operation at every level, so takes time linear in their number.
				*/
				set(name, value, global = false) {
					if (global) {
						for (let i = 0; i < this.undefStack.length; i++) delete this.undefStack[i][name];
						if (this.undefStack.length > 0) this.undefStack[this.undefStack.length - 1][name] = value;
					} else {
						const top = this.undefStack[this.undefStack.length - 1];
						if (top && !Object.prototype.hasOwnProperty.call(top, name)) top[name] = this.current[name];
					}
					this.current[name] = value;
				}
			};
			implicitCommands = {
				"^": true,
				_: true,
				"\\limits": true,
				"\\nolimits": true
			};
			MacroExpander = class {
				constructor(input, settings, mode) {
					this.settings = settings;
					this.expansionCount = 0;
					this.feed(input);
					this.macros = new Namespace(macros, settings.macros);
					this.mode = mode;
					this.stack = [];
				}
				/**
				* Feed a new input string to the same MacroExpander
				* (with existing macros etc.).
				*/
				feed(input) {
					this.lexer = new Lexer(input, this.settings);
				}
				/**
				* Switches between "text" and "math" modes.
				*/
				switchMode(newMode) {
					this.mode = newMode;
				}
				/**
				* Start a new group nesting within all namespaces.
				*/
				beginGroup() {
					this.macros.beginGroup();
				}
				/**
				* End current group nesting within all namespaces.
				*/
				endGroup() {
					this.macros.endGroup();
				}
				/**
				* Returns the topmost token on the stack, without expanding it.
				* Similar in behavior to TeX's `\futurelet`.
				*/
				future() {
					if (this.stack.length === 0) this.pushToken(this.lexer.lex());
					return this.stack[this.stack.length - 1];
				}
				/**
				* Remove and return the next unexpanded token.
				*/
				popToken() {
					this.future();
					return this.stack.pop();
				}
				/**
				* Add a given token to the token stack.  In particular, this get be used
				* to put back a token returned from one of the other methods.
				*/
				pushToken(token) {
					this.stack.push(token);
				}
				/**
				* Append an array of tokens to the token stack.
				*/
				pushTokens(tokens) {
					this.stack.push(...tokens);
				}
				/**
				* Find an macro argument without expanding tokens and append the array of
				* tokens to the token stack. Uses Token as a container for the result.
				*/
				scanArgument(isOptional) {
					let start;
					let end;
					let tokens;
					if (isOptional) {
						this.consumeSpaces();
						if (this.future().text !== "[") return null;
						start = this.popToken();
						({tokens, end} = this.consumeArg(["]"]));
					} else ({tokens, start, end} = this.consumeArg());
					this.pushToken(new Token("EOF", end.loc));
					this.pushTokens(tokens);
					return new Token("", SourceLocation.range(start, end));
				}
				/**
				* Consume all following space tokens, without expansion.
				*/
				consumeSpaces() {
					for (;;) if (this.future().text === " ") this.stack.pop();
					else break;
				}
				/**
				* Consume an argument from the token stream, and return the resulting array
				* of tokens and start/end token.
				*/
				consumeArg(delims) {
					const tokens = [];
					const isDelimited = delims && delims.length > 0;
					if (!isDelimited) this.consumeSpaces();
					const start = this.future();
					let tok;
					let depth = 0;
					let match = 0;
					do {
						tok = this.popToken();
						tokens.push(tok);
						if (tok.text === "{") ++depth;
						else if (tok.text === "}") {
							--depth;
							if (depth === -1) throw new ParseError("Extra }", tok);
						} else if (tok.text === "EOF") throw new ParseError("Unexpected end of input in a macro argument, expected '" + (delims && isDelimited ? delims[match] : "}") + "'", tok);
						if (delims && isDelimited) {
							if ((depth === 0 || depth === 1 && delims[match] === "{") && tok.text === delims[match]) {
								++match;
								if (match === delims.length) {
									tokens.splice(-match, match);
									break;
								}
							} else match = 0;
						}
					} while (depth !== 0 || isDelimited);
					if (start.text === "{" && tokens[tokens.length - 1].text === "}") {
						tokens.pop();
						tokens.shift();
					}
					tokens.reverse();
					return {
						tokens,
						start,
						end: tok
					};
				}
				/**
				* Consume the specified number of (delimited) arguments from the token
				* stream and return the resulting array of arguments.
				*/
				consumeArgs(numArgs, delimiters) {
					if (delimiters) {
						if (delimiters.length !== numArgs + 1) throw new ParseError("The length of delimiters doesn't match the number of args!");
						const delims = delimiters[0];
						for (let i = 0; i < delims.length; i++) {
							const tok = this.popToken();
							if (delims[i] !== tok.text) throw new ParseError("Use of the macro doesn't match its definition", tok);
						}
					}
					const args = [];
					for (let i = 0; i < numArgs; i++) args.push(this.consumeArg(delimiters && delimiters[i + 1]).tokens);
					return args;
				}
				/**
				* Expand the next token only once if possible.
				*
				* If the token is expanded, the resulting tokens will be pushed onto
				* the stack in reverse order, and the number of such tokens will be
				* returned.  This number might be zero or positive.
				*
				* If not, the return value is `false`, and the next token remains at the
				* top of the stack.
				*
				* In either case, the next token will be on the top of the stack,
				* or the stack will be empty (in case of empty expansion
				* and no other tokens).
				*
				* Used to implement `expandAfterFuture` and `expandNextToken`.
				*
				* If expandableOnly, only expandable tokens are expanded and
				* an undefined control sequence results in an error.
				*/
				expandOnce(expandableOnly) {
					const topToken = this.popToken();
					const name = topToken.text;
					const expansion = !topToken.noexpand ? this._getExpansion(name) : null;
					if (expansion == null || expandableOnly && expansion.unexpandable) {
						if (expandableOnly && expansion == null && name[0] === "\\" && !this.isDefined(name)) throw new ParseError("Undefined control sequence: " + name);
						this.pushToken(topToken);
						return false;
					}
					this.expansionCount++;
					if (this.expansionCount > this.settings.maxExpand) throw new ParseError("Too many expansions: infinite loop or need to increase maxExpand setting");
					let tokens = expansion.tokens;
					const args = this.consumeArgs(expansion.numArgs, expansion.delimiters);
					if (expansion.numArgs) {
						tokens = tokens.slice();
						for (let i = tokens.length - 1; i >= 0; --i) {
							let tok = tokens[i];
							if (tok.text === "#") {
								if (i === 0) throw new ParseError("Incomplete placeholder at end of macro body", tok);
								tok = tokens[--i];
								if (tok.text === "#") tokens.splice(i + 1, 1);
								else if (/^[1-9]$/.test(tok.text)) tokens.splice(i, 2, ...args[+tok.text - 1]);
								else throw new ParseError("Not a valid argument number", tok);
							}
						}
					}
					this.pushTokens(tokens);
					return tokens.length;
				}
				/**
				* Expand the next token only once (if possible), and return the resulting
				* top token on the stack (without removing anything from the stack).
				* Similar in behavior to TeX's `\expandafter\futurelet`.
				* Equivalent to expandOnce() followed by future().
				*/
				expandAfterFuture() {
					this.expandOnce();
					return this.future();
				}
				/**
				* Recursively expand first token, then return first non-expandable token.
				*/
				expandNextToken() {
					for (;;) if (this.expandOnce() === false) {
						const token = this.stack.pop();
						if (token.treatAsRelax) token.text = "\\relax";
						return token;
					}
					throw new Error();
				}
				/**
				* Fully expand the given macro name and return the resulting list of
				* tokens, or return `undefined` if no such macro is defined.
				*/
				expandMacro(name) {
					return this.macros.has(name) ? this.expandTokens([new Token(name)]) : void 0;
				}
				/**
				* Fully expand the given token stream and return the resulting list of
				* tokens.  Note that the input tokens are in reverse order, but the
				* output tokens are in forward order.
				*/
				expandTokens(tokens) {
					const output = [];
					const oldStackLength = this.stack.length;
					this.pushTokens(tokens);
					while (this.stack.length > oldStackLength) if (this.expandOnce(true) === false) {
						const token = this.stack.pop();
						if (token.treatAsRelax) {
							token.noexpand = false;
							token.treatAsRelax = false;
						}
						output.push(token);
					}
					return output;
				}
				/**
				* Fully expand the given macro name and return the result as a string,
				* or return `undefined` if no such macro is defined.
				*/
				expandMacroAsText(name) {
					const tokens = this.expandMacro(name);
					if (tokens) return tokens.map((token) => token.text).join("");
					else return tokens;
				}
				/**
				* Returns the expanded macro as a reversed array of tokens and a macro
				* argument count.  Or returns `null` if no such macro.
				*/
				_getExpansion(name) {
					const definition = this.macros.get(name);
					if (definition == null) return definition;
					if (name.length === 1) {
						const catcode = this.lexer.catcodes[name];
						if (catcode != null && catcode !== 13) return;
					}
					const expansion = typeof definition === "function" ? definition(this) : definition;
					if (typeof expansion === "string") {
						let numArgs = 0;
						if (expansion.indexOf("#") !== -1) {
							const stripped = expansion.replace(/##/g, "");
							while (stripped.indexOf("#" + (numArgs + 1)) !== -1) ++numArgs;
						}
						const bodyLexer = new Lexer(expansion, this.settings);
						const tokens = [];
						let tok = bodyLexer.lex();
						while (tok.text !== "EOF") {
							tokens.push(tok);
							tok = bodyLexer.lex();
						}
						tokens.reverse();
						return {
							tokens,
							numArgs
						};
					}
					return expansion;
				}
				/**
				* Determine whether a command is currently "defined" (has some
				* functionality), meaning that it's a macro (in the current group),
				* a function, a symbol, or one of the special commands listed in
				* `implicitCommands`.
				*/
				isDefined(name) {
					return this.macros.has(name) || Object.prototype.hasOwnProperty.call(functions, name) || Object.prototype.hasOwnProperty.call(symbols.math, name) || Object.prototype.hasOwnProperty.call(symbols.text, name) || Object.prototype.hasOwnProperty.call(implicitCommands, name);
				}
				/**
				* Determine whether a command is expandable.
				*/
				isExpandable(name) {
					const macro = this.macros.get(name);
					return macro != null ? typeof macro === "string" || typeof macro === "function" || !macro.unexpandable : Object.prototype.hasOwnProperty.call(functions, name) && !functions[name].primitive;
				}
			};
			unicodeSubRegEx = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/;
			uSubsAndSups = Object.freeze({
				"₊": "+",
				"₋": "-",
				"₌": "=",
				"₍": "(",
				"₎": ")",
				"₀": "0",
				"₁": "1",
				"₂": "2",
				"₃": "3",
				"₄": "4",
				"₅": "5",
				"₆": "6",
				"₇": "7",
				"₈": "8",
				"₉": "9",
				"ₐ": "a",
				"ₑ": "e",
				"ₕ": "h",
				"ᵢ": "i",
				"ⱼ": "j",
				"ₖ": "k",
				"ₗ": "l",
				"ₘ": "m",
				"ₙ": "n",
				"ₒ": "o",
				"ₚ": "p",
				"ᵣ": "r",
				"ₛ": "s",
				"ₜ": "t",
				"ᵤ": "u",
				"ᵥ": "v",
				"ₓ": "x",
				"ᵦ": "β",
				"ᵧ": "γ",
				"ᵨ": "ρ",
				"ᵩ": "ϕ",
				"ᵪ": "χ",
				"⁺": "+",
				"⁻": "-",
				"⁼": "=",
				"⁽": "(",
				"⁾": ")",
				"⁰": "0",
				"¹": "1",
				"²": "2",
				"³": "3",
				"⁴": "4",
				"⁵": "5",
				"⁶": "6",
				"⁷": "7",
				"⁸": "8",
				"⁹": "9",
				"ᴬ": "A",
				"ᴮ": "B",
				"ᴰ": "D",
				"ᴱ": "E",
				"ᴳ": "G",
				"ᴴ": "H",
				"ᴵ": "I",
				"ᴶ": "J",
				"ᴷ": "K",
				"ᴸ": "L",
				"ᴹ": "M",
				"ᴺ": "N",
				"ᴼ": "O",
				"ᴾ": "P",
				"ᴿ": "R",
				"ᵀ": "T",
				"ᵁ": "U",
				"ⱽ": "V",
				"ᵂ": "W",
				"ᵃ": "a",
				"ᵇ": "b",
				"ᶜ": "c",
				"ᵈ": "d",
				"ᵉ": "e",
				"ᶠ": "f",
				"ᵍ": "g",
				"ʰ": "h",
				"ⁱ": "i",
				"ʲ": "j",
				"ᵏ": "k",
				"ˡ": "l",
				"ᵐ": "m",
				"ⁿ": "n",
				"ᵒ": "o",
				"ᵖ": "p",
				"ʳ": "r",
				"ˢ": "s",
				"ᵗ": "t",
				"ᵘ": "u",
				"ᵛ": "v",
				"ʷ": "w",
				"ˣ": "x",
				"ʸ": "y",
				"ᶻ": "z",
				"ᵝ": "β",
				"ᵞ": "γ",
				"ᵟ": "δ",
				"ᵠ": "ϕ",
				"ᵡ": "χ",
				"ᶿ": "θ"
			});
			asciiFromScript = Object.freeze({
				"𝒜": "A",
				"ℬ": "B",
				"𝒞": "C",
				"𝒟": "D",
				"ℰ": "E",
				"ℱ": "F",
				"𝒢": "G",
				"ℋ": "H",
				"ℐ": "I",
				"𝒥": "J",
				"𝒦": "K",
				"ℒ": "L",
				"ℳ": "M",
				"𝒩": "N",
				"𝒪": "O",
				"𝒫": "P",
				"𝒬": "Q",
				"ℛ": "R",
				"𝒮": "S",
				"𝒯": "T",
				"𝒰": "U",
				"𝒱": "V",
				"𝒲": "W",
				"𝒳": "X",
				"𝒴": "Y",
				"𝒵": "Z"
			});
			unicodeAccents = {
				"́": {
					text: "\\'",
					math: "\\acute"
				},
				"̀": {
					text: "\\`",
					math: "\\grave"
				},
				"̈": {
					text: "\\\"",
					math: "\\ddot"
				},
				"̃": {
					text: "\\~",
					math: "\\tilde"
				},
				"̄": {
					text: "\\=",
					math: "\\bar"
				},
				"̆": {
					text: "\\u",
					math: "\\breve"
				},
				"̌": {
					text: "\\v",
					math: "\\check"
				},
				"̂": {
					text: "\\^",
					math: "\\hat"
				},
				"̇": {
					text: "\\.",
					math: "\\dot"
				},
				"̊": {
					text: "\\r",
					math: "\\mathring"
				},
				"̋": { text: "\\H" },
				"̧": { text: "\\c" }
			};
			unicodeSymbols = {
				"á": "á",
				"à": "à",
				"ä": "ä",
				"ǟ": "ǟ",
				"ã": "ã",
				"ā": "ā",
				"ă": "ă",
				"ắ": "ắ",
				"ằ": "ằ",
				"ẵ": "ẵ",
				"ǎ": "ǎ",
				"â": "â",
				"ấ": "ấ",
				"ầ": "ầ",
				"ẫ": "ẫ",
				"ȧ": "ȧ",
				"ǡ": "ǡ",
				"å": "å",
				"ǻ": "ǻ",
				"ḃ": "ḃ",
				"ć": "ć",
				"č": "č",
				"ĉ": "ĉ",
				"ċ": "ċ",
				"ď": "ď",
				"ḋ": "ḋ",
				"é": "é",
				"è": "è",
				"ë": "ë",
				"ẽ": "ẽ",
				"ē": "ē",
				"ḗ": "ḗ",
				"ḕ": "ḕ",
				"ĕ": "ĕ",
				"ě": "ě",
				"ê": "ê",
				"ế": "ế",
				"ề": "ề",
				"ễ": "ễ",
				"ė": "ė",
				"ḟ": "ḟ",
				"ǵ": "ǵ",
				"ḡ": "ḡ",
				"ğ": "ğ",
				"ǧ": "ǧ",
				"ĝ": "ĝ",
				"ġ": "ġ",
				"ḧ": "ḧ",
				"ȟ": "ȟ",
				"ĥ": "ĥ",
				"ḣ": "ḣ",
				"í": "í",
				"ì": "ì",
				"ï": "ï",
				"ḯ": "ḯ",
				"ĩ": "ĩ",
				"ī": "ī",
				"ĭ": "ĭ",
				"ǐ": "ǐ",
				"î": "î",
				"ǰ": "ǰ",
				"ĵ": "ĵ",
				"ḱ": "ḱ",
				"ǩ": "ǩ",
				"ĺ": "ĺ",
				"ľ": "ľ",
				"ḿ": "ḿ",
				"ṁ": "ṁ",
				"ń": "ń",
				"ǹ": "ǹ",
				"ñ": "ñ",
				"ň": "ň",
				"ṅ": "ṅ",
				"ó": "ó",
				"ò": "ò",
				"ö": "ö",
				"ȫ": "ȫ",
				"õ": "õ",
				"ṍ": "ṍ",
				"ṏ": "ṏ",
				"ȭ": "ȭ",
				"ō": "ō",
				"ṓ": "ṓ",
				"ṑ": "ṑ",
				"ŏ": "ŏ",
				"ǒ": "ǒ",
				"ô": "ô",
				"ố": "ố",
				"ồ": "ồ",
				"ỗ": "ỗ",
				"ȯ": "ȯ",
				"ȱ": "ȱ",
				"ő": "ő",
				"ṕ": "ṕ",
				"ṗ": "ṗ",
				"ŕ": "ŕ",
				"ř": "ř",
				"ṙ": "ṙ",
				"ś": "ś",
				"ṥ": "ṥ",
				"š": "š",
				"ṧ": "ṧ",
				"ŝ": "ŝ",
				"ṡ": "ṡ",
				"ẗ": "ẗ",
				"ť": "ť",
				"ṫ": "ṫ",
				"ú": "ú",
				"ù": "ù",
				"ü": "ü",
				"ǘ": "ǘ",
				"ǜ": "ǜ",
				"ǖ": "ǖ",
				"ǚ": "ǚ",
				"ũ": "ũ",
				"ṹ": "ṹ",
				"ū": "ū",
				"ṻ": "ṻ",
				"ŭ": "ŭ",
				"ǔ": "ǔ",
				"û": "û",
				"ů": "ů",
				"ű": "ű",
				"ṽ": "ṽ",
				"ẃ": "ẃ",
				"ẁ": "ẁ",
				"ẅ": "ẅ",
				"ŵ": "ŵ",
				"ẇ": "ẇ",
				"ẘ": "ẘ",
				"ẍ": "ẍ",
				"ẋ": "ẋ",
				"ý": "ý",
				"ỳ": "ỳ",
				"ÿ": "ÿ",
				"ỹ": "ỹ",
				"ȳ": "ȳ",
				"ŷ": "ŷ",
				"ẏ": "ẏ",
				"ẙ": "ẙ",
				"ź": "ź",
				"ž": "ž",
				"ẑ": "ẑ",
				"ż": "ż",
				"Á": "Á",
				"À": "À",
				"Ä": "Ä",
				"Ǟ": "Ǟ",
				"Ã": "Ã",
				"Ā": "Ā",
				"Ă": "Ă",
				"Ắ": "Ắ",
				"Ằ": "Ằ",
				"Ẵ": "Ẵ",
				"Ǎ": "Ǎ",
				"Â": "Â",
				"Ấ": "Ấ",
				"Ầ": "Ầ",
				"Ẫ": "Ẫ",
				"Ȧ": "Ȧ",
				"Ǡ": "Ǡ",
				"Å": "Å",
				"Ǻ": "Ǻ",
				"Ḃ": "Ḃ",
				"Ć": "Ć",
				"Č": "Č",
				"Ĉ": "Ĉ",
				"Ċ": "Ċ",
				"Ď": "Ď",
				"Ḋ": "Ḋ",
				"É": "É",
				"È": "È",
				"Ë": "Ë",
				"Ẽ": "Ẽ",
				"Ē": "Ē",
				"Ḗ": "Ḗ",
				"Ḕ": "Ḕ",
				"Ĕ": "Ĕ",
				"Ě": "Ě",
				"Ê": "Ê",
				"Ế": "Ế",
				"Ề": "Ề",
				"Ễ": "Ễ",
				"Ė": "Ė",
				"Ḟ": "Ḟ",
				"Ǵ": "Ǵ",
				"Ḡ": "Ḡ",
				"Ğ": "Ğ",
				"Ǧ": "Ǧ",
				"Ĝ": "Ĝ",
				"Ġ": "Ġ",
				"Ḧ": "Ḧ",
				"Ȟ": "Ȟ",
				"Ĥ": "Ĥ",
				"Ḣ": "Ḣ",
				"Í": "Í",
				"Ì": "Ì",
				"Ï": "Ï",
				"Ḯ": "Ḯ",
				"Ĩ": "Ĩ",
				"Ī": "Ī",
				"Ĭ": "Ĭ",
				"Ǐ": "Ǐ",
				"Î": "Î",
				"İ": "İ",
				"Ĵ": "Ĵ",
				"Ḱ": "Ḱ",
				"Ǩ": "Ǩ",
				"Ĺ": "Ĺ",
				"Ľ": "Ľ",
				"Ḿ": "Ḿ",
				"Ṁ": "Ṁ",
				"Ń": "Ń",
				"Ǹ": "Ǹ",
				"Ñ": "Ñ",
				"Ň": "Ň",
				"Ṅ": "Ṅ",
				"Ó": "Ó",
				"Ò": "Ò",
				"Ö": "Ö",
				"Ȫ": "Ȫ",
				"Õ": "Õ",
				"Ṍ": "Ṍ",
				"Ṏ": "Ṏ",
				"Ȭ": "Ȭ",
				"Ō": "Ō",
				"Ṓ": "Ṓ",
				"Ṑ": "Ṑ",
				"Ŏ": "Ŏ",
				"Ǒ": "Ǒ",
				"Ô": "Ô",
				"Ố": "Ố",
				"Ồ": "Ồ",
				"Ỗ": "Ỗ",
				"Ȯ": "Ȯ",
				"Ȱ": "Ȱ",
				"Ő": "Ő",
				"Ṕ": "Ṕ",
				"Ṗ": "Ṗ",
				"Ŕ": "Ŕ",
				"Ř": "Ř",
				"Ṙ": "Ṙ",
				"Ś": "Ś",
				"Ṥ": "Ṥ",
				"Š": "Š",
				"Ṧ": "Ṧ",
				"Ŝ": "Ŝ",
				"Ṡ": "Ṡ",
				"Ť": "Ť",
				"Ṫ": "Ṫ",
				"Ú": "Ú",
				"Ù": "Ù",
				"Ü": "Ü",
				"Ǘ": "Ǘ",
				"Ǜ": "Ǜ",
				"Ǖ": "Ǖ",
				"Ǚ": "Ǚ",
				"Ũ": "Ũ",
				"Ṹ": "Ṹ",
				"Ū": "Ū",
				"Ṻ": "Ṻ",
				"Ŭ": "Ŭ",
				"Ǔ": "Ǔ",
				"Û": "Û",
				"Ů": "Ů",
				"Ű": "Ű",
				"Ṽ": "Ṽ",
				"Ẃ": "Ẃ",
				"Ẁ": "Ẁ",
				"Ẅ": "Ẅ",
				"Ŵ": "Ŵ",
				"Ẇ": "Ẇ",
				"Ẍ": "Ẍ",
				"Ẋ": "Ẋ",
				"Ý": "Ý",
				"Ỳ": "Ỳ",
				"Ÿ": "Ÿ",
				"Ỹ": "Ỹ",
				"Ȳ": "Ȳ",
				"Ŷ": "Ŷ",
				"Ẏ": "Ẏ",
				"Ź": "Ź",
				"Ž": "Ž",
				"Ẑ": "Ẑ",
				"Ż": "Ż",
				"ά": "ά",
				"ὰ": "ὰ",
				"ᾱ": "ᾱ",
				"ᾰ": "ᾰ",
				"έ": "έ",
				"ὲ": "ὲ",
				"ή": "ή",
				"ὴ": "ὴ",
				"ί": "ί",
				"ὶ": "ὶ",
				"ϊ": "ϊ",
				"ΐ": "ΐ",
				"ῒ": "ῒ",
				"ῑ": "ῑ",
				"ῐ": "ῐ",
				"ό": "ό",
				"ὸ": "ὸ",
				"ύ": "ύ",
				"ὺ": "ὺ",
				"ϋ": "ϋ",
				"ΰ": "ΰ",
				"ῢ": "ῢ",
				"ῡ": "ῡ",
				"ῠ": "ῠ",
				"ώ": "ώ",
				"ὼ": "ὼ",
				"Ύ": "Ύ",
				"Ὺ": "Ὺ",
				"Ϋ": "Ϋ",
				"Ῡ": "Ῡ",
				"Ῠ": "Ῠ",
				"Ώ": "Ώ",
				"Ὼ": "Ὼ"
			};
			binLeftCancellers = [
				"bin",
				"op",
				"open",
				"punct",
				"rel"
			];
			sizeRegEx = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/;
			textRegEx = /^ *\\text/;
			Parser = class Parser {
				constructor(input, settings, isPreamble = false) {
					this.mode = "math";
					this.gullet = new MacroExpander(input, settings, this.mode);
					this.settings = settings;
					this.isPreamble = isPreamble;
					this.leftrightDepth = 0;
					this.prevAtomType = "";
				}
				/**
				* Checks a result to make sure it has the right type, and throws an
				* appropriate error otherwise.
				*/
				expect(text, consume = true) {
					if (this.fetch().text !== text) throw new ParseError(`Expected '${text}', got '${this.fetch().text}'`, this.fetch());
					if (consume) this.consume();
				}
				/**
				* Discards the current lookahead token, considering it consumed.
				*/
				consume() {
					this.nextToken = null;
				}
				/**
				* Return the current lookahead token, or if there isn't one (at the
				* beginning, or if the previous lookahead token was consume()d),
				* fetch the next token as the new lookahead token and return it.
				*/
				fetch() {
					if (this.nextToken == null) this.nextToken = this.gullet.expandNextToken();
					return this.nextToken;
				}
				/**
				* Switches between "text" and "math" modes.
				*/
				switchMode(newMode) {
					this.mode = newMode;
					this.gullet.switchMode(newMode);
				}
				/**
				* Main parsing function, which parses an entire input.
				*/
				parse() {
					this.gullet.beginGroup();
					if (this.settings.colorIsTextColor) this.gullet.macros.set("\\color", "\\textcolor");
					const parse = this.parseExpression(false);
					this.expect("EOF");
					if (this.isPreamble) {
						const macros = Object.create(null);
						Object.entries(this.gullet.macros.current).forEach(([key, value]) => {
							macros[key] = value;
						});
						this.gullet.endGroup();
						return macros;
					}
					const tag = this.gullet.macros.get("\\df@tag");
					this.gullet.endGroup();
					if (tag) this.gullet.macros.current["\\df@tag"] = tag;
					return parse;
				}
				static get endOfExpression() {
					return [
						"}",
						"\\endgroup",
						"\\end",
						"\\right",
						"\\endtoggle",
						"&"
					];
				}
				/**
				* Fully parse a separate sequence of tokens as a separate job.
				* Tokens should be specified in reverse order, as in a MacroDefinition.
				*/
				subparse(tokens) {
					const oldToken = this.nextToken;
					this.consume();
					this.gullet.pushToken(new Token("}"));
					this.gullet.pushTokens(tokens);
					const parse = this.parseExpression(false);
					this.expect("}");
					this.nextToken = oldToken;
					return parse;
				}
				/**
				* Parses an "expression", which is a list of atoms.
				*
				* `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
				*                 happens when functions have higher precedence than infix
				*                 nodes in implicit parses.
				*
				* `breakOnTokenText`: The text of the token that the expression should end
				*                     with, or `null` if something else should end the
				*                     expression.
				*
				* `breakOnMiddle`: \color, \over, and old styling functions work on an implicit group.
				*                  These groups end just before the usual tokens, but they also
				*                  end just before `\middle`.
				*/
				parseExpression(breakOnInfix, breakOnTokenText, breakOnMiddle) {
					const body = [];
					this.prevAtomType = "";
					while (true) {
						if (this.mode === "math") this.consumeSpaces();
						const lex = this.fetch();
						if (Parser.endOfExpression.indexOf(lex.text) !== -1) break;
						if (breakOnTokenText && lex.text === breakOnTokenText) break;
						if (breakOnMiddle && lex.text === "\\middle") break;
						if (breakOnInfix && functions[lex.text] && functions[lex.text].infix) break;
						const atom = this.parseAtom(breakOnTokenText);
						if (!atom) break;
						else if (atom.type === "internal") continue;
						body.push(atom);
						this.prevAtomType = atom.type === "atom" ? atom.family : atom.type;
					}
					if (this.mode === "text") this.formLigatures(body);
					return this.handleInfixNodes(body);
				}
				/**
				* Rewrites infix operators such as \over with corresponding commands such
				* as \frac.
				*
				* There can only be one infix operator per group.  If there's more than one
				* then the expression is ambiguous.  This can be resolved by adding {}.
				*/
				handleInfixNodes(body) {
					let overIndex = -1;
					let funcName;
					for (let i = 0; i < body.length; i++) if (body[i].type === "infix") {
						if (overIndex !== -1) throw new ParseError("only one infix operator per group", body[i].token);
						overIndex = i;
						funcName = body[i].replaceWith;
					}
					if (overIndex !== -1 && funcName) {
						let numerNode;
						let denomNode;
						const numerBody = body.slice(0, overIndex);
						const denomBody = body.slice(overIndex + 1);
						if (numerBody.length === 1 && numerBody[0].type === "ordgroup") numerNode = numerBody[0];
						else numerNode = {
							type: "ordgroup",
							mode: this.mode,
							body: numerBody
						};
						if (denomBody.length === 1 && denomBody[0].type === "ordgroup") denomNode = denomBody[0];
						else denomNode = {
							type: "ordgroup",
							mode: this.mode,
							body: denomBody
						};
						let node;
						if (funcName === "\\\\abovefrac") node = this.callFunction(funcName, [
							numerNode,
							body[overIndex],
							denomNode
						], []);
						else node = this.callFunction(funcName, [numerNode, denomNode], []);
						return [node];
					} else return body;
				}
				/**
				* Handle a subscript or superscript with nice errors.
				*/
				handleSupSubscript(name) {
					const symbolToken = this.fetch();
					const symbol = symbolToken.text;
					this.consume();
					this.consumeSpaces();
					let group;
					do
						group = this.parseGroup(name);
					while (group.type && group.type === "internal");
					if (!group) throw new ParseError("Expected group after '" + symbol + "'", symbolToken);
					return group;
				}
				/**
				* Converts the textual input of an unsupported command into a text node
				* contained within a color node whose color is determined by errorColor
				*/
				formatUnsupportedCmd(text) {
					const textordArray = [];
					for (let i = 0; i < text.length; i++) textordArray.push({
						type: "textord",
						mode: "text",
						text: text[i]
					});
					const textNode = {
						type: "text",
						mode: this.mode,
						body: textordArray
					};
					return {
						type: "color",
						mode: this.mode,
						color: this.settings.errorColor,
						body: [textNode]
					};
				}
				/**
				* Parses a group with optional super/subscripts.
				*/
				parseAtom(breakOnTokenText) {
					const base = this.parseGroup("atom", breakOnTokenText);
					if (base && base.type === "internal") return base;
					if (this.mode === "text") return base;
					let superscript;
					let subscript;
					while (true) {
						this.consumeSpaces();
						const lex = this.fetch();
						if (lex.text === "\\limits" || lex.text === "\\nolimits") {
							if (base && base.type === "op") {
								base.limits = lex.text === "\\limits";
								base.alwaysHandleSupSub = true;
							} else if (base && base.type === "operatorname") {
								if (base.alwaysHandleSupSub) base.limits = lex.text === "\\limits";
							} else throw new ParseError("Limit controls must follow a math operator", lex);
							this.consume();
						} else if (lex.text === "^") {
							if (superscript) throw new ParseError("Double superscript", lex);
							superscript = this.handleSupSubscript("superscript");
						} else if (lex.text === "_") {
							if (subscript) throw new ParseError("Double subscript", lex);
							subscript = this.handleSupSubscript("subscript");
						} else if (lex.text === "'") {
							if (superscript) throw new ParseError("Double superscript", lex);
							const prime = {
								type: "textord",
								mode: this.mode,
								text: "\\prime"
							};
							const primes = [prime];
							this.consume();
							while (this.fetch().text === "'") {
								primes.push(prime);
								this.consume();
							}
							if (this.fetch().text === "^") primes.push(this.handleSupSubscript("superscript"));
							superscript = {
								type: "ordgroup",
								mode: this.mode,
								body: primes
							};
						} else if (uSubsAndSups[lex.text]) {
							const isSub = unicodeSubRegEx.test(lex.text);
							const subsupTokens = [];
							subsupTokens.push(new Token(uSubsAndSups[lex.text]));
							this.consume();
							while (true) {
								const token = this.fetch().text;
								if (!uSubsAndSups[token]) break;
								if (unicodeSubRegEx.test(token) !== isSub) break;
								subsupTokens.unshift(new Token(uSubsAndSups[token]));
								this.consume();
							}
							const body = this.subparse(subsupTokens);
							if (isSub) subscript = {
								type: "ordgroup",
								mode: "math",
								body
							};
							else superscript = {
								type: "ordgroup",
								mode: "math",
								body
							};
						} else break;
					}
					if (superscript || subscript) {
						if (base && base.type === "multiscript" && !base.postscripts) {
							base.postscripts = {
								sup: superscript,
								sub: subscript
							};
							return base;
						} else {
							const isFollowedByDelimiter = !base || base.type !== "op" && base.type !== "operatorname" ? void 0 : isDelimiter(this.nextToken.text);
							return {
								type: "supsub",
								mode: this.mode,
								base,
								sup: superscript,
								sub: subscript,
								isFollowedByDelimiter
							};
						}
					} else return base;
				}
				/**
				* Parses an entire function, including its base and all of its arguments.
				*/
				parseFunction(breakOnTokenText, name) {
					const token = this.fetch();
					const func = token.text;
					const funcData = functions[func];
					if (!funcData) return null;
					this.consume();
					if (name && name !== "atom" && !funcData.allowedInArgument) throw new ParseError("Got function '" + func + "' with no arguments" + (name ? " as " + name : ""), token);
					else if (this.mode === "text" && !funcData.allowedInText) throw new ParseError("Can't use function '" + func + "' in text mode", token);
					else if (this.mode === "math" && funcData.allowedInMath === false) throw new ParseError("Can't use function '" + func + "' in math mode", token);
					const prevAtomType = this.prevAtomType;
					const { args, optArgs } = this.parseArguments(func, funcData);
					this.prevAtomType = prevAtomType;
					return this.callFunction(func, args, optArgs, token, breakOnTokenText);
				}
				/**
				* Call a function handler with a suitable context and arguments.
				*/
				callFunction(name, args, optArgs, token, breakOnTokenText) {
					const context = {
						funcName: name,
						parser: this,
						token,
						breakOnTokenText
					};
					const func = functions[name];
					if (func && func.handler) return func.handler(context, args, optArgs);
					else throw new ParseError(`No function handler for ${name}`);
				}
				/**
				* Parses the arguments of a function or environment
				*/
				parseArguments(func, funcData) {
					const totalArgs = funcData.numArgs + funcData.numOptionalArgs;
					if (totalArgs === 0) return {
						args: [],
						optArgs: []
					};
					const args = [];
					const optArgs = [];
					for (let i = 0; i < totalArgs; i++) {
						let argType = funcData.argTypes && funcData.argTypes[i];
						const isOptional = i < funcData.numOptionalArgs;
						if (funcData.primitive && argType == null || funcData.type === "sqrt" && i === 1 && optArgs[0] == null) argType = "primitive";
						const arg = this.parseGroupOfType(`argument to '${func}'`, argType, isOptional);
						if (isOptional) optArgs.push(arg);
						else if (arg != null) args.push(arg);
						else throw new ParseError("Null argument, please report this as a bug");
					}
					return {
						args,
						optArgs
					};
				}
				/**
				* Parses a group when the mode is changing.
				*/
				parseGroupOfType(name, type, optional) {
					switch (type) {
						case "size": return this.parseSizeGroup(optional);
						case "url": return this.parseUrlGroup(optional);
						case "math":
						case "text": return this.parseArgumentGroup(optional, type);
						case "hbox": {
							const group = this.parseArgumentGroup(optional, "text");
							return group != null ? {
								type: "styling",
								mode: group.mode,
								body: [group],
								scriptLevel: "text"
							} : null;
						}
						case "raw": {
							const token = this.parseStringGroup("raw", optional);
							return token != null ? {
								type: "raw",
								mode: "text",
								string: token.text
							} : null;
						}
						case "primitive": {
							if (optional) throw new ParseError("A primitive argument cannot be optional");
							const group = this.parseGroup(name);
							if (group == null) throw new ParseError("Expected group as " + name, this.fetch());
							return group;
						}
						case "original":
						case null:
						case void 0: return this.parseArgumentGroup(optional);
						default: throw new ParseError("Unknown group type as " + name, this.fetch());
					}
				}
				/**
				* Discard any space tokens, fetching the next non-space token.
				*/
				consumeSpaces() {
					while (true) {
						const ch = this.fetch().text;
						if (ch === " " || ch === "\xA0" || ch === "︎") this.consume();
						else break;
					}
				}
				/**
				* Parses a group, essentially returning the string formed by the
				* brace-enclosed tokens plus some position information.
				*/
				parseStringGroup(modeName, optional) {
					const argToken = this.gullet.scanArgument(optional);
					if (argToken == null) return null;
					let str = "";
					let nextToken;
					while ((nextToken = this.fetch()).text !== "EOF") {
						str += nextToken.text;
						this.consume();
					}
					this.consume();
					argToken.text = str;
					return argToken;
				}
				/**
				* Parses a regex-delimited group: the largest sequence of tokens
				* whose concatenated strings match `regex`. Returns the string
				* formed by the tokens plus some position information.
				*/
				parseRegexGroup(regex, modeName) {
					const firstToken = this.fetch();
					let lastToken = firstToken;
					let str = "";
					let nextToken;
					while ((nextToken = this.fetch()).text !== "EOF" && regex.test(str + nextToken.text)) {
						lastToken = nextToken;
						str += lastToken.text;
						this.consume();
					}
					if (str === "") throw new ParseError("Invalid " + modeName + ": '" + firstToken.text + "'", firstToken);
					return firstToken.range(lastToken, str);
				}
				/**
				* Parses a size specification, consisting of magnitude and unit.
				*/
				parseSizeGroup(optional) {
					let res;
					let isBlank = false;
					this.gullet.consumeSpaces();
					if (!optional && this.gullet.future().text !== "{") res = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size");
					else res = this.parseStringGroup("size", optional);
					if (!res) return null;
					if (!optional && res.text.length === 0) {
						res.text = "0pt";
						isBlank = true;
					}
					const match = sizeRegEx.exec(res.text);
					if (!match) throw new ParseError("Invalid size: '" + res.text + "'", res);
					const data = {
						number: +(match[1] + match[2]),
						unit: match[3]
					};
					if (!validUnit(data)) throw new ParseError("Invalid unit: '" + data.unit + "'", res);
					return {
						type: "size",
						mode: this.mode,
						value: data,
						isBlank
					};
				}
				/**
				* Parses an URL, checking escaped letters and allowed protocols,
				* and setting the catcode of % as an active character (as in \hyperref).
				*/
				parseUrlGroup(optional) {
					this.gullet.lexer.setCatcode("%", 13);
					this.gullet.lexer.setCatcode("~", 12);
					const res = this.parseStringGroup("url", optional);
					this.gullet.lexer.setCatcode("%", 14);
					this.gullet.lexer.setCatcode("~", 13);
					if (res == null) return null;
					let url = res.text.replace(/\\([#$%&~_^{}])/g, "$1");
					url = res.text.replace(/{\u2044}/g, "/");
					return {
						type: "url",
						mode: this.mode,
						url
					};
				}
				/**
				* Parses an argument with the mode specified.
				*/
				parseArgumentGroup(optional, mode) {
					const argToken = this.gullet.scanArgument(optional);
					if (argToken == null) return null;
					const outerMode = this.mode;
					if (mode) this.switchMode(mode);
					this.gullet.beginGroup();
					const expression = this.parseExpression(false, "EOF");
					this.expect("EOF");
					this.gullet.endGroup();
					const result = {
						type: "ordgroup",
						mode: this.mode,
						loc: argToken.loc,
						body: expression
					};
					if (mode) this.switchMode(outerMode);
					return result;
				}
				/**
				* Parses an ordinary group, which is either a single nucleus (like "x")
				* or an expression in braces (like "{x+y}") or an implicit group, a group
				* that starts at the current position, and ends right before a higher explicit
				* group ends, or at EOF.
				*/
				parseGroup(name, breakOnTokenText) {
					const firstToken = this.fetch();
					const text = firstToken.text;
					if (name === "argument to '\\left'") return this.parseSymbol();
					let result;
					if (text === "{" || text === "\\begingroup" || text === "\\toggle") {
						this.consume();
						const groupEnd = text === "{" ? "}" : text === "\\begingroup" ? "\\endgroup" : "\\endtoggle";
						this.gullet.beginGroup();
						const expression = this.parseExpression(false, groupEnd);
						const lastToken = this.fetch();
						this.expect(groupEnd);
						this.gullet.endGroup();
						result = {
							type: lastToken.text === "\\endtoggle" ? "toggle" : "ordgroup",
							mode: this.mode,
							loc: SourceLocation.range(firstToken, lastToken),
							body: expression,
							semisimple: text === "\\begingroup" || void 0
						};
					} else {
						result = this.parseFunction(breakOnTokenText, name) || this.parseSymbol();
						if (result == null && text[0] === "\\" && !Object.prototype.hasOwnProperty.call(implicitCommands, text)) {
							if (this.settings.throwOnError) throw new ParseError("Unsupported function name: " + text, firstToken);
							result = this.formatUnsupportedCmd(text);
							this.consume();
						}
					}
					return result;
				}
				/**
				* Form ligature-like combinations of characters for text mode.
				* This includes inputs like "--", "---", "``" and "''".
				* The result will simply replace multiple textord nodes with a single
				* character in each value by a single textord node having multiple
				* characters in its value.  The representation is still ASCII source.
				* The group will be modified in place.
				*/
				formLigatures(group) {
					let n = group.length - 1;
					for (let i = 0; i < n; ++i) {
						const a = group[i];
						const v = a.text;
						if (v === "-" && group[i + 1].text === "-") {
							if (i + 1 < n && group[i + 2].text === "-") {
								group.splice(i, 3, {
									type: "textord",
									mode: "text",
									loc: SourceLocation.range(a, group[i + 2]),
									text: "---"
								});
								n -= 2;
							} else {
								group.splice(i, 2, {
									type: "textord",
									mode: "text",
									loc: SourceLocation.range(a, group[i + 1]),
									text: "--"
								});
								n -= 1;
							}
						}
						if ((v === "'" || v === "`") && group[i + 1].text === v) {
							group.splice(i, 2, {
								type: "textord",
								mode: "text",
								loc: SourceLocation.range(a, group[i + 1]),
								text: v + v
							});
							n -= 1;
						}
					}
				}
				/**
				* Parse a single symbol out of the string. Here, we handle single character
				* symbols and special functions like \verb.
				*/
				parseSymbol() {
					const nucleus = this.fetch();
					let text = nucleus.text;
					if (/^\\verb[^a-zA-Z]/.test(text)) {
						this.consume();
						let arg = text.slice(5);
						const star = arg.charAt(0) === "*";
						if (star) arg = arg.slice(1);
						if (arg.length < 2 || arg.charAt(0) !== arg.slice(-1)) throw new ParseError(`\\verb assertion failed --
                    please report what input caused this bug`);
						arg = arg.slice(1, -1);
						return {
							type: "verb",
							mode: "text",
							body: arg,
							star
						};
					}
					if (Object.prototype.hasOwnProperty.call(unicodeSymbols, text[0]) && this.mode === "math" && !symbols[this.mode][text[0]]) {
						if (this.settings.strict && this.mode === "math") throw new ParseError(`Accented Unicode text character "${text[0]}" used in math mode`, nucleus);
						text = unicodeSymbols[text[0]] + text.slice(1);
					}
					const match = this.mode === "math" ? combiningDiacriticalMarksEndRegex.exec(text) : null;
					if (match) {
						text = text.substring(0, match.index);
						if (text === "i") text = "ı";
						else if (text === "j") text = "ȷ";
					}
					let symbol;
					if (symbols[this.mode][text]) {
						let group = symbols[this.mode][text].group;
						if (group === "bin" && (binLeftCancellers.includes(this.prevAtomType) || this.prevAtomType === "")) group = "open";
						const loc = SourceLocation.range(nucleus);
						let s;
						if (Object.prototype.hasOwnProperty.call(ATOMS, group)) {
							const family = group;
							s = {
								type: "atom",
								mode: this.mode,
								family,
								loc,
								text
							};
							if ((family === "rel" || family === "bin") && this.prevAtomType === "text") {
								if (textRegEx.test(loc.lexer.input.slice(loc.end))) s.needsSpacing = true;
							}
						} else {
							if (asciiFromScript[text]) {
								this.consume();
								const nextCode = this.fetch().text.charCodeAt(0);
								const font = nextCode === 65025 ? "mathscr" : "mathcal";
								if (nextCode === 65024 || nextCode === 65025) this.consume();
								return {
									type: "font",
									mode: "math",
									font,
									body: {
										type: "mathord",
										mode: "math",
										loc,
										text: asciiFromScript[text]
									}
								};
							}
							s = {
								type: group,
								mode: this.mode,
								loc,
								text
							};
						}
						symbol = s;
					} else if (text.charCodeAt(0) >= 128 || combiningDiacriticalMarksEndRegex.exec(text)) {
						if (this.settings.strict && this.mode === "math") throw new ParseError(`Unicode text character "${text[0]}" used in math mode`, nucleus);
						symbol = {
							type: "textord",
							mode: "text",
							loc: SourceLocation.range(nucleus),
							text
						};
					} else return null;
					this.consume();
					if (match) for (let i = 0; i < match[0].length; i++) {
						const accent = match[0][i];
						if (!unicodeAccents[accent]) throw new ParseError(`Unknown accent ' ${accent}'`, nucleus);
						const command = unicodeAccents[accent][this.mode] || unicodeAccents[accent].text;
						if (!command) throw new ParseError(`Accent ${accent} unsupported in ${this.mode} mode`, nucleus);
						symbol = {
							type: "accent",
							mode: this.mode,
							loc: SourceLocation.range(nucleus),
							label: command,
							isStretchy: false,
							base: symbol
						};
					}
					return symbol;
				}
			};
			parseTree = function(toParse, settings) {
				if (!(typeof toParse === "string" || toParse instanceof String)) throw new TypeError("Temml can only parse string typed expression");
				let tree;
				let parser;
				try {
					parser = new Parser(toParse, settings);
					delete parser.gullet.macros.current["\\df@tag"];
					tree = parser.parse();
				} catch (error) {
					if (error.toString() === "ParseError:  Unmatched delimiter") {
						settings.wrapDelimiterPairs = false;
						parser = new Parser(toParse, settings);
						delete parser.gullet.macros.current["\\df@tag"];
						tree = parser.parse();
					} else throw error;
				}
				if (!(tree.length > 0 && tree[0].type && tree[0].type === "array" && tree[0].addEqnNum)) {
					if (parser.gullet.macros.get("\\df@tag")) {
						if (!settings.displayMode) throw new ParseError("\\tag works only in display mode");
						parser.gullet.feed("\\df@tag");
						tree = [{
							type: "tag",
							mode: "text",
							body: tree,
							tag: parser.parse()
						}];
					}
				}
				return tree;
			};
			subOrSupLevel = [
				2,
				2,
				3,
				3
			];
			Style = class Style {
				constructor(data) {
					this.level = data.level;
					this.color = data.color;
					this.font = data.font || "";
					this.fontFamily = data.fontFamily || "";
					this.fontSize = data.fontSize || 1;
					this.fontWeight = data.fontWeight || "";
					this.fontShape = data.fontShape || "";
					this.maxSize = data.maxSize;
				}
				/**
				* Returns a new style object with the same properties as "this".  Properties
				* from "extension" will be copied to the new style object.
				*/
				extend(extension) {
					const data = {
						level: this.level,
						color: this.color,
						font: this.font,
						fontFamily: this.fontFamily,
						fontSize: this.fontSize,
						fontWeight: this.fontWeight,
						fontShape: this.fontShape,
						maxSize: this.maxSize
					};
					for (const key in extension) if (Object.prototype.hasOwnProperty.call(extension, key)) data[key] = extension[key];
					return new Style(data);
				}
				withLevel(n) {
					return this.extend({ level: n });
				}
				incrementLevel() {
					return this.extend({ level: Math.min(this.level + 1, 3) });
				}
				inSubOrSup() {
					return this.extend({ level: subOrSupLevel[this.level] });
				}
				/**
				* Create a new style object with the given color.
				*/
				withColor(color) {
					return this.extend({ color });
				}
				/**
				* Creates a new style object with the given math font or old text font.
				* @type {[type]}
				*/
				withFont(font) {
					return this.extend({ font });
				}
				/**
				* Create a new style objects with the given fontFamily.
				*/
				withTextFontFamily(fontFamily) {
					return this.extend({
						fontFamily,
						font: ""
					});
				}
				/**
				* Creates a new style object with the given font size
				*/
				withFontSize(num) {
					return this.extend({ fontSize: num });
				}
				/**
				* Creates a new style object with the given font weight
				*/
				withTextFontWeight(fontWeight) {
					return this.extend({
						fontWeight,
						font: ""
					});
				}
				/**
				* Creates a new style object with the given font weight
				*/
				withTextFontShape(fontShape) {
					return this.extend({
						fontShape,
						font: ""
					});
				}
				/**
				* Gets the CSS color of the current style object
				*/
				getColor() {
					return this.color;
				}
			};
			version = "0.13.4";
			findEndOfMath = function(delimiter, text, startIndex) {
				let index = startIndex;
				let braceLevel = 0;
				const delimLength = delimiter.length;
				while (index < text.length) {
					const character = text[index];
					if (braceLevel <= 0 && text.slice(index, index + delimLength) === delimiter) return index;
					else if (character === "\\") index++;
					else if (character === "{") braceLevel++;
					else if (character === "}") braceLevel--;
					index++;
				}
				return -1;
			};
			escapeRegex = function(string) {
				return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
			};
			amsRegex = /^\\(?:begin|(?:eq)?ref){/;
			splitAtDelimiters = function(text, delimiters) {
				let index;
				const data = [];
				const regexLeft = new RegExp("(" + delimiters.map((x) => escapeRegex(x.left)).join("|") + ")");
				while (true) {
					index = text.search(regexLeft);
					if (index === -1) break;
					if (index > 0) {
						data.push({
							type: "text",
							data: text.slice(0, index)
						});
						text = text.slice(index);
					}
					const i = delimiters.findIndex((delim) => text.startsWith(delim.left));
					index = findEndOfMath(delimiters[i].right, text, delimiters[i].left.length);
					if (index === -1) break;
					const rawData = text.slice(0, index + delimiters[i].right.length);
					const math = amsRegex.test(rawData) ? rawData : text.slice(delimiters[i].left.length, index);
					data.push({
						type: "math",
						data: math,
						rawData,
						display: delimiters[i].display
					});
					text = text.slice(index + delimiters[i].right.length);
				}
				if (text !== "") data.push({
					type: "text",
					data: text
				});
				return data;
			};
			defaultDelimiters = [
				{
					left: "$$",
					right: "$$",
					display: true
				},
				{
					left: "\\(",
					right: "\\)",
					display: false
				},
				{
					left: "\\begin{equation}",
					right: "\\end{equation}",
					display: true
				},
				{
					left: "\\begin{equation*}",
					right: "\\end{equation*}",
					display: true
				},
				{
					left: "\\begin{align}",
					right: "\\end{align}",
					display: true
				},
				{
					left: "\\begin{align*}",
					right: "\\end{align*}",
					display: true
				},
				{
					left: "\\begin{alignat}",
					right: "\\end{alignat}",
					display: true
				},
				{
					left: "\\begin{alignat*}",
					right: "\\end{alignat*}",
					display: true
				},
				{
					left: "\\begin{gather}",
					right: "\\end{gather}",
					display: true
				},
				{
					left: "\\begin{gather*}",
					right: "\\end{gather*}",
					display: true
				},
				{
					left: "\\begin{CD}",
					right: "\\end{CD}",
					display: true
				},
				{
					left: "\\ref{",
					right: "}",
					display: false
				},
				{
					left: "\\eqref{",
					right: "}",
					display: false
				},
				{
					left: "\\[",
					right: "\\]",
					display: true
				}
			];
			firstDraftDelimiters = {
				"$": [
					{
						left: "$$",
						right: "$$",
						display: true
					},
					{
						left: "$`",
						right: "`$",
						display: false
					},
					{
						left: "$",
						right: "$",
						display: false
					}
				],
				"(": [{
					left: "\\[",
					right: "\\]",
					display: true
				}, {
					left: "\\(",
					right: "\\)",
					display: false
				}]
			};
			amsDelimiters = [
				{
					left: "\\begin{equation}",
					right: "\\end{equation}",
					display: true
				},
				{
					left: "\\begin{equation*}",
					right: "\\end{equation*}",
					display: true
				},
				{
					left: "\\begin{align}",
					right: "\\end{align}",
					display: true
				},
				{
					left: "\\begin{align*}",
					right: "\\end{align*}",
					display: true
				},
				{
					left: "\\begin{alignat}",
					right: "\\end{alignat}",
					display: true
				},
				{
					left: "\\begin{alignat*}",
					right: "\\end{alignat*}",
					display: true
				},
				{
					left: "\\begin{gather}",
					right: "\\end{gather}",
					display: true
				},
				{
					left: "\\begin{gather*}",
					right: "\\end{gather*}",
					display: true
				},
				{
					left: "\\begin{CD}",
					right: "\\end{CD}",
					display: true
				},
				{
					left: "\\ref{",
					right: "}",
					display: false
				},
				{
					left: "\\eqref{",
					right: "}",
					display: false
				}
			];
			delimitersFromKey = (key) => {
				if (key === "$" || key === "(") return firstDraftDelimiters[key];
				else if (key === "$+" || key === "(+") return firstDraftDelimiters[key.slice(0, 1)].concat(amsDelimiters);
				else if (key === "ams") return amsDelimiters;
				else if (key === "all") return firstDraftDelimiters["("].concat(firstDraftDelimiters["$"]).concat(amsDelimiters);
				else return defaultDelimiters;
			};
			renderMathInText = function(text, optionsCopy) {
				const data = splitAtDelimiters(text, optionsCopy.delimiters);
				if (data.length === 1 && data[0].type === "text") return null;
				const fragment = document.createDocumentFragment();
				for (let i = 0; i < data.length; i++) if (data[i].type === "text") fragment.appendChild(document.createTextNode(data[i].data));
				else {
					const span = document.createElement("span");
					let math = data[i].data;
					optionsCopy.displayMode = data[i].display;
					try {
						if (optionsCopy.preProcess) math = optionsCopy.preProcess(math);
						temml.render(math, span, optionsCopy);
					} catch (e) {
						if (!(e instanceof ParseError)) throw e;
						optionsCopy.errorCallback("Temml auto-render: Failed to parse `" + data[i].data + "` with ", e);
						fragment.appendChild(document.createTextNode(data[i].rawData));
						continue;
					}
					fragment.appendChild(span);
				}
				return fragment;
			};
			renderElem = function(elem, optionsCopy) {
				for (let i = 0; i < elem.childNodes.length; i++) {
					const childNode = elem.childNodes[i];
					if (childNode.nodeType === 3) {
						const frag = renderMathInText(childNode.textContent, optionsCopy);
						if (frag) {
							i += frag.childNodes.length - 1;
							elem.replaceChild(frag, childNode);
						}
					} else if (childNode.nodeType === 1) {
						const className = " " + childNode.className + " ";
						if (optionsCopy.ignoredTags.indexOf(childNode.nodeName.toLowerCase()) === -1 && optionsCopy.ignoredClasses.every((x) => className.indexOf(" " + x + " ") === -1)) renderElem(childNode, optionsCopy);
					}
				}
			};
			renderMathInElement = function(elem, options) {
				if (!elem) throw new Error("No element provided to render");
				const optionsCopy = {};
				for (const option in options) if (Object.prototype.hasOwnProperty.call(options, option)) optionsCopy[option] = options[option];
				if (optionsCopy.fences) optionsCopy.delimiters = delimitersFromKey(optionsCopy.fences);
				else optionsCopy.delimiters = optionsCopy.delimiters || defaultDelimiters;
				optionsCopy.ignoredTags = optionsCopy.ignoredTags || [
					"script",
					"noscript",
					"style",
					"textarea",
					"pre",
					"code",
					"option"
				];
				optionsCopy.ignoredClasses = optionsCopy.ignoredClasses || [];
				optionsCopy.errorCallback = optionsCopy.errorCallback || console.error;
				optionsCopy.macros = optionsCopy.macros || {};
				renderElem(elem, optionsCopy);
				postProcess(elem);
			};
			render = function(expression, baseNode, options = {}) {
				baseNode.textContent = "";
				const alreadyInMathElement = baseNode.tagName.toLowerCase() === "math";
				if (alreadyInMathElement) options.wrap = "none";
				const math = renderToMathMLTree(expression, options);
				if (alreadyInMathElement) {
					baseNode.textContent = "";
					math.children.forEach((e) => {
						baseNode.appendChild(e.toNode());
					});
				} else if (math.children.length > 1) {
					baseNode.textContent = "";
					math.children.forEach((e) => {
						baseNode.appendChild(e.toNode());
					});
				} else baseNode.appendChild(math.toNode());
			};
			if (typeof document !== "undefined") {
				if (document.compatMode !== "CSS1Compat") {
					typeof console !== "undefined" && console.warn("Warning: Temml doesn't work in quirks mode. Make sure your website has a suitable doctype.");
					render = function() {
						throw new ParseError("Temml doesn't work in quirks mode.");
					};
				}
			}
			renderToString = function(expression, options) {
				return renderToMathMLTree(expression, options).toMarkup();
			};
			generateParseTree = function(expression, options) {
				const settings = new Settings(options);
				return parseTree(expression, settings);
			};
			definePreamble = function(expression, options) {
				const settings = new Settings(options);
				settings.macros = {};
				if (!(typeof expression === "string" || expression instanceof String)) throw new TypeError("Temml can only parse string typed expression");
				const parser = new Parser(expression, settings, true);
				delete parser.gullet.macros.current["\\df@tag"];
				return parser.parse();
			};
			renderError = function(error, expression, options) {
				if (options.throwOnError || !(error instanceof ParseError)) throw error;
				const node = new Span(["temml-error"], [new TextNode$1(expression + "\n\n" + error.toString())]);
				node.style.color = options.errorColor;
				node.style.whiteSpace = "pre-line";
				return node;
			};
			renderToMathMLTree = function(expression, options) {
				const settings = new Settings(options);
				try {
					return buildMathML(parseTree(expression, settings), expression, new Style({
						level: settings.displayMode ? StyleLevel.DISPLAY : StyleLevel.TEXT,
						maxSize: settings.maxSize
					}), settings);
				} catch (error) {
					return renderError(error, expression, settings);
				}
			};
			temml$1 = {
				/**
				* Current Temml version
				*/
				version,
				/**
				* Renders the given LaTeX into MathML, and adds
				* it as a child to the specified DOM node.
				*/
				render,
				/**
				* Renders the given LaTeX into MathML string,
				* for sending to the client.
				*/
				renderToString,
				/**
				* Finds all the math delimiters in a given element of a running HTML document
				* and converts the contents of each instance into a <math> element.
				*/
				renderMathInElement,
				/**
				* Post-process an entire HTML block.
				* Writes AMS auto-numbers and implements \ref{}.
				* Typcally called once, after a loop has rendered many individual spans.
				*/
				postProcess,
				/**
				* Temml error, usually during parsing.
				*/
				ParseError,
				/**
				* Creates a set of macros with document-wide scope.
				*/
				definePreamble,
				/**
				* Parses the given LaTeX into Temml's internal parse tree structure,
				* without rendering to HTML or MathML.
				*
				* NOTE: This method is not currently recommended for public use.
				* The internal tree representation is unstable and is very likely
				* to change. Use at your own risk.
				*/
				__parse: generateParseTree,
				/**
				* Renders the given LaTeX into a MathML internal DOM tree
				* representation, without flattening that representation to a string.
				*
				* NOTE: This method is not currently recommended for public use.
				* The internal tree representation is unstable and is very likely
				* to change. Use at your own risk.
				*/
				__renderToMathMLTree: renderToMathMLTree,
				/**
				* adds a new symbol to builtin symbols table
				*/
				__defineSymbol: defineSymbol,
				/**
				* adds a new macro to builtin macro list
				*/
				__defineMacro: defineMacro
			};
		}));
		// src/client/conversationExport/pngExporter.ts
		var pngExporter_exports = /* @__PURE__ */ __exportAll({ CEPngExporter: () => CEPngExporter });
		var CEPngExporter;
		var init_pngExporter = __esmMin((() => {
			init_temml();
			init_markdown();
			init_constants();
			CEPngExporter = class {
				PAGE_WIDTH = 820;
				PADDING_X = 40;
				contentWidth = this.PAGE_WIDTH - this.PADDING_X * 2;
				/** 正文区左右留白（原 BODY_PADDING_X）。 */
				BODY_PADDING_X = 24;
				/** 左侧 Q/A 标记栏宽（原 MARKER_GUTTER）。 */
				MARKER_GUTTER = 38;
				contentX = this.BODY_PADDING_X + this.MARKER_GUTTER;
				bodyWidth = this.PAGE_WIDTH - this.contentX - this.BODY_PADDING_X;
				IMAGE_LOAD_TIMEOUT = 8e3;
				MAX_IMAGE_HEIGHT = 460;
				fontFamily = "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Microsoft YaHei\", Helvetica, Arial, sans-serif";
				monoFamily = "\"SF Mono\", \"Cascadia Code\", Consolas, \"Courier New\", monospace";
				colors = {
					bg: "#ffffff",
					text: "#1f2937",
					subtle: "#6b7280",
					userBg: "#f3f4f6",
					codeBg: "#f6f8fa",
					codeText: "#24292e",
					quoteBar: "#d1d5db",
					divider: "#e5e7eb",
					placeholderBg: "#f3f4f6",
					placeholderText: "#9ca3af"
				};
				texts;
				formulaCapable = false;
				formulaImages = /* @__PURE__ */ new Map();
				/** 导出 PNG（原 export）。 */
				async export(job, themeId, texts) {
					const canvas = await this.renderCanvas(job, themeId, texts);
					return await this.canvasToBlob(canvas);
				}
				/** 渲染整张长图到 canvas（原 renderCanvas，供 PNG / PDF 复用）。 */
				async renderCanvas(job, themeId, texts) {
					this.texts = texts;
					const theme = ceGetTheme(themeId);
					const dpr = Math.min(window.devicePixelRatio || 1, 2);
					const measureCtx = document.createElement("canvas").getContext("2d");
					if (measureCtx === null) throw new Error("canvas 2d context unavailable");
					const inlineImages = new Map(job.turns.map((turn) => [turn, this.markdownImageEntries(turn.assistant.markdown)]));
					const imageMap = await this.preloadImages(job.turns.flatMap((turn) => [
						...turn.user.images,
						...turn.assistant.images,
						...inlineImages.get(turn) ?? []
					]));
					const hasFormulas = job.turns.some((turn) => this.collectFormulas(turn.assistant.markdown).length > 0);
					this.formulaCapable = hasFormulas ? await this.probeFormulaRendering() : false;
					this.formulaImages = this.formulaCapable ? await this.preloadFormulas(job) : /* @__PURE__ */ new Map();
					const headerBlock = this.buildHeader(measureCtx, job);
					const bodyOps = this.buildBodyOps(measureCtx, job, imageMap, theme, inlineImages);
					const { ops, totalHeight, truncated } = this.layout(headerBlock.height, bodyOps);
					const canvas = document.createElement("canvas");
					canvas.width = Math.round(this.PAGE_WIDTH * dpr);
					canvas.height = Math.round(totalHeight * dpr);
					const ctx = canvas.getContext("2d");
					if (ctx === null) throw new Error("canvas 2d context unavailable");
					ctx.scale(dpr, dpr);
					ctx.textBaseline = "top";
					ctx.fillStyle = this.colors.bg;
					ctx.fillRect(0, 0, this.PAGE_WIDTH, totalHeight);
					headerBlock.paint(ctx, 0, theme);
					let y = headerBlock.height;
					for (const op of ops) {
						op.paint(ctx, y);
						y += op.height;
					}
					if (truncated) this.paintTruncationNotice(ctx, y);
					return canvas;
				}
				layout(headerHeight, bodyOps) {
					const maxBody = CE_MAX_CANVAS_HEIGHT - headerHeight - 80;
					const ops = [];
					let used = 0;
					let truncated = false;
					for (const op of bodyOps) {
						if (used + op.height > maxBody) {
							truncated = true;
							break;
						}
						ops.push(op);
						used += op.height;
					}
					const bottomPadding = 32;
					const noticeSpace = truncated ? 56 : 0;
					return {
						ops,
						totalHeight: Math.ceil(headerHeight + used + bottomPadding + noticeSpace),
						truncated
					};
				}
				paintTruncationNotice(ctx, y) {
					this.setFont(ctx, {
						size: 14,
						weight: "500"
					});
					ctx.fillStyle = this.colors.subtle;
					ctx.textAlign = "center";
					ctx.fillText(this.texts.truncatedNotice, this.PAGE_WIDTH / 2, y + 16);
					ctx.textAlign = "left";
				}
				buildHeader(ctx, job) {
					const padX = this.PADDING_X;
					const padTop = 32;
					const innerWidth = this.contentWidth;
					this.setFont(ctx, {
						size: 24,
						weight: "700"
					});
					const titleLines = this.wrapText(ctx, job.meta.title, innerWidth);
					const metaLines = [];
					if (job.options.showTime) metaLines.push(`${this.texts.timeLabel}: ${ceFormatLocalTime(job.meta.exportTime)}`);
					const titleLineHeight = 32;
					const metaLineHeight = 20;
					const gap = metaLines.length > 0 ? 14 : 0;
					const height = padTop + titleLines.length * titleLineHeight + gap + metaLines.length * metaLineHeight + 28;
					return {
						height,
						paint: (c, top, themeDef) => {
							this.fillThemeBackground(c, top, height, themeDef);
							c.fillStyle = themeDef.textColor;
							c.textAlign = "left";
							let cursor = top + padTop;
							this.setFont(c, {
								size: 24,
								weight: "700"
							});
							for (const line of titleLines) {
								c.fillText(line, padX, cursor);
								cursor += titleLineHeight;
							}
							if (metaLines.length > 0) {
								cursor += gap - 6;
								this.setFont(c, {
									size: 13,
									weight: "400"
								});
								c.globalAlpha = .9;
								for (const line of metaLines) {
									const clipped = this.clipToWidth(c, line, innerWidth);
									c.fillText(clipped, padX, cursor);
									cursor += metaLineHeight;
								}
								c.globalAlpha = 1;
							}
						}
					};
				}
				fillThemeBackground(ctx, top, height, theme) {
					if (theme.gradient !== void 0) {
						const grad = ctx.createLinearGradient(0, top, this.PAGE_WIDTH, top + height);
						theme.gradient.forEach(([offset, color]) => {
							grad.addColorStop(offset, color);
						});
						ctx.fillStyle = grad;
					} else ctx.fillStyle = theme.solid ?? "#0d0d0d";
					ctx.fillRect(0, top, this.PAGE_WIDTH, height);
				}
				buildBodyOps(ctx, job, imageMap, theme, inlineImages) {
					const ops = [];
					ops.push(this.spacerOp(18));
					job.turns.forEach((turn, index) => {
						if (index > 0) ops.push(this.dividerOp());
						if (!turn.omitUser) {
							const askTime = job.options.showConversationTime ? ceFormatChatTime(turn.user.time) : "";
							const userOp = this.userTextOp(ctx, turn.user.text !== "" ? turn.user.text : this.texts.emptyUserPreview, askTime);
							ops.push(this.withRoleMarker(userOp, this.texts.exportRoleUser, true, theme));
							for (const image of turn.user.images) ops.push(this.imageOp(image, imageMap));
						}
						if (turn.omitAssistant) return;
						if (!turn.omitUser) ops.push(this.spacerOp(10));
						const assistantOps = [];
						const markdown = replaceMarkdownTokens(turn.assistant.markdown, markdownImages(turn.assistant.markdown), (image) => image.alt);
						const blocks = this.parseMarkdownBlocks(markdown);
						if (blocks.length > 0) for (const block of blocks) assistantOps.push(this.markdownBlockOp(ctx, block));
						else if (turn.assistant.text !== "") assistantOps.push(this.paragraphOp(ctx, turn.assistant.text));
						const used = /* @__PURE__ */ new Set();
						for (const image of [...inlineImages.get(turn) ?? [], ...turn.assistant.images]) {
							if (image.src !== "" && used.has(image.src)) continue;
							if (image.src !== "") used.add(image.src);
							assistantOps.push(this.imageOp(image, imageMap));
						}
						if (assistantOps.length === 0) assistantOps.push(this.paragraphOp(ctx, this.texts.emptyAssistant));
						assistantOps[0] = this.withRoleMarker(assistantOps[0], this.texts.exportRoleAssistant, false, theme);
						for (const op of assistantOps) ops.push(op);
					});
					return ops;
				}
				markdownImageEntries(markdown) {
					return markdownImages(markdown).map((image) => ({
						role: "assistant",
						src: safeImageSource(image.src),
						alt: image.alt,
						width: null,
						height: null,
						fileId: null,
						unrendered: false
					}));
				}
				spacerOp(height) {
					return {
						height,
						paint() {}
					};
				}
				/** 给内容块 op 附加左侧「Q / A」圆形标记（原 _withRoleMarker）。 */
				withRoleMarker(op, letter, isQuestion, theme) {
					const center = op.markerCenter ?? 16;
					const origPaint = op.paint.bind(op);
					return {
						height: op.height,
						markerCenter: op.markerCenter,
						paint: (c, y) => {
							origPaint(c, y);
							this.paintRoleMarker(c, y + center, letter, isQuestion, theme);
						}
					};
				}
				paintRoleMarker(c, centerY, letter, isQuestion, theme) {
					const r = 14;
					const cx = this.BODY_PADDING_X + r;
					let bg = "#e5e7eb";
					let fg = "#4b5563";
					if (isQuestion) {
						bg = theme.gradient !== void 0 ? theme.gradient[0][1] : theme.solid ?? "#6128ff";
						fg = "#ffffff";
					}
					c.beginPath();
					c.arc(cx, centerY, r, 0, Math.PI * 2);
					c.fillStyle = bg;
					c.fill();
					this.setFont(c, {
						size: 14,
						weight: "700"
					});
					c.fillStyle = fg;
					c.textAlign = "center";
					c.textBaseline = "middle";
					c.fillText(letter, cx, centerY + .5);
					c.textAlign = "left";
					c.textBaseline = "top";
				}
				dividerOp() {
					return {
						height: 33,
						paint: (c, y) => {
							c.strokeStyle = this.colors.divider;
							c.lineWidth = 1;
							c.beginPath();
							c.moveTo(this.BODY_PADDING_X, y + 16);
							c.lineTo(this.PAGE_WIDTH - this.BODY_PADDING_X, y + 16);
							c.stroke();
						}
					};
				}
				userTextOp(ctx, text, timeText = "") {
					const padding = 14;
					const lineHeight = 22;
					const timeHeight = timeText !== "" ? 20 : 0;
					this.setFont(ctx, {
						size: 15,
						weight: "400"
					});
					const lines = this.wrapText(ctx, text, this.bodyWidth - 28);
					const boxHeight = lines.length * lineHeight + 28 + timeHeight;
					return {
						height: boxHeight + 10,
						markerCenter: padding + (timeHeight !== 0 ? timeHeight : lineHeight) / 2,
						paint: (c, y) => {
							const boxTop = y;
							this.roundRect(c, this.contentX, boxTop, this.bodyWidth, boxHeight, 10);
							c.fillStyle = this.colors.userBg;
							c.fill();
							c.textAlign = "left";
							let textTop = boxTop + padding;
							if (timeText !== "") {
								this.setFont(c, {
									size: 12,
									weight: "400"
								});
								c.fillStyle = this.colors.subtle;
								c.textBaseline = "top";
								c.fillText(timeText, this.contentX + padding, textTop);
								textTop += timeHeight;
							}
							this.setFont(c, {
								size: 15,
								weight: "400"
							});
							c.fillStyle = this.colors.text;
							c.textBaseline = "middle";
							let cursor = textTop + lineHeight / 2;
							for (const line of lines) {
								c.fillText(line, this.contentX + padding, cursor);
								cursor += lineHeight;
							}
							c.textBaseline = "top";
						}
					};
				}
				paragraphOp(ctx, text) {
					return this.richTextOp(ctx, text, {
						font: {
							size: 15,
							weight: "400"
						},
						lineHeight: 23,
						topPad: 4,
						bottomPad: 6
					});
				}
				/**
				* 通用富文本块渲染（原 _richTextOp）：支持内联公式混排、
				* 可选列表标记 / 引用竖条 / 缩进。
				*/
				richTextOp(ctx, rawText, opts) {
					const font = opts.font;
					const lineHeight = opts.lineHeight ?? 23;
					const color = opts.color ?? this.colors.text;
					const indent = opts.indent ?? 0;
					const marker = opts.marker ?? null;
					const markerDx = opts.markerDx ?? 0;
					const topPad = opts.topPad ?? 4;
					const bottomPad = opts.bottomPad ?? 6;
					const quoteBar = opts.quoteBar === true;
					const maxWidth = opts.maxWidth ?? this.bodyWidth - indent;
					const tokens = this.tokenizeInline(rawText);
					const hasFormula = tokens.some((t) => t.type === "formula");
					let lines;
					if (hasFormula) lines = this.layoutInline(ctx, tokens, maxWidth, font);
					else {
						const plain = tokens.map((t) => t.type === "text" ? t.text : "").join("");
						this.setFont(ctx, font);
						lines = this.wrapText(ctx, plain, maxWidth).map((t) => [{
							type: "text",
							text: t,
							w: 0
						}]);
					}
					const innerHeight = lines.length * lineHeight;
					return {
						height: innerHeight + topPad + bottomPad,
						markerCenter: topPad + lineHeight / 2,
						paint: (c, y) => {
							c.textAlign = "left";
							if (quoteBar) {
								c.fillStyle = this.colors.quoteBar;
								c.fillRect(this.contentX, y + topPad, 3, innerHeight);
							}
							if (marker !== null) {
								this.setFont(c, font);
								c.fillStyle = color;
								c.fillText(marker, this.contentX + markerDx, y + topPad);
							}
							let cursor = y + topPad;
							const startX = this.contentX + indent;
							for (const line of lines) {
								let cx = startX;
								for (const item of line) {
									if (item.type === "formula" && item.entry !== null) try {
										c.drawImage(item.entry.element, cx, cursor + (lineHeight - item.h) / 2 - 2, item.w, item.h);
									} catch {
										this.setFont(c, font);
										c.fillStyle = color;
										c.fillText(item.fallback, cx, cursor);
									}
									else if (item.type === "formula") {
										this.setFont(c, font);
										c.fillStyle = color;
										c.fillText(item.fallback, cx, cursor);
									} else {
										this.setFont(c, font);
										c.fillStyle = color;
										c.fillText(item.text, cx, cursor);
									}
									cx += item.w;
								}
								cursor += lineHeight;
							}
						}
					};
				}
				/** 含内联公式的文本切分为 token（原 _tokenizeInline）。 */
				tokenizeInline(rawText) {
					const tokens = [];
					const literals = markdownLiterals();
					const prose = literals.protectInline(rawText);
					const plain = (text) => literals.restore(this.cleanInline(text));
					let start = 0;
					for (const match of prose.matchAll(/\$([^$\n\u0000]+?)\$/g)) {
						if (match.index > start) tokens.push({
							type: "text",
							text: plain(prose.slice(start, match.index))
						});
						tokens.push({
							type: "formula",
							latex: match[1].trim()
						});
						start = match.index + match[0].length;
					}
					if (start < prose.length) tokens.push({
						type: "text",
						text: plain(prose.slice(start))
					});
					return tokens;
				}
				/** 行内混排布局：文本按字符换行，公式作为整体盒子换行（原 _layoutInline）。 */
				layoutInline(ctx, tokens, maxWidth, font) {
					const inlineH = Math.round(font.size * 1.15);
					const lines = [];
					let line = [];
					let x = 0;
					const pushLine = () => {
						lines.push(line);
						line = [];
						x = 0;
					};
					for (const token of tokens) if (token.type === "text") {
						this.setFont(ctx, font);
						for (const ch of token.text) {
							const cw = ctx.measureText(ch).width;
							if (x + cw > maxWidth && line.length > 0) pushLine();
							const lastItem = line[line.length - 1];
							if (lastItem !== void 0 && lastItem.type === "text") {
								lastItem.text += ch;
								lastItem.w += cw;
							} else line.push({
								type: "text",
								text: ch,
								w: cw
							});
							x += cw;
						}
					} else {
						const key = `I:${token.latex}`;
						const entry = this.formulaCapable ? this.formulaImages.get(key) ?? null : null;
						let w;
						const h = inlineH;
						if (entry !== null) w = entry.width * (inlineH / entry.height);
						else {
							this.setFont(ctx, font);
							w = ctx.measureText(token.latex).width;
						}
						if (x + w > maxWidth && line.length > 0) pushLine();
						line.push({
							type: "formula",
							entry,
							w,
							h,
							fallback: token.latex
						});
						x += w;
					}
					if (line.length > 0) pushLine();
					return lines;
				}
				markdownBlockOp(ctx, block) {
					switch (block.kind) {
						case "heading": return this.headingOp(ctx, block);
						case "listitem": return this.listItemOp(ctx, block);
						case "quote": return this.quoteOp(ctx, block);
						case "code": return this.codeOp(ctx, block);
						case "formula": return this.formulaBlockOp(ctx, block);
						case "table": return this.tableOp(ctx, block);
						default: return this.paragraphOp(ctx, block.text);
					}
				}
				tableOp(ctx, block) {
					const width = this.bodyWidth / block.headers.length;
					const padding = Math.min(8, width / 4);
					const rows = [block.headers, ...block.rows].map((row, rowIndex) => {
						const cells = block.headers.map((_, column) => this.richTextOp(ctx, row[column] ?? "", {
							font: {
								size: 14,
								weight: rowIndex === 0 ? "600" : "400"
							},
							indent: column * width + padding,
							maxWidth: Math.max(1, width - padding * 2),
							topPad: 8,
							bottomPad: 8
						}));
						return {
							cells,
							height: Math.max(38, ...cells.map((cell) => cell.height))
						};
					});
					return {
						height: 12 + rows.reduce((total, row) => total + row.height, 0),
						markerCenter: 23,
						paint: (c, y) => {
							let top = y + 4;
							rows.forEach((row, index) => {
								if (index === 0) {
									c.fillStyle = this.colors.codeBg;
									c.fillRect(this.contentX, top, this.bodyWidth, row.height);
								}
								row.cells.forEach((cell, column) => {
									const left = this.contentX + column * width;
									c.strokeStyle = this.colors.divider;
									c.lineWidth = 1;
									c.strokeRect(left, top, width, row.height);
									c.save();
									c.beginPath();
									c.rect(left, top, width, row.height);
									c.clip();
									cell.paint(c, top);
									c.restore();
								});
								top += row.height;
							});
						}
					};
				}
				formulaBlockOp(ctx, block) {
					const key = `D:${block.latex}`;
					const entry = this.formulaCapable ? this.formulaImages.get(key) ?? null : null;
					if (entry !== null) {
						let w = entry.width;
						let h = entry.height;
						if (w > this.bodyWidth) {
							const ratio = this.bodyWidth / w;
							w = this.bodyWidth;
							h = h * ratio;
						}
						return {
							height: h + 24,
							markerCenter: 12 + h / 2,
							paint: (c, y) => {
								const x = this.contentX + (this.bodyWidth - w) / 2;
								try {
									c.drawImage(entry.element, x, y + 12, w, h);
								} catch {
									this.paintCenteredText(c, y, block.latex);
								}
							}
						};
					}
					const lineHeight = 23;
					this.setFont(ctx, {
						size: 15,
						weight: "400"
					});
					const lines = this.wrapText(ctx, block.latex, this.bodyWidth);
					return {
						height: lines.length * lineHeight + 16,
						markerCenter: 19.5,
						paint: (c, y) => {
							this.setFont(c, {
								size: 15,
								weight: "400"
							});
							c.fillStyle = this.colors.text;
							c.textAlign = "center";
							let cursor = y + 8;
							for (const line of lines) {
								c.fillText(line, this.contentX + this.bodyWidth / 2, cursor);
								cursor += lineHeight;
							}
							c.textAlign = "left";
						}
					};
				}
				paintCenteredText(ctx, y, text) {
					this.setFont(ctx, {
						size: 15,
						weight: "400"
					});
					ctx.fillStyle = this.colors.text;
					ctx.textAlign = "center";
					ctx.fillText(text, this.contentX + this.bodyWidth / 2, y + 12);
					ctx.textAlign = "left";
				}
				headingOp(ctx, block) {
					const size = block.level <= 1 ? 20 : block.level === 2 ? 18 : 16;
					return this.richTextOp(ctx, block.text, {
						font: {
							size,
							weight: "700"
						},
						lineHeight: size + 8,
						topPad: 8,
						bottomPad: 4
					});
				}
				listItemOp(ctx, block) {
					const marker = block.ordered ? `${String(block.index)}.` : "•";
					return this.richTextOp(ctx, block.text, {
						font: {
							size: 15,
							weight: "400"
						},
						lineHeight: 23,
						indent: 22 + block.depth * 18,
						marker,
						markerDx: block.depth * 18,
						topPad: 3,
						bottomPad: 3
					});
				}
				quoteOp(ctx, block) {
					return this.richTextOp(ctx, block.text, {
						font: {
							size: 15,
							weight: "400"
						},
						lineHeight: 23,
						indent: 18,
						color: this.colors.subtle,
						quoteBar: true,
						topPad: 2,
						bottomPad: 10
					});
				}
				codeOp(ctx, block) {
					const padding = 14;
					const lineHeight = 20;
					this.setFont(ctx, {
						size: 13,
						mono: true
					});
					const rawLines = block.code.split("\n");
					const wrapped = [];
					for (const line of rawLines) {
						const parts = this.wrapText(ctx, line !== "" ? line : " ", this.bodyWidth - 28);
						wrapped.push(...parts.length > 0 ? parts : [""]);
					}
					const boxHeight = wrapped.length * lineHeight + 28;
					return {
						height: boxHeight + 12,
						markerCenter: 24,
						paint: (c, y) => {
							this.roundRect(c, this.contentX, y, this.bodyWidth, boxHeight, 8);
							c.fillStyle = this.colors.codeBg;
							c.fill();
							this.setFont(c, {
								size: 13,
								mono: true
							});
							c.fillStyle = this.colors.codeText;
							c.textAlign = "left";
							let cursor = y + padding;
							for (const line of wrapped) {
								c.fillText(line, this.contentX + padding, cursor);
								cursor += lineHeight;
							}
						}
					};
				}
				imageOp(image, imageMap) {
					const entry = imageMap.get(image.src);
					if (entry !== void 0 && entry.element !== null) {
						const el = entry.element;
						const naturalW = entry.width || el.naturalWidth || 1;
						const naturalH = entry.height || el.naturalHeight || 1;
						const drawWidth = Math.min(naturalW, this.bodyWidth);
						let drawHeight = naturalH / naturalW * drawWidth;
						let finalWidth = drawWidth;
						if (drawHeight > this.MAX_IMAGE_HEIGHT) {
							const ratio = this.MAX_IMAGE_HEIGHT / drawHeight;
							drawHeight = this.MAX_IMAGE_HEIGHT;
							finalWidth = drawWidth * ratio;
						}
						return {
							height: drawHeight + 16,
							markerCenter: 22,
							paint: (c, y) => {
								try {
									c.drawImage(el, this.contentX, y + 8, finalWidth, drawHeight);
								} catch {
									this.paintImagePlaceholder(c, y);
								}
							}
						};
					}
					return {
						height: 56,
						markerCenter: 22,
						paint: (c, y) => {
							this.paintImagePlaceholder(c, y);
						}
					};
				}
				paintImagePlaceholder(ctx, y) {
					const height = 40;
					this.roundRect(ctx, this.contentX, y + 8, this.bodyWidth, height, 8);
					ctx.fillStyle = this.colors.placeholderBg;
					ctx.fill();
					this.setFont(ctx, {
						size: 13,
						weight: "400"
					});
					ctx.fillStyle = this.colors.placeholderText;
					ctx.textAlign = "center";
					ctx.fillText(this.texts.imageCannotEmbed, this.contentX + this.bodyWidth / 2, y + 8 + height / 2 - 7);
					ctx.textAlign = "left";
				}
				parseMarkdownBlocks(markdown) {
					const blocks = [];
					let start = 0;
					for (const fence of fencedCodeSpans(markdown)) {
						this.appendTextBlocks(blocks, markdown.slice(start, fence.start));
						blocks.push({
							kind: "code",
							lang: fence.info,
							code: fencedCodeText(markdown, fence)
						});
						start = fence.end;
					}
					this.appendTextBlocks(blocks, markdown.slice(start));
					return blocks;
				}
				appendTextBlocks(blocks, markdown) {
					if (markdown === "") return;
					const lines = markdown.split("\n");
					let i = 0;
					let paragraph = [];
					const flushParagraph = () => {
						if (paragraph.length > 0) {
							const raw = paragraph.join(" ").trim();
							if (raw !== "") blocks.push({
								kind: "paragraph",
								text: raw
							});
							paragraph = [];
						}
					};
					while (i < lines.length) {
						const line = lines[i];
						const trimmed = line.trim();
						if (trimmed === "$$") {
							flushParagraph();
							const formulaLines = [];
							i++;
							while (i < lines.length && lines[i].trim() !== "$$") {
								formulaLines.push(lines[i]);
								i++;
							}
							i++;
							blocks.push({
								kind: "formula",
								latex: formulaLines.join("\n").trim()
							});
							continue;
						}
						if (trimmed === "") {
							flushParagraph();
							i++;
							continue;
						}
						const heading = /^(#{1,6})\s+(.*)$/.exec(trimmed);
						if (heading !== null) {
							flushParagraph();
							blocks.push({
								kind: "heading",
								level: heading[1].length,
								text: heading[2].trim()
							});
							i++;
							continue;
						}
						if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
							flushParagraph();
							i++;
							continue;
						}
						const quote = /^\s*>\s?(.*)$/.exec(line);
						if (quote !== null) {
							flushParagraph();
							const quoteText = [quote[1]];
							i++;
							while (i < lines.length && /^\s*>\s?/.test(lines[i])) {
								quoteText.push(lines[i].replace(/^\s*>\s?/, ""));
								i++;
							}
							blocks.push({
								kind: "quote",
								text: quoteText.join(" ").trim()
							});
							continue;
						}
						const listMatch = /^(\s*)([-*+]|\d+\.)\s+(.*)$/.exec(line);
						if (listMatch !== null) {
							flushParagraph();
							const depth = Math.min(Math.floor(listMatch[1].length / 2), 4);
							const ordered = /\d+\./.test(listMatch[2]);
							const index = ordered ? parseInt(listMatch[2], 10) : 0;
							blocks.push({
								kind: "listitem",
								depth,
								ordered,
								index,
								text: listMatch[3].trim()
							});
							i++;
							continue;
						}
						if (trimmed.includes("|") && i + 1 < lines.length) {
							const headers = splitTableRow(trimmed);
							const separator = splitTableRow(lines[i + 1]);
							if (headers.length > 0 && headers.length === separator.length && separator.every((cell) => /^:?-{3,}:?$/.test(cell))) {
								flushParagraph();
								const rows = [];
								i += 2;
								while (i < lines.length && lines[i].includes("|") && !/^\s*(?:```|~~~)/.test(lines[i])) {
									rows.push(splitTableRow(lines[i]));
									i++;
								}
								blocks.push({
									kind: "table",
									headers,
									rows
								});
								continue;
							}
						}
						paragraph.push(trimmed);
						i++;
					}
					flushParagraph();
				}
				/** 去除 markdown 内联标记（原 _cleanInline）。 */
				cleanInline(text) {
					return text.replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/__([^_]+)__/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/(^|[^\w])_([^_]+)_($|[^\w])/g, "$1$2$3").replace(/\s+/g, " ").trim();
				}
				async preloadImages(images) {
					const srcs = /* @__PURE__ */ new Set();
					for (const img of images) if (img.src !== "") srcs.add(img.src);
					const map = /* @__PURE__ */ new Map();
					await Promise.all(Array.from(srcs).map(async (src) => {
						const result = await this.loadImage(src);
						map.set(src, result);
					}));
					return map;
				}
				loadImage(src) {
					return new Promise((resolve) => {
						const img = new Image();
						let settled = false;
						const finish = (value) => {
							if (settled) return;
							settled = true;
							resolve(value);
						};
						const timer = setTimeout(() => {
							finish({ element: null });
						}, this.IMAGE_LOAD_TIMEOUT);
						img.crossOrigin = "anonymous";
						img.onload = () => {
							clearTimeout(timer);
							finish({
								element: img,
								width: img.naturalWidth,
								height: img.naturalHeight
							});
						};
						img.onerror = () => {
							clearTimeout(timer);
							finish({ element: null });
						};
						try {
							img.src = src;
						} catch {
							clearTimeout(timer);
							finish({ element: null });
						}
					});
				}
				/** 探测公式图片渲染是否可用且不污染 canvas（原 _probeFormulaRendering）。 */
				async probeFormulaRendering() {
					try {
						const entry = await this.renderLatexToImage("x^2", false);
						if (entry === null) return false;
						const test = document.createElement("canvas");
						test.width = 4;
						test.height = 4;
						const tctx = test.getContext("2d");
						if (tctx === null) return false;
						tctx.drawImage(entry.element, 0, 0, 4, 4);
						test.toDataURL();
						return true;
					} catch {
						return false;
					}
				}
				/** 预渲染选中对话中出现的全部公式（去重，原 _preloadFormulas）。 */
				async preloadFormulas(job) {
					const map = /* @__PURE__ */ new Map();
					if (!this.formulaCapable) return map;
					const seen = /* @__PURE__ */ new Set();
					const items = [];
					for (const turn of job.turns) for (const f of this.collectFormulas(turn.assistant.markdown)) {
						const key = (f.display ? "D:" : "I:") + f.latex;
						if (!seen.has(key)) {
							seen.add(key);
							items.push({
								key,
								latex: f.latex,
								display: f.display
							});
						}
					}
					await Promise.all(items.map(async (item) => {
						const entry = await this.renderLatexToImage(item.latex, item.display);
						map.set(item.key, entry);
					}));
					return map;
				}
				/** 从 markdown 收集公式（原 _collectFormulas）。 */
				collectFormulas(markdown) {
					const result = [];
					if (!markdown.includes("$")) return result;
					for (const block of this.parseMarkdownBlocks(markdown)) {
						if (block.kind === "code") continue;
						if (block.kind === "formula") {
							if (block.latex !== "") result.push({
								latex: block.latex,
								display: true
							});
							continue;
						}
						const parts = block.kind === "table" ? [...block.headers, ...block.rows.flat()] : [block.text];
						for (const part of parts) for (const token of this.tokenizeInline(part)) if (token.type === "formula" && token.latex !== "") result.push({
							latex: token.latex,
							display: false
						});
					}
					return result;
				}
				/**
				* LaTeX → 图片（原 _renderLatexToImage，MathJax 改 temml）。
				* 原版依赖页面全局 MathJax（tex2svg 出纯矢量 SVG）；dsh 页面没有 MathJax，
				* 改用插件打包的 temml 转 MathML，先在隐藏 DOM 中按目标字号实测像素尺寸，
				* 再包进 SVG foreignObject 作为图片加载（浏览器原生渲染 MathML）。
				*/
				async renderLatexToImage(latex, displayMode) {
					if (latex === "") return null;
					const fontSize = displayMode ? 22 : 17;
					let mathml;
					try {
						mathml = temml$1.renderToString(latex, {
							displayMode,
							annotate: false,
							throwOnError: true,
							trust: false
						});
					} catch {
						return null;
					}
					const probe = document.createElement("div");
					probe.style.cssText = `position:absolute;left:-99999px;top:0;visibility:hidden;font-size:${String(fontSize)}px;line-height:normal;color:${this.colors.text};`;
					probe.innerHTML = mathml;
					document.body.appendChild(probe);
					const mathEl = probe.querySelector("math");
					if (mathEl === null) {
						probe.remove();
						return null;
					}
					const rect = mathEl.getBoundingClientRect();
					const width = Math.max(1, Math.ceil(rect.width));
					const height = Math.max(1, Math.ceil(rect.height));
					const mathXml = new XMLSerializer().serializeToString(mathEl);
					probe.remove();
					const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${String(width)}" height="${String(height)}"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:${String(fontSize)}px;line-height:normal;color:${this.colors.text};">` + mathXml + "</div></foreignObject></svg>";
					const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
					return await new Promise((resolve) => {
						const img = new Image();
						let settled = false;
						const finish = (value) => {
							if (!settled) {
								settled = true;
								resolve(value);
							}
						};
						const timer = setTimeout(() => {
							finish(null);
						}, 5e3);
						img.onload = () => {
							clearTimeout(timer);
							finish({
								element: img,
								width,
								height
							});
						};
						img.onerror = () => {
							clearTimeout(timer);
							finish(null);
						};
						try {
							img.src = url;
						} catch {
							clearTimeout(timer);
							finish(null);
						}
					});
				}
				setFont(ctx, { size, weight = "400", mono = false }) {
					const family = mono ? this.monoFamily : this.fontFamily;
					ctx.font = `${weight} ${String(size)}px ${family}`;
				}
				wrapText(ctx, text, maxWidth) {
					const lines = [];
					const paragraphs = text.split("\n");
					for (const para of paragraphs) {
						if (para === "") {
							lines.push("");
							continue;
						}
						let line = "";
						for (const ch of para) {
							const test = line + ch;
							if (ctx.measureText(test).width > maxWidth && line !== "") {
								const lastSpace = line.lastIndexOf(" ");
								if (lastSpace > 0 && /[A-Za-z0-9]/.test(ch)) {
									lines.push(line.slice(0, lastSpace));
									line = line.slice(lastSpace + 1) + ch;
								} else {
									lines.push(line);
									line = ch;
								}
							} else line = test;
						}
						if (line !== "") lines.push(line);
					}
					return lines.length > 0 ? lines : [""];
				}
				clipToWidth(ctx, text, maxWidth) {
					if (ctx.measureText(text).width <= maxWidth) return text;
					const ellipsis = "…";
					let result = text;
					while (result.length > 1 && ctx.measureText(result + ellipsis).width > maxWidth) result = result.slice(0, -1);
					return result + ellipsis;
				}
				roundRect(ctx, x, y, width, height, radius) {
					const r = Math.min(radius, width / 2, height / 2);
					ctx.beginPath();
					ctx.moveTo(x + r, y);
					ctx.arcTo(x + width, y, x + width, y + height, r);
					ctx.arcTo(x + width, y + height, x, y + height, r);
					ctx.arcTo(x, y + height, x, y, r);
					ctx.arcTo(x, y, x + width, y, r);
					ctx.closePath();
				}
				canvasToBlob(canvas) {
					return new Promise((resolve, reject) => {
						try {
							canvas.toBlob((blob) => {
								if (blob !== null) resolve(blob);
								else reject(/* @__PURE__ */ new Error("canvas.toBlob returned null"));
							}, "image/png");
						} catch (error) {
							reject(error);
						}
					});
				}
			};
		}));
		// src/client/conversationExport/pdfExporter.ts
		var pdfExporter_exports = /* @__PURE__ */ __exportAll({ CEPdfExporter: () => CEPdfExporter });
		var CEPdfExporter;
		var init_pdfExporter = __esmMin((() => {
			init_temml();
			init_markdown();
			init_constants();
			CEPdfExporter = class {
				parser = null;
				texts;
				/**
				* 导出 PDF（原 export）。
				* @param job - 导出任务。
				* @param themeId - 主题色 id。
				* @param texts - 文案面。
				* @param markdownParser - 复用其 parseMarkdownBlocks。
				*/
				async export(job, themeId, texts, markdownParser, signal) {
					this.texts = texts;
					this.parser = markdownParser ?? null;
					const html = this.buildHtml(job, themeId);
					await this.printHtml(html, signal);
				}
				buildHtml(job, themeId) {
					const { meta, options, turns } = job;
					const theme = ceGetTheme(themeId);
					const accent = theme.gradient !== void 0 ? theme.gradient[0][1] : theme.solid ?? "#6128ff";
					const title = meta.title !== "" ? meta.title : this.texts.defaultTitle;
					const metaLines = [];
					if (options.showTime) metaLines.push(`${this.texts.timeLabel}: ${this.escapeHtml(ceFormatLocalTime(meta.exportTime))}`);
					const turnsHtml = turns.map((turn) => this.turnHtml(turn, options)).join("");
					return `<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<title>${this.escapeHtml(title)}</title>
<style>${this.css(accent)}</style>
</head>
<body>
<div class="ce-header">
  <div class="ce-title">${this.escapeHtml(title)}</div>
  ${metaLines.length > 0 ? `<div class="ce-meta">${metaLines.join("<br>")}</div>` : ""}
</div>
${turnsHtml}
</body>
</html>`;
				}
				css(accent) {
					return `
@page { margin: 16mm 14mm; }
* { box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", Helvetica, Arial, sans-serif; color: #1f2937; font-size: 14px; line-height: 1.7; margin: 0; }
.ce-header { border-bottom: 3px solid ${accent}; padding-bottom: 12px; margin-bottom: 22px; }
.ce-title { font-size: 22px; font-weight: 700; }
.ce-meta { color: #6b7280; font-size: 12px; margin-top: 8px; word-break: break-all; }
.ce-turn { margin: 16px 0; }
.ce-row { display: flex; gap: 10px; align-items: flex-start; margin: 8px 0; }
.ce-badge { flex: none; width: 24px; height: 24px; margin-top: 6px; border-radius: 50%; font-weight: 700; font-size: 13px; display: inline-flex; align-items: center; justify-content: center; }
.ce-badge.q { background: ${accent}; color: #fff; }
.ce-badge.a { background: #e5e7eb; color: #4b5563; }
.ce-body { flex: 1; min-width: 0; }
.ce-user { background: #f3f4f6; border-radius: 10px; padding: 10px 12px; white-space: pre-wrap; word-break: break-word; }
.ce-time { color: #6b7280; font-size: 12px; margin-bottom: 4px; }
.ce-content { word-break: break-word; }
.ce-content p { margin: 8px 0; }
.ce-content h1, .ce-content h2, .ce-content h3, .ce-content h4 { margin: 12px 0 6px; line-height: 1.4; }
.ce-content ul, .ce-content ol { margin: 8px 0; padding-left: 22px; }
.ce-content li { margin: 3px 0; }
.ce-content pre { background: #f6f8fa; padding: 12px; border-radius: 8px; overflow-x: auto; break-inside: avoid; }
.ce-content code { font-family: "SF Mono", "Cascadia Code", Consolas, monospace; font-size: 13px; }
.ce-content pre code { white-space: pre-wrap; word-break: break-word; }
.ce-content blockquote { border-left: 3px solid #d1d5db; margin: 8px 0; padding-left: 12px; color: #6b7280; }
.ce-content table { width: 100%; border-collapse: collapse; margin: 8px 0; table-layout: fixed; }
.ce-content th, .ce-content td { border: 1px solid #e5e7eb; padding: 6px; text-align: start; }
.ce-content th { background: #f6f8fa; }
.ce-content hr { border: none; border-top: 1px solid #e5e7eb; margin: 12px 0; }
.ce-formula { text-align: center; margin: 12px 0; overflow-x: auto; break-inside: avoid; }
.ce-img { max-width: 100%; height: auto; border-radius: 6px; margin: 8px 0; break-inside: avoid; }
.ce-img-missing { color: #9ca3af; font-size: 13px; background: #f3f4f6; border-radius: 8px; padding: 10px 12px; }
.ce-empty { color: #9ca3af; }
math { vertical-align: middle; }
a { color: #2563eb; text-decoration: none; }
`;
				}
				turnHtml(turn, options) {
					const askTime = options.showConversationTime ? ceFormatChatTime(turn.user.time) : "";
					const userText = turn.user.text !== "" ? turn.user.text : this.texts.emptyUserPreview;
					const userImages = turn.user.images.map((img) => this.imageHtml(img)).join("");
					const assistantBody = turn.omitAssistant ? "" : this.assistantHtml(turn);
					return `
<div class="ce-turn">
  ${turn.omitUser ? "" : `<div class="ce-row">
    <span class="ce-badge q">${this.escapeHtml(this.texts.exportRoleUser)}</span>
    <div class="ce-body">
      <div class="ce-user">${askTime !== "" ? `<div class="ce-time">${this.escapeHtml(askTime)}</div>` : ""}${this.escapeHtml(userText)}</div>
      ${userImages}
    </div>
  </div>`}
  ${turn.omitAssistant ? "" : `<div class="ce-row">
    <span class="ce-badge a">${this.escapeHtml(this.texts.exportRoleAssistant)}</span>
    <div class="ce-body"><div class="ce-content">${assistantBody}</div></div>
  </div>`}
</div>`;
				}
				assistantHtml(turn) {
					const md = turn.assistant.markdown;
					const sources = new Set(markdownImages(md).map((image) => safeImageSource(image.src)));
					const images = turn.assistant.images.filter((image) => image.src === "" || !sources.has(image.src)).map((image) => this.imageHtml(image)).join("");
					let body = "";
					if (md !== "") body = this.blocksToHtml(md);
					else if (turn.assistant.text !== "") body = `<p>${this.escapeHtml(turn.assistant.text)}</p>`;
					if (body === "" && images === "") return `<p class="ce-empty">${this.escapeHtml(this.texts.emptyAssistant)}</p>`;
					return body + images;
				}
				blocksToHtml(md) {
					const blocks = this.parser !== null ? this.parser.parseMarkdownBlocks(md) : md.split(/\n{2,}/).map((t) => ({
						kind: "paragraph",
						text: t.trim()
					})).filter((b) => b.text !== "");
					let html = "";
					let i = 0;
					while (i < blocks.length) {
						const b = blocks[i];
						if (b.kind === "listitem") {
							const tag = b.ordered ? "ol" : "ul";
							let items = "";
							while (i < blocks.length) {
								const cur = blocks[i];
								if (cur.kind !== "listitem") break;
								items += `<li>${this.inlineToHtml(cur.text)}</li>`;
								i++;
							}
							html += `<${tag}>${items}</${tag}>`;
							continue;
						}
						switch (b.kind) {
							case "heading": {
								const level = Math.min(Math.max(b.level, 1), 6);
								html += `<h${String(level)}>${this.inlineToHtml(b.text)}</h${String(level)}>`;
								break;
							}
							case "code":
								html += `<pre><code>${this.escapeHtml(b.code)}</code></pre>`;
								break;
							case "quote":
								html += `<blockquote>${this.inlineToHtml(b.text)}</blockquote>`;
								break;
							case "table": {
								const header = b.headers.map((cell) => `<th>${this.inlineToHtml(cell)}</th>`).join("");
								const rows = b.rows.map((row) => `<tr>${b.headers.map((_, column) => `<td>${this.inlineToHtml(row[column] ?? "")}</td>`).join("")}</tr>`).join("");
								html += `<table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table>`;
								break;
							}
							case "formula": {
								const mathml = this.latexToMathML(b.latex, true);
								html += `<div class="ce-formula">${mathml ?? `<code>${this.escapeHtml(b.latex)}</code>`}</div>`;
								break;
							}
							default: html += `<p>${this.inlineToHtml(b.text)}</p>`;
						}
						i++;
					}
					return html;
				}
				/**
				* 行内 markdown → HTML（原 _inlineToHtml）：先挖出行内公式/代码占位，
				* 转义后再处理图片/链接/粗体/斜体，最后还原占位。
				*/
				inlineToHtml(text) {
					const stash = [];
					const put = (h) => `\u0000${String(stash.push(h) - 1)}\u0000`;
					let s = text;
					s = replaceMarkdownTokens(s, inlineCodeSpans(s), (code) => put(`<code>${this.escapeHtml(code.text)}</code>`));
					s = replaceMarkdownTokens(s, markdownImages(s), (image) => {
						const src = safeImageSource(image.src);
						return put(src === "" ? this.escapeHtml(image.alt) : `<img class="ce-img" src="${this.attr(src)}" alt="${this.attr(image.alt)}">`);
					});
					s = s.replace(/\$([^$\n]+?)\$/g, (_, tex) => {
						const mathml = this.latexToMathML(tex, false);
						return put(mathml ?? `<code>${this.escapeHtml(tex)}</code>`);
					});
					s = s.replace(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g, (_, label, href) => {
						const url = safeImageSource(href);
						return put(/^https?:/i.test(url) ? `<a href="${this.attr(url)}">${this.escapeHtml(label)}</a>` : this.escapeHtml(label));
					});
					s = this.escapeHtml(s);
					s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
					s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
					return s.replace(/\u0000(\d+)\u0000/g, (_, idx) => stash[Number(idx)]);
				}
				/** LaTeX → MathML（temml；同公式复制功能的转换引擎），失败返回 null 由调用方回退。 */
				latexToMathML(latex, display) {
					if (latex === "") return null;
					try {
						return temml$1.renderToString(latex, {
							displayMode: display,
							annotate: false,
							throwOnError: true,
							trust: false
						});
					} catch {
						return null;
					}
				}
				imageHtml(image) {
					if (image.src !== "") return `<img class="ce-img" src="${this.attr(image.src)}" alt="${this.attr(image.alt)}">`;
					return `<div class="ce-img-missing">［${this.escapeHtml(this.texts.imageCannotEmbed)}］</div>`;
				}
				escapeHtml(s) {
					return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
				}
				attr(s) {
					return this.escapeHtml(s).replace(/"/g, "&quot;");
				}
				printHtml(html, signal) {
					return new Promise((resolve, reject) => {
						signal?.throwIfAborted();
						const iframe = document.createElement("iframe");
						iframe.setAttribute("aria-hidden", "true");
						iframe.style.cssText = "position:fixed;left:-99999px;top:0;width:794px;height:1123px;border:0;opacity:0;";
						document.body.appendChild(iframe);
						const win = iframe.contentWindow;
						if (win === null) {
							iframe.remove();
							reject(/* @__PURE__ */ new Error("Print frame unavailable"));
							return;
						}
						const listeners = new AbortController();
						let timer;
						let printing = false;
						const cleanup = () => {
							clearTimeout(timer);
							listeners.abort();
							signal?.removeEventListener("abort", abort);
							iframe.remove();
						};
						const abort = () => {
							cleanup();
							reject(signal?.reason);
						};
						const print = () => {
							if (printing || signal?.aborted) return;
							printing = true;
							clearTimeout(timer);
							try {
								win.focus();
								win.print();
								timer = setTimeout(() => {
									cleanup();
									resolve();
								}, 500);
							} catch (error) {
								cleanup();
								reject(error);
							}
						};
						signal?.addEventListener("abort", abort, { once: true });
						try {
							const doc = win.document;
							doc.open();
							doc.write(html);
							doc.close();
							const pending = Array.from(doc.images).filter((image) => !image.complete);
							if (pending.length === 0) {
								timer = setTimeout(print, 0);
								return;
							}
							let remaining = pending.length;
							for (const image of pending) {
								const settle = () => {
									remaining--;
									if (remaining === 0) print();
								};
								for (const event of ["load", "error"]) image.addEventListener(event, settle, {
									once: true,
									signal: listeners.signal
								});
							}
							timer = setTimeout(print, 4e3);
						} catch (error) {
							cleanup();
							reject(error);
						}
					});
				}
			};
		}));
		// src/client/conversationExport/ExportAction.tsx
		/** Conversation entry points and the shared in-page selection flow. */
		init_constants();
		const requests = new Bus(null);
		const getRequest = () => requests.get();
		const scales = [
			4,
			3,
			2,
			1
		];
		const scaleLabels = [
			"export.quality1",
			"export.quality2",
			"export.quality3",
			"export.quality4"
		];
		const themeLabels = {
			black: "color.black",
			blue: "color.blue",
			purple: "color.purple",
			gemini: "color.gemini"
		};
		function ActionIcon({ kind }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.7",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": true,
				children: kind === "screenshot" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					transform: "rotate(90 12 12)",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							cx: "6",
							cy: "6",
							r: "3"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M8.12 8.12 12 12M20 4 8.12 15.88" }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							cx: "6",
							cy: "18",
							r: "3"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M14.8 14.8 20 20" })
					]
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M6 22h12a2 2 0 0 0 2-2V9L13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2ZM14 2v6a1 1 0 0 0 1 1h5m-8 3v7m-3-3 3 3 3-3" })
			});
		}
		function openSelection(request) {
			if (requests.get()?.sessionId === request.sessionId) return;
			tooltip.forceHideAll();
			requests.set(request);
		}
		function AssistantExportActions({ sessionId, messageId, t }) {
			const settings = (0, react.useSyncExternalStore)(settingsStore.subscribe, settingsStore.get);
			const disabled = (0, react.useSyncExternalStore)(requests.subscribe, getRequest)?.sessionId === sessionId;
			const exportLabel = t("export.label");
			const screenshotLabel = t("export.screenshotAction");
			const tooltipOptions = {
				placement: "bottom",
				theme: "inverse",
				noArrow: true
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [settings.conversationExportEnabled ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				className: export_module_css_11cec1e15e_default.replyEntry,
				disabled,
				"aria-label": exportLabel,
				onMouseEnter: (e) => {
					if (!disabled) tooltip.show(`ce-reply-export-${sessionId}-${messageId}`, e.currentTarget, exportLabel, tooltipOptions);
				},
				onMouseLeave: () => {
					tooltip.hide(true);
				},
				onMouseDown: () => {
					tooltip.hide(true);
				},
				onClick: (e) => {
					openSelection({
						sessionId,
						messageId,
						kind: "export",
						trigger: e.currentTarget
					});
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ActionIcon, { kind: "export" })
			}) : null, settings.messageScreenshotEnabled ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				className: export_module_css_11cec1e15e_default.replyEntry,
				disabled,
				"aria-label": screenshotLabel,
				onMouseEnter: (e) => {
					if (!disabled) tooltip.show(`ce-reply-screenshot-${sessionId}-${messageId}`, e.currentTarget, screenshotLabel, tooltipOptions);
				},
				onMouseLeave: () => {
					tooltip.hide(true);
				},
				onMouseDown: () => {
					tooltip.hide(true);
				},
				onClick: (e) => {
					openSelection({
						sessionId,
						messageId,
						kind: "screenshot",
						trigger: e.currentTarget
					});
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ActionIcon, { kind: "screenshot" })
			}) : null] });
		}
		/** t → CeTexts（原 CE_TEXT 的词典化）。 */
		function buildTexts(t) {
			return {
				buttonTooltip: t("export.buttonTooltip"),
				sectionFormat: t("export.sectionFormat"),
				sectionTheme: t("export.sectionTheme"),
				headerShowTime: t("export.headerShowTime"),
				headerShowConversationTime: t("export.headerShowConversationTime"),
				askTimeLabel: t("export.askTimeLabel"),
				selectAll: t("export.selectAll"),
				exportRoleUser: "Q",
				exportRoleAssistant: "A",
				emptyAssistant: t("export.emptyAssistant"),
				emptyUserPreview: t("export.emptyUserPreview"),
				cancel: t("export.cancel"),
				loading: t("export.loading"),
				exporting: t("export.exporting"),
				done: t("export.done"),
				failed: t("export.failed"),
				noConversation: t("export.noConversation"),
				timeLabel: t("export.timeLabel"),
				titleLabel: t("export.titleLabel"),
				orderLabel: t("export.orderLabel"),
				imageCannotEmbed: t("export.imageCannotEmbed"),
				imageNotRendered: t("export.imageNotRendered"),
				truncatedNotice: t("export.truncatedNotice"),
				imageListTitle: t("export.imageListTitle"),
				defaultTitle: t("export.defaultTitle"),
				unknownSize: t("export.unknownSize")
			};
		}
		function ExportAction({ sessionId, useChat, useSession, useSessions, resolveAttachment, loadHistory, t }) {
			const settings = (0, react.useSyncExternalStore)(settingsStore.subscribe, settingsStore.get);
			const order = useChat((s) => s.order);
			const nodes = useChat((s) => s.nodes);
			const hasMore = useSession((s) => s.hasMore);
			const running = useSession((s) => s.running);
			const displayTitle = useSessions((s) => s.byId[sessionId]?.displayTitle);
			const request = (0, react.useSyncExternalStore)(requests.subscribe, getRequest);
			const open = request?.sessionId === sessionId;
			const enabled = request?.kind === "screenshot" ? settings.messageScreenshotEnabled : settings.conversationExportEnabled;
			const texts = (0, react.useMemo)(() => buildTexts(t), [t]);
			const scopeAnchor = (0, react.useRef)(null);
			const close = (0, react.useCallback)(() => {
				if (request === null || requests.get() !== request) return;
				requests.set(null);
				requestAnimationFrame(() => {
					if (request.trigger.isConnected && requests.get() === null) request.trigger.focus({ preventScroll: true });
				});
			}, [request]);
			(0, react.useEffect)(() => {
				if (open && !enabled) close();
			}, [
				open,
				enabled,
				close
			]);
			(0, react.useEffect)(() => () => {
				if (requests.get()?.sessionId === sessionId) requests.set(null);
			}, [sessionId]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					ref: scopeAnchor,
					hidden: true
				}),
				settings.conversationExportEnabled ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					className: export_module_css_11cec1e15e_default.headerEntry,
					disabled: open,
					"aria-label": t("export.label"),
					onMouseEnter: (e) => {
						if (!open) tooltip.show("ce-export-btn", e.currentTarget, texts.buttonTooltip, {
							placement: "bottom",
							theme: "inverse"
						});
					},
					onMouseLeave: () => {
						tooltip.hide();
					},
					onClick: (e) => {
						if (findConversationDOM(scopeAnchor.current) === null || order.length === 0) {
							toast.warning(texts.noConversation);
							return;
						}
						openSelection({
							sessionId,
							kind: "export",
							trigger: e.currentTarget
						});
					},
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
						width: "15",
						height: "15",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						"aria-hidden": true,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("polyline", { points: "7 10 12 15 17 10" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
								x1: "12",
								y1: "15",
								x2: "12",
								y2: "3"
							})
						]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("export.label") })]
				}) : null,
				open && enabled ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MessageSelection, {
					request,
					scopeAnchor,
					t,
					texts,
					defaultThemeId: settings.activeColorId,
					title: displayTitle ?? texts.defaultTitle,
					order,
					nodes,
					hasMore,
					running,
					resolveAttachment: (id) => resolveAttachment(sessionId, id),
					loadHistory: (signal, onPage) => loadHistory(sessionId, signal, onPage),
					onClose: close
				}, sessionId) : null
			] });
		}
		function messageChoices(order, nodes) {
			return order.flatMap((key) => {
				const node = nodes.get(key);
				if (node === void 0 || node.visibility === "hidden") return [];
				if (node.kind === "user" || node.kind === "steering") return [{
					key,
					role: "user",
					generating: false
				}];
				if (node.kind !== "assistant-step") return [];
				const data = node.data;
				return [{
					key,
					role: "assistant",
					generating: data.status === "running",
					messageId: data.finalNode?.messageId
				}];
			});
		}
		function Checkbox({ checked, disabled, label, title, indeterminate, onChange, focus = false }) {
			const ref = (0, react.useRef)(null);
			(0, react.useLayoutEffect)(() => {
				if (ref.current !== null) ref.current.indeterminate = indeterminate === true;
			}, [indeterminate, checked]);
			(0, react.useLayoutEffect)(() => {
				if (focus) ref.current?.focus({ preventScroll: true });
			}, [focus]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
				className: export_module_css_11cec1e15e_default.check,
				title,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					ref,
					type: "checkbox",
					checked,
					disabled,
					"aria-label": label,
					onChange: (e) => {
						onChange(e.target.checked);
					}
				}), title === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: title })]
			});
		}
		function MessageSelection({ request, scopeAnchor, t, texts, defaultThemeId, title, order, nodes, hasMore, running, resolveAttachment, loadHistory, onClose }) {
			const screenshot = request.kind === "screenshot";
			const choices = (0, react.useMemo)(() => messageChoices(order, nodes), [order, nodes]);
			const byKey = (0, react.useMemo)(() => new Map(choices.map((choice, index) => [choice.key, {
				...choice,
				position: index + 1
			}])), [choices]);
			const keys = (0, react.useMemo)(() => new Set(byKey.keys()), [byKey]);
			const dockRef = (0, react.useRef)(null);
			const layout = useSelectionLayout(scopeAnchor, dockRef, keys, onClose);
			const [dark, setDark] = (0, react.useState)(detectDarkTheme);
			(0, react.useEffect)(() => observeTheme(() => {
				setDark(detectDarkTheme());
			}), []);
			const [selected, setSelected] = (0, react.useState)(() => new Set(request.messageId === void 0 ? [] : choices.filter((choice) => choice.messageId === request.messageId && !choice.generating).map((choice) => choice.key)));
			const exclusions = (0, react.useRef)(/* @__PURE__ */ new Set());
			const historyOperation = (0, react.useRef)(null);
			const operation = (0, react.useRef)(null);
			const [loading, setLoading] = (0, react.useState)(false);
			const [loadNotice, setLoadNotice] = (0, react.useState)("");
			const [busy, setBusy] = (0, react.useState)(null);
			const previous = (0, react.useRef)({
				running,
				byKey
			});
			(0, react.useEffect)(() => {
				const old = previous.current;
				previous.current = {
					running,
					byKey
				};
				if (running && !old.running || [...selected].some((key) => old.byKey.has(key) && (!byKey.has(key) || byKey.get(key)?.messageId !== old.byKey.get(key)?.messageId))) {
					toast.warning(t("export.selectionChanged"));
					onClose();
				}
			}, [
				byKey,
				selected,
				running,
				onClose,
				t
			]);
			(0, react.useEffect)(() => () => {
				historyOperation.current?.abort();
				operation.current?.abort();
			}, []);
			const saved = settingsStore.get();
			const [formatId, setFormat] = (0, react.useState)(CE_FORMATS.find((format) => format.id === saved.exportOptions?.formatId)?.id ?? "markdown");
			const [themeId, setTheme] = (0, react.useState)(CE_THEMES.find((theme) => theme.id === saved.exportOptions?.themeId)?.id ?? CE_THEMES.find((theme) => theme.id === defaultThemeId)?.id ?? "purple");
			const [pixelRatio, setScale] = (0, react.useState)(scales.includes(saved.screenshotScale) ? saved.screenshotScale : 2);
			const [showTime, setShowTime] = (0, react.useState)(saved.exportOptions?.showTime !== false);
			const [showConversationTime, setShowConversationTime] = (0, react.useState)(saved.exportOptions?.showConversationTime !== false);
			const eligible = choices.filter((choice) => !choice.generating && layout?.mounted.has(choice.key));
			const selectedKeys = choices.filter((choice) => !choice.generating && selected.has(choice.key)).map((choice) => choice.key);
			const allChecked = !hasMore && eligible.length > 0 && eligible.every((choice) => selected.has(choice.key));
			const isImageBased = formatId === "png" || formatId === "pdf";
			const canCopy = screenshot || formatId !== "pdf";
			const locked = busy !== null || loading;
			const actionLabel = t(screenshot ? "export.screenshotAction" : "export.label");
			const copyLabel = t(screenshot || formatId === "png" ? "export.copyImage" : "export.copyContent");
			const setMessage = (key, checked) => {
				if (operation.current !== null) return;
				if (checked) exclusions.current.delete(key);
				else exclusions.current.add(key);
				setSelected((current) => {
					const next = new Set(current);
					if (checked) next.add(key);
					else next.delete(key);
					return next;
				});
			};
			const stopLoading = () => {
				historyOperation.current?.abort();
				historyOperation.current = null;
				setLoading(false);
				setLoadNotice(t("export.loadingStopped"));
			};
			const selectAll = async (checked) => {
				if (operation.current !== null) return;
				if (!checked) {
					stopLoading();
					setSelected(/* @__PURE__ */ new Set());
					setLoadNotice("");
					return;
				}
				if (historyOperation.current !== null) return;
				exclusions.current.clear();
				setSelected(new Set(eligible.map((choice) => choice.key)));
				setLoadNotice("");
				if (!hasMore) return;
				const controller = new AbortController();
				historyOperation.current = controller;
				const signal = AbortSignal.any([controller.signal, AbortSignal.timeout(45e3)]);
				setLoading(true);
				const addPage = async (page) => {
					await new Promise((resolve) => {
						requestAnimationFrame(() => resolve());
					});
					signal.throwIfAborted();
					const mounted = mountedMessageElements(scopeAnchor.current);
					const available = messageChoices(page.order, page.nodes).filter((choice) => !choice.generating && mounted.has(choice.key));
					setSelected((current) => new Set([...current, ...available.map((choice) => choice.key)].filter((key) => !exclusions.current.has(key))));
				};
				try {
					const history = await loadHistory(signal, addPage);
					signal.throwIfAborted();
					if (history !== null) await addPage(history);
					setLoadNotice(t(history !== null && !history.hasMore ? "export.historyLoaded" : "export.historyIncomplete"));
				} catch {
					if (!controller.signal.aborted) setLoadNotice(t("export.historyIncomplete"));
				} finally {
					if (historyOperation.current === controller) {
						historyOperation.current = null;
						setLoading(false);
					}
				}
			};
			const runExport = async (copy) => {
				if (selectedKeys.length === 0 || operation.current !== null || historyOperation.current !== null) return;
				const controller = new AbortController();
				operation.current = controller;
				const { signal } = controller;
				setBusy(copy ? "copy" : "download");
				const filename = ceSanitizeFilename(title, texts.defaultTitle);
				const format = CE_FORMATS.find((f) => f.id === (screenshot ? "png" : formatId)) ?? CE_FORMATS[0];
				let unavailableImageCount = 0;
				let reducedResolution = false;
				const prepare = async () => {
					if (screenshot) {
						const mounted = mountedMessageElements(scopeAnchor.current);
						const elements = selectedKeys.map((key) => mounted.get(key));
						if (elements.some((element) => element === void 0)) throw new Error("unavailable");
						const { captureMessages } = await Promise.resolve().then(() => (init_screenshot(), screenshot_exports));
						const capture = await captureMessages(elements.filter((element) => element !== void 0), pixelRatio, signal, t("export.screenshotMissingImageLabel"));
						unavailableImageCount = capture.unavailableImageCount;
						reducedResolution = capture.reducedResolution;
						return capture.blob;
					}
					const selectedTurns = await collectAllTurns(order, nodes, resolveAttachment, {
						selectedKeys: new Set(selectedKeys),
						shouldCancel: () => signal.aborted,
						imageEncoding: isImageBased ? "blob" : "data"
					});
					try {
						signal.throwIfAborted();
						if (selectedTurns.length === 0) throw new Error("unavailable");
						const job = {
							meta: {
								title,
								platformId: "deepseek",
								platformName: "DeepSeek",
								exportTime: /* @__PURE__ */ new Date()
							},
							options: {
								showTime,
								showConversationTime,
								rangeId: "select",
								formatId
							},
							turns: selectedTurns
						};
						if (isImageBased) {
							const { CEPngExporter } = await Promise.resolve().then(() => (init_pngExporter(), pngExporter_exports));
							const renderer = new CEPngExporter();
							signal.throwIfAborted();
							if (formatId === "png") return await renderer.export(job, themeId, texts);
							const { CEPdfExporter } = await Promise.resolve().then(() => (init_pdfExporter(), pdfExporter_exports));
							signal.throwIfAborted();
							await new CEPdfExporter().export(job, themeId, texts, renderer, signal);
							return;
						}
						if (formatId === "markdown") return buildMarkdown(job, texts);
						if (formatId === "txt") return buildTxt(job, texts);
						if (formatId === "csv") return buildCsv(job, texts);
						return buildJson(job, texts);
					} finally {
						releaseExportImages(selectedTurns);
					}
				};
				try {
					const output = prepare();
					if (copy) {
						const mime = screenshot || formatId === "png" ? "image/png" : "text/plain";
						if (typeof ClipboardItem === "undefined" && mime === "text/plain") {
							const value = await output;
							signal.throwIfAborted();
							if (typeof value !== "string") throw new Error("copy-failed");
							await navigator.clipboard.writeText(value);
						} else {
							const data = output.then((value) => {
								signal.throwIfAborted();
								if (value instanceof Blob) return value;
								if (typeof value === "string") return new Blob([value], { type: mime });
								throw new Error("copy-failed");
							});
							let write;
							try {
								write = navigator.clipboard.write([new ClipboardItem({ [mime]: data })]);
							} catch (error) {
								write = Promise.reject(error);
							}
							const [prepared, written] = await Promise.allSettled([data, write]);
							if (prepared.status === "rejected") throw prepared.reason;
							if (written.status === "rejected") throw written.reason;
						}
					} else {
						const value = await output;
						signal.throwIfAborted();
						if (value !== void 0) ceTriggerDownload(filename, format, value);
					}
					if (signal.aborted) return;
					if (screenshot) settingsStore.set({ screenshotScale: pixelRatio });
					else settingsStore.set({ exportOptions: {
						formatId,
						themeId,
						showTime,
						showConversationTime
					} });
					const warnings = [];
					if (reducedResolution) warnings.push(t("export.screenshotResolutionReduced"));
					if (unavailableImageCount > 0) warnings.push(ceFormatText(t("export.screenshotPartial"), { count: unavailableImageCount }));
					if (warnings.length > 0) toast.warning(warnings.join("\n"), null, { multiline: true });
					else toast.success(copy ? t("export.copied") : texts.done);
					if (!copy) onClose();
				} catch (error) {
					if (signal.aborted) return;
					const code = error instanceof Error ? error.message : "";
					if (screenshot && code === "unavailable") toast.warning(t("export.messageUnavailable"));
					else if (screenshot && code === "image-unavailable") toast.warning(t("export.screenshotImageUnavailable"));
					else if (screenshot && code === "capture-too-large") toast.warning(t("export.screenshotTooLarge"));
					else toast.error(copy ? t("export.copyFailed") : texts.failed);
				} finally {
					operation.current = null;
					if (!signal.aborted) setBusy(null);
				}
			};
			return (0, react_dom.createPortal)(/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: export_module_css_11cec1e15e_default.selection,
				"data-dsh-chat-export-selection": "",
				"data-dsh-chat-export-ui": "",
				"data-theme": dark ? "dark" : "light",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: export_module_css_11cec1e15e_default.dock,
						ref: dockRef,
						"aria-label": actionLabel,
						style: layout === null ? void 0 : {
							left: layout.center,
							width: layout.width,
							bottom: layout.bottom
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: export_module_css_11cec1e15e_default.heading,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: export_module_css_11cec1e15e_default.identity,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: export_module_css_11cec1e15e_default.titleGroup,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: actionLabel }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: `${export_module_css_11cec1e15e_default.iconButton} ${export_module_css_11cec1e15e_default.settingsButton}`,
											title: t("export.actionSettings"),
											"aria-label": t("export.actionSettings"),
											"aria-haspopup": "dialog",
											onClick: showSettings,
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingsIcon, {})
										})]
									}), loadNotice === "" ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: export_module_css_11cec1e15e_default.status,
										role: "status",
										children: loadNotice
									})]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: export_module_css_11cec1e15e_default.iconButton,
									title: texts.cancel,
									"aria-label": texts.cancel,
									onClick: onClose,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.8",
										"aria-hidden": true,
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "m6 6 12 12M18 6 6 18" })
									})
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: export_module_css_11cec1e15e_default.options,
								children: screenshot ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: export_module_css_11cec1e15e_default.field,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("export.resolution") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
										value: pixelRatio,
										disabled: busy !== null,
										onChange: (e) => {
											setScale(Number(e.target.value));
										},
										children: scales.map((ratio) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("option", {
											value: ratio,
											children: [
												t(scaleLabels[ratio - 1]),
												" (",
												ratio,
												"×)"
											]
										}, ratio))
									})]
								}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: export_module_css_11cec1e15e_default.fields,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
										className: export_module_css_11cec1e15e_default.field,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: texts.sectionFormat }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
											value: formatId,
											disabled: busy !== null,
											onChange: (e) => {
												setFormat(e.target.value);
											},
											children: CE_FORMATS.map((format) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: format.id,
												children: format.label
											}, format.id))
										})]
									}), isImageBased ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
										className: export_module_css_11cec1e15e_default.field,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: texts.sectionTheme }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
											value: themeId,
											disabled: busy !== null,
											onChange: (e) => {
												setTheme(e.target.value);
											},
											children: CE_THEMES.map((theme) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: theme.id,
												children: t(themeLabels[theme.id])
											}, theme.id))
										})]
									}) : null]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: export_module_css_11cec1e15e_default.metadata,
									role: "group",
									"aria-label": t("export.headerOptions"),
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: export_module_css_11cec1e15e_default.status,
											children: t("export.headerOptions")
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
											checked: showTime,
											disabled: busy !== null,
											label: texts.headerShowTime,
											title: texts.headerShowTime,
											onChange: setShowTime
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
											checked: showConversationTime,
											disabled: busy !== null,
											label: texts.headerShowConversationTime,
											title: texts.headerShowConversationTime,
											onChange: setShowConversationTime
										})
									]
								})] })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: export_module_css_11cec1e15e_default.footer,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: export_module_css_11cec1e15e_default.selectionTools,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
										focus: true,
										checked: allChecked,
										indeterminate: !allChecked && selectedKeys.length > 0,
										disabled: busy !== null,
										label: texts.selectAll,
										title: texts.selectAll,
										onChange: (checked) => {
											selectAll(checked);
										}
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: export_module_css_11cec1e15e_default.status,
										role: "status",
										children: ceFormatText(t("export.selectedCount"), {
											count: selectedKeys.length,
											total: eligible.length
										})
									})]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: export_module_css_11cec1e15e_default.buttons,
									children: [canCopy ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: export_module_css_11cec1e15e_default.button,
										disabled: locked || selectedKeys.length === 0,
										"aria-label": copyLabel,
										"aria-busy": busy === "copy",
										onClick: () => {
											runExport(true);
										},
										children: busy === "copy" ? t("export.copying") : copyLabel
									}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: `${export_module_css_11cec1e15e_default.button} ${export_module_css_11cec1e15e_default.primary}`,
										disabled: locked || selectedKeys.length === 0,
										"aria-label": t(screenshot ? "export.downloadScreenshot" : "export.download"),
										"aria-busy": busy === "download",
										onClick: () => {
											runExport(false);
										},
										children: busy === "download" ? texts.exporting : t(screenshot ? "export.downloadScreenshot" : "export.download")
									})]
								})]
							})
						]
					}),
					loading ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: export_module_css_11cec1e15e_default.loadingNotice,
						role: "status",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: export_module_css_11cec1e15e_default.spinner,
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: texts.loading }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: ceFormatText(t("export.loadedCount"), { count: eligible.length }) })] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: export_module_css_11cec1e15e_default.button,
								onClick: stopLoading,
								children: t("export.stopLoading")
							})
						]
					}) : null,
					layout !== null && layout.extraScrollSpace > 0 ? (0, react_dom.createPortal)(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: export_module_css_11cec1e15e_default.spacer,
						"data-dsh-chat-export-ui": "",
						"aria-hidden": true,
						style: { height: layout.extraScrollSpace }
					}), layout.flow) : null,
					layout?.markers.map((marker) => {
						const choice = byKey.get(marker.key);
						if (choice === void 0) return null;
						const checked = selected.has(marker.key);
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: export_module_css_11cec1e15e_default.marker,
							"data-message-key": marker.key,
							"data-selected": checked,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: export_module_css_11cec1e15e_default.outline,
								style: marker.outline,
								"aria-hidden": true
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: export_module_css_11cec1e15e_default.markerControl,
								style: {
									left: marker.left,
									top: marker.top
								},
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
									checked,
									disabled: busy !== null || choice.generating,
									label: `${t(choice.role === "user" ? "export.selectQuestion" : "export.selectReply")} ${choice.position}`,
									onChange: (checked) => {
										setMessage(marker.key, checked);
									}
								})
							})]
						}, marker.key);
					})
				]
			}), document.body);
		}
		// \0dsh-css:src/client/settings/settings.module.css?25820b1d61.mjs
		const css = "._0-tT0W_settings{gap:8px;width:100%;display:grid}._0-tT0W_row{font:14px/1.45 var(--font-sans,-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif);color:light-dark(#242427,#f1f1f3);cursor:pointer;background:light-dark(#f9fafb,#28282b);border-radius:8px;justify-content:space-between;align-items:flex-start;gap:16px;padding:16px;display:flex;position:relative}._0-tT0W_text{gap:6px;display:grid}._0-tT0W_text strong{font-size:15px;font-weight:500}._0-tT0W_text span{color:light-dark(#6b7280,#b0b0b7);font-size:13px;line-height:1.6}._0-tT0W_row:hover{background:light-dark(#f3f4f6,#303035)}._0-tT0W_row input{opacity:0;position:absolute}._0-tT0W_toggle{box-sizing:border-box;background:light-dark(#cccdd2,#59595f);border-radius:16px;flex:none;width:48px;height:26px;padding:3px}._0-tT0W_toggle:after{content:\"\";corner-shape:round;background:#fff;border-radius:50%;width:20px;height:20px;transition:transform .3s;display:block}._0-tT0W_row input:checked+._0-tT0W_toggle{background:light-dark(#000,#dedee5)}._0-tT0W_row input:checked+._0-tT0W_toggle:after{background:light-dark(#fff,#242427);transform:translate(22px)}._0-tT0W_row input:focus-visible+._0-tT0W_toggle{outline-offset:2px;outline:2px solid}._0-tT0W_dialog{color:light-dark(#242427,#f1f1f3);pointer-events:auto;background:light-dark(#f8f8fb,#222225);border:1px solid light-dark(#e5e5e9,#424246);border-radius:16px;width:min(440px,100vw - 28px);max-height:calc(100dvh - 32px);margin:auto;padding:0}._0-tT0W_dialog::backdrop{background:#0006}._0-tT0W_content{padding:18px}._0-tT0W_content header{justify-content:space-between;align-items:center;margin-bottom:14px;display:flex}._0-tT0W_content h2{margin:0;font-size:17px}._0-tT0W_content button{color:inherit;cursor:pointer;background:0 0;border:0;border-radius:6px;padding:2px 8px;font:22px/1.2 sans-serif}._0-tT0W_content button:hover{background:light-dark(#e9e9ed,#37373b)}";
		const tagId = "dsh-chat-export/settings.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-chat-export";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var settings_module_css_25820b1d61_default = {
			"settings": "_0-tT0W_settings",
			"row": "_0-tT0W_row",
			"text": "_0-tT0W_text",
			"dialog": "_0-tT0W_dialog",
			"content": "_0-tT0W_content",
			"toggle": "_0-tT0W_toggle"
		};
		// src/client/settings/ExportSettings.tsx
		function ExportSettings({ t }) {
			const preferences = (0, react.useSyncExternalStore)(settingsStore.subscribe, settingsStore.get);
			const rows = [{
				key: "conversationExportEnabled",
				title: t("panel.exportTitle"),
				hint: t("panel.exportHint")
			}, {
				key: "messageScreenshotEnabled",
				title: t("export.screenshot"),
				hint: t("export.screenshotHint")
			}];
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: settings_module_css_25820b1d61_default.settings,
				children: rows.map(({ key, title, hint }) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: settings_module_css_25820b1d61_default.row,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: settings_module_css_25820b1d61_default.text,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: hint })]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							type: "checkbox",
							"aria-label": title,
							checked: preferences[key],
							onChange: (event) => {
								settingsStore.set({ [key]: event.target.checked });
							}
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: settings_module_css_25820b1d61_default.toggle,
							"aria-hidden": "true"
						})
					]
				}, key))
			});
		}
		function ExportSettingsDialog({ t }) {
			const dialog = (0, react.useRef)(null);
			const open = (0, react.useSyncExternalStore)(settingsDialog.subscribe, () => settingsDialog.get());
			(0, react.useLayoutEffect)(() => {
				const element = dialog.current;
				if (element === null) return;
				if (open && !element.open) element.showModal();
				if (!open && element.open) element.close();
			}, [open]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dialog", {
				className: settings_module_css_25820b1d61_default.dialog,
				ref: dialog,
				"aria-label": t("settings.title"),
				onClick: (event) => {
					if (event.target === dialog.current) settingsDialog.set(false);
				},
				onClose: () => {
					settingsDialog.set(false);
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: settings_module_css_25820b1d61_default.content,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t("settings.title") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": t("common.cancel"),
						onClick: () => {
							settingsDialog.set(false);
						},
						children: "×"
					})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ExportSettings, { t })]
				})
			});
		}
		// src/client/shared/currentSession.ts
		/** 新版 DSH 通过主视图的持有计数标识当前会话，旧版直接提供 current。 */
		function selectCurrentSessionId(sessions) {
			if ("current" in sessions) return sessions.current;
			return Object.values(sessions.byId).find((session) => (session?.retainedBy?.mainView ?? 0) > 0)?.id;
		}
		// src/client/ui/ExportOverlay.tsx
		function ExportOverlay({ t, useSessions }) {
			const dark = (0, react.useSyncExternalStore)(observeTheme, detectDarkTheme);
			const sessionId = useSessions(selectCurrentSessionId);
			(0, react.useEffect)(() => () => {
				toast.forceHideAll();
				tooltip.forceHideAll();
				settingsDialog.set(false);
			}, [sessionId]);
			return (0, react_dom.createPortal)(/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: ui_module_css_0cbb4e13d2_default.host,
				style: { colorScheme: dark ? "dark" : "light" },
				"data-theme": dark ? "dark" : "light",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ToastHost, { dark }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ExportSettingsDialog, { t }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TooltipHost, { dark })
				]
			}), document.body);
		}
		// src/client/shared/history.ts
		function waitForIdle(session, signal) {
			if (!session.getSnapshot().loadingOlder) return Promise.resolve();
			return new Promise((resolve, reject) => {
				signal.throwIfAborted();
				const cleanup = () => {
					unsubscribe();
					signal.removeEventListener("abort", abort);
				};
				const abort = () => {
					cleanup();
					reject(signal.reason);
				};
				const check = () => {
					if (session.getSnapshot().loadingOlder) return;
					cleanup();
					resolve();
				};
				const unsubscribe = session.subscribe(() => {
					queueMicrotask(check);
				});
				signal.addEventListener("abort", abort, { once: true });
				check();
			});
		}
		function loadPage(session, signal) {
			if (session.getSnapshot().loadingOlder) return waitForIdle(session, signal);
			return new Promise((resolve, reject) => {
				signal.throwIfAborted();
				const abort = () => {
					reject(signal.reason);
				};
				signal.addEventListener("abort", abort, { once: true });
				session.loadOlder().then(resolve, reject).finally(() => {
					signal.removeEventListener("abort", abort);
				});
			});
		}
		/** Reuse the host's page loader and let an existing host or plugin request finish first. */
		async function loadChatHistory(session, source, { signal, onPage, until }) {
			const read = () => {
				const chat = source.getSnapshot();
				return chat === void 0 ? null : {
					order: chat.order,
					nodes: chat.nodes,
					hasMore: session.getSnapshot().hasMore
				};
			};
			let history = read();
			let stalled = 0;
			while (history?.hasMore && !until?.(history) && stalled < 3) {
				signal.throwIfAborted();
				const before = history;
				await loadPage(session, signal);
				signal.throwIfAborted();
				history = read();
				if (history === null) break;
				const moved = history.order[0] !== before.order[0] || history.order.length > before.order.length;
				if (moved || !history.hasMore) await onPage?.(history);
				stalled = moved ? 0 : stalled + 1;
			}
			return history;
		}
		// src/client/index.ts
		const inject = [
			"slots",
			"locale",
			"sessions",
			"theme",
			"uiConversation"
		];
		function apply(ctx) {
			bindTheme(ctx);
			bindStorageSync(ctx);
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "dsh-chat-export: dictionaries");
			ctx.slots.inject("shell.overlay", () => ctx.slots.register({
				name: "shell.overlay",
				id: "dsh-chat-export-overlay",
				locale: NS
			}, ExportOverlay));
			ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "dsh-chat-export",
				locale: NS
			}, ExportSettings));
			ctx.slots.inject("conversation.chat.assistant-actions", () => ctx.slots.register({
				name: "conversation.chat.assistant-actions",
				id: "dsh-chat-export-reply",
				locale: NS
			}, AssistantExportActions));
			ctx.slots.inject("conversation.session.header.actions", () => ctx.slots.register({
				name: "conversation.session.header.actions",
				id: "dsh-chat-export",
				order: 41,
				locale: NS,
				inject: () => ({
					resolveAttachment: async (sessionId, attachmentId) => {
						const session = ctx.sessions.binding(sessionId)?.session;
						if (session === void 0) return null;
						const result = await session.readAttachment(attachmentId);
						if (!result.ok) return null;
						const { attachment, data } = result.value;
						return {
							mediaType: attachment.mediaType,
							width: attachment.width,
							height: attachment.height,
							name: attachment.name,
							data
						};
					},
					loadHistory: async (sessionId, signal, onPage) => {
						const id = sessionId;
						const session = ctx.sessions.binding(id)?.session;
						if (session === void 0) return null;
						return await loadChatHistory(session, ctx.uiConversation.binding(id).target("chat"), {
							signal,
							onPage
						});
					}
				})
			}, ExportAction));
		}
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
