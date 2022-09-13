const taskInputElement: HTMLInputElement=document.querySelector('#task-input');
const addButtonElement: HTMLElement=document.querySelector('#add-button');
const tasksContainerElement: HTMLElement=document.querySelector('.tasks');

interface Task {
    title: string;
    done: boolean;
};
//const tasks:{title: string; done: boolean;}[]=
const tasks: Task[]=
[
    {title: "Wyrzucić śmieci", done: true},
    {title: "Zrobić zakupy", done: false},
    {title: "Zrobić pranie", done: false},
    {title: "Zrobić obiad", done: false},
];
render();

addButtonElement.addEventListener('click', (event: Event) => {
    event.preventDefault();
    addTask({title: taskInputElement.value, done: false});
    render();
});

function render() {
    tasksContainerElement.innerHTML="";
    tasks.forEach((task, index) => {
        const id: string=`task-${index}`;
        const taskElement: HTMLElement=document.createElement('li');

        const labelElement: HTMLLabelElement=document.createElement('label');
        labelElement.innerText=task.title;
        labelElement.setAttribute('for', id);

        const checkboxElement: HTMLInputElement=document.createElement('input');
        checkboxElement.type='checkbox';
        checkboxElement.name=task.title;
        checkboxElement.checked=task.done;
        checkboxElement.id=id;
        checkboxElement.addEventListener('change', (event: Event) => {
            task.done = !task.done;
        });

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);

        tasksContainerElement.appendChild(taskElement);
    });
}

function addTask(task: {title: string, done: boolean}) {
    tasks.push({title: task.title, done: task.done});
}