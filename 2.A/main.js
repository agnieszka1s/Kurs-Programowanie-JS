const square = document.createElement('div');
square.classList.add('box');
document.body.appendChild(square);
let size = 10;
square.style.height = size + "px";
square.style.width = size + "px"; // konkatenacja/string

let grow = true; // flaga

window.addEventListener("scroll", function(){
    
    if (size >= window.innerWidth / 2) {
        grow = !grow;
    } else if (size === 0) {
        grow = true;
    }

    if (grow){ // true 
        size += 10;
        square.style.width = size + "px";
        square.style.height = size + "px";
    } else {
        size -= 10;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }  
})