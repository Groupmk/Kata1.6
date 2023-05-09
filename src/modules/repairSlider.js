import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { elementsToSledeRepair, btnRepair, btnSlideOn, btnSlideOf } from './elements';
import { mediaQuerySmall} from './matchMedia';
 
  let swiper

  function sliderFunc(){
    if(mediaQuerySmall.matches){
        swiper = new Swiper('.repair__slider', {
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


function btnRep(){
  elementsToSledeRepair.classList.toggle('btn-slides-block')
  btnSlideOn.classList.toggle('btn-close')
  btnSlideOf.classList.toggle('btn-close')
}

btnRepair.addEventListener('click', btnRep)


