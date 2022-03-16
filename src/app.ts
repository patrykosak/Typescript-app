import { Task, Category } from "./types/types";
import {render} from "./helpers/render-tasks-helper.js"
import {renderCategories} from "./helpers/render-categories-helper.js"




let selectedCategory: Category;

const tasks: Task[] =
    [{name:"Wyrzucić śmieci",
    done:false,},
    {name:"Nakarmić psa",
    done:true},
    {name:"Pobiegać",
    done:false,
    category:"work"}]

    const categories: Category[] = ["general","work","gym","hobby"]

const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const taskContainerElement: HTMLElement = document.querySelector(".tasks")
const addButtonElement: HTMLElement = document.querySelector("button")
const categoriesContainerElement: HTMLElement = document.querySelector("categories")


const addTask = (task:Task) =>{
    tasks.push(task)
    
}

addButtonElement.addEventListener("click",(e)=>{
e.preventDefault()

//const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio']:checked")
//const selectedCategory: Category = selectedRadioElement.value as Category;


addTask({name:taskNameInputElement.value,category:selectedCategory,done:false})
render(tasks,taskContainerElement)    
})

renderCategories(categories,categoriesContainerElement,selectedCategory)
render(tasks,taskContainerElement)