// let info=["chinmay","deshpande","33",44]
// console.log(info[0])
// //firstname   lastname    age rollnumber
// //["chinmay","deshpande","33",44]

// // //object

// let info2 = {
//     //property:value
//     //key:value
//     firstname: "chinmay",
//     lastname: "deshpande",
//     age: 33,
//     rollnumber: 44
// }


// //program2
//
let names=["rasika","satish","ramesh","rakes"]
//retrive
console.log(names[1])
//add
names.push("mayuri")
names.unshift("maya")
//update
names[2]="sanket"
//delete
names.pop()
names.shift()
names.splice(2,1)

let vehical={
    color:"red",
    model:"q4",
    type:"SUV"
}
//retirve(dot notation and bracket notation)
//console.log(vehical[0])X

console.log(vehical.color)
console.log(vehical.model)
console.log(vehical.type)

//bracket notation
console.log(vehical["color"])
console.log(vehical["model"])
console.log(vehical["type"])

//add (dot notation and bracket notation)
vehical.name="audi"
vehical["regno"]="123"
console.log(vehical)

//update (dot notation and bracket notation)
vehical.color="blue"
vehical["regno"]="789"
console.log(vehical)

//delete (dot notation and bracket notation)
delete vehical.color
delete vehical["regno"]
console.log(vehical)

let info2 ={
    firstname: "chinmay",
    lastname: "deshpande",
    age: 33,
    rollnumber: 44
}

//dot notation
//retirve
console.log(info2.lastname)
//add
info2.city="pune"
//update
info2.rollnumber=55
//delete
delete info2.firstname
console.log(info2)

//bracket notation
console.log(info2["lastname"])
//add
info2["language"]="marathi"
//update
info2["roollnumber"]=66
//delete
delete info2["firstname"]
console.log(info2)

let fruits=["apple","mango","banana","grapes"]
for(let i=0;i<fruits.length;i++){
    //console.log(i)//0//1//2//3
    console.log(fruits[i])
}

console.log("==================================================")

let animal={
    namee:"tiger",
    legs:4
}
//dot notation does not work inside for loop
for(let x in animal){
    console.log(x,animal[x])
}
