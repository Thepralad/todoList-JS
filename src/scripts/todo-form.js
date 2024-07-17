import { pushItem } from "./todo-list";
import { Items } from "./todo-items";
import { displayProject } from "./todo-dom";
import { checkDublicates } from "./utility";

let CURRENT_PROJ_STATE = 'today';

function projectBtnSelection(){
    const projectBtns = document.getElementsByClassName('project');
    for (const btn of projectBtns) {
        btn.addEventListener('click', e => {
            CURRENT_PROJ_STATE = e.target.textContent;
            displayProject()
        })
    }
}
function addTaskModal(){
    const dialog = document.querySelector("dialog");
    const showButton = document.getElementById("addTask");
    const closeButton = document.getElementById("submit");

    showButton.addEventListener("click", () => {
        dialog.showModal();
      });
      closeButton.addEventListener("click", (e) => {
        dialog.close();
        e.preventDefault();
      });
}

function inputForm(){
   document.getElementById('submit').addEventListener('click', e => {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const project = CURRENT_PROJ_STATE;

    if( checkDublicates(title, project) === false){
        prompt('This alread exists!');
    }
    else{
        const newItem = new Items(title, date, priority, project)
        pushItem(newItem);
    }

    e.preventDefault();
   });
}

export{
    inputForm, projectBtnSelection, CURRENT_PROJ_STATE, addTaskModal
}
