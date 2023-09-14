const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const dropdownButton = document.querySelector('#dropdown-button');
const dropdownMenu = document.querySelector('#dropdown-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});
