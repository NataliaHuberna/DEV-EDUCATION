import '../style.css';
import {elements} from  './constants';
import SliderShow from './class';

const start = new SliderShow(elements.API_URL);
start.getRandomSlides();

elements.next.addEventListener("click", start.clickNextBtn.bind(start));
elements.prev.addEventListener("click", start.clickPrevBtn.bind(start));
elements.pause.addEventListener("click", start.stopShowingSlide.bind(start));
elements.play.addEventListener("click", start.clickPlay.bind(start));
