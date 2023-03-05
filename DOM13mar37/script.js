{/*  <h3 id="eigth" class="two five" name="three">Head</h3>
     <p id="one" class="two five" name="nm">para</p>
<ul>
    <li class="fr" name="nm">Apple</li>
    <li class="fr" name="nm">Mango</li>
    <li class="fr" name="nm">Grapes</li>
    <li class="fr" name="nm">Banana</li>
    <li class="fr" name="nm">Banana</li>
   
</ul> */}

let tagName=document.querySelector('p')
let ById=document.querySelector('#one')
let byclass=document.querySelector('.two')
let byName=document.querySelector('p[name="three"]')
console.log(tagName)
console.log(ById)
console.log(byclass)
console.log(byName)

//selecting the multiple elements
let nl=document.querySelectorAll('li')//[li,li,li,li]
let cl=document.querySelectorAll('.fr')//[li,li,li,li]
let nm=document.querySelectorAll('li[name="nm"]')
let buttonA=document.querySelector('button')
console.log(nl)
console.log(cl)
console.log(nm)
console.log(buttonA)

// for(let i=0;i<nl.length;i++){
//     //console.log(i)
//     //cosnsole.log(nl[i].textContent)
//     if(i%2==0){
//         nl[i].style.color="green"

//     }
//     else{
//         nl[i].style.color="red"
//     }
// }
//program 1
buttonA.addEventListener('click',function(){
    for(let i=0;i<nm.length;i++){
        if(i%2==0){
            nl[i].style.color="red"
        }
        else{
            nl[i].style.color="green"
        }
    }
})


{/*<p id="one" class="two five" name="nm">para</p>
<ul>
    <li class="fr" name="nm">Apple</li>
    <li class="fr" name="nm">Mango</li>
    <li class="fr" name="nm">Grapes</li>
    <li class="fr" name="nm">Banana</li>
</ul> */}

let byid=document.getElementById('one')
let htmlCollectionFC=document.getElementsByClassName('fr')//html collection
let htmlCollectionT=document.getElementsByTagName('li')
let cNodeList=document.querySelectorAll('.fr')
let nodeListName=document.getElementsByName('nm')
console.log(byid)
console.log(htmlCollectionFC)
console.log(htmlCollectionT)
console.log(cNodeList)
console.log(nodeListName)


//Retrive Attribute
//<h3 id="eigth" class="two five" name="three">Head</h3>

let headingThree=document.querySelector('h3')
console.log(headingThree)
console.log(headingThree.classList)

headingThree.classList.add('ten')
headingThree.classList.remove('ten')//not added

headingThree.classList.toggle('ten')//added
headingThree.classList.toggle('ten')//removed