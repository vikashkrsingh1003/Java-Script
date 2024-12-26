
// function identifire() {

//     //code
// }
// identifire() 
// function declearation 
// function defination 
// function calling 

// function Add(){
//     console.log("hello vikash")
// }

// Add()

// Q1 WAP add two number using function 

// function Add(){
//     let a= parseInt(prompt("enter num 1 "))
//     let b= parseInt(prompt("enter num 2"))
//    console.log(a+b)
// }
// Add()

// Q2 . WAP table of any number using function 

// function Table(){
//     let n = parseInt(prompt("enter any number :- "))
//   for(let a= 1; a<=10; a++){
//     console.log( a + " * "+ n + " = " + (a*n))
//   }

// }
// Table()

// Q3 . WAp of all number b/w  1-12 using function ? 

// function Addi(){
//     let sum= 0;
//     for(let n=1;n<=12 ; n++){
//         sum = sum+n;
        
//     }
//     console.log(sum)
// }
// Addi()

// Q . WAP to take a input from the user 
//   if number is b/w 11-20 then print 1 to of that given number 
//   if number is b/w 1-10 then  print 15 to 1

function Print(){
   
    let n = parseInt(prompt("enter any number"))
    if(n>=11 && n<=20){
        for(let i=1; i<=n;i++){
            console.log(i)
        }
    }
   else if(n>=1&& n<=10){
        for(let i=15; i>=1;i--){
            console.log(i)
        }
    }
    else{
        console.log("invalid case ")
    }


}
Print()