import { CElement, CElementType, CeleOptions, use } from '@cele/core';

function isCElement<T extends CElement>(type: CElementType<T>): boolean {
  return type.prototype instanceof CElement || isCElement(type.prototype);
}

export class JsxFactory {
  public constructor(private readonly _options: CeleOptions) {}

  public jsx<T extends CElement>(
    jsxElement: CElementType<T> | string,
    props: {
      readonly [key: string]:
        | EventListenerOrEventListenerObject
        | string
        | number
        | boolean
        | null
        | undefined;
    },
    ...children: (Node | string)[]
  ): Node {
    console.log(jsxElement, props, children);
    let element: HTMLElement;
    if (typeof jsxElement === 'string')
      element = document.createElement(jsxElement);
    else if (isCElement(jsxElement)) {
      use(jsxElement, this._options);
      element = new jsxElement();
    } else throw new Error('Invalid element');

    for (const key in props) {
      const value = props[key];
      if (value == null) continue;
      if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean'
      ) {
        element.setAttribute(key, value.toString());
      } else if (typeof value === 'function') {
        let type = key.toLowerCase();
        if (type.startsWith('on')) type = type.substring(2);
        element.addEventListener(type, value);
      } else console.warn('Unsupported property type: ' + typeof value);
    }

    for (const child of children) {
      if (typeof child === 'string') element.appendChild(new Text(child));
      else element.appendChild(child);
    }

    return element;
  }
}
