export type CElementType<T extends CElement> = new (...args: any[]) => T;

export abstract class CElement extends HTMLElement {}
