//Object literals
// let mayuri={
//     firstName:"Mayuri",
//     lastName:"Katwe",
//     age:25,
//     rollNo:36,
//     skills:"Javascript"
// }

// //add
// mayuri.language="Marathi"
// console.log(mayuri)

// mayuri["language"]="hindi"
// console.log(mayuri)

// //update
// mayuri.age=36
// console.log(mayuri)

// //retrive
// console.log(mayuri.firstName)

// //delete
// delete mayuri.skills
// console.log(mayuri)

// let mayuri={
//     firstName:"Amol",
//     lastName:"Shinde",
//     age:20,
//     rollNo:34,
//     skills:"guitarist"
// }

// let ram={
//     firstName:"ram",
//     lastName:"katwe",
//     age:20,
//     rollNo:34,
//     skills:"guitarist"
// }

//100 =>10 object

//1.function constructor

// function Human(firstName, lastName, age, rollNo, skill) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.rollNo = rollNo
//     this.skill = skill
// }

// let Mayuri=new Human("mayuri","katwe",25,35,"java")
// console.log(Mayuri)

// let Amol=new Human("amol","shinde",35,67,"python")
// console.log(Amol)

//===============================================================================================
//2.ES6 class
//with constructor //without constructor

//without constructor

// class Person{
//     firstName="Mayuri"
//     lastName="Katwe"
//     age=25
//     rollNo=35
//     skill="sql"
// }
// let sham=new Person()
// console.log(sham)

// let sita=new Person()
// console.log(sita)

//with constructor
// class Person{
//     constructor(firstName,lastName,age,rollNo,skill){
//         this.firstName=firstName
//         this.lastName=lastName
//         this.age=age
//         this.rollNo=rollNo
//         this.skill=skill
//     }
// }

// let Raviraj=new Person("raviraj","dhale",24,45,"HTML")
// console.log(Raviraj)
// let manjiri=new Person("Manjir","rana",23,45,"CSS")
// console.log(manjiri)

//=======================================================================================================
//object.create()
// let mayuri=Object.create({})
// console.log(mayuri)
// mayuri.firstName="Mayuri"
// mayuri.lastName="Katwe"
// mayuri.age=34
// mayuri.rollNo=45
// mayuri.skill="java"
// console.log(mayuri)

//======================================================================================================

// function Person(fn,ln,ag,rn,sk){
//     this.firstName=fn
//     this.lastName=ln
//     this.age=ag
//     this.rollNo=rn
//     this.skill=sk
//     this.display=function(){
//         console.log(this.firstName+this.lastName)
//     }
// }

// let Dinga=new Person("Dinga","sharma",25,37,"Java")
// console.log(Dinga)
// let Pinga=new Person("Pinga","Kumar",34,45,"Python")
// console.log(Dinga)

//Problem==>display method getting add with al object which is created with 
//the help of function constructor

//==========================================================================================
//parent.prototype==object._proto_

function Person(fn,ln,ag,rn,sk){
    this.firstName=fn
    this.lastName=ln
    this.age=ag
    this.rollNo=rn
    this.skill=sk
}
Person.prototype.display=function(){
    console.log(this.firstName+this.lastName)
}
let Sayali=new Person("Sayali","rao",23,44,"Math")
console.log(Sayali)
let Priya=new Person("Priya","raout",34,45,"java")
console.log(Priya)

console.log(Person.prototype==Sayali._proto_)

Sayali.display()