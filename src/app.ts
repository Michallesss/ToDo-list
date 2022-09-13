const taskInputElement: HTMLInputElement=document.querySelector('#task-input');
const addButtonElement: HTMLElement=document.querySelector('#add-button');
const tasksContainerElement: HTMLElement=document.querySelector('.tasks');

type Category="general"|"work"|"home"|"hobby";
interface Task {
    title: string;
    done: boolean;
    category?: Category// '?' means optional
};
//const tasks:{title: string; done: boolean; category?: string}[]=[
    const tasks: Task[]=[
    {title: "Zrobić pranie", done: false, category:"general"},
    {title: "Zrobić zakupy", done: false, category:"work"},
    {title: "Wyrzucić śmieci", done: true, category:"home"},
    {title: "Zrobić obiad", done: false, category:"hobby"}
];
render();

addButtonElement.addEventListener('click', (event: Event) => {
    event.preventDefault();
    const categoryRadioElement: HTMLInputElement=document.querySelector('input[type="radio"]:checked');
    addTask({title: taskInputElement.value, done: false, category: categoryRadioElement.value as Category});
    render();
});

function render() {
    tasksContainerElement.innerHTML="";
    tasks.forEach((task, index) => {
        const id: string=`task-${index}`;
        const taskElement: HTMLElement=document.createElement('li');
        if(task.category) {taskElement.classList.add(task.category);}

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

function addTask(task: Task) {
    tasks.push(task);
};