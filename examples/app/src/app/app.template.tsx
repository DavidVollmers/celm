import { App } from './app';
import { Button, Input } from 'examples-lib';
import { useRef } from '@cele/jsx';

export const appTemplate = function (this: App) {
  const input = useRef<Input<string>>();
  return (
    <>
      <Input T={String} ref={input}>
        Your name
      </Input>
      <Button onClick={() => alert(`Hello ${input.el.value}!`)}>
        Hello <b>World</b>!
      </Button>
    </>
  );
};
