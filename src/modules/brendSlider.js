import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { btnBrends, elementsToSledeBrends, btnSliderOn, btnSliderOf} from './elements';
import { mediaQuerySmall } from './matchMedia';

  let swiper
  let brendSlider = swiper

  function sliderFunc(){
    if(mediaQuerySmall.matches){
      brendSlider = new Swiper('.brends__slider', {
          modules: [Navigation, Pagination],
          slidesPerView: 'auto',
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
    }else if(brendSlider){
      brendSlider.destroy();
    }
 }
mediaQuerySmall.addEventListener('change', sliderFunc)
sliderFunc(mediaQuerySmall)

function btnSlide(){
  elementsToSledeBrends.classList.toggle('btn-slides-block')
  btnSliderOn.classList.toggle('btn-close')
  btnSliderOf.classList.toggle('btn-close')
}

btnBrends.addEventListener('click', btnSlide)
