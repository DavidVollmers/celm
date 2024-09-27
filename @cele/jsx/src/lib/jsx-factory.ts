import { CElement, CElementType, CeleOptions, use } from '@cele/core';
import { JSX_FRAGMENT } from './symbols';

function isCElement<T extends CElement>(type: CElementType<T>): boolean {
  return type.prototype instanceof CElement || isCElement(type.prototype);
}

export class JsxFactory {
  public constructor(private readonly _options: CeleOptions) {}

  public jsx<T extends CElement>(
    jsxElement: CElementType<T> | string | symbol,
    props: {
      readonly [key: string]:
        | EventListenerOrEventListenerObject
        | string
        | number
        | boolean
        | null
        | undefined;
    },
    ...children: (Node | string | (Node | string)[])[]
  ): Node[] {
    const childNodes = nodes(children);
    let element: HTMLElement;
    if (typeof jsxElement === 'string')
      element = document.createElement(jsxElement);
    else if (typeof jsxElement === 'symbol') {
      if (jsxElement === JSX_FRAGMENT) return childNodes;
      throw new Error('Symbol not supported: ' + jsxElement.toString());
    } else if (isCElement(jsxElement)) {
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

    for (const node of childNodes) {
      element.appendChild(node);
    }

    return [element];
  }
}

function nodes(children: (Node | string | (Node | string)[])[]): Node[] {
  const nodes: Node[] = [];
  for (const child of children) {
    if (Array.isArray(child)) {
      for (const c of child) {
        nodes.push(node(c));
      }
    } else {
      nodes.push(node(child));
    }
  }
  return nodes;
}

function node(node: Node | string): Node {
  return typeof node !== 'string' ? node : new Text(node);
}
