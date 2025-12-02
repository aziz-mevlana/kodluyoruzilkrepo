let number;

number = 11;
console.log(typeof(number));

number = "11";
console.log(typeof(number));

number = 11;
number = parseInt(number);
console.log(typeof(number));

number = 11;
number = parseFloat(number);
console.log(typeof(number), number);

number = 11;
number = number.toString();
console.log(typeof(number));

console.log(`Bu metinde ${typeof(number)} türünde bir veri var.`);

const person = {
    name: "Aziz",
    surname: "Alim",
    age: 26
};
console.log(typeof(person));
console.log(person);

const kisi =`
<p> 
Adi: ${person.name} 
Soyadi: ${person.surname} 
Yasi: ${person.age} 
</p>`;



const kitap = {
    ad: `Firtina`,
    yazar: `Shekspir`,
    sayfa: 1610
}

const bookTable = `
<table border>
    <tbody>
        <tr>
            <td>Kitap Adi</td>
            <td>${kitap.ad}</td>
        </tr>
        <tr>
            <td>Yazar</td>
            <td>${kitap.yazar}</td>
        </tr>
        <tr>
            <td>Sayfa Sayisi</td>
            <td>${kitap.sayfa}</td>
        </tr>
    </tbody>
</table>
`;

console.log(!!2);

document.getElementById("btnClick").addEventListener("click", clicked);
function clicked() {
    alert("Butona tiklandi");
}

