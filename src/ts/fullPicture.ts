import { domElements } from './constants/domElements';

export function openFullPicture (pic: string): void {
    domElements.fullPictureBox.style.display = "flex";
    domElements.fullPicture.src = pic;
}

export function closeFullPicture (): void {
    domElements.fullPictureBox.style.display = "none";
}
