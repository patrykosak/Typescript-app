const tasks = [{ name: "Wyrzucić śmieci",
        done: false, },
    { name: "Nakarmić psa",
        done: true },
    { name: "Pobiegać",
        done: false,
        category: "work" }];
const categories = ["general", "work", "gym", "hobby"];
const taskNameInputElement = document.querySelector("#name");
const taskContainerElement = document.querySelector(".tasks");
const addButtonElement = document.querySelector("button");
const render = () => {
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
const addTask = (task) => {
    tasks.push(task);
    render();
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false });
});
render();
