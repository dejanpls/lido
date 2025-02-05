export default class Element {
    #element;

    constructor(id, tag) {
        let element = document.getElementById(id);

        if (element) {
            console.error(`Element with this id already exists: ${id}`);
        } else {
            element = document.createElement(tag);
            element.id = id;
            document.body.appendChild(element);
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