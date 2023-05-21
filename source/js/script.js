const headerElement = document.querySelector('.header');

let navMain = document.querySelector('.nav');
let navToggleOpen = document.querySelector('.nav__toggle-open');
let navToggleClose = document.querySelector('.nav__toggle-close');

headerElement.classList.remove('nojs');

navToggleOpen.addEventListener('click', function () {
    navMain.classList.add('nav--opened');
    navToggleOpen.classList.add('hidden');
    navToggleClose.classList.remove('hidden');
});

navToggleClose.addEventListener('click', function () {
  navMain.classList.remove('nav--opened');
  navToggleOpen.classList.remove('hidden');
  navToggleClose.classList.add('hidden');
});
