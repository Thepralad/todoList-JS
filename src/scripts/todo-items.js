import { Log } from "./utility.js";

class Items{
    constructor(title, date, priority = 'medium', project){
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.project = project;
    }
    logItem(){
        Log(`${this.title} ${this.date} ${this.priority} | ${this.project}`, 'green')
    }
}

export {
    Items
}
