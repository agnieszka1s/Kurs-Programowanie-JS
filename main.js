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


 ///

 function addAllWords (...words) {
     let txt = ""
    for (let i = 0; i<words.length; i++){
        txt +=words[i]
    }
 return txt;
    };
    console.log(addAllWords("Kwiatki", "są", "piękniutkie"));
////////

    function addAllWords (...words) {
        let txt = ""
       for (let i = 0; i<words.length; i++){
           txt += `${words[i]} ` //dzięki grawisom napisy zostaną rozdzielone spacją, ale bez nich też zadziała
       }
    return txt;
       };
       console.log(addAllWords("Kwiatki", "są", "piękniutkie"));
       

       ///
       function showUsers(owner, ...others) {
           console.log(`Na imprezie był ${owner} ${others.length ? "oraz" + " " + others + "." : "."}`)
       }

       showUsers("Marian");
       showUsers("Marian", "Filip", "WIoleta", "Luis");
////


console.log(array90);
var array90 = [];
console.log(array90);
console.log(array900);