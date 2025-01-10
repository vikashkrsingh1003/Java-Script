function validate() {
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let contact = document.getElementById('contact').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cpassword = document.getElementById('cpassword').value

    if (name == "") {
        alert("please fill your name")
        document.getElementById('name').focus()
        return false

    }
    else if (age == "") {
        let erage = document.getElementById('errorage')
        erage.innerHTML = "Please fill this field"
        document.getElementById('age').focus()
        return false
    }

    else if (isNaN(age)) {

        let erage = document.getElementById('errorage')
        erage.innerHTML = "Age should be a number "
        // document.getElementById('age').focus()

        let ag = document.getElementById('age')
        ag.style.border = "2px solid red"
        return false
    }

    else if (contact == "") {

        alert("please enter your contact number ")
        document.getElementById('contact').focus()
        return false

    }
    else if (isNaN(contact)) {

        alert("please contact number should be in digits  ")
        document.getElementById('contact').focus()
        return false
    }

    else if (contact.length != 10) {
        alert(" enter valid number ... should be 10 digit   ")
        document.getElementById('contact').focus()
        return false
    }
    else if (email == "") {

        alert("please enter your email  ")
        document.getElementById('email').focus()
        return false
    }

    else if( !(email.includes('@'))){

        alert("please enter your valid email  ")
        document.getElementById('email').focus()
        return false
    }  
    else if (password == "") {

        alert("please enter your possword  ")
        document.getElementById('password').focus()
        return false
    }

    else if( !(password.match(/[~!@#$%^&*]/))){

        alert("please enter special character  ")
        document.getElementById('password').focus()
        return false
    }

    else if (cpassword == "") {

        alert("please enter your confirm possword  ")
        document.getElementById('cpassword').focus()
        return false
    }
    else if (cpassword != password) {

        alert("password missmatch  ")
        document.getElementById('cpassword').focus()
        return false
    }


}

