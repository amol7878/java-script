//class

// let mayuri={
//     firstName:"mayuri",
//     age:25
// }

// let rohan={
//     firstName:"rohan",
//     age:26
// }

// let amol={
//     firstName:"mayuri",
//     age:32
// }

//class==>ES6 class
//without constructor
//with constructr
//by using function/method
//set and get keyword

//1.without constructor

// class Person{
//     firstName="mayuri"
//     lastName="Katwe"
//     age=25
//     display(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// let mayuri=new Person()
// console.log(mayuri)
// let amol=new Person()
// console.log(amol)

//setting object property outside of class

// class Person{
//     firstName=undefined
//     lastName=undefined
//     age=undefined
//     display(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// let ram=new Person()
// console.log(ram)
// ram.firstName="ram"
// ram.lastName="kumar"
// ram.age=36
// ram.display()
// console.log(ram)

// let sham=new Person()
// console.log(sham)
// sham.firstName="shamam"
// sham.lastName="puri"
// sham.age=44
// sham.display()
// console.log(sham)

//with constructor

// class PersonA{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName
//         this.lastName=lastName
//         this.age=age
//     }
//     display(){
//         console.log(this.firstName+this.lastName)
//     }
// }

// let sathish=new PersonA("sathish","kumar",45)
// console.log(sathish)
// sathish.display()

// let amol=new PersonA("amol","sharma",55)
// console.log(amol)
// amol.display()

//============================================================================================

//by using function
class Person{
    setFirstName(fn){
        this.firstName=fn
    }
    setLastName(ln){
        this.lastName=ln
    }
    setAge(ag){
        this.age=ag
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
    getAge(){
        return this.age
    }
}
let mayuri=new Person()
console.log(mayuri)
mayuri.setFirstName('Mayuri')
mayuri.setLastName('katwe')
mayuri.setAge(25)
console.log(mayuri)
console.log(mayuri.getFirstName())
console.log(mayuri.getLastName())
console.log(mayuri.getAge())

//4.by using set and get keyword
