export default class SliderShow {
  elements = {
    slide: document.querySelector(".slide img"),
    prev: document.querySelector(".slider-prev"),
    next: document.querySelector(".slider-next"),
    play: document.querySelector(".control__play"),
    pause: document.querySelector(".control__pause"),
    API_URL: "https://dog.ceo/api/breeds/image/random/6",
  }

  constructor() {
      (this.arrUrl = []),
      (this.timerId = null),
      (this.count = 0);
  }

  async getRandomSlides() {
    const res = await fetch(this.elements.API_URL);
    const data = await res.json();
    this.arrUrl = data.message;
    this.init(this.arrUrl);
  }

  init(arr) {
    this.elements.slide.src = arr[0];
  }

  prevSlide() {
    if (this.count === 0) {
      this.count = this.arrUrl.length - 1;
      this.elements.slide.src = this.arrUrl[this.count];
    } else {
      this.count--;
      this.elements.slide.src = this.arrUrl[this.count];
    }
  }

  nextSlide() {
    if (this.count === this.arrUrl.length - 1) {
      this.count = 0;
      this.elements.slide.src = this.arrUrl[this.count];
    } else {
      this.count++;
      this.elements.slide.src = this.arrUrl[this.count];
    }
  }

  showSlide() {
    this.nextSlide();
    this.timerId = setTimeout(this.showSlide.bind(this), 1000);
  }

  stopShowingSlide() {
    clearTimeout(this.timerId);
    this.elements.play.disabled = false;
    this.elements.pause.disabled = true;
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
    this.elements.play.disabled = true;
    this.elements.pause.disabled = false;
    this.timerId = setTimeout(this.showSlide.bind(this), 1000);
  }
}
