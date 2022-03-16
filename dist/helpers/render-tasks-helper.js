export const render = (tasks, taskContainerElement) => {
    taskContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        const id = `task-${index}`;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        taskContainerElement.appendChild(taskElement);
    });
};
