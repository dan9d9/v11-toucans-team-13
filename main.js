function showHamburger() {
    let hamburger = document.querySelector('.hamburger');

    if(window.innerWidth <= 998) {
        hamburger.classList.add('hamburger_visible');
    } else {hamburger.classList.remove('hamburger_visible');}
}

window.addEventListener('resize', showHamburger);
