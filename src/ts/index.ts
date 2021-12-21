import '../css/style.css'
import "core-js/stable";
import "regenerator-runtime/runtime";

import { API_URL } from './constants/apiUrl';
import { domElements } from './constants/domElements';

import { createPictures } from './render';
import { updateBtnStatus, updateCurrent, current } from './pagination';
import { openFullPicture, closeFullPicture } from './fullPicture';
const axios = require ('axios');

domElements.pictureWrapper.addEventListener('click', (e: MouseEvent): void => {
    const elem = e.target as HTMLImageElement;
    if (elem.tagName === 'IMG') {
        openFullPicture(elem.src);
    }
});

function createPagination(e: MouseEvent): void {
    const button = <HTMLElement> e.target;
    updateCurrent(button);
    updateBtnStatus();
}

async function getRandomDogs(): Promise<void> {
    const response = await axios.get(API_URL);
    printPictures(response.data.message);
}

export function printPictures(arrUrl: Array<string>): void {
    domElements.pagination.addEventListener('click', (e: MouseEvent) => {
        createPagination(e);
        createPictures(current, arrUrl);
    });
        
    createPictures(current, arrUrl);
}

getRandomDogs();
domElements.close.addEventListener('click', closeFullPicture);

