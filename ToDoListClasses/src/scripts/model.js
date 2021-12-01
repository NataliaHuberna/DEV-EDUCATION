export class TodoModel {
    constructor(){
        this.dataCollection = [];
    }

    sort(){
        console.log("Sort");
    }

    filterTasks() {
        const activeTasks = this.dataCollection.length && this.dataCollection.filter(item => item.completed === false);
        const completedTasks = this.dataCollection.length && this.dataCollection.filter(item => item.completed === true);
        this.dataCollection = [...activeTasks, ...completedTasks];
    }

    getAll(fn, limit) {
        fetch('https://jsonplaceholder.typicode.com/todos' + (limit > 0 ? "?_limit=" + limit : ""))
            .then((response) => response.json())
            .then((json) => {
                this.dataCollection = json;
                if (typeof fn === 'function'){
                    this.filterTasks();
                    this.sort();
                    fn(this);
                }
            });
    }

    deleteItem(fn, index){
        const selectedItem = this.dataCollection[index];
        this.dataCollection.splice(index, 1);
        fetch('https://jsonplaceholder.typicode.com/todos/' + selectedItem.id, { 
            method: 'DELETE'
          }).then((response) => response.json())
          .then(() => {
                console.log("deleted ", selectedItem.id);
                if (typeof fn === 'function'){
                    fn(this);
                }
            });
    }

    completeTask(fn, index) {
        const selectedItem = this.dataCollection[index];
        selectedItem.completed = !selectedItem.completed;
        fetch('https://jsonplaceholder.typicode.com/todos/' + selectedItem.id, { 
            headers: {
                'Content-Type': 'application/json'
              },
            method: 'PUT',
            body: JSON.stringify(selectedItem)
          }).then((response) => response.json())
          .then((data) => {
                this.dataCollection[index] = data;
                console.log("completed " + data.id);
                this.filterTasks();
                this.sort();
                if (typeof fn === 'function'){
                    fn(this);
                }
            });
    }
}