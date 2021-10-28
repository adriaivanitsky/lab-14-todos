export function generateUser(formData){
    return {
        username: formData.get('input-1'),
        password: formData.get('input-2'),
        todos: {}
    };
}