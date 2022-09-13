const taskInputElement = document.querySelector('#task-input');
const addButtonElement = document.querySelector('#add-button');
const tasksContainerElement = document.querySelector('.tasks');
;
//const tasks:{title: string; done: boolean;}[]=
const tasks = [
    { title: "Wyrzucić śmieci", done: true },
    { title: "Zrobić zakupy", done: false },
    { title: "Zrobić pranie", done: false },
    { title: "Zrobić obiad", done: false },
];
render();
addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    addTask({ title: taskInputElement.value, done: false });
    render();
});
function render() {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const id = `task-${index}`;
        const taskElement = document.createElement('li');
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
    tasks.push({ title: task.title, done: task.done });
}
