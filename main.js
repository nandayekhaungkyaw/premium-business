import './style.css'
import './node_modules/preline/dist/preline.js'

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import { EffectCoverflow } from 'swiper/modules';
import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#typeWriter', {
  strings: ['UI/UX Design', 'Web Design'],
  autoStart: true,
  loop: true,
  delay: 200,
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  slidesPerView:2,
    spaceBetween:30,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },


  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    
  },

  // If we need pagination
 

  // Navigation arrows

});

const swiper = new Swiper('.swiper', {
    slidesPerView:5,
    spaceBetween:30,
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },

 
        // effect: 'coverflow',
        // coverflowEffect: {
        //   rotate: 30,
        //   slideShadows: false,
        // },
      
  
    // If we need pagination
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grid:{
        fill:'column',
        columns:3
       
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });