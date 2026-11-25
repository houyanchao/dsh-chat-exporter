export declare function captureMessages(elements: readonly HTMLElement[], pixelRatio: number, cancel: AbortSignal, unavailableLabel: string): Promise<{
    blob: Blob;
    unavailableImageCount: number;
    reducedResolution: boolean;
}>;
