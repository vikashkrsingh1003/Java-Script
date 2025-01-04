// homework question 
// what is hoisting
// what is ES6 AND ECMA

// return single node 
let head = document.getElementById("head")
console.log(head);

document.write(" <i> Hello Vikash Singh </i>")
// return nodelist in array format same as document.getElementsByTagName
let head2 = document.getElementsByClassName("content2")
console.log(head2); // it does not change any text
head2[1].innerHTML = "<i> Vikash Singh  </i>"
head2[2].textContent = " hey Balraj gupta "

// change the value of an attribute

// document.getElementById('picture').src = "kerala.jpg"

let photo = document.getElementById("picture")
console.log(photo);
photo.src = "kerala.jpg"

document.write(Date())


document.getElementById("head").style.color= "red";
document.getElementById("head").style.fontSize = "50px";
document.getElementById("head").style.fontFamily = "Arial";