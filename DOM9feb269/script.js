let ulList=document.querySelector('ul')
let buttonA=document.querySelector('#one')
let input=document.querySelector('input')

// <h2 class="three" id="four" name="nm">Heading2</h2>
// document.querySelector('h2')
// document.querySelector('.three')
// document.querySelector('#four')
// document.querySelector('h2[name="nm"]')

ulList.addEventListener('click',function(event){
    //console.log(event.target)//element
    //console.log(event.target.tagName)//element tagName
    //console.log(event.target.className)//
    if(event.target.tagName==="BUTTON"){
    
        if(event.target.clasName==="remove"){

        }
        else if(event.target.clasName==="up"){

        }
        else if(event.target.clasName==="down"){
            
        }
    }
})


buttonA.addEventListener('click',function(){
   let text=input.value
   let newLi=document.createElement('li')//<li></li>
    newLi.textContent=text//<li>papaya</li>
    creaateButtons(newLi)
    ulList.appendChild(newLi)
    input.value=""
})

{/*<button class="remove">Remove</button>
<button class="up">Up</button>
<button class="down">Down</button>*/}

function creaateButtons(li){
    let remove=document.createElement('button')//<button><>/button>
    remove.textContent="Remove"////<button>Remove<>/button>
    remove.classList.add('remove')
    li.appendChild(remove)

    let up=document.createElement('button')//<button><>/button>
    up.textContent="UP"////<button>Up<>/button>
    up.classList.add('up')
    li.appendChild(up)

    let down=document.createElement('button')//<button><>/button>
    down.textContent="Down"////<button>Down<>/button>
    down.classList.add('down')
    li.appendChild(down)
}