import { Task } from "../classes/task-class.js";

export const render=(tasks: Task[], tasksContainerElement: HTMLElement)=>{
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
            task.done=!task.done;
        });

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);

        tasksContainerElement.appendChild(taskElement);
    });
};