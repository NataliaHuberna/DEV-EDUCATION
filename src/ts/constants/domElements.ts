import { IDomElements } from '../types'

export const domElements: IDomElements = {
    fullPictureBox : document.getElementById("fullPictureBox"),
    fullPicture : <HTMLImageElement> document.getElementById("fullPicture"),
    pictureWrapper : document.querySelector(".pictures"),
    pagination : document.querySelector(".pagination"),
    buttons : document.querySelectorAll('button'),
    prevBtn : document.querySelector('.prev'),
    nextBtn: document.querySelector('.next'),
    close : document.getElementById('close'),
    pictureTemplate : document.querySelector('#pictureTemplate').innerHTML,
}; 

