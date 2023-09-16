const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const dropdownButton = document.querySelector('#dropdown-button');
const dropdownMenu = document.querySelector('#dropdown-menu');

function animatePopUp(element, modifier, statein, stateout, timeout = 100) {
    element.style[modifier] = statein;
    setTimeout(() => {
        element.style[modifier] = stateout;
    }, timeout);
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    animatePopUp(navMenu, 'opacity', '0', '1');
});

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    animatePopUp(dropdownMenu, 'opacity', '0', '1');
});
