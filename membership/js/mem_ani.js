import { CountUp } from './countUp.min.js';

let count1;
let count2;
let count3;

$(document).ready(function(){
    count1 = new CountUp('count1', 330,{
        duration: 3.5,
    });
    count2 = new CountUp('count2', 20, {
        duration: 3.5,
    });
    count3 = new CountUp('count3', 31800,{
        duration: 2.5,
        smartEasingThreshold: 31800,
        suffix:"원"
    })
});

ScrollReveal({
    delay:200,
    distance:"10px",
    viewFactor:1,
    duration:1000
})

let fadeupList = [
    document.querySelector(".section1 h4"),
    document.querySelector(".section2 .contents"),
    document.querySelector(".section3 .contents"),
    document.querySelector(".section4 .item"),
]

let itemList1 = [
    document.querySelector('.item1'),
    document.querySelector('.item3'),
    document.querySelector('.item5'),
]
let itemList2 = [
    document.querySelector('.item2'),
    document.querySelector('.item4'),
    document.querySelector('.item6'),
]

ScrollReveal().reveal(document.querySelectorAll(".section1 h3"),{
    viewFactor: 0,
    delay:0,
})
ScrollReveal().reveal(document.querySelectorAll(".section5 h2"),{
    viewFactor: 1,
})
ScrollReveal().reveal(document.querySelectorAll(".section5 img"),{
    viewFactor: 0.2,
})
ScrollReveal().reveal(fadeupList,{
    viewFactor:0.4,
})
ScrollReveal().reveal(itemList1);
ScrollReveal().reveal(itemList2,{
    delay:450
});

ScrollReveal().reveal("#count1",{
    opacity:1,
    viewFactor:1,
    duration: 500,
    distance:"0px",
    beforeReveal:()=>{count1.start()}
})

ScrollReveal().reveal("#count2",{
    opacity:1,
    viewFactor:1,
    duration: 500,
    distance:"0px",
    beforeReveal:()=>{count2.start()}
})

ScrollReveal().reveal(".section5 h1",{
    opacity:0,
    viewFactor:1,
    duration: 500,
    distance:"10px",
    beforeReveal:()=>{count3.start();}
})