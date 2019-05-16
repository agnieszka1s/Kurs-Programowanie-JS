let size = 10;
let orderElement = 0;

const init = () => {
let btn = document.createElement('button');
btn.textContent = `Dodaj 10 elementów listy`;
document.body.appendChild(btn);

const ulElement = document.createElement('ul');
document.body.appendChild(ulElement);

btn.addEventListener('click', createLiElements)
}

const createLiElements = () => {
    for (let i=0; i < 10; i++){
    const liElement = document.createElement('li');
    liElement.style.fontSize = `${size++}px`
    liElement.textContent = `Element nr ${orderElement += 1}`;
    document.querySelector('ul').appendChild(liElement);
}
}

init() //funkcja inicjalizująca - start







//<!-- Projekt 3 - Zadanie 2 -
//  - Stwórz rozwiązanie z pomocą dwóch funkcji w oparciu o strukturę w main.js Nie dodawaj nic więcej do zakresu globalnego.
 
//  - funkcja init, która będzie uruchomiona po wczytaniu strony. Jej zadaniem jest:
//  --- stworzyć dwa elementy
//  <button>Dodaj 10 elementów listy</buttn>
//  <ul></ul>
//  --- dodaj je do body
//  --- ustaw nasłuchiwanie na przycisk
 
 
//  --- funkcja createLiElements, która będzie uruchamiana po kliknięciu przycisku stworzonego przez funkcję init. Jej zadanie to:
//  --- tworzenie 10 elementów li i umieszczanie ich w elemencie ul
//  --- kazdy z 10 elementów ma mieć swój indeks (order) pczy czym kolejne 10 elementów ma być konynuacją (czilu pierwszy klik mamy 1-10, kolejny 11-20 itd)
//  --- każdy kolejny element il ma mieć font-size większy o 1px.
 
//  - bez zmian w pliku html (nie dodajemy html-a i css-a). Cały kod piszemy w elemencie main.js
 
//  -->