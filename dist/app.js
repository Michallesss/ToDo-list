const taskInputElement = document.querySelector('#task-input');
const addButtonElement = document.querySelector('#add-button');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory = 'general';
import { Task } from './classes/task-class.js';
import { render as renderCategories } from './modules/render-categories.js';
import { render as renderTasks } from './modules/render-tasks.js';
const categories = ['general', 'work', 'home', 'hobby'];
const tasks = [
    new Task('Go back home', false, 'general'),
    new Task('Make a TypeScript tutorial', false, 'work'),
    new Task('Buy milk', false, 'home'),
    new Task('Watch a movie', false, 'hobby')
];
addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    const newTask = new Task(taskInputElement.value, false, selectedCategory);
    addTask(newTask);
    renderTasks(tasks, tasksContainerElement);
});
const updateSelectedCategory = (newSelectedCategory) => {
    selectedCategory = newSelectedCategory;
};
const addTask = (task) => {
    tasks.push(task);
};
renderTasks(tasks, tasksContainerElement);
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
