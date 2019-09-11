const btn = document.querySelector('.hamburger');
const mobileNav = document.getElementById('mobileNav');
const body = document.querySelector('body');

function closeNav() {
    mobileNav.style.left = -100 + '%';
    body.style.overflow = '';
}

function openNav() {   
    const btnClose = document.querySelector('.hamburger_close');
    
    mobileNav.style.left = 0;
    body.style.overflow = 'hidden';

    btnClose.addEventListener('click', closeNav);

    mobileNav.addEventListener('touchmove', function(e) {
        e.preventDefault();
    })
}   
   
 btn.addEventListener('click', openNav);
