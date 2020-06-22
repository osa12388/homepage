//testy matematyczne
console.log("tekst konsoli");
console.log(2 + 9);
let liczba1 = 44;
console.log(liczba1);
//zmiana tła
let przycisk = document.querySelector('.przycisk');
let tlo = document.querySelector('.tloBody');


let modeV = document.querySelector('.modeV');

przycisk.addEventListener("click", () => {
    tlo.classList.add("tloBodyCiemne");
});


let przycisk2 = document.querySelector('.przycisk2');
przycisk2.addEventListener("click", () => {
    tlo.classList.toggle("tloBodyZielone");
});
//wyswietalnie wybranej wersji motywu

console.log(modeV);
if(przycisk.classList.contains("tloBodyCiemne")) {
    modeV.innerText = "Aktualny motyw - Szary";
}
    else {
        console.log("Nic się nie stało");
    } 

//zgadnij kolor
let resultColor = document.querySelector('.resultColor');

let pomaranczowy = document.querySelector('.przyciskPomaranczowy');

let zielony = document.querySelector('.przyciskZielony');
let czerwony = document.querySelector('.przyciskCzerwony');
let bialy = document.querySelector('.przyciskBialy');
let niebieski = document.querySelector('.przyciskNiebieski');
let fioletowy = document.querySelector('.przyciskFioletowy');

pomaranczowy.addEventListener("click", () => {
    resultColor.innerText = "Brawo! Odgadłeś/odgadłaś mój ulubiony kolor! 😍";
});

zielony.addEventListener("click", () => {
    resultColor.innerText = "Niestety to nie jest mój ulubiony kolor 🤦‍♂️";
});

czerwony.addEventListener("click", () => {
    resultColor.innerText = "Niestety to nie jest mój ulubiony kolor 🤦‍♂️";
});

bialy.addEventListener("click", () => {
    resultColor.innerText = "Niestety to nie jest mój ulubiony kolor 🤦‍♂️";
});

niebieski.addEventListener("click", () => {
    resultColor.innerText = "Niestety to nie jest mój ulubiony kolor 🤦‍♂️";
});

fioletowy.addEventListener("click", () => {
    resultColor.innerText = "Niestety to nie jest mój ulubiony kolor 🤦‍♂️";
});



