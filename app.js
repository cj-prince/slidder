const btn = document.querySelector('.btn');
const slideImg = document.querySelector('.slide-img')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let imgg = ["butterfly.jpeg", "countdown.jpeg", "scroll.jpeg", "slider.png"];
let count = 0

next.addEventListener('click', function(){
    count++;
    if(count > imgg.length - 1){
        count = 0
    }
    slideImg.src = imgg[count];

})

prev.addEventListener('click', function(){
    count--;
     if(count < 0){
        count = imgg.length - 1;
    }
    slideImg.src = imgg[count];
})