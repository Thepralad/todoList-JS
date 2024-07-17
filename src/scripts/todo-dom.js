import { retrieveFromLocalStorage } from "./todo-storage";
import { CURRENT_PROJ_STATE } from "./todo-form.js";
import { popItem } from "./todo-list.js";
import { taskCounter } from "./utility.js";

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
function priorityColor(value, div){
    switch (value) {
        case 'high':
            div.style.borderRight = '4px solid RGB(255, 124, 92)'
            break;
        case 'mid':
            div.style.borderRight = '4px solid RGB(252, 241, 111)'
            break;
        case 'low':
            div.style.borderRight = '4px solid RGB(98, 252, 109'
            break;
    
        default:
            break;
    }
}

function datefns(value, dateP){ 
    const splitedDateArr = value.split('');
    splitedDateArr.splice(0,8);
    const extractedDate = splitedDateArr.join('');
    const curDate = new Date();
    if (value === '') {
        dateP.textContent = 'Due today';
    } 
    else if((extractedDate - curDate.getDate()) === 1){
        dateP.textContent = 'Due tommorow';
    }

    else {
        dateP.textContent = `Due ${extractedDate}th`;
    }
}

function taskCounterUpdate(){
    const taskCounterP = document.getElementById('taskCounter')
    let noOfTasks = taskCounter(CURRENT_PROJ_STATE);
    if(noOfTasks === 0){
        taskCounterP.textContent = `No tasks left 📝`;
    }
    else{
        taskCounterP.textContent = `${noOfTasks} tasks left`;
    }
    
}

function displayProject(){
    const currentProj = Data();
    const _itemsDiv = document.getElementById('items');
    
    _itemsDiv.textContent = '';
    if (isCurrentProjectValid()) {
        for (const item of currentProj) {

            taskCounterUpdate();
            const _date = item.date;
            const checkBox = document.createElement('input');
            checkBox.setAttribute('type', 'checkbox');
            
            const itemDiv = document.createElement('div');
            itemDiv.setAttribute('class', 'item')

            const titleH4 = document.createElement('h4');
            titleH4.setAttribute('class', 'taskTitle')

            const dateP = document.createElement('p');
            dateP.setAttribute('class', 'date')


            titleH4.textContent = item.title;
            
            datefns(_date, dateP);

            itemDiv.appendChild(checkBox);
            itemDiv.appendChild(titleH4);
            itemDiv.appendChild(dateP);


            _itemsDiv.appendChild(itemDiv);

            
            priorityColor(item.priority, itemDiv);

            checkBox.addEventListener('click', (e) => {
                if (checkBox.checked) {
                    titleH4.style.textDecoration = 'line-through';
                    setTimeout(() => {
                        _itemsDiv.removeChild(itemDiv);
                        popItem(item);
                    }, 2000);
                }
            });

        }
    } else {
        console.error('currentProj is not an array:', currentProj);
    }
    
}

export{
    displayProject,
    taskCounterUpdate
}
