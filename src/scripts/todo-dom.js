import { retrieveFromLocalStorage } from "./todo-storage";
import { CURRENT_PROJ_STATE } from "./todo-form.js";

function Data(){
    const data = retrieveFromLocalStorage();
    const currentProj = data[CURRENT_PROJ_STATE];
    return currentProj;
}

function isCurrentProjectValid(){
    const currentProj = Data();
    if(Array.isArray(currentProj)) return true;
    else  return false;
}

function displayProject(){
    const currentProj = Data();
    const _itemsDiv = document.getElementById('items');

    _itemsDiv.textContent = '';
    if (isCurrentProjectValid()) {
        for (const item of currentProj) {

            const checkBox = document.createElement('input');
            checkBox.setAttribute('type', 'checkbox');
            
            const itemDiv = document.createElement('div');
            const titleH4 = document.createElement('h4');
            const dateP = document.createElement('p');
            const priorityP = document.createElement('p');
            const horizontalLine = document.createElement('hr');

            titleH4.textContent = item.title;
            dateP.textContent = item.date;
            priorityP.textContent = item.priority;

            itemDiv.appendChild(checkBox);
            itemDiv.appendChild(titleH4);
            itemDiv.appendChild(dateP);
            itemDiv.appendChild(priorityP);
            itemDiv.appendChild(horizontalLine);

            _itemsDiv.appendChild(itemDiv);

        }
    } else {
        console.error('currentProj is not an array:', currentProj);
    }
    
}

export{
    displayProject
}
