// <!-- 
// 1. stworzyć plik index.html i strukturę dokumentu
// 2. stworzyć przycisk w html
// 3. ostylować przycisk i kwadraty, które będę tworzone
// JAVASCRIPT
// 1. pobrać przycisk i podpiąć do niego nasłuchiwanie na click
// 2. zadeklarować funkcję
// 3. w funkcji stworzyć element html (div)
// 4. dodać div do strony
// 5. stworzyć licznik i uzupełnić zawartość elementu div o wartość licznika
// 6. za pomocą instrukcji warunkowej stwierdzić czy dany element jest 5, jeśli tak nadać mu inną klasę 
// -->

const btn = document.querySelector("button"); // querySelector pobiera pierwszy selektor pasujący

let number = 1;  //deklarujemy zmienną w zasięgu globalnym, ponieważ w zasięgu lokalnym będzie kasowany za każdym razem, kiedy funkcja się wykona
let activeNumber = 1;

const addElement = function () {
const div = document.createElement("div")
div.textContent = number;
if (activeNumber == 5) { // if (number % 5 == 0) 
    activeNumber = 0;
    div.classList.add('circle');
}
document.body.appendChild(div);  //do body dodajemy diva stworzonego wyżej
number++; //odwołanie do zmiennej number w zasięgu globalnym, bo jeśli nie ma w zasięgu lokalnym to sprawdzi w zasięgu wyższym. 
//jeżeli znajdzie w zasięgu lokalnym, to już nie wychodzi poza funkcję. 
activeNumber++

}

btn.addEventListener("click", addElement); // bez wywołania 

var x = 1;
    let y = 2;
    const z = 3;

function a () {
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x);
    console.log(y);
    console.log(z);
    function t () {
    x = 100;
   
    console.log(x);
    console.log(y);
    console.log(z);
    }
    t();
}
  console.log(x);
  console.log(y);
  console.log(z);
a();

var a = 1;
let a = 2;
const a = 3;

console.log(a);
