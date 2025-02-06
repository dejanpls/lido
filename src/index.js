import { displayHome, displayReservation, displayMenu } from "./content";

displayHome();

const reservationBtn = document.getElementById("btn-reserve");
const homeBtn = document.getElementById("btn-home");
const menuBtn = document.getElementById("btn-menu");

reservationBtn.addEventListener('click', () => displayReservation());
homeBtn.addEventListener('click', () => displayHome());
menuBtn.addEventListener('click', () => displayMenu());