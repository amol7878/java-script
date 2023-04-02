let headOne = document.querySelector('h1')
console.log(headOne)
// // headOne.addEventListener('click',function(){
//     headOne.style.color="red";
// })

// headOne.addEventListener('dblclick',function(){
//     headOne.style.color="red"
// })

// headOne.addEventListener('mouseout',function(){
//     headOne.style.color="Green"
// })

// headOne.addEventListener('mouseover',function(){
//     headOne.style.color="red"
// })

// let buttonR=document.querySelector('#one')
// console.log(buttonR)
// buttonR.addEventListener('click',function(){
//     window.location.reload()
// })

let liList = document.querySelectorAll("li")
console.log(liList)
let ulList = document.querySelector('ul')
console.log(ulList)

//event bubbling
ulList.addEventListener('mouseover', function () {
    for (let i = 0; i < liList.length; i++) {
        liList.textcontent = liList[i].textContent.toUpperCase()
    }
})
ulList.addEventListener('mouseout', function () {
    for (let i = 0; i < liList.length; i++) {
        liList.textcontent = liList[i].textContent.toLowerCase()
    }
})