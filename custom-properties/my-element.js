class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h1>
          <slot name="title"></slot>
        </h1>
          <p>
            <slot name="parrafo"></slot>
          </p>
          <slot></slot>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
      <style>
        :host {
          --primary-color: red;
          --secondary-color: blue;
          display: inline-block;
          width: 100%;
          min-width: 300px;
          max-width: 450px;
        }
        section {
          background-color: var(--primary-color);
          color: var(--secondary-color);
          padding: 10px;
          border-radius: 5px;
        }
      </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("my-element", myElement);