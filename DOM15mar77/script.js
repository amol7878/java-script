{/* <h1 id="one" class="two twoB three" name="three">Hello</h1>
<ul>
    <li class="fr" name="r">Apple</li>
    <li class="fr" name="r">Banana</li>
    <li class="fr" name="r">Grapes</li>
    <li class="fr" name="r">Papaya</li>
</ul> */}

// let headOne=document.querySelector('h1')
// let classN=document.querySelector('.two')
// let att=document.querySelector('h1[name="three]')
// let byId=document.querySelector('#one')
// console.log(headOne)

let idA=document.getElementById('one')//html element
console.log(idA)
let idA1=document.getElementsByTagName('h1')//html collection
console.log(idA1)

//all li elements

let liList=document.querySelectorAll('li')//node liSt
console.log(liList)

let liListByClassName=document.querySelectorAll('.fr')//node liSt
console.log(liListByClassName)

// // all li elements
let ByclassName=document.getElementsByClassName('fr')//html collection
console.log(ByclassName)

let ByTagName=document.getElementsByTagName('li')//html collection
console.log(ByTagName)

let nodeList=document.getElementsByName('r')//node list
console.log(nodeList)

//<h1 id="one" class="two twoB three" name="three">Hello</h1>

let o=document.getElementById('one')
console.log(o)

console.log(o.className)
console.log(o.className)
console.log(o.classList)
o.classList.remove('two')
console.log(o.classList)
o.classList.add('four')
console.log(o.classList)
o.classList.toggle('four')
console.log(o.classList)
o.classList.toggle('four')
console.log(o.classList)

console.log(o.getAttribute('id'))
console.log(o.getAttribute('name'))
o.setAttribute('j','jkl')
console.log(o)
