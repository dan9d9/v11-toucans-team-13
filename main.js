

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

    // mobileNav.addEventListener('touchmove', function(e) {   // Prevent scroll on touch devices
    //     e.preventDefault();
    // })
}   
   
 btn.addEventListener('click', openNav);
