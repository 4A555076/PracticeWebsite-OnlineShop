const tabBtn = document.querySelectorAll(".nav-tabs li");
const filterableTab = document.querySelectorAll('.content-tabs .tab');

const filterTab = e => {
    document.querySelector(".tab-active").classList.remove("tab-active");
    e.target.classList.add('tab-active');
    console.log(e.target);

    filterableTab.forEach(tab => {
        
        tab.classList.remove("tab-active");
        if(tab.dataset.name === e.target.dataset.name){
            tab.classList.add("tab-active");
        }
    })

};

tabBtn.forEach(li => li.addEventListener("click",filterTab));

