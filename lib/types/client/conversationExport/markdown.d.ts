interface Span {
    start: number;
    end: number;
}
interface CodeSpan extends Span {
    text: string;
}
interface MarkdownImage extends Span {
    src: string;
    alt: string;
}
export declare function replaceMarkdownTokens<T extends Span>(source: string, tokens: readonly T[], render: (token: T) => string): string;
/** 反引号数量必须匹配，避免多反引号代码示例被拆成普通正文。 */
export declare function inlineCodeSpans(source: string): CodeSpan[];
export declare function fencedCodeSpans(source: string): Span[];
/** 读取图片引用的范围，使用括号计数保留 URL；与 PDF 使用同一个解析结果。 */
export declare function markdownImages(markdown: string): MarkdownImage[];
export declare function splitTableRow(line: string): string[];
export declare function safeImageSource(src: string): string;
export {};
