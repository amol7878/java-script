//program 1

let headingOne=document.querySelector('h1')
let inputText=document.querySelector('input')
let buttonA=document.querySelector('button')
console.log(headingOne)
console.log(inputText)
console.log(buttonA)
// buttonA.addEventListener('click',function(){
//     let colorText=inputText.value//red
//     headingOne.style.color=colorText
//     inputText.vaue=""
// })

//program 2
document.querySelector('button').addEventListener('click',function(){
    document.querySelector('h1').style.color=document.querySelector('input').value
    document.querySelector('input').value=""
})