import Element from "./element.js";

export default class Display {

    home() {

        if (this.#checkContent("btn-reservation")) return;
        
        this.#clearContent();
        const title = this.#createTitle("Delicious food and alcohol-free beverages");
    
        const reservationBtn = new Element("button", "btn-reservation");
        reservationBtn.updateText("Make a reservation");
    
        const imageContainer = new Element("div", "hero-image");
    
        const ctaBtn = document.getElementById("btn-reservation");
        ctaBtn.addEventListener('click', () => this.reservation());
    }

    reservation() {

        if (this.#checkContent("reservation-phone")) return;
        
        this.#clearContent();
        const title = this.#createTitle("Make Your Reservation");
        
        const reservationPhone = new Element("h2", "reservation-phone");
        reservationPhone.updateText("+0 123 456 789");
    }

    menu() {

        if (this.#checkContent("menu-container")) return;

        this.#clearContent();
        const title = this.#createTitle("Lido's Menu");
    
        const menuContainer = new Element("div", "menu-container");
    }

    #clearContent() {
        const parent = document.getElementById("content");
        while ( parent.firstChild ) parent.removeChild(parent.firstChild);
    }

    #checkContent(id) {
        // if tab already active
        return document.getElementById(id) !== null;
    }

    #createTitle(text) {
        return new Element("h1", "title").updateText(text);
    }
}