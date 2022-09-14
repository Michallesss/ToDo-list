const taskInputElement: HTMLInputElement=document.querySelector('#task-input');
const addButtonElement: HTMLElement=document.querySelector('#add-button');
const tasksContainerElement: HTMLElement=document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");
let selectedCategory: Category='general';

import { render as renderCategories } from './modules/render-categories.js';
import { render as renderTasks } from './modules/render-tasks.js';
import { Task, Category } from './types/types';
//const tasks:{title: string; done: boolean; category?: string}[]=[
const categories: Category[]=['general', 'work', 'home', 'hobby'];
const tasks: Task[]=[
    {title: "Zrobić pranie", done: false, category:"general"},
    {title: "Zrobić zakupy", done: false, category:"work"},
    {title: "Wyrzucić śmieci", done: true, category:"home"},
    {title: "Zrobić obiad", done: false, category:"hobby"}
];

addButtonElement.addEventListener('click', (event: Event) => {
    event.preventDefault();
    addTask({title: taskInputElement.value, done: false, category: selectedCategory});
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
// ! dodać możliwość usuwania zadań, dodawania i usuwania categorii i przy zaznaczeniu checkboxa przekreślić tekst taska (pamiętaj że to jest lista, więc przy renderowaniu tasków zrobić tak żeby renderowały się też jako zaznaczone)