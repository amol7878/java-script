//<h1 id="one" class="two" name="nm">Headone</h1>
//Css Selector
//tagName
let tagName=document.querySelector('h1')
console.log(tagName)
//className
let className=document.querySelector('.two')
console.log(className)
//Id
let byId=document.querySelector('#one')
console.log(byId)
//Attribute
let nameC=document.querySelector('h1[name="nm"]')
console.log(nameC)

//Program 1
//update the text with click on same element
tagName.addEventListener('click',function(){
    tagName.textContent="chinmay"
})

//Program 2
//update the color with user click
tagName.addEventListener('click',function(){
    tagName.style.color="green";
    tagName.style.backgroundColor="yellow";
})

//===============================================================================================================
// console.log(tagName.textContent)
// tagName.textContent="chinmay"

// let info={
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:34,
//     rollNumber:23
// }
//console.log(info.firstName)
//info.firstName="ram"

// let family={
//     fullName:"chinmay deshpande",
//     parent:{
//         firstNAme:"kanchan",
//         lastName:"deshpande"
//     }
// }


//family.parent.firstName="kanchan s"