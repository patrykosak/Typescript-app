import { Category } from "../types/types"

export class TaskClass {
    name: string
    done: boolean
    category?: Category
    private createdAt: Date

    constructor(name: string, done: boolean,category: Category = Category.GENERAL) {
        this.name=name
        this.done=done
        this.category=category
        this.createdAt=new Date()
    }

    logCreationDate(){
        console.log(this.createdAt)
    }
}