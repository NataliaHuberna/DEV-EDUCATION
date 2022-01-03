import { domElement } from './domElements';
import { TTask } from './types';
import { dragEnd, dragStart} from './dragFunctions';
import {removeFromStorage} from './localStorage';

export const createElementFromHtml = (stringHTML: string): ChildNode => {
    const template:HTMLTemplateElement = document.createElement('template');
    stringHTML = stringHTML.trim();
    template.innerHTML = stringHTML;
    template.content.firstChild.addEventListener("dragstart", dragStart);
    template.content.firstChild.addEventListener("dragend", dragEnd);
    template.content.firstChild.addEventListener("click", spanListener);
    return template.content.firstChild;
};

export const getTaskCard = ({ id, task }): ChildNode => {
    const html: string = domElement.taskTemplate
        .replace('{{id}}', id)
        .replace('{{text}}', task)
    return createElementFromHtml(html);
};

export const addTaskCard = (taskObject: TTask, column: HTMLElement): void => {
    column.append(getTaskCard(taskObject));
};

export const spanListener = (e: MouseEvent): void => {
    const span = <HTMLElement> e.target;
    if ([...span.classList].includes('close')){
        const columnName:string = (<Element>span.parentNode.parentNode).classList[1];
        removeFromStorage(span.parentNode.firstChild.nodeValue, columnName);
        span.parentElement.remove();
    }
}