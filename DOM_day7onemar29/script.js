let ulList=document.querySelector('ul')
console.log(ulList)
let addMeBtn=document.querySelector('#btn')
console.log(addMeBtn)
let inputBox=document.querySelector('input')
console.log(inputBox)

//STEP 1

addMeBtn.addEventListener('click',function(){
    let text=inputBox.value//"banana"
    let newLi=document.createElement('li')//<li></li>
    newLi.textContent=text//<li>banana</li>
    //STEP 3 (Calling Function)
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputBox.value=""

})

//STEP 4
ulList.addEventListener('click',function(event){
   //console.log(event.target)
   //console.log(event.target.tagName)
   if(event.target.tagName=="BUTTON"){
    if(event.target.className=="remove"){
        let li=event.target.parentElement//li
        let ul=li.parentElement//ul
        ul.removeChild(li)//remove li from ul
    }
    if(event.target.className=="up"){
        let li=event.target.parentElement//li
        let ul=li.parentElement
        let prev=li.previousElementSibling//prev li element
        if (prev){
            ul.insertBefore(li,prev)
        }
        
    }
    if(event.target.className=="down"){
        let li=event.target.parentElement
        let ul=li.parentElement
        let next=li.nextElementSibling//next li element
        if(next){
            ul.insertBefore(next,li)
        }
    }
   }
})