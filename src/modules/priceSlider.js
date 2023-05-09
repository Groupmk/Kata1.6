import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { mediaQuerySmall } from './matchMedia';

  let swiper

  function sliderFunc(){
    if(mediaQuerySmall.matches){
        swiper = new Swiper('.price__slider', {
          modules: [Navigation, Pagination],
          slidesPerView: 'auto',
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
    }else if(swiper){
      swiper.destroy();
    }
 }
mediaQuerySmall.addEventListener('change', sliderFunc)
sliderFunc(mediaQuerySmall)
