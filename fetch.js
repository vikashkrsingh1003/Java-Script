
// fatch( URL, {method})

// => Methode -> get , post , delete, put , Patch 

//   http method / request 

//   Promise 
//   -> Reject , pending , fullfill ;

//   --> async , await

//   java script -> synchronus , lightweight ; 


 async function Demo(){

    let apidata = await fetch("https://jsonplaceholder.typicode.com/posts")
     let fdata = await apidata.json();
     
     console.log(fdata);
     

}
Demo();