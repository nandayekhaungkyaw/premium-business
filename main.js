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
  slidesPerView:1,
    spaceBetween:30,
  direction: 'horizontal',
  loop: true,

    breakpoints: {
      // when window width is <= 640px
      780: {
        slidesPerView: 2,  // Adjust to 1 slide per view on phones
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },},


  autoplay: {
    delay: 2000,
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
    slidesPerView:2,
    spaceBetween:30,
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    breakpoints: {
      // when window width is <= 640px
      780: {
        slidesPerView: 5,  // Adjust to 1 slide per view on phones
      },
    
    },

    
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

  const light=document.querySelector('#light')
const dark=document.querySelector('#dark')
const body=document.querySelector('#body')
const html=document.querySelector('#html')



light.addEventListener('click',()=>{
  body.classList.remove('dark:bg-black','dark:text-white','bg-slate-900')
  body.classList.add('bg-white')
  html.classList.remove('dark')
})

dark.addEventListener('click',()=>{
  html.classList.add('dark')
  body.classList.add('dark:bg-black','dark:text-white','bg-slate-900')
  body.classList.remove('bg-white')
})