import '../css/style.css'
import "core-js/stable";
import "regenerator-runtime/runtime";
import { domElement } from './domElements';
import { addTask, fetchTasks} from './localStorage';
import { dragDrop,dragEnd,dragEnter,dragLeave,dragOver,dragStart} from './dragFunctions';
import { addTaskCard } from './createHtml';

domElement.todos.forEach((todo: HTMLElement): void => {
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("dragend", dragEnd);
});

domElement.allStatus.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});

domElement.btns.forEach((btn: HTMLButtonElement): void => {
    btn.addEventListener("click", () => {
        domElement.todoForm.classList.add("active");
        domElement.overlay.classList.add("active");
    });
});

domElement.closeModals.forEach((btn: HTMLButtonElement): void => {
    btn.addEventListener("click", () => {
        const modal: HTMLElement = btn.closest(".modal");
        modal.classList.remove("active");
        domElement.overlay.classList.remove("active");
    });
});

window.onclick = (event: MouseEvent): void => {
    if (event.target == domElement.overlay) {
        const modals: NodeListOf<Element> = document.querySelectorAll(".modal");
        modals.forEach((modal: HTMLElement) => modal.classList.remove("active"));
        domElement.overlay.classList.remove("active");
    }
};

domElement.todoSubmit.addEventListener("click", createTodo);

function createTodo() {
    const inputValue: string = (<HTMLInputElement> domElement.input).value;
    const id = Math.random()
                    .toString()
                    .substring(2, 7);
    if (inputValue === "") return;
    addTask(inputValue, id);
    const taskObject = {
        id: id,
        task: inputValue
    };
    addTaskCard(taskObject, domElement.noStatus);
    (<HTMLInputElement> domElement.input).value = "";
    domElement.todoForm.classList.remove("active");
    domElement.overlay.classList.remove("active");
}

domElement.closeBtns.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener("click", () => {
        btn.parentElement.style.display = "none";
    });
});

const renderFromLocal = (): void => {
    domElement.allStatus.forEach(column => {
        fetchTasks(column, column.classList[1])
    })
}

window.addEventListener('load', renderFromLocal);


