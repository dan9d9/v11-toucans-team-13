const hamburgerBtn = document.querySelector('.hamburger');


// Hamburger Menu open/close

function closeNav() {
    const mobileNav = document.getElementById('mobileNav');
    const body = document.querySelector('body');

    mobileNav.style.left = -100 + '%';
    mobileNav.style.top = 0;
    body.style.overflow = '';
}

function openNav() { 
    const mobileNav = document.getElementById('mobileNav');
    const body = document.querySelector('body');  
    const btnClose = document.querySelector('.hamburger_close');
    
    mobileNav.style.left = 0;
    mobileNav.style.top = window.pageYOffset + 'px';    // Position top of mobileNav to where top of window is scrolled
    
    body.style.overflow = 'hidden'; // Prevent scrolling when mobileNav is active

    btnClose.addEventListener('click', closeNav);
    window.addEventListener('resize', function() {  // Close mobile section automatically if
        if(window.innerWidth >= 998) {              // window is resized above 998px
            closeNav();
        }
    })
}
     
 hamburgerBtn.addEventListener('click', openNav);


 // Reposition hero_section bg image to keep centered around bowl on screens<640px width

 function repositionBackground() {
     const bgImage = document.querySelector('.heroSection');
 
     if(window.innerWidth <= 640) {
         bgImage.style.backgroundPositionX = (window.innerWidth - 640)/2 + 'px';
     }  
 }
 
  window.addEventListener('resize', repositionBackground);


 //DROPDOWN MENU

//Background style
var background = document.querySelector('#dropDownSection');
background.style.backgroundImage = "url('./Chipotle-Clone-Images/bg-text.png')";
background.style.size = "cover";
background.style.height = "200px";

//Div width
var backgroundText = document.querySelector('.bgText');
backgroundText.style.width = "100%";

//Text p style
var text = document.querySelector('.dropText');
text.style.backgroundColor = "#F7F2ED";
text.style.padding = "1%";
text.style.color = "#451400";
text.style.fontWeight = "#bold";


//Border bottom line
var select = document.querySelector('select');
select.style.borderBottom = "3px solid #451400";


// GUACAMOLE SLIDESHOW
let slideIndex = 0;

function slideText(e) {
    const slides = document.querySelectorAll('.slides');
    const spans = document.querySelectorAll('.js-values_text1');  
    
    if(e.animationName !== 'slide-in') { return }; //ignore if it's not slide-in animation

    for(let i=0; i<slides.length; i++){
        if(this == slides[i]){
            spans[i].style.color = '#ad2118';
            spans[i].style.textDecoration = 'underline';
        }   
    }

}

function slideChange() {
    const slides = document.querySelectorAll('.slides');
    const spans = document.querySelectorAll('.js-values_text1');
    
    if(slideIndex >= slides.length) {slideIndex = 0;};
    
    slides.forEach(slide => {   // reset images display, and add event listener
        slide.style.display = 'none';
        slide.addEventListener('animationend', slideText);
    })
    
    spans.forEach(span => {     // reset color and text-decoration
        span.style.color = '#451400';
        span.style.textDecoration = '';
    })
    
    slides[slideIndex].style.display = 'block';

    slideIndex++;

    setTimeout(slideChange, 5000);
}

slideChange();


// Start animation when scrolled into view (not working correctly, need to change)

// function checkPosition() {
//     const guac = document.getElementById('guacamole');

//     let pos = guac.getBoundingClientRect().top

//     if(window.innerHeight - pos <= 100) {
//         setInterval(slideChange, 4000);
//     }
// }

// window.addEventListener('scroll', checkPosition)


//FIND A CHIPOTLE SECTION

var borderLine = document.querySelector('.whiteLine');
borderLine.style.borderBottom = "2px solid #FFFFFF";
