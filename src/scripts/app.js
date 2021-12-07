import '../style.css';
import SliderShow from './class';

const slider = new SliderShow();
slider.getRandomSlides();

slider.elements.next.addEventListener("click", slider.clickNextBtn.bind(slider));
slider.elements.prev.addEventListener("click", slider.clickPrevBtn.bind(slider));
slider.elements.pause.addEventListener("click", slider.stopShowingSlide.bind(slider));
slider.elements.play.addEventListener("click", slider.clickPlay.bind(slider));
