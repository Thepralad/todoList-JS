import { pushToLocalStorage } from "./todo-storage";
import { Log } from "./utility";
import { displayProject } from "./todo-dom";
import { retrieveFromLocalStorage } from "./todo-storage";

const ProjectTemplate = {
    today: [],
}


function loadProjectFromLocalStorage(){
    const storedProjects = retrieveFromLocalStorage();
    if(storedProjects){
        return storedProjects;
    }
    else{
        return ProjectTemplate;
    }
}

const pushItem = function(value){
    const Projects = loadProjectFromLocalStorage();

    if (!Projects.hasOwnProperty(value.project)) {
        Projects[value.project] = [];
    }

    Projects[value.project].push(value);
    pushToLocalStorage(Projects);
    Log(value.title + " added!", "green");
    displayProject();

}

const popItem = function(value){
    const Projects = loadProjectFromLocalStorage();
    Projects[value.project].splice(Projects[value.project].indexOf(value), 1);
    pushToLocalStorage(Projects);
    Log(value.title + " removed!", "red");
}

export {
    pushItem,
    popItem,
    ProjectTemplate,
    loadProjectFromLocalStorage
}
     
