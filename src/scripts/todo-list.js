import { pushToLocalStorage } from "./todo-storage";
import { Log } from "./utility";
import { displayProject } from "./todo-dom";
import { projectBtnSelection } from "./todo-form";

function loadProjectFromLocalStorage(){
    const storedProjects = JSON.parse(localStorage.getItem('Projects'))
    if(storedProjects){
        return storedProjects;
    }
    else{
        const Projects = {
            today: []
        }
        return Projects;
    }
}


const pushItem = function(value){
    const Projects = loadProjectFromLocalStorage();
    //This checks if a project(array), exists or not.
    if (!Projects.hasOwnProperty(value.project)) {
        Projects[value.project] = [];
    }

    Projects[value.project].push(value);
    pushToLocalStorage(Projects);
    Log(value.title + " added!", "green");
    displayProject();

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
     
