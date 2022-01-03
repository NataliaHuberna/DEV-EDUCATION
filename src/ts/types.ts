interface IdomElement {
    todos: NodeListOf<Element>,
    allStatus: NodeListOf<Element>,
    btns: NodeListOf<Element>,
    closeModals: NodeListOf<Element>,
    overlay: HTMLElement,
    todoSubmit: HTMLElement,
    closeBtns: NodeListOf<Element>,
    noStatus: HTMLElement,
    todoForm: HTMLElement,
    taskTemplate: string,
    input: HTMLElement
}

type TTask = {
    id: string,
    task: string
}

export {IdomElement, TTask};
