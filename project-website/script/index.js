//slider
const slideImages = document.querySelectorAll('img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');


let counter = 0;
next.addEventListener('click',slideNext)
    function slideNext(){
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        if(counter >= slideImages.length-1){
            counter = 0;
        }else{
            counter++;
        }
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
        indicators();
    }

prev.addEventListener('click',slidePrev)
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    }else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}


// 自動播放
function autoSliding(){
    deletInterval = setInterval(timer,3000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();


const container = document.querySelector('.slide-container');
container.addEventListener('mouseover',function(){
    clearInterval(deletInterval);
});
container.addEventListener('mouseout',autoSliding);

function indicators(){
    for(i = 0 ; i < dots.length ; i++){
        dots[i].className = dots[i].className.replace(' dot-active','');
    }
    dots[counter].className += ' dot-active';
}

function switchImage(currentImage){
    currentImage.classList.add('dot-active');
    let imageId = currentImage.getAttribute('attr');
    if(imageId>counter){
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }else if(imageId == counter){
        return;
    }else{
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}

const style = document.createElement('style');
const position = 'right';

style.innerHTML=`
@keyframes my-animation{
    0%{${position}:-${document.querySelector('.text').offsetWidth}px;}
    100%{${position}:100%;}
}`;
document.head.append(style);