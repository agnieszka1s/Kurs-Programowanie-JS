
const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function(e) {
  // console.log(e.clientX, e.clientY);
  // h1.textContent = `${e.screenX}, ${e.screenY}`; //od początku  krawędzi ekranu
  // h1.textContent = `${e.pageX}, ${e.pageY}`; // od początku strony

  const x = e.clientX;
  const y = e.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;
  h1.textContent = x + ", " + y; //od początku okna przeglądarki

  const red = x/width * 100; //100%
  const green = y/height * 100; //
  const blue = ((x / width * 100) + (y / height * 100))/2;
  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`
})