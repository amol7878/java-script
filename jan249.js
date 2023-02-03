//Array

//push()
//unshift()
//pop()
//shift()
//reverese()
//includes()
//indexOf()
//join()
//flat()
//map()
//filter()
//reduce()
//forEach()

let student=["mayuri","ganesh","shreeeram","satish","amol"]
//good morning mayuri
//forEach=>perform operation with each elelment
//return nothing
student.forEach(function(el,index,arr){
    console.log("welcome"+el)
})

student.forEach(function(el,index,arr){
    if(index==4)
    console.log("welcome"+el)
})

//some()
//action
//return//boolean
let numbers=[12,45,67,89,46,34,16,90]
let result=numbers.some(function(el,index,arr){
    return el>25
})
console.log(result)

//every()
let numbers1=[12,45,67,89,46,34,16,90]
let result1=numbers1.some(function(el,index,arr){
    return el>10
})
console.log(result1)

//find()
let marks=[12,45,67,78,90,30,35,67,89,99]
//element>30
let aa=marks.find(function(el,index,arr){
       return el>30
})
console.log(aa)

//findIndex()
let marks2=[12,45,67,78,90,30,35,67,89,99]
//element>30
let aaa=marks2.findIndex(function(el,index,arr){
       return el>30
})
console.log(aaa)

//slice()
// //-      -9 -8 -7 -6 -5 -4 -3 -2 -1
let marks3=[12,45,78,90,30,35,67,89,99]
// //+      0  1  2  3  4  5  6  7  8  

//left to Rigth
// //arrayName.slice(startposition,endposition)
//endposition optional
// //endposition is  always less then 1
let a1=marks3.slice(1)
console.log(a1)
let a2=marks3.slice(2)
console.log(a2)
let a3=marks3.slice(5,2)//right-left
console.log(a3)
let a4=marks.slice(5,8)//[35,67,89]
console.log(a4)
let a5=marks3.slice(-2,-7)
console.log(a5)
let a6=marks3.slice(-6,-2)
console.log(a6)
let a7=marks3.slice(2,-3)
console.log(a7)