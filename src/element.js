export default class Element {
    #element;
    #parent;

    constructor(tag, id, parentSelector = "div#content") {
        this.#parent = document.querySelector(parentSelector);
        
        if (!this.#parent) {
            console.error(`Parent element not found: ${parentSelector}`);
            return;
        }

        let element = document.getElementById(id);

        if (element) {
            console.error(`Element with this id already exists: ${id}`);
        } else {
            element = document.createElement(tag);
            element.id = id;
            this.#parent.appendChild(element);
        }

        this.#element = element;
    }

    updateText (text) {
        if (this.#element) {
            this.#element.textContent = text;
        } else {
            console.error(`Element not found: ${this.#element}`);
        }
    }
}