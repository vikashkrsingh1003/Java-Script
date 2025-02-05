let emp = [

    { 
        name: "vikash", age: 20, contact: 123, id: 101
     },
    { 
        name: "mohit", age: 22, contact: 78377, id: 102 
    },
    { 
        name: "ballu", age: 24, contact: 623, id: 103 
    },

]

//let data = emp.map( (e)=>{return e.name})
let data = emp.map( (e)=>{return e.age})
console.log(data);
console.log(data[0]);

// filter function

//let fdata = emp.filter( (e) => {return e.name == "vikash"})
let fdata = emp.filter( (e) => {return e.age >20})
console.log(fdata)


