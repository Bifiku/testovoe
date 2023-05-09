'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const btnSlider = document.querySelector('.btn__arrow');
    let count = 1;
    

    btnSlider.addEventListener('click', () => {
        const numberPage = document.querySelectorAll('.slider__number');
        const sliderLine = document.querySelector('.slider__line');
        const sliderScroll = sliderLine.querySelector('span');
        count++;  
        if(count <= 6){
            let widthScroll = 40;
            numberPage[0].innerHTML = `0${count}`;
            sliderScroll.style.top = `${widthScroll * count}px`;
        }
    });
    
});