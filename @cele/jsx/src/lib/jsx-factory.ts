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
    ...children: (CElement | HTMLElement)[]
  ): Node {
    console.log(jsxElement, props, children);
    let element: HTMLElement;
    if (typeof jsxElement === 'string')
      element = document.createElement(jsxElement);
    else if (isCElement(jsxElement)) element = use(jsxElement, this._options);
    else throw new Error('Invalid element');

    //TODO add props to element

    //TODO add children to element

    return element;
  }
}
