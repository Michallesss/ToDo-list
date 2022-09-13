const taskInputElement = document.querySelector('#task-input');
const addButtonElement = document.querySelector('#add-button');
const tasksContainerElement = document.querySelector('.tasks');
;
//const tasks:{title: string; done: boolean; category?: string}[]=[
const tasks = [
    { title: "Zrobić pranie", done: false, category: "general" },
    { title: "Zrobić zakupy", done: false, category: "work" },
    { title: "Wyrzucić śmieci", done: true, category: "home" },
    { title: "Zrobić obiad", done: false, category: "hobby" }
];
render();
addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    const categoryRadioElement = document.querySelector('input[type="radio"]:checked');
    addTask({ title: taskInputElement.value, done: false, category: categoryRadioElement.value });
    render();
});
function render() {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const id = `task-${index}`;
        const taskElement = document.createElement('li');
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const labelElement = document.createElement('label');
        labelElement.innerText = task.title;
        labelElement.setAttribute('for', id);
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.name = task.title;
        checkboxElement.checked = task.done;
        checkboxElement.id = id;
        checkboxElement.addEventListener('change', (event) => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
}
function addTask(task) {
    tasks.push(task);
}
;
