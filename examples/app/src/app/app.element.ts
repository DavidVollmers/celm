import './app.element.css';

export class AppElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<example-button></example-button>`;
  }
}

customElements.define('app-root', AppElement);
