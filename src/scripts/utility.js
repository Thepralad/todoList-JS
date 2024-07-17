import { retrieveFromLocalStorage } from "./todo-storage"

const Log = function(message, color){
    console.log(`%c${message}`, `color: ${color}`)
}

const checkDublicates = function(value, project){
    const data = retrieveFromLocalStorage();
    const arr = data[project];
        
    for (const item of arr) {
        if(item.title === value){
                return false;
            }
        }
    return true;
    }

const weekdayConv = function(value){
    let day = '';
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    for (let i = 0; i < value; i++) {
        day = weekdays[i]
    }
    return day;
}

function taskCounter(value){
    let data = retrieveFromLocalStorage();
    return data[value].length;

}

export{
    Log,
    checkDublicates,
    weekdayConv,
    taskCounter
}
