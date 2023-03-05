{/*<ul>
<li>Apple</li>
<li>Mango</li>
<li>Banana</li>
</ul>
<input type="text">
<button>Add element</button>*/}

//<li></li>
//<li>Papaya</li>
//Place the element under the ul

let ulList=document.querySelector('ul')
let listText=document.querySelector('input')
let buttonA=document.querySelector('button')
console.log(ulList)
console.log(buttonA)

buttonA.addEventListener('click',function(){
    //reding the value from input text
    let litext=listText.value
    //creating the element
    let newLi=document.createElement('li')//<li></li>.
    //Add the text Element
    newLi.textContent=litext////<li>Papaya</li>.
    //Append the newly created element to u list
    ulList.appendChild(newLi)
    listText.value=""
})