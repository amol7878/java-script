{/* <h1 id="flw" class="one">Flower</h1>
<ul>
    <li class="flower">Rose</li>
    <li class="flower">Jasmin</li>
    <li class="flower">Lotus</li>
    <li class="flower">Chameli</li>
</ul> */}

let h1=document.querySelector('#flw')
console.log(h1)
let li=document.querySelector('.flower')
console.log(li)

let liList=document.querySelectorAll('li')
console.log(liList)

for(let i=0;i<liList.length;i++){
//console.log(liList[i].textContent)
if(i%2==0){
    liList[i].style.color="red"
}
else{
    liList[i].style.color="grren"
}

}

//HTML collection//nodelist
let a1=document.getElementsByClassName('flower')
console.log(a1)
console.log(a1.length)