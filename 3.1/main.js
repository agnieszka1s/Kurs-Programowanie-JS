//<!-- Projekt 3 - PĘTLA - PLIK STARTOWY ZADANIE 1 -->
// <!-- Gotowy projekt możesz zobacz tutaj https://websamuraj.pl/examples/js/projekt3-zad1/ -->

// <!-- 
// Lista jest już stworzona w strukturze html, ale domyślnie niewidoczna (display: none). 
// - Po kliknięciu na przycisk (button już jest) mamy sprawić by każdy element li był
 //widoczny(ustawienie własciwości display na block)
// - by po każdym kliknięciu w button wielkość fonta była o jeden większa od początkowego
//(ustaw w JS wartość początkową na 10px, użyj zmiennej).

// Zrób to zadanie (najpierw) za pomocą pętli i (potem) za pomocą metody forEach.

// -->

let font = 10; 
liElements = document.querySelectorAll('li');
liElements = [...liElements]; //zamieniam na tablicę, żeby móc użyć metody


liElements.forEach(element =>  // nadaję każdemu elementowi tablcicy font 10px
   element.style.fontSize = `${font}px`
   );

const btn = document.querySelector('button');
console.log(btn); 

btn.addEventListener("click", function(){
    font++;  

    liElements.forEach(element => 
        element.style.fontSize =`${font}px`)

    liElements.forEach(element => 
    element.style.display = "block")
});

