function formdata() {
    let num1 = parseInt(document.getElementById('num1').value)

    let num2 = parseInt(document.getElementById('num2').value)

    //alert(num1+num2)
    //form ke just niche ans print karna hai..?
    let result = document.getElementById('result')
    result.innerHTML = num1+num2
    return false;
}