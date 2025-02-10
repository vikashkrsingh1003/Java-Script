
const multi = () => {

 let username = {

    name : document.querySelector('#name').value,
    email : document.querySelector('#email').value,
    password : document.querySelector('#password').value,
 }

 localStorage.setItem("username" , JSON.stringify(username))

}

// retrive data from local stroge 

let data = JSON.parse(localStorage.getItem('username'));
console.log(data);

function loginform() {

    let logindata = {
        loginemail : document.querySelector('#loginemail').value,
        loginPassword  : document.querySelector('#loginpass').value
    }

    if(data.email != logindata.loginemail || data.password != logindata.loginPassword){

        alert("user not found")
        return false;
    }
}