import { CElement } from '@cele/core';

export interface CElementReference<T extends HTMLElement> {
  el: T;
}

export const useRef = <T extends CElement>(): CElementReference<T> => {
  return {
    el: null!,
  };
};
