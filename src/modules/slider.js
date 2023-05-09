import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiper,
repairSlide,
priceSlide

function widowWidht(){
  const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth);
  if (viewport_width <= 320) {
      swiper = new Swiper('.brends__slider', {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    repairSlide = new Swiper('.repair__slider', {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    priceSlide = new Swiper('.price__slider', {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 12,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    }else if(swiper, repairSlide, priceSlide){
      swiper.destroy();
      repairSlide.destroy();
      priceSlide.destroy();
    }
  }
  widowWidht()
  window.addEventListener('resize', widowWidht) 