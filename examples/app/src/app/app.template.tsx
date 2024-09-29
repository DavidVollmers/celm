import { App } from './app';
import { Button, Input, stringInputConverter } from 'examples-lib';
import { useRef } from '@celm/jsx';

export const appTemplate = function (this: App) {
  const input = useRef<Input<string>>();
  return (
    <>
      <Input ref={input} converter={stringInputConverter}>
        Your name
      </Input>
      <Button onClick={() => alert(`Hello ${input.el.value}!`)}>
        Hello <b>World</b>!
      </Button>
    </>
  );
};
