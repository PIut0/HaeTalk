let current = "current";
let ani = "slide_ani_1"
let firstslide = document.querySelector(".swipe_item");

function slide(){
    let currentSlide = document.querySelector(`.${current}`);
    let nextSlide;
    nextSlide = currentSlide.nextElementSibling;
    if(!nextSlide){
        nextSlide = firstslide;
    }
    nextSlide.classList.add(current);
    currentSlide.classList.remove(current);
}

setInterval(slide, 3000);