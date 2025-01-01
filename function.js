
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

// function Print(){
   
//     let n = parseInt(prompt("enter any number"))
//     if(n>=11 && n<=20){
//         for(let i=1; i<=n;i++){
//             console.log(i)
//         }
//     }
//    else if(n>=1&& n<=10){
//         for(let i=15; i>=1;i--){
//             console.log(i)
//         }
//     }
//     else{
//         console.log("invalid case ")
//     }


// }
// Print()

// 2nd type --> with argument and no return values 

//   function fun(num){
//     console.log(num);
    
//   }
//   fun(10);

// function fun(num1,num2){

//     console.log(num1+num2);
// }
// fun(10,3);

// 3rd type --> without argument and  return values 

//   function demo(){
//     return "hello cybrom"
//   }
//   let a = demo()
//   console.log(a);
//   //or 
//   console.log(demo());
  
// 4 th type --> with argument and  return values 

//  function code(a){
//     return a*a
//  }

//    let b = code(3)
//    if(b%2==0){
//     alert("even ")
//    }
//    else{
//     alert("odd")
//    }

//Ques 

// function code(num){
//         return num*num*num
//      }
//     let b = parseInt(prompt("num"))
//        let c = code(num)
      
//     for(let i=1; i<=c;i++){
//            for(let j=1; j<=i;j++){
//             document.write("c")
//            }

//     }

    function code(a){
          return a*a*a
       }
      
         let b = code(3)
         if(b%2==0){
          alert("even ")
         }
         else{
          alert("odd")
         }