import { attr, cele, CElement } from '@cele/core';
import { inputStyles as styles } from './input.styles';
import { inputTemplate as template } from './input.template';

export type InputConverter<T> = (value: string) => T;

export const stringInputConverter: InputConverter<string> = (value: string) =>
  value;

@cele({
  name: '-input',
  template,
  styles,
})
export class Input<T> extends CElement {
  @attr()
  public type: 'text' | 'password' = 'text';

  @attr()
  public value: T | null = null;

  public converter: InputConverter<T> | null = null;

  protected onInput(event: Event): void {
    if (!this.converter) throw new Error('Missing converter');
    const stringValue = (event.target as HTMLInputElement).value;
    //TODO silent setter
    this.value = this.converter(stringValue);
  }
}
