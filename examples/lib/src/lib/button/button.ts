import { cele, CElement } from '@cele/core';
import { buttonTemplate as template } from './button.template';
import { buttonStyles as styles } from './button.styles';

@cele({
  name: '-button',
  template,
  styles,
  shadow: {
    delegatesFocus: true,
  },
})
export class Button extends CElement {}
