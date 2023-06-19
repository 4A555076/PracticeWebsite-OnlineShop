//PRODUCT
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll('.cards .card');

const filterCards = e => {
    document.querySelector(".product-active").classList.remove("product-active");
    e.target.classList.add('product-active');
    console.log(e.target);

    filterableCards.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })
};

filterButtons.forEach(button => button.addEventListener("click",filterCards));

