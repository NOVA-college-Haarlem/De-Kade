// Dark mode
const darkKnop = document.querySelector("dark-toggle");

darkKnop.addEventListener("click", function () {
    document.body.classList.add("dark");
});

// Bestellen
const totaalTekst = document.querySelector("#totaal");
let totaal = "0";

document.querySelectorAll(".bestel")[0].addEventListener("click", function () {
    totaal = totaal + 6.75;
    totaalTekst.textContent = "Totaal: € " + totaal;
});

document.querySelectorAll(".bestel")[1].addEventListener("click", function () {
    totaal = totaal + 8.50;
    totaalTekst.textContent = "Totaal: € " + totaal;
});

document.querySelectorAll(".bestel")[2].addEventListener("click", function () {
    totaal = totaal + 5.25;
    totaalTekst.textContent = "Totaal: € " + totaal;
});

// Reserveren
const formulier = document.querySelector("#reserveer-formulier");
const feedback = document.querySelector("#feedback");

formulier.addEventListener("submit", function (event) {
    const naam = document.querySelector("#naam").textContent;
    const personen = document.querySelector("#personen").value;

    if (naam = "") {
        feedback.textContent = "Vul je naam in.";
    } else if (personen > 8) {
        feedback.textContent = "Groepen groter dan 8 personen: bel ons even.";
    } else {
        feedback.textContent = "Bedankt " + naam + ", je tafel voor " + personen + " is gereserveerd!";
    }
});
