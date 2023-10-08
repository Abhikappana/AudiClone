const carDetails =document.querySelectorAll(".cardetails");
const imgCards =document.querySelectorAll(".img-card");
const detailsCloseBtns =document.querySelectorAll(".details-close-btn");

var cardetail = function(modalClick){
    carDetails[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) =>{
    imgCard.addEventListener("click",() =>{
        cardetail(i);
    });
});

detailsCloseBtns.forEach((detailsCloseBtn) =>{
    detailsCloseBtn.addEventListener("click",() =>{
        carDetails.forEach((carDetailView) => {
            carDetailView.classList.remove("active");
        });
    });
});