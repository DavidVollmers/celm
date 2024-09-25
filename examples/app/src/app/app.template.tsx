import { App } from './app';
import { Button } from 'examples-lib';

export const appTemplate = function (this: App) {
  return (
    <Button onClick={() => alert('Hello World!')}>
      Hello <b>World</b>!
    </Button>
  );
};
