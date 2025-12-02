let name = prompt("Lütfen isminizi giriniz:");

let header = document.getElementById("header");
let myName = document.getElementById("myName");
let time = document.getElementById("time");

header.innerHTML = "Kodluyoruz JavaScript Eğitimine Hoşgeldiniz!";
myName.innerHTML = "Hello: " + name;
time.innerHTML = "Saat: " + new Date().toLocaleTimeString();
function updateTime() {
    time.innerHTML = "Saat: " + new Date().toLocaleTimeString();
}
setInterval(updateTime, 1000);