function fun1() {

    let image = document.getElementById('image');
    image.src = "kerala.jpg"
}

function fun2() {

    let image = document.getElementById('image');
    image.src = "canada.jpg"
}
// using with argument concept .

function red(color){
    document.body.style.backgroundColor=color
}

// function blue(){
//     document.body.style.backgroundColor="blue"
// }
// function yellow(){
//     document.body.style.backgroundColor="yellow"
// }

// function pink(){
//     document.body.style.backgroundColor="pink"
// }

function dark(){
    let para = document.getElementById('para')
    para.classList.add('drk')
}

