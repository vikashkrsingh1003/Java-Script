
// ////    remove and clear data from localstorage 

 
// localStorage.removeItem("fname")
// localStorage.removeItem("name")

// //localStorage.clear();


// // localStorage.setItem("name" , "vikash")
// // localStorage.setItem("age" , 22)


// //if you give same key name data are override. 

// localStorage.setItem("name" , "manish")

// let age = localStorage.getItem("age")
// alert(age);

// let fname = "mr"
// localStorage.setItem("fname" , fname)

function fun(){
    let name = document.getElementById('name').value
    localStorage.setItem("name",name)
    

    let add = document.getElementById('add').value
    localStorage.setItem("address",add)

    let contact = document.getElementById('contact').value
    localStorage.setItem("contact", contact)

    let city = document.getElementById('city').value
    localStorage.setItem("city", city)
   window.location.href = "next.html";
   
    return false;
}







function showdata() {

    let name = document.getElementsByClassName('demo')
    let add = document.getElementsByClassName('demo')
    let contact = document.getElementsByClassName('demo')
    let city = document.getElementsByClassName('demo')


    let getname = localStorage.getItem('name')
    let getadd = localStorage.getItem('add')
    let getcontact = localStorage.getItem('contact')
    let getcity = localStorage.getItem('city')

    name[0].innerHTML = getname;
    add[1].innerHTML = getadd;
    contact.innerHTML = getcontact;
    city.innerHTML = getcity;
}

//  function clearr() {

//     localStorage.clear()
//     location.reload()
//  }




// function fun(){
//     let name = document.getElementById('name').value 


// }

//  function clearr() {

//     localStorage.clear()
//     location.reload()
//  }




// function fun(){
//     let name = document.getElementById('name').value 


// }