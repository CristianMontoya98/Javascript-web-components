const template = document.createElement('div');
template.innerHTML = `
<p>Web component demo 2</p>
<p>Aqui estamos probando la generación de los web components</p>
`;


class myElement extends HTMLElement {
    constructor() {
        super();
        this.p = document.createElement('p');
    }
    connectedCallback() {
        this.p.textContent = "Web component demo";
        this.appendChild(this.p);
    }
}
customElements.define('my-element', myElement);