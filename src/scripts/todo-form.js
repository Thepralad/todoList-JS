import { pushItem } from "./todo-list";
import { Items } from "./todo-items";
import { displayProject } from "./todo-dom";

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

function inputForm(){
   document.getElementById('submit').addEventListener('click', e => {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const project = CURRENT_PROJ_STATE;

    const newItem = new Items(title, date, priority, project)
    pushItem(newItem);
    e.preventDefault();
   })


}
export{
    inputForm, projectBtnSelection, CURRENT_PROJ_STATE
}
