import { CElement, CElementType, CeleOptions, use } from '@cele/core';

// eslint-disable-next-line @typescript-eslint/ban-types
function isCElement(element: Function): boolean {
  return element.prototype instanceof CElement || isCElement(element.prototype);
}

export class JsxFactory {
  public constructor(private readonly _options: CeleOptions) {}

  public jsx<T extends CElement>(
    jsxElement: CElementType<T> | string,
    props: {
      readonly [key: string]: string | number;
    },
    ...children: (Node | string)[]
  ): Node {
    console.log(jsxElement, props, children);
    let element: Node;
    if (typeof jsxElement === 'string')
      element = document.createElement(jsxElement);
    else if (isCElement(jsxElement)) {
      use(jsxElement, this._options);
      element = new jsxElement();
    } else throw new Error('Invalid element');

    //TODO add props to element

    for (const child of children) {
      if (typeof child === 'string') element.appendChild(new Text(child));
      else element.appendChild(child);
    }

    return element;
  }
}
