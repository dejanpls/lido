import Display from "./content";

const display = new Display();

display.home();

const reservationBtn = document.getElementById("btn-reserve");
const homeBtn = document.getElementById("btn-home");
const menuBtn = document.getElementById("btn-menu");

reservationBtn.addEventListener('click', () => display.reservation());
homeBtn.addEventListener('click', () => display.home());
menuBtn.addEventListener('click', () => display.menu());