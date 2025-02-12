
// fatch( URL, {method})

// => Methode -> get , post , delete, put , Patch 

//   http method / request 

//   Promise 
//   -> Reject , pending , fullfill ;

//   --> async , await

//   java script -> synchronus , lightweight ; 


//  async function Demo(){

//     let apidata = await fetch("https://jsonplaceholder.typicode.com/comments")
//      let fdata = await apidata.json();
     
//      let api = document.querySelector('#apidata')
//      let dt = fdata.map((e)=> {return e.name + e.id})

//      api.innerHTML = dt;
//     // console.log(fdata);
      
// }
// Demo();


  async function datafetching (){ 

   let data = await fetch("https://jsonplaceholder.typicode.com/comments")
   let resdata = await data.json();

   let fdata = resdata.map((e) => `
   <tr> 
       <td> ${e.id}</td>
       <td> ${e.title}</td>
       <td> ${e.body}</td>

       </tr>
   `).join("")

   document.querySelector('#showdata').innerHTML = fdata

  }

  datafetching();