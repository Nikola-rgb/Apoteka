const naslov = 'DOBRO DOŠLI U VAŠU ONLINE APOTEKU';
let i = 0;
const kuckanje = () => {
    if(i < naslov.length) {
        document.querySelector('.tipkajuciNaslov ').innerHTML += naslov.charAt(i);
        i++;
        setTimeout(kuckanje, 100);
    }
}
kuckanje();


//  Toggle Nalog 

function humburger() {
    var razmotaj = document.getElementById("navToggle");
    if (razmotaj.style.display === "block") {
        razmotaj.style.display = "none";
    }
    else {
        razmotaj.style.display = "block";
    }
}
/*HAmburger menu*/

function myButton() {
    var x = document.getElementById("moj-toggle");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}



// Carousel informacije

var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;


/*image navigation*/

var manualNav = function(manual){
    slides.forEach((slide) => {
       slide.classList.remove('active');
        
        btns.forEach((btn) =>{
           btn.classList.remove('active'); 
        });
    });
    
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i)=> {
    btn.addEventListener("click", () => {
    manualNav(i);
     currentSlide = i;
    });
});

/*autoplay navigation*/

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;
    
    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) =>{
                activeSlide.classList.remove('active');
            });
            
            
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
            
            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 6000);
    }
    repeater();
}
repeat();

/*WIDGET TOGGLE*/

function widgetClick() {
    var widget = document.getElementById("widgetToggle");
    if (widget.style.display === "block") {
        widget.style.display = "none";
    }
    else {
        widget.style.display = "block";
    }
};

function widgetClick12() {
    var widget12 = document.getElementById("widgetToggle12");
    if (widget12.style.display === "block") {
        widget12.style.display = "none";
    }
    else {
        widget12.style.display = "block";
    }
};

// Carousel section Blog

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 4000,
    margin:50,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// Apoteke prikaz

var medisLek = document.querySelector('#medis-lek');
var medisLek1 = document.querySelector('#medis-lek-1');
var medisLek2 = document.querySelector('#medis-lek-2');
var medisLek3 = document.querySelector('#medis-lek-3');
var mlViewMape = document.querySelector('#mlViewMape');
var ml1ViewMape = document.querySelector('#ml-1ViewMape');
var ml2ViewMape = document.querySelector('#ml-2ViewMape');
var ml3ViewMape = document.querySelector('#ml-3ViewMape');


function ShowMedisLek() {
    medisLek.style.display = 'block';
    medisLek1.style.display = 'none';
    medisLek2.style.display = 'none';
    medisLek3.style.display = 'none';
    mlViewMape.style.display = 'block';
    ml1ViewMape.style.display = 'none';
    ml2ViewMape.style.display = 'none';
    ml3ViewMape.style.display = 'none';
}

function ShowMedisLek1() {
    medisLek.style.display = 'none';
    medisLek1.style.display = 'block';
    medisLek2.style.display = 'none';
    medisLek3.style.display = 'none';
    mlViewMape.style.display = 'none';
    ml1ViewMape.style.display = 'block';
    ml2ViewMape.style.display = 'none';
    ml3ViewMape.style.display = 'none';
}

function ShowMedisLek2() {
    medisLek.style.display = 'none';
    medisLek1.style.display = 'none';
    medisLek2.style.display = 'block';
    medisLek3.style.display = 'none';
    mlViewMape.style.display = 'none';
    ml1ViewMape.style.display = 'none';
    ml2ViewMape.style.display = 'block';
    ml3ViewMape.style.display = 'none';
}
function ShowMedisLek3() {
    medisLek.style.display = 'none';
    medisLek1.style.display = 'none';
    medisLek2.style.display = 'none';
    medisLek3.style.display = 'block';
    mlViewMape.style.display = 'none';
    ml1ViewMape.style.display = 'none';
    ml2ViewMape.style.display = 'none';
    ml3ViewMape.style.display = 'block';
}
