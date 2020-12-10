export class UserServices{

    url='https://jsonplaceholder.typicode.com/users'

    getAllUsers(){
        return fetch(this.url).then(value => value.json()).then(value => {return value})
    }

    clickOnUser(id){
        return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => {return value})

    }
}