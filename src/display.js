import Element from "./element.js";

export default class Display {

    home() {

        if (this.#checkContent("btn-res")) return;
        
        this.#clearContent();

        // Hero
        const hero = new Element("div", "home-hero");

        const textContainer = new Element("div", "home-text-container", "home-hero");

        const title = new Element("h1", "home-title", "home-text-container");
        title.updateText("Delicious food and alcohol-free beverages");

        const button = new Element("button", "btn-res", "home-text-container");
        button.updateText("Make a reservation");

        const imageContainer = new Element("div", "home-image-container", "home-hero");

        // Main
        const info = new Element("div", "home-info");

        const infoText = new Element("p", "info-text", "home-info");
        infoText.updateText("What we do");

        const cards = new Element("div", "cards", "home-info");
        for (let i = 0; i < 3; i++) {
            const card = new Element("div", `card-${i+1}`, "cards");
            const icon = new Element("p", `icon-${i+1}`, `card-${i+1}`);
            const text = new Element("p", `text-${i+1}`, `card-${i+1}`);

            if (i === 0) {
                icon.updateText("10");
                text.updateText("Years in Business");
            }else if (i === 1) {
                icon.updateText("3");
                text.updateText("Locations Worldwide");
            } else {
                icon.updateText("100+");
                text.updateText("Employees");
            }
        }
        
    
        const ctaBtn = document.getElementById("btn-res");
        ctaBtn.addEventListener('click', () => this.reservation());
    }

    reservation() {

        if (this.#checkContent("res-hero")) return;
        
        this.#clearContent();

        // Hero
        const hero = new Element("div", "res-hero");

        const textContainer = new Element("div", "res-text-container", "res-hero");

        const title = new Element("h1", "res-hero-title", "res-text-container");
        title.updateText("Make Your Reservation");

        const infoText = new Element("p", "res-hero-info", "res-text-container");
        infoText.updateText("Contact us from Monday to Friday, 10AM to 21PM");

        const phone = new Element("h2", "res-hero-phone", "res-text-container");
        phone.updateText("+1 555 288 324");

        const imageContainer = new Element("div", "res-image-container", "res-hero");
    }

    menu() {

        if (this.#checkContent("menu-container")) return;

        this.#clearContent();
        
        // Hero
        const hero = new Element("div", "menu-hero");

        const textContainer = new Element("div", "menu-text-container", "menu-hero");

        const title = new Element("h1", "menu-hero-title", "menu-text-container");
        title.updateText("Lido's Online Menu");

        const infoText = new Element("p", "menu-hero-info", "menu-text-container");
        infoText.updateText("Our curated menu brings a taste of Balkan cuisine straight to the USA");

        const view = new Element("button", "menu-hero-button", "menu-text-container");
        view.updateText("View Menu");
        const imageContainer = new Element("div", "menu-image-container", "menu-hero");

        // Dialog (Menu view)
        const menu = new Element("dialog", "menu-dialog", "menu-hero");
        const menuHeader = new Element("div", "menu-dialog-header", "menu-dialog");
        const closeMenu = new Element("button", "menu-dialog-close", "menu-dialog-header");
        closeMenu.updateText("X");

        const titleMenu = new Element("p", "menu-dialog-title", "menu-dialog-header");
        titleMenu.updateText("Lido's Menu");

        const menuImage = new Element("div", "menu-image", "menu-dialog");
        menuImage.updateText("Hello world!");

        const dialog = document.getElementById("menu-dialog");
        const dialogOpen = document.getElementById("menu-hero-button");
        const dialogClose = document.getElementById("menu-dialog-close");

        dialogOpen.addEventListener('click', () => dialog.showModal());
        dialogClose.addEventListener('click', () => dialog.close());
    }

    #clearContent() {
        const parent = document.getElementById("content");
        while ( parent.firstChild ) parent.removeChild(parent.firstChild);
    }

    #checkContent(id) {
        // if tab already active
        return document.getElementById(id) !== null;
    }
}