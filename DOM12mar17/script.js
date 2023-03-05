{/* <h1 is="one" class="two">Fruits</h1>
<ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Grapes</li>
    <li>Orange</li>
</ul> */}


let h1=document.getElementById('one')
console.log(h1)

//html collection
let htmlc1=document.getElementsByTagName('li')
let htmlc2=document.getElementsByClassName("fr")
console.log(htmlc1)
console.log(htmlc2)

//nodeList
let html3=document.getElementsByName('nm')
let nodelist1=document.querySelectorAll('li')
let nodelist2=document.querySelectorAll('.fr')
console.log(html3)
console.log(nodelist1)
console.log(nodelist2)
