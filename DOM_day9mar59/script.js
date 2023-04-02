{/* <h1 id="one" class="two" name="three">Student list</h1>
<p class="para">Paragraph</p>
<ul>
    <li class="tenth">Mayuri</li>
    <li class="tenth">Amol</li>
    <li class="tenth">Kunal</li>
    <li class="tenth">Jaya</li>
</ul> */}

//let singleElement=document.querySelector('li')//single element
//console.log(singleElement)

// let allElement=document.querySelectorAll('li')//node list (static)allelement
// console.log(allElement)
// console.log(allElement.length)//4

//to add one more li element in ul list
//let 
// newli=allElement[0].parentNode.appendChild(document.createElement('li'))
// console.log(newli)
// console.log(allElement)//nodeList (static)
// console.log(allElement.length)//5

//==========================================================================================================

// let htmlCollection=document.getElementsByTagName('li')
// console.log(htmlCollection)
// console.log(htmlCollection.length)
// htmlCollection[0].parentNode.appendChild(document.createElement('li'))
// console.log(htmlCollection)
// console.log(htmlCollection.length)

//getElement

//===========================================================================================================

// let a=document.getElementById('one')
// console.log(a)

// let b=document.getElementsByClassName('tenth')
// console.log(b)

// let c=document.getElementsByTagName('li')
// console.log(c)


//===========================================================================================================

//<p class="para">Paragraph</p>
let pElement=document.querySelector('.para')
console.log(pElement)
console.log(pElement.classList)

//add new class
pElement.classList.add('tennn')
console.log(pElement.classList)

//to remove class
pElement.classList.remove('tennn')
console.log(pElement.classList)

//toggle
pElement.classList.toggle('tenthClass')
console.log(pElement.classList)

pElement.classList.toggle('tenthClass')
console.log(pElement.classList)








