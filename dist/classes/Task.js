import { Category } from "../types/types";
export class TaskClass {
    constructor(name, done, category = Category.GENERAL) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate() {
        console.log(this.createdAt);
    }
}
