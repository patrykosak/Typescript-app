
interface Task {
    name: string,
    done: boolean,
    category?: string
}

const tasks: Task[] =
    [{name:"Wyrzucić śmieci",
    done:false,},
    {name:"Nakarmić psa",
    done:true},
    {name:"Pobiegać",
    done:false,
    category:"work"}]

    const categories: string[] = ["general","work","gym","hobby"]

const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const taskContainerElement: HTMLElement = document.querySelector(".tasks")
const addButtonElement: HTMLElement = document.querySelector("button")

const render = () => {
    taskContainerElement.innerHTML=""
    tasks.forEach((task,index) => {
        const taskElement: HTMLElement = document.createElement("li")
        if(task.category){
        taskElement.classList.add(task.category)
        }
        const labelElement: HTMLLabelElement = document.createElement("label")
        labelElement.innerText = task.name
        const id: string = `task-${index}`
        labelElement.setAttribute("for",id)

        const checkboxElement: HTMLInputElement = document.createElement("input");
        checkboxElement.type="checkbox"
        checkboxElement.name=task.name
        checkboxElement.id=id
        checkboxElement.checked=task.done
        checkboxElement.addEventListener("change",()=>{
            task.done=!task
        })

        taskElement.appendChild(labelElement)
        taskElement.appendChild(checkboxElement)

        taskContainerElement.appendChild(taskElement)
    })
}

const addTask = (task:Task) =>{
    tasks.push(task)
    render()    
}

addButtonElement.addEventListener("click",(e)=>{
e.preventDefault()

addTask({name:taskNameInputElement.value,done:false})
})

render()