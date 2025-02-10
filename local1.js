
const multi = () => {

 let username = {

    name : document.querySelector('#name').value,
    email : document.querySelector('#email').value,
    password : document.querySelector('#password').value,
 }

 localStorage.setItem("username" , JSON.stringify(username))

}