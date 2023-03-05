{/* <h1 id="one" class="head">Fruits</h1>
<ul>
    <li class="fruit" name="a">Apple</li>
    <li class="fruit" name="a">Mango</li>
    <li class="fruit" name="a">Banana</li>
    <li class="fruit" name="a">Grapes</li>
</ul> */}

let tagName=document.querySelector('h1')
let className=document.querySelector('.head')
let byId=document.querySelector('#one')
let bycommon=document.querySelector('h1[class="head"]')
console.log(tagName)
console.log(className)
console.log(byId)
console.log(bycommon)

//[li,li,li,li]

let liList=document.querySelectorAll('li')
let listB=document.querySelectorAll(".fruit")
console.log(liList)
console.log(listB)

for(let i=0;i<liList.length;i++){
    if(i%2==0){
      liList[i].style.color="green"
    }
    else{
        liList[i].style.color="red"
    }
}


let q1=document.querySelectorAll('li[name="a"]')
console.log(q1)

//document.querySelecto()
//document.querySelectorAll()