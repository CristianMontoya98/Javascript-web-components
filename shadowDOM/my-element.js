class myElement extends HTMLElement {
    //Primer ciclo de vida, constructor
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>Uso de template</h2>
                <div>
                    <p>Ejemplo de como se crea y usa una template en web components<p>
                </div
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
            h2 {
                color: red;
            }
        </style>
        `
    }
    //En este metodo clonamos todos los elementos anidados del template
    render(){
        const template = this.getTemplate();
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    //Segundo ciclo de vida
    connectedCallback() {
        this.render();
    }
}
customElements.define('my-element', myElement);