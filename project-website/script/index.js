const slides = document.querySelectorAll('.slide');
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let counter = 0;
let slideInterval;

function slide() {
    setTimeout(slide, 7000);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    counter++;
    if (counter > slides.length) {
        counter = 1;
    }
    slides[counter - 1].style.display = "block";
}

slide();

// Previous button functionality
prev.addEventListener("click", () => {
    clearInterval(slideInterval); // Clear the automatic slide interval

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    counter--;
    if (counter < 1) {
        counter = slides.length;
    }
    slides[counter - 1].style.display = "block";
});

// Next button functionality
next.addEventListener("click", () => {
    clearInterval(slideInterval); // Clear the automatic slide interval

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    counter++;
    if (counter > slides.length) {
        counter = 1;
    }
    slides[counter - 1].style.display = "block";
});



const style = document.createElement('style');
const position = 'right';

style.innerHTML=`
@keyframes my-animation{
    0%{${position}:-${document.querySelector('.text').offsetWidth}px;}
    100%{${position}:100%;}
}`;
document.head.append(style);