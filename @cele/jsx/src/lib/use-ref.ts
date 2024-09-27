import { CElement } from '@cele/core';

export interface CElementReference<T extends HTMLElement> {
  readonly el: T;
}

export const useRef = <T extends CElement>(): CElementReference<T> => {
  return new Reference();
};

export class Reference<T extends HTMLElement> implements CElementReference<T> {
  private _element: T | null = null;
  private _set = false;

  public get el(): T {
    if (!this._set) throw new Error('Reference not set');
    if (this._element == null) throw new Error('Element not connected');
    return this._element;
  }

  public setElement(element: T | null): void {
    this._element = element;
    this._set = true;
  }
}
