import "./content.css";
import Element from "./element.js";

export function displayHome() {

    clearContent();
    const title = new Element("h1", "title");
    title.updateText("Delicious food and alcohol-free beverages");

    const reservationBtn = new Element("button", "btn-reservation");
    reservationBtn.updateText("Make a reservation");

    const imageContainer = new Element("div", "image-container");
    const heroImage = new Element("img", "hero-image", "image-container");

    const ctaBtn = document.getElementById("btn-reservation");
    ctaBtn.addEventListener('click', () => displayReservation());
}

export function displayReservation() {

    clearContent();
    const title = new Element("h1", "title");
    title.updateText("Give Us a Call to Make a Reservation");
    
    const reservationPhone = new Element("h2", "reservation-phone");
    reservationPhone.updateText("+0 123 456 789");
}

export function displayMenu() {

    clearContent();
    const title = new Element("h1", "title");
    title.updateText("Lido's Menu");

    const imageContainer = new Element("div", "image-container");
    const menuImage = new Element("img", "menu-image", "image-container");
}

function clearContent() {
    const parent = document.getElementById("content");
    while ( parent.firstChild ) parent.removeChild(parent.firstChild);
}