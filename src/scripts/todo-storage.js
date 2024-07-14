function pushToLocalStorage(project){
    localStorage.setItem('Projects', JSON.stringify(project))
}

//This function returns the Projects from the local storage if available,
//If not, it will return an object with an array['today'] in it 
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
