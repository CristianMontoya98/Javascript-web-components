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
               <h1>
               <slot name="title"></slot>
               </h1>
               <slot name="parrafo"></slot>
               <slot></slot>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
            :host{
                display: inline-block;
                width: 100%;
                min-width: 300px;
                max-width: 450px;
                font-size: 20px;
                background: grey;
                color: white;
            }
            :host(.blue){
                background: blue;
            }
            :host([yellow]) {
                background: yellow;
                color: black;
            }
            :host-context(article.card) {
                display: block;
                max-width: 100%;}
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