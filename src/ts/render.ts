import { domElements } from './constants/domElements';

export const htmlToElement = (html: string): DocumentFragment => {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content;
};

export const getPicture = (elem: string): DocumentFragment => {
    const html = domElements.pictureTemplate.replace('{{dogImage}}', elem);
    return htmlToElement(html);
};

export const addPictureCard = (dogImage: string): void => {
    domElements.pictureWrapper.append(getPicture(dogImage));
};

export function createPictures(current: number, arrUrl: string[]): void {
    domElements.pictureWrapper.innerHTML = '';
    arrUrl.slice((current - 1) * 6, current * 6).map((elem) => {
        return addPictureCard(elem);
    });
}
