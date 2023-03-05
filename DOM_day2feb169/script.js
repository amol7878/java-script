//<h1 class="person" id="one" name="textonly">Mayuri</h1> 

//element find out
//by TagName

let ByTagName=document.querySelector('h1')
console.log(ByTagName)

//By ClassName(.)
let ByClassName=document.querySelector('.person')
console.log(ByClassName)

//By ID(#)
let ByID=document.querySelector('#one')
console.log(ByID)

//Common Formula
//TagName[Attribute="value"]

let CF=document.querySelector('h1[name="textonly"]')
console.log(CF)

let a1=document.querySelector('h1[class="person"]')
console.log(a1)

let text=document.querySelector('h1').textContent
console.log(text)

//programm1

//ByTagName.addEventListener('click',function(){
//    ByTagName.textContent="amol"
//})
//program2
ByClassName.addEventListener('click',function(){
    ByClassName.textContent=ByClassName.textContent.toUpperCase()
    ByTagName.style.color="red"
})


let person={
    firstName:"mayuri"
}
person.firstName="Amol"