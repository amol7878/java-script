// //set ==>data type
// // //collection of unique value

// let myset=new Set()
// console.log(myset)

// ////value add
// // //1.add()
// myset.add("mayuri")
// console.log(myset)
// myset.add("garav")
// console.log(myset)
// myset.add("mayuri")
// console.log(myset)
// myset.add("satish")
// console.log(myset)

// // add value with the help of set constructor
// // let newset=new Set(["a","b","c","d","a"])
// console.log(newset)

// //2.delete()
// // let y1=newset.delete("b")
// // console.log(y1)//true
// // console.log(newset)

// //3.has()
// let y2=newset.has("a")
// console.log(y2)//true

// let y3=newset.has("z")
// console.log(y3)

// //4.forEach()
// newset.forEach((el)=>{
//     console.log(el)
// })

// //for loop
// for(let val of myset){
//      console.log(myset)
// }
// for(let val1 of newset){
//     console.log(val1)
// }
//////=================================================================================================
//keys()

let newset=new Set(["a","b","c","d","a"])
let r1=newset.keys()
console.log(r1.next().value)
console.log(r1.next().value)
console.log(r1.next().value)
console.log(r1.next().value)

//values()
let r2=newset.values()
console.log(r2)
console.log(r2.next().value)
console.log(r2.next().value)
console.log(r2.next().value)
console.log(r2.next().value)

//entries()
let r3=newset.entries()//[value,value]
console.log(r3)

///================================================================================

let rollNumber=[11,22,33,44,55]
console.log(rollNumber[4])

let a1=rollNumber[0]
let a2=rollNumber[1]
let a3=rollNumber[2]
let a4=rollNumber[3]
let a5=rollNumber[4]

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)

//Destructure of array
let[e1,e2,e3,e4,e5]=rollNumber
console.log(e1)//11
console.log(e2)//22
console.log(e3)//33
console.log(e4)//44
console.log(e5)//55

//nested array
//        0 1 2   0  1   2    0   1   2
let num=[[6,7,8],[77,88,99],[100,200,300]]
//          0        1           2
console.log(num[1][1])//88

let[[a,b,c],[d,e,f],[g,h,k]]=num
console.log(e)//88
console.log(h)//200



