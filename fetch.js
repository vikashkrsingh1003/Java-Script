
// fatch( URL, {method})

// => Methode -> get , post , delete, put , Patch 

//   http method / request 

//   Promise 
//   -> Reject , pending , fullfill ;

//   --> async , await

//   java script -> synchronus , lightweight ; 


 async function Demo(){

    let apidata = await fetch("https://jsonplaceholder.typicode.com/comments")
     let fdata = await apidata.json();
     
     let api = document.querySelector('#apidata')
     let dt = fdata.map((e)=> {return e.name + e.id})

     api.innerHTML = dt;
     //console.log(fdata);
     

}
Demo();