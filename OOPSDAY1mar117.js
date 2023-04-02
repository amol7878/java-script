//Object literal
let chinmay={
    firstName:"chinmay",
    lastName:"deshpande",
    age:27,
    rollNo:34
}

let amol={
    firstName:"Amol",
    lastName:"Shinde",
    age:30,
    rollNo:33

}


//Program 1 
//function constructor

function Person(fn,ln,ag,rollNo){
     this.firstName=fn
     this.lastName=ln
     this.age=ag
     this.rollNo=rollNo
}
let sarika=new Person("sarika","pansare",25,44)
let poorva=new Person("poorva","vyas",29,33)
let abhisha=new Person("abhisha","burande",28,37)
console.log(sarika)
console.log(poorva)

//es6 class
class PersonB{
    constructor(fn,ln,ag,rollNo){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.rollNo=rollNo
    }
}
let sarikaB=new PersonB("sarika","pansare",35,34)
let poorvaB=new PersonB("poorva","vyas",44,33)
console.log(sarikaB)
console.log(poorvaB)

//Object.create()
let sarikaC=Object.create({})
console.log(sarikaC)
sarikaC.firstName="sarika"
sarikaC.lastName="vyas"
sarikaC.age=25
sarikaC.rollNo=55
console.log(sarikaC)

//==============================================================================================
//Object literal

let vehical={
    color:"red",
    type:"sedane"
}
console.log(vehical.color)

//function constructor

function Vehical(cl,ty){
    this.color=cl
    this.type=ty
}
let audi=new Vehical("green","suv")
console.log(audi.color)
console.log(audi.type)

//es6 class
class VehicalB{
    constructor(cl,ty){
        this.color=cl
        this.type=ty    }
}
let rama=new VehicalB("blue","sedane")
console.log(rama.color)
console.log(rama.type)

//Object.create()
let skoda=Object.create({})
console.log(skoda)
skoda.color="white"
skoda.type="sedane"
console.log(skoda)


//Object.create() method


//500-2000 lines

//CRUD
// //retrive(dot notation and Bracket notation)
//console.log(chinmay.firstName)
//console.log(chinmay["lastName"])
// //update(dot notation and Bracket notation)
// chinmay.firstName="ram"
// chinmay["firstName"]="ramesh"
// console.log(chinmay)
// //add(dot notation and Bracket notation)
// chinmay.city="pune"
// chinmay['Language']="hindi"
// console.log(chinmay)
// // //delete(dot notation and Bracket notation)
// delete chinmay.firstName
// delete chinmay["lastName"]
// console.log(chinmay)
