
//setInterval( () => {document.write("Zindagi barbadd..!")},10000)

var c=0;
var st =0; 
function start(){
    
    
    let count = document.getElementById('count')
    st = setInterval( () => {

         count.innerHTML = c++
    },1000)
}

 function stop() {

    clearInterval(st)
 }
 function reset() {
    let cnt = document.getElementById('count')
    c=0;
    cnt.innerHTML=c;
    
 }
