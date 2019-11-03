const burger = document.querySelector('.burger');
const curtain = document.querySelector('.curtain');
const X = document.querySelector('.curtain i');

burger.addEventListener('click', function () {
     curtain.classList.add('show');
     curtain.classList.remove('out');
     curtain.classList.remove('dis');
});
X.addEventListener('click', function () {
     curtain.classList.remove('show');
     curtain.classList.add('out');
     curtain.classList.add('dis');
});

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