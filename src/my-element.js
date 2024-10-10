import { LitElement, html, css } from "lit";
class MyElement extends LitElement {
  static properties = {
    message: { type: String },
  };
  constructor() {
    super();
    this.message = "Hello from Lit Element!";
  }
  render() {
    return html`<h1>${this.message}</h1>`;
  }
}
customElements.define("my-element", MyElement);
