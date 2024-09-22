import { App } from './app';
import { Button } from 'examples-lib';

export const appTemplate = function (this: App) {
  return (
    <Button onClick={() => console.log('Hello World!')}>
      Hello <b>World</b>!
    </Button>
  );
};
