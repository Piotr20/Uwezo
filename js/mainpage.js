let a = 0;

function updateScroll() {
     a = window.scrollY || window.pageYOffset;
     console.log(a);

     const globe = document.querySelector('.world');
     if (a > 400) {
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