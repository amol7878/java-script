{/*<h1 id="one">Color</h1>
<input type="text">ds
<button>Change Me</button>*/}

//by tagname=>4
//by id=>1
//by class=>2
//by CF=>3

let headingOne=document.querySelector('#one')
console.log(headingOne)

let inputBox=document.querySelector('input[type="text"]')
console.log(inputBox)

let buttonOne=document.querySelector('button')
console.log(buttonOne)

buttonOne.addEventListener('click',function(){
    let userEnteredValue=inputBox.value
    headingOne.textContent=userEnteredValue
    headingOne.style.color="Red"
    inputBox.value=""
})

// input={
//     value:"userentervalue"
// }
// console.log(input.value)