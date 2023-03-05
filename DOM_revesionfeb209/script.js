//html element search/find 4 method
//<p class="tenth" id="one" name="ShamKumar">Student</p>
//by tagName
let a1=document.querySelector('p')
console.log(a1)

//by className
let a2=document.querySelector('.tenth')
console.log(a2)

//by Id
let a3=document.querySelector('#one')
console.log(a3)

//by common formula
//tagName['attribute="value"']
let a4=document.querySelector('p[name="ShamKumar"]')
console.log(a4)

console.log(a4.textContent)

a4.addEventListener('click',function(){
    a4.textContent=a4.textContent.toLocaleUpperCase()
})



let person={
    fn:"mayuri",//MAYURI
    ln:'katwe'
}
console.log(person.fn)//mayuri
person.fn=person.fn.toLocaleUpperCase()
console.log(person)