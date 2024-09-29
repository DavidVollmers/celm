import { celm, CElement } from '@celm/core';
import { buttonTemplate as template } from './button.template';
import { buttonStyles as styles } from './button.styles';

@celm({
  name: '-button',
  template,
  styles,
  shadow: {
    delegatesFocus: true,
  },
})
export class Button extends CElement {}
