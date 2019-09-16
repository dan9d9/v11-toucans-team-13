
const btn = document.querySelector('.hamburger');
const mobileNav = document.getElementById('mobileNav');
const body = document.querySelector('body');

// Hamburger Menu open/close
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



// Reposition hero_section bg image to keep centered around bowl on screens<640px width
function repositionBackground() {
    const bgImage = document.querySelector('.heroSection');

    if(window.innerWidth <= 640) {
        bgImage.style.backgroundPositionX = (window.innerWidth - 640)/2 + 'px';
    }  
}

 window.addEventListener('resize', repositionBackground);
