import { type RefObject } from 'react';
export interface MessageMarker {
    readonly key: string;
    readonly left: number;
    readonly top: number;
    readonly outline: {
        left: number;
        top: number;
        width: number;
        height: number;
        clipPath: string;
    };
}
interface SelectionLayout {
    readonly center: number;
    readonly width: number;
    readonly bottom: number;
    readonly flow: Element;
    readonly extraScrollSpace: number;
    readonly mounted: ReadonlySet<string>;
    readonly markers: readonly MessageMarker[];
}
export declare function mountedMessageElements(anchor: Element | null): Map<string, HTMLElement>;
export declare function useSelectionLayout(scopeAnchor: RefObject<HTMLElement>, dockRef: RefObject<HTMLElement>, keys: ReadonlySet<string>, onViewLost: () => void): SelectionLayout | null;
export {};
