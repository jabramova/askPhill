import { register } from '@shopify/theme-sections'
import Swiper, { Autoplay } from 'swiper'
import SwiperCore, { Navigation, Scrollbar } from 'swiper/core'

SwiperCore.use([Navigation, Scrollbar]);

const selectors = {
  slider: '.collection-list .swiper-container',
  next: '.collection-list .swiper-button-next',
  prev: '.collection-list .swiper-button-prev'
}

$(document).ready(()=> {
  initSlider()
})

function initSlider() {
  const sliderOption = {
    slidesPerView: 1.7,
    spaceBetween: 10,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    navigation: {
      nextEl: selectors.next,
      prevEl: selectors.prev,
    },
    breakpoints: {
      992: {
        slidesPerView: 3.5,
      }
    }
  }
  const swiper = new Swiper(selectors.slider, sliderOption)
}


if (Shopify.designMode) {
  $(document)
    .on('shopify:block:select', initSlider)
    .on('shopify:block:deselect', initSlider)
    .on('shopify:section:select', initSlider)
    .on('shopify:section:deselect', initSlider)
}