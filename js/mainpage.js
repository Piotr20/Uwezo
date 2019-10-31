let a = 0;

function updateScroll() {
     a = window.scrollY || window.pageYOffset;
     console.log(a);
     return a;
}
updateScroll();
window.addEventListener('scroll', updateScroll);

const globe = document.querySelector('.world');
if (a > 1) {
     globe.classList.add('active');
}