
class topBar extends HTMLElement{
    constructor(){
        super();
        this.title;
        this.subtitle;
    }

    static get observedAttributes(){
        return ['title', "subtitle"];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        switch(nameAttr){
            case "title":
                this.name = newValue;
            break;
            case "subtitle":
                this.subtitle = newValue;
            break;
        }
    }

    connectedCallback(){
        this.innerHTML = `<div>
            <h1>Hola ${this.title} ${this.subtitle}</h1>
            <p>Esto es un párrafo</p>
        </div>`;
        //this.style.color = "blue";
        //this.style.fontFamily = "sans-serif";
    }
}

window.customElements.define("top-bar",topBar);