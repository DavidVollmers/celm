import './app.element.css';
import { Button } from 'examples-lib';

export class AppElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = (
      <Button size={'small'}>
        Hello <b>World</b>!
      </Button>
    );
  }
}

customElements.define('app-root', AppElement);
