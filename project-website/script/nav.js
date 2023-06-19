//nav
const searchToggle = document.querySelector(".searchToggle");
const sidebarClose = document.querySelector(".sidebarClose");
const sidebarOpen = document.querySelector(".sidebarOpen");
const navbar = document.querySelector("nav");
const body = document.querySelector("body");


searchToggle.addEventListener("click",()=>{
    searchToggle.classList.toggle("active");
});

sidebarOpen.addEventListener("click",()=>{
    navbar.classList.toggle("active2");
});

sidebarClose.addEventListener("click",()=>{
    navbar.classList.remove("active2");
});









