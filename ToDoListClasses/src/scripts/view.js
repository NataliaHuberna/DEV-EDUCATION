export class TodoView {
    constructor(model) {
        this.model = model;
    }

    deleteItem(index) {
        this.model.deleteItem(() => {
            this.render();
         }, index);  
    } 

    completeTask(index) {
        this.model.completeTask(() => {
            debugger;
            this.render();
         }, index);  
    } 

    render() {
        const todosWrapper = document.querySelector('.todos-wrapper');
        todosWrapper.innerHTML = '';
        if (this.model.dataCollection.length > 0) {
            this.model.dataCollection.forEach((item, index) => {
                const element = this.createTemplate(item, index);
                todosWrapper.appendChild(element); 
            });
        }
    }

    createTemplate(task, index) {
        const view = this;
        const template = document.getElementById("todoItem");
        const clone = template.content.cloneNode(true);

        const todoItemElement = clone.querySelector(".todo-item");
        const btnComplete = clone.querySelector(".btn-complete");
        btnComplete.setAttribute("data-index", index);
        btnComplete.addEventListener("click", function(event) {
            const index = event.target.getAttribute("data-index");
            if (index){
                view.completeTask(+index)
            }
        });

        if (task.completed) {
            todoItemElement.classList.add('checked');
            btnComplete.setAttribute("checked", "checked");
        }

        const todoItemDescription = clone.querySelector(".description");
        todoItemDescription.textContent = task.title;

        const btnDelete = clone.querySelector(".btn-delete");
        btnDelete.setAttribute("data-index", index);
        btnDelete.addEventListener("click", function(event) {
            const index = event.target.getAttribute("data-index");
            if (index){
                view.deleteItem(+index)
            }
        });

        return todoItemElement;
    }
}