


localStorage.setItem("name" , "vikash")
localStorage.setItem("age" , 22)
localStorage.setItem("contact" ,"878984")

//if you give same key name data are override. 

localStorage.setItem("name" , "manish")

let age = localStorage.getItem("age")
alert(age);

let fname = "mr"
localStorage.setItem("fname" , fname)

function submit(){
    let name = document.getElementById('name').value
    localStorage.setItem("name",name)
    return false;

    // let add = document.getElementById('add').value
    // localStorage.setItem("address","add")
}





////    remove and clear data from localstorage 

 
localStorage.removeItem("fname")
localStorage.removeItem("name")

//localStorage.clear();



