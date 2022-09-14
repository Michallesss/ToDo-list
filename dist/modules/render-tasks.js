export const render = (tasks, tasksContainerElement) => {
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
};
