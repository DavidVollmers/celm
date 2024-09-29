export interface PropertyTarget {
  setProperty(name: string, value: string): void;

  removeProperty(name: string): void;
}

export class StyleElementPropertyTarget implements PropertyTarget {
  private readonly _properties: {
    [name: string]: string;
  } = {};

  private readonly _element: HTMLStyleElement;

  public constructor(element?: HTMLStyleElement) {
    this._element = element ?? document.createElement('style');
    if (!element) document.body.appendChild(this._element);
  }

  public setProperty(name: string, value: string): void {
    this._properties[name] = value;
    this.update();
  }

  public removeProperty(name: string): void {
    delete this._properties[name];
    this.update();
  }

  //TODO smarter update logic
  public update(): void {
    let content = ':root{';
    for (const name in this._properties) {
      content += name + ':' + this._properties[name] + ';';
    }
    content += '}';
    this._element.innerText = content;
  }
}
