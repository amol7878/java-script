// //stirng =>object
////object
////property and method

// //methods
// //1.action
// //2.return

//===================================================================================================
let student="gauri"
console.log(student)
console.log(typeof student)//string
console.log(typeof "mayuri")//string
console.log(typeof `30`) //stirng

////==================================================================================================

// //string store value index wise

let firstname='mayuri'
// //length count=>1
// //index count=>0


// // m a y u r i
// // 0 1 2 3 4 5
console.log(firstname[0])//m
console.log(firstname[5])//i
console.log(firstname[3])//u

//property==>length==>total no of charachtor
console.log(firstname.length)//6

let student1='shree ganesh'
console.log(student1.length)

//Method
//1.toUpperCase()
//action=>convert all charactor into capital case
//return=>new string

let fruit="Apple"
let a=fruit.toUpperCase()
console.log(a)//APPLE

//facebook sign up
//mayuri katwe
//Mayuri Katwe
//mAYURI KATWE
//amol SHINDE

//2.toLowerCase()
//action=>convert all charactor into small case
//return=>new string


let fruit1="APPLE"
let a1=fruit.toLowerCase()
console.log(a1)//apple
console.log(typeof a1)

//3.indexOf()
//action=>give the index of given char/of index not found==>-1
//return=>new number

let student2="Mayuri"
// // m a y u r i
// // 0 1 2 3 4 5
let a2=student2.indexOf('y')
console.log(a2)//2
let a3=student2.indexOf('r')
console.log(a3)//4
let a4=student2.indexOf('m')
console.log(a4)//-1

//4.includes()
//action==>find char or substring present in given string or not if found =>true else false
//return ==>boolean

let name1="Shree Ganesh"
let s1=name1.includes("Shree")
console.log(s1)
let s2=name1.includes("ganesh")
console.log(s2)
let s3=name1.includes("a")
console.log(s3)

//5.trim()
//action==>remove th space from start and end
//return==>new string

let fullname="  mayuri  "
console.log(fullname)
console.log(fullname.length)//10
let s4=fullname.trim()
console.log(s4)
console.log(s4.length)

//6.trimStart()
//action==>remove th space from start 
//return==>new string
let fullname1="  mayuri  "
console.log(fullname1)
console.log(fullname1.length)//10
let s5=fullname1.trimStart()
console.log(s5)
console.log(s5.length)

//7.trimEnd()
//action==>remove th space from start 
//return==>new string
let fullname2="  mayuri  "
console.log(fullname2)
console.log(fullname2.length)//10
let s6=fullname2.trimEnd()
console.log(s6)
console.log(s6.length)