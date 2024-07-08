function pushToLocalStorage(project){
    localStorage.setItem('Projects', JSON.stringify(project))
}
function retrieveFromLocalStorage(){
    const data = JSON.parse(localStorage.getItem('Projects'));
    return data;
}

export {
    pushToLocalStorage, retrieveFromLocalStorage
}
