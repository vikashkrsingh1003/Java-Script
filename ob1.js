// let person_student = {

//     name : "vikash Singh",
//     age : "20 ",
//     contact : "8789841693",

//     account_state: {
//         account_balance : 150000,
//         account_no: 56466,

//     },

//     persona_detail: {

//         dob : "10june 2003"
//     },

//     document : [3434 , "ksnpk7849j"],

//     fun:function(name) {
//         alert("inside object " + name)
//     }
// }
// console.log(person_student);
// console.log(person_student.document[1]);

// person_student.fun("vikash");



// ==================================================

// let insaan = {

//     name: "balraj",
//     age : 23,
//     city: "munger",

//     fun:function(){
//         console.log(this.name);
//     }
// }

// insaan.fun();

let ob = {

    name: "vikash",
    age: 20,
    contact: 8789,
    add: "bhopal"


}
//only key print.
for (let ky in ob) {
    console.log(ky);
}

//key print ...!

for (let ky in ob) {
    console.log(ob[ky]);
}

let emp = [

    { name: "vikash", age: 20, contact: 123, id: 101 },
    { name: "mohit", age: 22, contact: 78377, id: 102 },
    { name: "ballu", age: 24, contact: 623, id: 103 },

]

//console.log(emp);
console.log(emp[1]);

let newob = {

    name:"Ak47",
    age:24,
    contact:234,
    id:104
}

 emp.push(newob)
 console.log(emp);

 emp.pop(newob)
 console.log(emp)

 emp.splice(1,0,newob)
 console.log(emp)

 emp.shift()
 console.log(emp)

 emp.unshift("brocode")
 console.log(emp)



