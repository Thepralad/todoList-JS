function pushToLocalStorage(project){
    localStorage.setItem('Projects', JSON.stringify(project))
}
function retrieveFromLocalStorage(){
    const data = JSON.parse(localStorage.getItem('Projects'));
    if(data === null){
        return {
            today: []
        };
    }
    else{
        return data
    }
}

export {
    pushToLocalStorage, retrieveFromLocalStorage
}
