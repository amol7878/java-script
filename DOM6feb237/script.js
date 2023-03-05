{/*<h1>Fruits</h1>
<ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
    <input type="text">
<button>Add Element</button>*/}

let headingOne=document.querySelector('h1')
let ulList=document.querySelector('ul')
let inputText=document.querySelector('input')
let buttonOne=document.querySelector("#one")
console.log(headingOne)
console.log(ulList)
console.log(inputText)
console.log(buttonOne)

buttonOne.addEventListener('click',function(){
    let text=inputText.value//"papaya"
     let newLi=document.createElement('li')//<li></li>
     newLi.textContent=text//<li>papaya</li>
     creatButton(newLi)
     ulList.appendChild(newLi)
     inputText.value=""
})

//<button class="remove">Remove</button>
//<button class="up">Up</button>
//<button class="down">Down</button>

function creatButton(li){
    let r=document.createElement("button")//<button></button>
    r.textContent="Remove";//<button>Remove</button>
    r.classList.add("remove")//<button class="remove">Remove</button>
    li.appendChild(r)

    let u=document.createElement("button")//<button></button>
    u.textContent="Up";//<button>Up</button>
    u.classList.add("up")//<button class="up">Up</button>
    li.appendChild(u)

    let d=document.createElement("button")//<button></button>
    d.textContent="Down";//<button>Down</button>
    r.classList.add("down")//<button class="down">Remove</button>
    li.appendChild(d)

}