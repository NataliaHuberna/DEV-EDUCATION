import SliderShow from '../src/scripts/class.js';
const urls = ['link1', 'link2', 'link3'];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({message: urls}),
  })
);

describe('class', () => {
    let slides;
    beforeEach(() => {
        slides = new SliderShow();
        slides.elements = { 
            slide: {
                src: ""
            },
            play: {
                disable: null
            },
            pause: {
                disable: null
            },
        }
    })

    describe('getRandomSlides', () => {
        it('should call method init with urls recived from API', async () => {
            slides.init = jest.fn();
            try {
                await slides.getRandomSlides();
            } catch(e) {
                console.log(e)
            }
          
           expect(slides.init).toHaveBeenCalledWith(urls)
        })
    });

    describe('showSlide', () => {
        jest.useFakeTimers();

        afterEach(() => {
            jest.useRealTimers();
        })

        it('should call nextSlide every 1000 ms', () => {
            slides.nextSlide = jest.fn();
            slides.showSlide();
            
            expect(slides.nextSlide).toHaveBeenCalledTimes(1);
            jest.advanceTimersByTime(1000);
            expect(slides.nextSlide).toHaveBeenCalledTimes(2);

        });
    })

    describe('clickNextBtn', () => {
        it('should call stopShowingSlide and nextSlide', () => {
            slides.nextSlide = jest.fn();
            slides.stopShowingSlide = jest.fn();

            slides.clickNextBtn();
            
            expect(slides.nextSlide).toHaveBeenCalled();
            expect(slides.stopShowingSlide).toHaveBeenCalled();
        });
    })

    describe('clickPrevBtn', () => {
        it('should call stopShowingSlide and nextSlide', () => {
            slides.prevSlide = jest.fn();
            slides.stopShowingSlide = jest.fn();

            slides.clickPrevBtn();
            
            expect(slides.prevSlide).toHaveBeenCalled();
            expect(slides.stopShowingSlide).toHaveBeenCalled();
        });
    })

    describe('stopShowingSlide', () => {
        it('should call clearTimeout with timerId', () => {
            jest.useFakeTimers();
            const clearTimeoutSpy = jest.spyOn(global, "clearTimeout");
            slides.nextSlide = jest.fn();

            slides.showSlide();
            jest.advanceTimersByTime(1000);
            slides.stopShowingSlide();
            
            expect(clearTimeoutSpy).toHaveBeenCalledWith(slides.timerId);
        });
    });

    describe('nextSlide', () => {
        it('should set count to 0 index if count equals to array.length - 1', () => {
            slides.count = urls.length - 1;
            slides.arrUrl = urls;

            slides.nextSlide();

            expect(slides.count).toBe(0);
            expect(slides.elements.slide.src).toBe(urls[0]);
        });

        it('should increase initial count', () => {
            const initialCount = 0;
            slides.arrUrl = urls;

            slides.nextSlide();

            expect(slides.count).toBe(initialCount + 1);
            expect(slides.elements.slide.src).toBe(urls[initialCount + 1]);
        });
    })

    describe('prevSlide', () => {
        it('should set count to array.length - 1 if count equals to initial count', () => {
            slides.count = 0;
            slides.arrUrl = urls;

            slides.prevSlide();

            expect(slides.count).toBe(urls.length - 1);
            expect(slides.elements.slide.src).toBe(urls[urls.length - 1]);
        });

        it('should decrease initial count', () => {
            const countPosition = 2;
            slides.count = countPosition;
            slides.arrUrl = urls;

            slides.prevSlide();

            expect(slides.count).toBe(countPosition - 1);
            expect(slides.elements.slide.src).toBe(urls[countPosition - 1]);
        });
    })

    describe('init', () => {
        it('should set initial url to src', () => {
            slides.init(urls);

            expect(slides.elements.slide.src).toBe(urls[0]);
        })
    })

    describe('clickPlay', () => {
        it('should start showing slides', () => {
            slides.clickPlay();

            expect(slides.elements.play.disabled).toBe(true);
            expect(slides.elements.pause.disabled).toBe(false);
            expect(slides.timerId).not.toBe(null);
        })
    })
})