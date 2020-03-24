import { CountUp } from './countUp.min.js';

let count1;
let count2;
let count3;
let height;

$(document).ready(function(){
    count1 = new CountUp('count1', 8900,{
        duration: 3.5,
        smartEasingThreshold: 8900,
    });
    count2 = new CountUp('count2', 330,{
        duration: 3.5
    });
    count3 = new CountUp('count3', 20, {
        duration: 3.5
    })
    height = window.innerHeight;
    document.querySelector(".intro").style.height = `calc(${height}px - 3em)`;
});

ScrollReveal({
    delay:200,
    duration: 1200,
    distance:"10px",
    viewFactor:0.8
})

let introList = [
    document.querySelector('.intro .contents p'),
    document.querySelector('.intro .contents2 h1'),
    document.querySelector('.intro .contents2 h2'),
]

let fadeupList = [
    document.querySelector('.section1 h1'),
    
    document.querySelector('.section3 h1'),
    document.querySelector('.section3 h2'),

    document.querySelector('.section5 img'),
    document.querySelector('.section5 h1'),
    document.querySelector('.section5 h2'),
]
let itemList1 = [
    document.querySelector('.section4 .contents .item1'),
    document.querySelector('.section4 .contents .item3'),
    document.querySelector('.section4 .contents .item5'),
]
let itemList2 = [
    document.querySelector('.section4 .contents .item2'),
    document.querySelector('.section4 .contents .item4'),
    document.querySelector('.section4 .contents .item6'),
]
let imgList = document.querySelectorAll('.section5 .contents img');

ScrollReveal().reveal(introList,{
    duration: 1500
});
ScrollReveal().reveal(fadeupList);
ScrollReveal().reveal(itemList1);
ScrollReveal().reveal(itemList2,{
    delay:350
});
ScrollReveal().reveal(imgList);

ScrollReveal().reveal("#count1",{
    opacity:1,
    viewFactor:1,
    distance:"0px",
    beforeReveal:()=>{count1.start()}
})
ScrollReveal().reveal("#count2",{
    opacity:1,
    viewFactor:1,
    distance:"0px",
    beforeReveal:()=>{count2.start()}
})
ScrollReveal().reveal("#count3",{
    opacity:1,
    viewFactor:1,
    distance:"0px",
    beforeReveal:()=>{count3.start()}
})
