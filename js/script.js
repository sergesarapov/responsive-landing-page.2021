//mobile menu
const hamburgerBtn = document.querySelector('.menu__hamburger');
const menuList = document.querySelector('.menu__list');
const menuItem = document.querySelector('.menu__item');
const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
let isMenuOpen = false;

document.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(evt) {
  if (!isMenuOpen && evt.target.dataset.id === 'mobile-menu') {
    hamburgerBtn.setAttribute('aria-expanded', true);
    hamburger.classList.remove('hamburger-active');
    cross.classList.add('cross-active');
    menuList.classList.add('menu__list-active');
    isMenuOpen = true;
  } else {
    hamburgerBtn.setAttribute('aria-expanded', false);
    hamburger.classList.add('hamburger-active');
    cross.classList.remove('cross-active');
    menuList.classList.remove('menu__list-active');
    isMenuOpen = false;
  }
}

//form handling
const form = document.querySelector('.form');
const nameInput = document.querySelector('#name-id');
const emailInput = document.querySelector('#email-id');
const textArea = document.querySelector('#textarea-id');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const newUser = {
    userName: nameInput.value,
    userEmail: emailInput.value,
    userMessage: textArea.value,
  };
  console.log(newUser);
  nameInput.value = '';
  emailInput.value = '';
  textArea.value = '';
}

//scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', scrollHandler);

function scrollHandler(evt) {
  if (window.scrollY > 50) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
}
