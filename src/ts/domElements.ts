import { IdomElement } from './types';

export const domElement: IdomElement = {
    todos: document.querySelectorAll(".todo"),
    allStatus: document.querySelectorAll(".status"),
    btns: document.querySelectorAll("[data-target-modal]"),
    closeModals: document.querySelectorAll(".close-modal"),
    overlay: document.getElementById("overlay"),
    todoSubmit: document.getElementById("todo_submit"),
    closeBtns: document.querySelectorAll(".close"),
    noStatus: document.getElementById('no_status'),
    todoForm: document.getElementById('todo_form'),
    taskTemplate: document.getElementById('taskTemplate').innerHTML,
    input: document.getElementById("todo_input")
}
