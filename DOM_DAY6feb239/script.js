let ulList=document.querySelector('ul')
console.log(ulList)
let inputTextBox=document.querySelector('input')
console.log(inputTextBox)
let button=document.querySelector('button')
console.log(button)

//<li>Pranali</li>
button.addEventListener('click',function(){
    let text=inputTextBox.value//Pranali
    //console.log(text)
    let newLi=document.createElement('li')
    //console.log(newLi)
    newLi.textContent=text//<li>Pranali</li>
    ulList.appendChild(newLi)
    inputTextBox="" 
})
