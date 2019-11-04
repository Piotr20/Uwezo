let a = 0;

function updateScroll() {
     a = window.scrollY || window.pageYOffset;
     console.log(a);

     const globe = document.querySelector('.world');
     if (a > 500) {
          globe.classList.add('active');
     }
     return a;
}
updateScroll();
window.addEventListener('scroll', updateScroll);

const johanesburg = document.querySelector('.globe-area i:nth-of-type(1)');
const luanda = document.querySelector('.globe-area i:nth-of-type(2)');
const nairobi = document.querySelector('.globe-area i:nth-of-type(3)');

luanda.addEventListener('click', function () {
     document.querySelector('h2.luanda').classList.add('visible');
     document.querySelector('p.luanda').classList.add('visible');
     document.querySelector('div.luanda').classList.add('visible');
     document.querySelector('h2.johanesburg').classList.remove('visible');
     document.querySelector('p.johanesburg').classList.remove('visible');
     document.querySelector('div.johanesburg').classList.remove('visible');
     document.querySelector('h2.nairobi').classList.remove('visible');
     document.querySelector('p.nairobi').classList.remove('visible');
     document.querySelector('div.nairobi').classList.remove('visible');
})
johanesburg.addEventListener('click', function () {
     document.querySelector('h2.johanesburg').classList.add('visible');
     document.querySelector('p.johanesburg').classList.add('visible');
     document.querySelector('div.johanesburg').classList.add('visible');
     document.querySelector('h2.nairobi').classList.remove('visible');
     document.querySelector('p.nairobi').classList.remove('visible');
     document.querySelector('div.nairobi').classList.remove('visible');
     document.querySelector('h2.luanda').classList.remove('visible');
     document.querySelector('p.luanda').classList.remove('visible');
     document.querySelector('div.luanda').classList.remove('visible');

})
nairobi.addEventListener('click', function () {
     document.querySelector('h2.nairobi').classList.add('visible');
     document.querySelector('p.nairobi').classList.add('visible');
     document.querySelector('div.nairobi').classList.add('visible');
     document.querySelector('h2.luanda').classList.remove('visible');
     document.querySelector('p.luanda').classList.remove('visible');
     document.querySelector('div.luanda').classList.remove('visible');
     document.querySelector('h2.johanesburg').classList.remove('visible');
     document.querySelector('p.johanesburg').classList.remove('visible');
     document.querySelector('div.johanesburg').classList.remove('visible');
})
let b = 0;

function colorChange() {

     b = window.scrollY || window.pageYOffset;
     let nav1 = document.querySelector('nav a:nth-of-type(1)');
     let nav2 = document.querySelector('nav a:nth-of-type(2)');
     let nav3 = document.querySelector('nav a:nth-of-type(3)');


     if (b > 999 && b < 2000) {
          nav1.style.color = "white";
          nav2.style.color = "white";
          nav3.style.color = "white";
     } else {
          nav1.style.color = "#3e3e3e";
          nav2.style.color = "#3e3e3e";
          nav3.style.color = "#3e3e3e";

     }
}
window.addEventListener('scroll', colorChange);