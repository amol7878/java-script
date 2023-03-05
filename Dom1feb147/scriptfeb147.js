//<p class="frd" id="para" name="mayuri">I am learning java script</p>  
//1.by TagName

let byTagName=document.querySelector('p')
console.log(byTagName)

//2.by ID
let byID=document.querySelector('#para')
console.log(byID)

//3.By ClassName
let byClassName=document.querySelector('.frd')
console.log(byClassName)

//4.common Formula
//tagName[attribute="value"]
let byCommonformula=document.querySelector('p[name="mayuri"]')
console.log(byCommonformula)

let y1=document.querySelector("p[class='frd]")
console.log(y1)
