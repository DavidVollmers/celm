import { Button } from './button';

export const buttonTemplate = function (this: Button) {
  return (
    <button>
      <slot></slot>
    </button>
  );
};
