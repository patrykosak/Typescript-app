import { Category } from "./types/types.js";
import { render } from "./helpers/render-tasks-helper.js";
import { renderCategories } from "./helpers/render-categories-helper.js";
let selectedCategory;
const tasks = [{ name: "Wyrzucić śmieci",
        done: false, },
    { name: "Nakarmić psa",
        done: true },
    { name: "Pobiegać",
        done: false,
        category: Category.WORK }];
const categories = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY, Category.SOCIAL];
const taskNameInputElement = document.querySelector("#name");
const taskContainerElement = document.querySelector(".tasks");
const addButtonElement = document.querySelector("button");
const categoriesContainerElement = document.querySelector("categories");
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    //const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio']:checked")
    //const selectedCategory: Category = selectedRadioElement.value as Category;
    addTask({ name: taskNameInputElement.value, category: selectedCategory, done: false });
    render(tasks, taskContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, taskContainerElement);
