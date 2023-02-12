let sarika={
    firstName:"sarika",
    lastname:"pansare",
    age:25,
    skills:["python","django","javascript"]
}

//loop
for(let prop in sarika){
    console.log(prop,sarika[prop])
}

let poorva={
    firstName:"poorva",
    lastname:"vyas",
    age:29,
    skills:["c","cpp"]
}

//Object.values()
console.log(Object.values(poorva))
//Object.keys()
console.log(Object.keys(poorva))
//Object.entries()
console.log(Object.entries(poorva))

//programm 3
let mapA=new Map()
//object keys can only be sting data type
//maps keys can be any data type
console.log(mapA)
console.log(typeof mapA)
//mapA is object
//object-properties and method
//methods-action and return type
console.log(mapA.size)

//set()
mapA.set(1,"admin")
mapA.set(2,"customer")
mapA.set(3,"support")
mapA.set(4,"manager")
console.log(mapA)
console.log(mapA.size)

//get()
console.log(mapA.get(1))
console.log(mapA.get(2))
console.log(mapA.get(3))
console.log(mapA.get(4))

//has()
let a1=mapA.has(5)
console.log(a1)

//delete()
// mapA.delete(3)
// console.log(mapA)

// //clear()
// mapA.clear()
// console.log(mapA)

mapA.forEach(function(v,k){
    console.log(v,k)
})

//keys()
for(let a of mapA.keys()){
    console.log(a)
}
//values()
for(let a of mapA.values()){
    console.log(a)
}
//entries()
for(let [k,v] of mapA.entries()){
    console.log(k,v)
}

let mapc=new Map([
    [1,"tester"],
    [2,"can drive"],
    [3,"chinmay deshpande"],
])
console.log(mapc)