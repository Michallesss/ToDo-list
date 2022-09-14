const taskInputElement = document.querySelector('#task-input');
const addButtonElement = document.querySelector('#add-button');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory = 'general';
import { render as renderCategories } from './modules/render-categories.js';
import { render as renderTasks } from './modules/render-tasks.js';
//const tasks:{title: string; done: boolean; category?: string}[]=[
const categories = ['general', 'work', 'home', 'hobby'];
const tasks = [
    { title: "Zrobić pranie", done: false, category: "general" },
    { title: "Zrobić zakupy", done: false, category: "work" },
    { title: "Wyrzucić śmieci", done: true, category: "home" },
    { title: "Zrobić obiad", done: false, category: "hobby" }
];
addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    addTask({ title: taskInputElement.value, done: false, category: selectedCategory });
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
// ! dodać możliwość usuwania zadań, dodawania i usuwania categorii i przy zaznaczeniu checkboxa przekreślić tekst taska (pamiętaj że to jest lista, więc przy renderowaniu tasków zrobić tak żeby renderowały się też jako zaznaczone)
