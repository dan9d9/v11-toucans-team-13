// Hamburger Menu open & close //
const hamburgerBtn = document.querySelector('.hamburger');

function closeNav() {
    const mobileNav = document.getElementById('mobileNav');
    const body = document.querySelector('body');

    mobileNav.style.left = -100 + '%';
    mobileNav.style.top = 0;
    body.style.overflow = '';
};

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
        };
    });
};
     
hamburgerBtn.addEventListener('click', openNav);


// Reposition hero_section bg image to keep centered around bowl on screens<640px width //

function repositionBackground() {
    const bgImage = document.querySelector('.heroSection');
 
    if(window.innerWidth <= 640) {
        bgImage.style.backgroundPositionX = (window.innerWidth - 640)/2 + 'px';
    };  
};
 
window.addEventListener('resize', repositionBackground);

//Animation select names (rotation)

function textRotator(n){
    const options = document.querySelectorAll('option');
         
    if(n >= options.length) {n = 0;};
    
    options.forEach(option=> {
        option.removeAttribute("selected");     
    });
       
    options[n].setAttribute("selected", "selected");

    n++;

    setTimeout(function() {
        textRotator(n);
    }, 3100);
};

textRotator(0);

// DROPDOWN FOOD RECOMMENDATIONS SECTION //

const OPTIONS = document.querySelector('.dropdown_select')

function showFoodMenu(e) {
    const FOOD_REC = document.getElementById('food_rec'),
    FOOD = document.querySelectorAll('.js-food-item'),
    DAIRY = document.querySelectorAll('.dairy'),
    FAT = document.querySelectorAll('.fat'),
    CALORIES = document.querySelectorAll('.calories'),
    CARBS = document.querySelectorAll('.carbs'),
    GLUTEN = document.querySelectorAll('.gluten'),
    SODIUM = document.querySelectorAll('.sodium'),
    VEG = document.querySelectorAll('.veg'),
    SUGAR = document.querySelectorAll('.sugar'),
    VEGAN = document.querySelectorAll('.vegan'),
    PALEO = document.querySelectorAll('.paleo'),
    PROTEIN = document.querySelectorAll('.protein'),
    TITLE = document.querySelector('.food_rec_title');

    FOOD.forEach(item => item.style.display = 'none');

    FOOD_REC.style.display = 'flex';

    switch(e.target.value){
        case 'AVOIDING DAIRY':
            TITLE.innerHTML = 'DAIRY FREE PRODUCTS';
            DAIRY.forEach(food => food.style.display = 'block');
            break;
        case 'AVOIDING FAT':
            TITLE.innerHTML = 'AVOIDING FAT ITEMS',
            FAT.forEach(food => food.style.display = 'block');
            break;
        case 'COUNTING CALORIES':
            TITLE.innerHTML = 'COUNTING CALORIES ITEMS',
            CALORIES.forEach(food => food.style.display = 'block');
            break;
        case 'AVOIDING CARBS':
            TITLE.innerHTML = 'AVOIDING CARBS ITEMS',
            CARBS.forEach(food => food.style.display = 'block');
            break;
        case 'GLUTEN FREE':
            TITLE.innerHTML = 'GLUTEN FREE ITEMS',
            GLUTEN.forEach(food => food.style.display = 'block');
            break;
        case 'AVOIDING SODIUM':
            TITLE.innerHTML = 'AVOIDING SODIUM ITEMS',
            SODIUM.forEach(food => food.style.display = 'block');
            break;
        case 'VEGETARIAN':
            TITLE.innerHTML = 'VEGETARIAN ITEMS',
            VEG.forEach(food => food.style.display = 'block');
            break;
        case 'AVOIDING SUGAR':
            TITLE.innerHTML = 'AVOIDING SUGAR ITEMS',
            SUGAR.forEach(food => food.style.display = 'block');
            break;
        case 'VEGAN':
            TITLE.innerHTML = 'VEGAN ITEMS',
            VEGAN.forEach(food => food.style.display = 'block');
            break;
        case 'PALEO':
            TITLE.innerHTML = 'PALEO ITEMS',
            PALEO.forEach(food => food.style.display = 'block');
            break;
        case 'ADDING PROTEIN':
            TITLE.innerHTML = 'ADDING PROTEIN ITEMS',
            PROTEIN.forEach(food => food.style.display = 'block');
            break;
    }
}

OPTIONS.addEventListener('change', showFoodMenu);

// GUACAMOLE SLIDESHOW //

let slideIndex = 0;

function slideText(e) {
    const slides = document.querySelectorAll('.slides');
    const spans = document.querySelectorAll('.js-values_text1-span');  
    
    if(e.animationName !== 'slide-in') { return }; //ignore if it's not slide-in animation

    for(let i=0; i<slides.length; i++){
        if(this == slides[i]){
            spans[i].style.color = '#ad2118';
            spans[i].style.textDecoration = 'underline';
            setTimeout(function(){
                    slides[i].classList.add('slide_fade-out');   
            }, 2300);
        };   
    };
};

function slideChange(n) {
    const slides = document.querySelectorAll('.slides');
    const spans = document.querySelectorAll('.js-values_text1-span');  
    
    if(n >= slides.length) {n = 0;};
    
    slides.forEach(slide => {   // reset images display, add event listener, remove exit animation
        slide.style.display = 'none';
        slide.addEventListener('animationend', slideText);
        slide.classList.remove('slide_fade-out');
    });
    
    spans.forEach(span => {     // reset color and text-decoration
        span.style.color = '#451400';
        span.style.textDecoration = '';
    });
    
    slides[n].style.display = 'block';

    n++;

    setTimeout(function() {
        slideChange(n);
    }, 5100);
};

// Start slide animation when scrolled into view

function checkPosition() {
    const guac = document.getElementById('guacamole');

    let rect = guac.getBoundingClientRect();
    let rectTop = rect.top;
    let rectBottom = rect.bottom;

    if(rectTop >= -110 && rectBottom <= 780) {
        slideChange(0);
        window.removeEventListener('scroll', checkPosition);
        window.removeEventListener('resize', checkPosition);
    };
};      

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', checkPosition);

//FIND A CHIPOTLE SECTION

var borderLine = document.querySelector('.whiteLine');
borderLine.style.borderBottom = "2px solid #FFFFFF";