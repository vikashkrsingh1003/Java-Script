


localStorage.setItem("name" , "vikash")
localStorage.setItem("age" , 22)


//if you give same key name data are override. 

localStorage.setItem("name" , "manish")

let age = localStorage.getItem("age")
alert(age);

let fname = "mr"
localStorage.setItem("fname" , fname)

function fun(){
    let name = document.getElementById('name').value
    localStorage.setItem("name",name)
    

    let add = document.getElementById('add').value
    localStorage.setItem("address",add)

    let contact = document.getElementById('contact').value
    localStorage.setItem("contact", contact)

    let city = document.getElementById('city').value
    localStorage.setItem("city", city)

    return false;
}





////    remove and clear data from localstorage 

 
localStorage.removeItem("fname")
localStorage.removeItem("name")

//localStorage.clear();



