import { TodoView } from './view';
import { TodoModel } from './model';

 
export class TodoController {
    constructor() {        
        this.model = new TodoModel();
        this.view = new TodoView(this.model);
    }  

    renderAll(limit = 20) {
        const v = this.view;
        this.model.getAll(function() {
            v.render();
        }, limit);
    }
}
