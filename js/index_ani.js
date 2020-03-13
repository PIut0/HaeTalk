import { CountUp } from './countUp.min.js';

let count1;
let count2;
let height;

$(document).ready(function(){
    count1 = new CountUp('count1', 8900,{
    });
    count2 = new CountUp('count2', 330,{
    });
    height = window.innerHeight;
});



window.addEventListener('scroll',function(e){
    let moveTop = $(window).scrollTop();
    let sec3 = false;
    let sec4 = false;
    let sec5 = false;
    let sec7 = false;
    let sec8 = false;

    if(!sec3 && moveTop >= 1050){
        // section3
        document.querySelector(".section3 h1").classList.remove('hide');
        document.querySelector(".section3 h1").classList.add('sec3_ani');
        document.querySelector(".section3 h2").classList.remove('hide');
        document.querySelector(".section3 h2").classList.add('sec3_ani');
        sec3 = true;
    }

    if(!sec4 && moveTop >= 1450){
        // section4
        document.querySelectorAll(".section4 .item").forEach((element,num)=>{
            element.classList.remove("hide");
            element.classList.add(`sec4_ani_${num+1}`);
        });
        sec4 = true;
    }

    if(!sec5 && moveTop >= 2200){
        // section5
        document.querySelectorAll(".section5 .contents img").forEach((element)=>{
            element.classList.add('sec5_ani');
        });
        sec5 = true;
    }
    if(!sec7 && moveTop >= 3300){
        // section7
        count1.start();
        sec7 = true;
    }
    if(!sec8 && moveTop >= 3700){
        // section8
        count2.start();
        sec8 = true;
    }
})

function test(){
    console.log(height);
    console.log($(window).scrollTop());
    console.log($(window).scrollTop() + height);
}