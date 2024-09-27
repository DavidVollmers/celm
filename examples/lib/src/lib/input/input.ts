import { cele, CElement } from '@cele/core';
import { inputStyles as styles } from './input.styles';
import { inputTemplate as template } from './input.template';

@cele({
  name: '-input',
  template,
  styles,
})
export class Input<T> extends CElement {
  public type: 'text' | 'password' = 'text';

  public value: T | null = null;
}
