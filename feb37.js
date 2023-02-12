//Array,stirng,Objects,Userdefined
//Maps,Set
// let info = {

//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollno:47
// }
// //retirve
// console.log(info.firstName)
// //update
// info.firstName="tanmay"
// console.log(info)
// //add
// info.city="pune"
// console.log(info)
// //delete
// delete info.age
// console.log(info)

// for (let key in info){
//     console.log(key,info[key])
// }

//. notation does not work inside for

//program 1
let vehical={
    color:"Red",
    type:"suv"
}
for(let k in vehical){
    console.log(k,vehical[k])
}
for (let prop of Object.keys(vehical)){
    console.log(prop)
}
for (let val of Object.values(vehical)){
    console.log(val)
}
for (let [k,v] of Object.entries(vehical)){
    console.log(k,v)
}

///program2 


let human={
    fullname:"mayuri rao",
    age:23,
    city:"pune",
    skills:["python","css","html","css"]
}

for(let prop in human){
    console.log(prop)
}

// console.log(Object.keys(human))
// console.log(Object.values(human))
// console.log(Object.entries(human))

for (let prop of Object.keys(human)){
    console.log(prop)
}
for(let values of Object.values(human)){
    console.log(values)
}
for(let [k,v] of Object.entries(human)){
    console.log(k,v)
}

//Defference between Map And Object

let info2={
    firstName:"chinmay",
    lastName:"deshpande",
    rollNo:23
}

//Map Keys can be different data Types

let mapA=new Map()
console.log(mapA)

//Property
let i=mapA.size
console.log(i)

//set a property
mapA.set(1,"admin")
mapA.set(2,"customer")
mapA.set(3,"Support")

console.log(mapA)
console.log(mapA.size)

//get()
let q1=mapA.get(2)
console.log(q1)

//has()
let q2=mapA.has(4)
console.log(q2)

//mapA.clear()
//console.log(mapA)

//delete
//mapA.delete(1)
//console.log(mapA)

//set().get().has(),size(),clear(),delete()

mapA.forEach(function(v,k){
    console.log(v,k)
})

for(let key of mapA.keys()){
    console.log(key)
}

for(let val of mapA.values){
    console.log(val)
}
for(let [key,val] of mapA.entries){
    console.log(key,val)
}
