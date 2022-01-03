import { TTask } from './types';
import { addTaskCard } from './createHtml';

export const addTask = (inputValue: string, id: string): void =>{
    let tasks: Array<TTask> = JSON.parse(localStorage.getItem('tasks'));
    const task: TTask = {
        id: id,
        task: inputValue
        };
        if (tasks === null) {
            tasks = [];
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } else {
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
}

export const writeToLocal = (object:HTMLElement, columnName:string):void => {
    let tasks: Array<TTask> = JSON.parse(localStorage.getItem(columnName));
    const task: TTask = {
        id: object.id,
        task: object.firstChild.nodeValue,
    };
    if (tasks === null) {
        tasks = [];
        tasks.push(task);
        localStorage.setItem(columnName, JSON.stringify(tasks));
    } else {
        tasks.push(task);
        localStorage.setItem(columnName, JSON.stringify(tasks));
    }
}

export const removeFromStorage = (task: string, columnName: string): void => {
    const tasks: Array<TTask> = JSON.parse(localStorage.getItem(columnName));
    tasks.forEach((element:TTask, index: number): void  => {
        if (element.task.trim() === task.trim()) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem(columnName, JSON.stringify(tasks));
}

export const fetchTasks = (column, columnName: string): void =>{
    
    let tasks: Array<TTask> = JSON.parse(localStorage.getItem(columnName));
    tasks.forEach(element => {
        addTaskCard(element, column)
    });
}
