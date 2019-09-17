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
    body.style.overflow = 'hidden'; // Prevent scrolling when mobileNav is active

    btnClose.addEventListener('click', closeNav);
    window.addEventListener('resize', function() {  // Close mobile section automatically if
        if(window.innerWidth >= 998) {              // window is resized above 998px
            closeNav();
        }
    })
}   
   
 btn.addEventListener('click', openNav);
