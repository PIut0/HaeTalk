import { CountUp } from './countUp.min.js';

let count1;
let count2;
let height;

$(document).ready(function(){
    count1 = new CountUp('count1', 330,{
    });
    count2 = new CountUp('count2', 20, {
    });
    height = window.innerHeight;
    test();
});



window.addEventListener('scroll',function(e){
    let moveTop = $(window).scrollTop();
    let sec4 = false;
    if(!sec4 && moveTop >= 1800){
        // section4
        count1.start();
        count2.start();
        sec4 = true;
    }
})

function test(){
    console.log(height);
    console.log($(window).scrollTop());
    console.log($(window).scrollTop() + height);
}