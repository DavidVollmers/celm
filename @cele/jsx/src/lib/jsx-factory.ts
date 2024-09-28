import {
  CElement,
  CElementDefinition,
  CElementType,
  CeleOptions,
  disconnectElementEvent,
  use,
} from '@cele/core';
import { JSX_FRAGMENT } from './symbols';
import { CElementReference, Reference } from './use-ref';

function isCElement<T extends CElement>(type: CElementType<T>): boolean {
  return type.prototype instanceof CElement || isCElement(type.prototype);
}

export class JsxFactory {
  public constructor(private readonly _options: CeleOptions) {}

  //TODO return this => Node[] callback to bind functions
  public jsx<T extends CElement>(
    jsxElement: CElementType<T> | string | symbol,
    props: {
      readonly [key: string]:
        | EventListenerOrEventListenerObject
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        | CElementReference<any>
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
    let _isCElement = false;
    if (typeof jsxElement === 'string')
      element = document.createElement(jsxElement);
    else if (typeof jsxElement === 'symbol') {
      if (jsxElement === JSX_FRAGMENT) return childNodes;
      throw new Error('Symbol not supported: ' + jsxElement.toString());
    } else if ((_isCElement = isCElement(jsxElement))) {
      use(jsxElement, this._options);
      element = new jsxElement();
    } else throw new Error('Invalid element');

    for (const key in props) {
      const value = props[key];
      if (value == null) continue;

      if (key === 'ref') {
        if (!(value instanceof Reference))
          throw new Error('Unsupported reference type: ' + typeof value);
        element.addEventListener(disconnectElementEvent, () => {
          value.setElement(null);
        });
        value.setElement(element);
        continue;
      }

      if (typeof value === 'function') {
        let type = key.toLowerCase();
        if (type.startsWith('on')) {
          type = type.substring(2);
          element.addEventListener(type, value);
        } else setAttributeOrProperty(element, key, value, _isCElement);
      } else setAttributeOrProperty(element, key, value, _isCElement);
    }

    for (const node of childNodes) {
      element.appendChild(node);
    }

    return [element];
  }
}

function setAttributeOrProperty(
  element: HTMLElement,
  property: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  isCElement: boolean,
): void {
  if (!isCElement) {
    element.setAttribute(property, value.toString());
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const type = element.constructor as CElementType<any>;
  if (
    !type.definition ||
    !type.definition.attributes ||
    !type.definition.attributes.includes(property)
  ) {
    const descriptor = Object.getOwnPropertyDescriptor(element, property);
    if (descriptor && descriptor.set) descriptor.set(value);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    else (<any>element)[property] = value;
  } else element.setAttribute(property, value.toString());
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
