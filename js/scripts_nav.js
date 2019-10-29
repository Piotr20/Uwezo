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