import { CountUp } from './countUp.min.js';

ScrollReveal({
    // delay: 500,
    distance: '1em',
    viewOffset:{
        bottom: 300
    }
});
ScrollReveal().reveal('.test');

ScrollReveal().reveal('#test2', {
    delay: 100,
    beforeReveal:()=>{test123();},
});

let count
window.onload = function() {
  count = new CountUp('test2', 330);
//   count.start();
}

function test123(){
    count.start();
}