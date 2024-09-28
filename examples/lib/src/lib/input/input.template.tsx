import { Input } from './input';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const inputTemplate = function (this: Input<any>) {
  const id = this.id ?? Math.random().toString(36).substring(2);
  const stringValue = this.value?.toString();
  return (
    <>
      <label for={id}>
        <slot></slot>
      </label>
      <input
        id={id}
        type={this.type}
        value={stringValue}
        onchange={this.onInput.bind(this)}
      />
    </>
  );
};
