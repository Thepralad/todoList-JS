import { pushToLocalStorage } from "./todo-storage";
import { Log } from "./utility";
const Projects = {}

const pushItem = function(value){

    //This checks if a project(array), exists or not.
    if (!Projects.hasOwnProperty(value.project)) {
        Projects[value.project] = [];
    }

    Projects[value.project].push(value);
    pushToLocalStorage(Projects);
    Log(value.title + " added!", "green");

}

const popItem = function(value){
    Projects[value.project].splice(Projects[value.project].indexOf(value), 1);
    pushToLocalStorage(Projects);
    Log(value.title + " removed!", "red");
}

export {
    pushItem,
    popItem
}
     
