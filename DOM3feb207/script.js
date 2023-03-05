//selected the element
//what is element
//element parameters
//object=property and method
//<h2 id="two" class="three" name="nm">Poorva</h2>

//Css selector
//tagName
let tagName=document.querySelector('h2')
console.log(tagName)
//class
let className=document.querySelector('.three')
console.log(className)
//id
let byId=document.querySelector('#two')
console.log(byId)
////common formula
//tagName[name="hello"]
let commonF=document.querySelector('h2[name="nm"]')
console.log(commonF)

//   <h3 id="a" class="b" name="c">headThree</h3>
//tagName
let a=document.querySelector('h3')
console.log(a)
//class
let b=document.querySelector('.b')
console.log(b)
//id
let c=document.querySelector('#a')
console.log(c)
////common formula
let d=document.querySelector('h3[name="c"]')
console.log(d)
