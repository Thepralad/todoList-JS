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


export{
    Log,
    checkDublicates
}
