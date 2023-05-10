'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const btnSlider = document.querySelector('.btn__arrow');
    let count = 1;
    

    btnSlider.addEventListener('click', () => {
        const sliderNumber = document.querySelectorAll('.slider__number');
        const sliderLine = document.querySelector('.slider__line');
        const sliderScroll = sliderLine.querySelector('span');
        const heightScroll = sliderScroll.getBoundingClientRect().height;
        const heightSlider = sliderLine.getBoundingClientRect().height;
        const numberPage = document.querySelector('.')
        if(count < 6){       
            sliderScroll.style.top = `${(heightSlider-heightScroll)/5 * count}px`;
            count++;  
            sliderNumber[0].innerHTML = `0${count}`;    
        }
        
    });
    
});