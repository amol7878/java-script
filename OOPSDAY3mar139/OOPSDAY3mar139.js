//Object literal 
//function constructor
//ES6 class 
//Object.create()
// //Program 1

// function Person(fn,ln){
//     this.firstName=fn
//     this.lastName=ln
//     this.display=function(){
//         console.log(this.firstName+this.lastName)
//     }
// }

// let amol=new Person("amol","rao")
// let chinmay=new Person("chinmay","deshpande")
// console.log(amol)
// console.log(chinmay)

//EveryObject has one_proto_===Parent.prototype

// console.log(amol._proto_===Person.prototype)
// console.log(amol instanceof Person)
// Person.prototype.display=function(){
//     console.log(this.firstName+this.lastName)
// }

// Person.prototype.country="india"

// amol.display()
// chinmay.display()

// console.log(amol)
// console.log(chinmay)

//Program 2
class PersonB{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
        // this.display=function(){
        //     console.log(this.firstName+this.lastName)
        // }
    }
    display(){
        console.log(this.firstName+this.lastName)
    }
}

let amol2=new PersonB("Amol","rao")
let chinamy2=new PersonB("chinmay","deshpande")
console.log(amol2)
console.log(chinamy2)
amol2.display()
chinamy2.display()

//Program 3

//Object.create
// let amol3=Object.create({})
// console.log(amol3)
// amol3.firstName="amol"
// amol3.lastName="rao"
// amol3.display=function(){
//     console.log(this.firstName+this.lastName)
// }
// console.log(amol3)
// amol3.display()

// let obj={
//     init:function(fn,ln){
//         this.firstName=fn
//         this.lastName=ln
//     },
//     display:function(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// let amol4=Object.create(obj)
// console.log(amol4)
// amol4.init("amol4","rao4")
// amol4.display()
// console.log(amol4)

//Prototype inheritance-
//function constructor
//Es6 class
//Object.create method

//OOps---ES6
