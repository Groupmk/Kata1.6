import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { mediaQuerySmall } from './matchMedia';

  let swiper
  let priceSlider = swiper

  function sliderFunc(){
    if(mediaQuerySmall.matches){
      priceSlider = new Swiper('.price__slider', {
          modules: [Navigation, Pagination],
          slidesPerView: 'auto',
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
    }else if(priceSlider){
      priceSlider.destroy();
    }
 }
mediaQuerySmall.addEventListener('change', sliderFunc)
sliderFunc(mediaQuerySmall)
