import { writeToLocal, removeFromStorage } from './localStorage';

let draggableTodo: string;

export function dragStart():void {
    draggableTodo = this;
    removeFromStorage(this.firstChild.nodeValue, this.parentNode.classList[1]);
    setTimeout(():void => {
        this.style.display = "none";
    }, 0);
}

export function dragEnd():void {
    draggableTodo = null;
    writeToLocal(this, this.parentNode.classList[1]);
    setTimeout(() => {
        this.style.display = "block";
    }, 0);
}

export const dragOver = (e:MouseEvent):void => {
    e.preventDefault();
}

export function dragEnter(): void {
    this.style.border = "1px dashed #ccc";
}

export function dragLeave(): void {
    this.style.border = "none";
}

export function dragDrop(): void {
    this.style.border = "none";
    this.appendChild(draggableTodo);
}