//Object Literal

// let studantA={
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:12,
//     rollNo:23,
//     display:function(){
//         console.log(this.firstName+this.lastName)
//     }
// }

// let studantB={
//     firstName:"amol",
//     lastName:"shinde",
//     age:12,
//     rollNo:24,
//     display:function(){
//         console.log(this.firstName+this.lastName)
//     }
// }

//function constructor

function PersonB(fn,ln,ag,rollNo){
    this.firstName=fn
    this.lastName=ln
    this.age=ag
    this.rollNo=rollNo
    this.display=function(){
        console.log(this.firstName+this.lastName)
    }
}

let ram=new PersonB("ram","dani",12,33)
let ram2=new PersonB("ram2","dani2",32,34)
console.log(ram)
console.log(ram2)
ram.display()
ram2.display()

//Every object has one _proto_
//Object._proto_===Parent.prototype
console.log(ram._proto_ ===PersonB.prototype)
console.log(ram2._proto_ === PersonB.prototype)

PersonB.prototype.display=function(){
    console.log(this.firstName+this.lastName)
}
PersonB.prototype.country="india"
ram.display()
ram2.display()
console.log(ram.country)
console.log(ram2.country)
console.log(ram2.hasOwnProperty('country'))

let names=["chinmay","ram","sham"]
//Array
console.log(names._proto_=== Array.prototype)

names.push("hindi")
console.log(names)

Array.prototype.greet=function(){
    console.log("hello")
}
names.greet()

