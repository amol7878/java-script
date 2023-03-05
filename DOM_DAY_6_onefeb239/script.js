let ulList=document.querySelector('ul')
let inputBox=document.querySelector('input')
let AddMebtn=document.querySelector('#Addmebtn')
console.log(ulList)
console.log(inputBox)
console.log(AddMebtn)

//Step1
AddMebtn.addEventListener('click',function(){
    let text=inputBox.value
    let newLi=document.createElement('li')//<li></li>
    newLi.textContent=text////<li>UserEnterdText</li>
    ulList.appendChild(newLi)
})
