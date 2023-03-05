let a=document.querySelector('p')
console.log(a)

let allp=document.querySelectorAll("p")
console.log(allp)

for(i=0;i<allp.length;i++){
   console.log(allp[i])
   console.log(allp[i].textContent)
   allp[i].style.color="red"
   allp[i].textContent=allp[i].textContent.toUpperCase()
 }

//Shift+1=>Enter