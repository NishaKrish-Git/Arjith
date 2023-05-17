//toggle icon navbar

let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


// Scroll section active link

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');
    if(top>=offset && top<offset+height){
        navLinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
});

// sticky navbar

let header=document.querySelector('header');
header.classList.toggle('sticky', window.scrollY>100);

//remove toggle icon and navbar when click navbar link (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// SCROLL REVEAL

ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// //typed js

// const typed=new Typed('.multiple-text',{
//     strings:['Indian Singer', 'Composer', 'Musician'],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });

//audio
var audio=document.getElementById("myAudio");
var count=0;
function play(){
   if(count==0){
    count=1;
    audio.play();
   }
   else{
    count=0;
    audio.pause();
}   
}

var audio2=document.getElementById("myAudio2");
var count=0;
function play2(){
   if(count==0){
    count=1;
    audio2.play();
   }
   else{
    count=0;
    audio2.pause();
}   
}

var audio3=document.getElementById("myAudio3");
var count=0;
function play3(){
   if(count==0){
    count=1;
    audio3.play();
   }
   else{
    count=0;
    audio3.pause();
}   
}

var audio4=document.getElementById("myAudio4");
var count=0;
function play4(){
   if(count==0){
    count=1;
    audio4.play();
   }
   else{
    count=0;
    audio4.pause();
}   
}

var audio5=document.getElementById("myAudio5");
var count=0;
function play5(){
   if(count==0){
    count=1;
    audio5.play();
   }
   else{
    count=0;
    audio5.pause();
}   
}

var audio6=document.getElementById("myAudio6");
var count=0;
function play6(){
   if(count==0){
    count=1;
    audio6.play();
   }
   else{
    count=0;
    audio6.pause();
}   
}



// function playAudio() { 
//   x.play(); 
// } 