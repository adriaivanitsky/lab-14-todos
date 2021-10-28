export function generateUser(formData){
    return {
        username: formData.get('input-1'),
        password: formData.get('input-2'),
        todos: {}
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    return localStorage.setItem('USER', userString);
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}