// let student={
//     firstName:"mayuri",
//     LastName:"katwe",
//     age:44,
//     skills:["java","js","python","cypress"],
//     isDoingjob:true
// }
// //rerive
// //object.keyname=value
// console.log(student.age)//44

// //update
// student.isDoingjob=false
// console.log(student)
// console.log(student.skills.length)
// //student.skills="selenium"
// console.log(student)
// student.skills.push('seleniumm1')
// console.log(student)

// //add
// student.language="marathi"
// console.log(student)

// // //delete

// delete student.age
// console.log(student)

//loop
let student1={
    firstName:"mayuri",
    LastName:"katwe",
    age:24,
    skills:["java","python","js","cypress"],
    isdojob:true
}

// let rollNo=[12,34,56,78,55,44,33,22]
// for(let i=0;i<rollNo.length;i++){
//     console.log(rollNo[i])
// }

//for keys
for(let key in student1){
    console.log(key)
}
//for values
for(let key in student1){
    console.log(student1[key])
}
//keys and values
for(let key in student1){
    console.log(key,student1[key])
}

//2 way loop

for(let key of Object.keys(student1)){
    console.log(key)
}

for(let val of Object.values(student1)){
    console.log(val)
}
for(let [a,b] of Object.entries(student1)){
    console.log(a,b)
}

/////======================================================================================

let student={
    firstName:"mayuri",
    LastName:"katwe",
    age:24,
    skills:["java","python","js","cypress"],
    isdojob:true
}
for(let key in student){
    console.log(typeof key)
}

//Map==>datatype
let myMap=new Map()
console.log(myMap)

//to add the element
//1.set()
myMap.set("firstname","mayuri")
myMap.set(1,"Marathi")
myMap.set(true,"isstudent")
myMap.set(2000,20)
console.log(myMap)

//retirve
//get()
let a1=myMap.get(1)
console.log(a1)
let a2=myMap.get(2000)
console.log(a2)
let a3=myMap.get("firstname")
console.log(a3)
let a4=myMap.get(true)
console.log(a4)

//has()
let s1=myMap.has(true)
console.log(s1)//true or false

let s2=myMap.has("fillname")
console.log(s2)//true or false

// delete()
// let d1=myMap.delete(1)
// console.log(d1)
// console.log(myMap)

// //clear()
// myMap.clear()
// console.log(myMap)

//set(),get(),delete(),clear(),has()

//property==>size
console.log(myMap.size)





