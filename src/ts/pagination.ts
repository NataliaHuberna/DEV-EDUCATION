import { domElements } from './constants/domElements';

export let current: number = 1;

export function updateCurrent (button: HTMLElement): void {
    if (button.classList.contains('prev')) {
        current--;
    } else if (button.classList.contains('next')) {
        current++;
    } else {
        current = +button.getAttribute('data-number');
    }
}

export function updateBtnStatus(): void {
    domElements.buttons.forEach((button, index) => {
        button.classList.remove('active');
        button.disabled = false;
        if (index === current) button.classList.add('active');
    });

    if (current === 1) domElements.prevBtn.disabled = true;
    if (current === 5) domElements.nextBtn.disabled = true;
    }
