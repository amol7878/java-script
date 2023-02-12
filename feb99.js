//Map datatype

//SET datatype
//set unique value store
//key value

let myset=new Set()
console.log(myset)
//1.add()
myset.add("mayuri")
console.log(myset)

myset.add("rohan")
console.log(myset)

let newset=new Set(["mayuri","rohan"])
console.log(newset)

let a1=new Set("arohi")
console.log(a1)

let b1="shreeganesh"
let sizeSet=new Set(b1)
console.log(sizeSet.size)//unique value size

let arr=[2,3,5,6,4,2,3]//5
let s1=new Set(arr)
console.log(s1.size)
console.log(s1)

let f1=new Set(["mayuri","jaya","satish","habib"])
console.log(f1.size)

////2.has()
let setA=new Set([1,2,3])
let q1=setA.has(1)
console.log(q1)
console.log(setA)

let q2=setA.has(20)
console.log(q2)

//3.delete
// let setB=new Set([1,2,3,4,5,6])
// let q3=setB.delete(5)
// console.log(q3)
// console.log(setB)

//4.clear()
// let setB=new Set([1,2,3,4,5,6])
// let q4=setB.clear()
// console.log(q4)
// console.log(setB)

//5.forEaach()
let setB=new Set([1,2,3,4,5,6])
setB.forEach((item)=>{
    console.log(item)
})

let setc=new Set([10,20,19,27,3,23,3,22])
setc.forEach((item)=>{
    console.log(item)
})