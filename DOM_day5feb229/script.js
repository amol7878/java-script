//Element Find

{/*<ul>
<li>MAyuri</li>
<li>Shilpa</li>
<li>Jaya</li>
<li>Satish</li>
<li>Habib</li>
</ul>
<input type="text">
<button>Add Me</button>*/}
//Program 1
let ulList=document.querySelector('ul')
console.log(ulList)
let inputBox=document.querySelector('input')
console.log(inputBox)
let btn=document.querySelector('button')
console.log(btn)

btn.addEventListener('click',function(){
    let text=inputBox.value//dinga
    let newLi=document.createElement('li')//<li></li>
    newLi.textContent=text//<i>dinga</li>
    ulList.appendChild(newLi)
    inputBox.value=""
})

