const taskInputElement: HTMLInputElement=document.querySelector('#task-input');
const addButtonElement: HTMLElement=document.querySelector('#add-button');
const tasksContainerElement: HTMLElement=document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement=document.querySelector(".categories");
let selectedCategory: Category='general';

import { Task } from './classes/task-class.js';
import { render as renderCategories } from './modules/render-categories.js';
import { render as renderTasks } from './modules/render-tasks.js';
import { Category } from './types/types.js';

const categories: Category[]=['general', 'work', 'home', 'hobby'];
const tasks: Task[]=[
    new Task('Go back home', false, 'general'),
    new Task('Make a TypeScript tutorial', false, 'work'),
    new Task('Buy milk', false, 'home'),
    new Task('Watch a movie', false, 'hobby')
];

addButtonElement.addEventListener('click', (event: Event) => {
    event.preventDefault();
    const newTask: Task=new Task(taskInputElement.value, false, selectedCategory);
    addTask(newTask);
    renderTasks(tasks, tasksContainerElement);
});

const updateSelectedCategory=(newSelectedCategory: Category)=>{
    selectedCategory=newSelectedCategory;
};

const addTask=(task: Task)=>{
    tasks.push(task);
};

renderTasks(tasks, tasksContainerElement);
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);