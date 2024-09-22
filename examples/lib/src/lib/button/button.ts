import { cele, CElement } from '@cele/core';
import { buttonTemplate as template } from './button.template';

@cele({
  name: '-button',
  template,
})
export class Button extends CElement {}
