import { CElement, CElementType, use } from '@cele/core';

export function jsx<T extends CElement>(
  jsxElement: CElementType<T> | string,
  props: {
    readonly [key: string]: string | number;
  },
  ...children: (CElement | HTMLElement)[]
): HTMLElement {
  console.log(jsxElement, props, children);
  let element: HTMLElement;
  if (typeof jsxElement === 'string')
    element = document.createElement(jsxElement);
  else if (isCElement(jsxElement)) element = use(jsxElement);
  else throw new Error('Invalid element');

  //TODO add props to element

  //TODO add children to element

  return element;
}

function isCElement(element: Function): boolean {
  return element.prototype instanceof CElement || isCElement(element.prototype);
}
