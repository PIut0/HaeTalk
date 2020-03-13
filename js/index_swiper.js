let current = "current";
let ani = "slide_ani_1"
let firstslide = document.querySelector(".swipe_item");
let sliders = document.querySelectorAll(".swipe_item");
let bullets = document.querySelectorAll(".bullets ul li")

function getIdx(){
    let result;
    sliders.forEach(function(value,index){
        // console.log(value.classList.length)
        if(value.classList.contains(current)) result = index;
    })
    return result;
}
function setBullets(){
    let cur = getIdx()
    bullets.forEach(function(val,idx){
        val.innerHTML = "○";
        if(idx == cur){
            val.innerHTML = "●";
        }
    });
}
function slide(){
    let currentSlide = document.querySelector(`.${current}`);
    let nextSlide;
    nextSlide = currentSlide.nextElementSibling;
    if(!nextSlide){
        nextSlide = firstslide;
    }
    nextSlide.classList.add(current);
    currentSlide.classList.remove(current);
    setBullets();
}

setInterval(slide, 3000);