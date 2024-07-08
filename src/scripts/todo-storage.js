function pushToLocalStorage(project){
    localStorage.setItem('Projects', JSON.stringify(project))
}

export {
    pushToLocalStorage
}
