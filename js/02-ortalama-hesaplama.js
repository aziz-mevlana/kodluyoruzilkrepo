const form = document.innerHTML = `    
  <input type="number" id="vize">
  <input type="number" id="final">
  <button id="btn">Hesapla</button>
  <div id="result"></div>`

let vize = document.getElementById("vize");
let final = document.getElementById("final");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", notHesapla);

function notHesapla() {
  let ortalama = vize.value * 0.4 + final.value * 0.6;
  if (ortalama <= 30) {
    result.innerHTML = 'Ortalamanız: ' + ortalama + '<br>' + 'Notunuz: FF Kaldınız.';
  }
  else if (ortalama < 50) {
    result.innerHTML = 'Ortalamanız: ' + ortalama + '<br>' + 'Notunuz: DC Şartlı Geçtiniz.';
  }
  else if (ortalama < 85) {
    result.innerHTML = 'Ortalamanız: ' + ortalama + '<br>' + 'Notunuz: CC Geçtiniz.';
  }
  else {
    result.innerHTML = 'Ortalamanız: ' + ortalama + '<br>' + 'Notunuz: AA Geçtiniz.';
  }
}


