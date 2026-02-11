const template = document.createElement('div');
template.innerHTML = `
<style>
    p {
        color:blue;
    }
    .texto {
        color:red;
    }
</style>
<p class='texto'>Web component demo 2</p>
<p>Aqui estamos probando la generación de los web components</p>
`;


class myElement extends HTMLElement {
    constructor() {
        super();
        this.p = document.createElement('p');
    }
    connectedCallback() {
        this.p.textContent = "Web component demo";
        this.appendChild(template);
    }
}
customElements.define('my-element', myElement);