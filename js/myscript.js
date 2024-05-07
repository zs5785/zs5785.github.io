let navButton = document.getElementById("nav-menu-button");
let navList = document.getElementById("nav-menu-list");

if (navButton){
    navButton.addEventListener("click", function(event){
        if (navList.style.display === "" || navList.style.display === "none")
            navList.style.display = "grid";
        else
            navList.style.display = "none";
    });
}

const mediumMediaQuery = window.matchMedia("(min-width: 550px)");

mediumMediaQuery.addEventListener("change", function(event){
    if (event.matches)
        navList.style.display = "grid";
    else
        navList.style.display = "none";
});

let slideIndex = 0;
let slides = document.getElementsByClassName("gallery-img");
let dots = document.getElementsByClassName("gallery-dot");

let i;
for(i = 0; i < dots.length; i++){
    const currentIndex = i;
    dots[i].onclick = function(){
        showSlides(currentIndex);
    };
}

showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex + n);
}

function showSlides(n){
    slideIndex = n;
    if (n > slides.length - 1){
        slideIndex = 0;
    }else if (n < 0)
        slideIndex = slides.length - 1;

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" gallery-dot-active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " gallery-dot-active";
}

let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-content");

for(i = 0; i < slides.length; i++){
    var slideImg = slides[i];
    const imgSrc = slideImg.src;
    slideImg.onclick = function(){
        modal.style.display = "block";
        modalImg.src = imgSrc;
    };
}

let modalClose = document.getElementById("modal-close");
if (modalClose){
    modalClose.onclick = function(){
        modal.style.display = "none";
    }
}