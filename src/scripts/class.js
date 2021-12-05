import {elements} from "./constants";

export default class SliderShow {
  constructor(API) {
    (this.API = API),
      (this.arrUrl = []),
      (this.timerId = null),
      (this.count = 0);
  }

  async getRandomSlides() {
    const res = await fetch(this.API);
    const data = await res.json();
    this.arrUrl = data.message;
    this.init(this.arrUrl);
  }

  init(arr) {
    elements.slide.src = arr[0];
  }

  prevSlide() {
    if (this.count === 0) {
      this.count = this.arrUrl.length - 1;
      elements.slide.src = this.arrUrl[this.count];
    } else {
      this.count--;
      elements.slide.src = this.arrUrl[this.count];
    }
  }

  nextSlide() {
    if (this.count === this.arrUrl.length - 1) {
      this.count = 0;
      elements.slide.src = this.arrUrl[this.count];
    } else {
      this.count++;
      elements.slide.src = this.arrUrl[this.count];
    }
  }

  showSlide() {
    this.nextSlide();
    this.timerId = setTimeout(this.showSlide.bind(this), 1000);
  }

  stopShowingSlide() {
    clearTimeout(this.timerId);
    elements.play.disabled = false;
    elements.pause.disabled = true;
  }

  clickNextBtn() {
    this.stopShowingSlide();
    this.nextSlide();
  }

  clickPrevBtn() {
    this.stopShowingSlide();
    this.prevSlide();
  }

  clickPlay() {
    elements.play.disabled = true;
    elements.pause.disabled = false;
    this.timerId = setTimeout(this.showSlide.bind(this), 1000);
  }
}
