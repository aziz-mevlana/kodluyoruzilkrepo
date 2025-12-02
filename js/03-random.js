var randomNumber = Math.floor(Math.random() * 10) + 1;

var guess = document.getElementById("guess");
var result = document.getElementById("result");
var button = document.getElementById("button");
var attempts = document.getElementById("attempts");
var count = 0;

button.addEventListener("click", sonuc);

function sonuc() {
    if (guess.value == "") {
        result.innerHTML = "Lütfen bir sayı girin.";
    }
    else if (guess.value == randomNumber) {
        result.innerHTML = "Tebrikler! Doğru tahmin.";
        attempts.innerHTML = 'Tahmininiz: ' + count + ' dir';
        count = 0;

    }
    else if (guess.value < randomNumber) {
        result.innerHTML = "Daha yüksek bir sayı deneyin.";
        count++;
    }
    else  {
        result.innerHTML = "Daha düşük bir sayı deneyin.";
        count++;

    }
}