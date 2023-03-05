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

//STEP 2
{/* <button class="remove">Remove</button>
    <button class="up">Up</button>
    <button class="down">Down</button> */}

 function createButtons(element){
    //Remove Button
    let remove=document.createElement('button')//<button></button>
    remove.textContent='Remove'//<button>Remove</button>
    remove.classList.add="remove"//<button class="remove">Remove</button>
    element.appendChild(remove)

    //Up Button
    let up=document.createElement('button')//<button></button>
    up.textContent='Up'//<button>Up</button>
    up.classList.add="up"//<button class="up">Up</button>
    element.appendChild(up)

    //Down Button
   let down=document.createElement('button')//<button></button>
   down.textContent="Down"//<button>Down</button>
   down.classList.add="down"//<button class="down">Down</button>
   element.appendChild(down)
 }   
