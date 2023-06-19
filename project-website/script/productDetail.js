function img(anything){
    document.querySelector('.detail-slide').src=anything;
}
function change(change){
    const line = document.querySelector('.home');
    line.computedStyleMap.backgroung = change;
}

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.num');

let a = 1;
plus.addEventListener("click",()=>{
    a++;
    num.innerText = a;
    // console.log(a);
});
minus.addEventListener("click",()=>{
    if(a>1){
        a--;
        num.innerText = a;
        console.log(a);
    }
});

const sizeBtn = document.getElementsByClassName('size-btn');
console.log(sizeBtn);
for(let i = 0; i < sizeBtn.length ; i++){
    sizeBtn[i].onclick=function(){
        for(let i = 0;i<sizeBtn.length;i++){
            sizeBtn[i].style.backgroundColor = "white";
            sizeBtn[i].style.color = "black";
        }
        this.style.backgroundColor = "black";
        this.style.color = "white";

    }
}
