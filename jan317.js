//Object literal
let amol={
    firstName:"amol",
    lastName:"Shinde",
    age:30,
    skills:["paython","Sql","html","css"]
}
console.log(amol)
console.log(typeof amol)

let chinmay={
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    skills:["paython","Sql","html","css"]
}
console.log(chinmay)

//4 lines
//40 object---160 lines
//user defined data type
class student{   
    firstName=undefined
    lastName=undefined
    age= undefined
    skills=undefined

}
//let v=true
//let a=90
//let firstName="ram"
//let names=["chinmay","sarika","poorva"]
let amola=new student()
let chinamya=new student()
console.log(amola)
console.log(chinamya)

//setting the value outside the class 
amola.firstName="amol"
amola.lastName="shinde"
amola.age="32"
amola.skills=["python","html"]
console.log(amola)

//setting the value at the time of object creation

class person{
    constructor(fn,ln,ag,sk){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.skills=sk
    }
}
let amolb=new person("amol","shinde",23,["python","sql"])
let poorva=new person("poorva","rao",24,["python3","sql"])
console.log(amolb)
console.log(poorva)
poorva.city="pune"
poorva["bank"]="icici"
console.log(poorva)

class persond{
    setfirstName(fn){
        this.firstName=fn
    }
    setlastName(ln){
        this.lastName=ln
    }
    setage(ag){
        this.age=ag
    }
    setskills(sk){
        this.skills=sk
    }

}
let amolc=new persond()
console.log(amolc)
amolc.setfirstName("amol r")
amolc.setlastName("rao")
amolc.setage(24)
amolc.setskills(["python","csss","html"])
console.log(amolc)

//console.log(amol)
////retrive
//console.log(amol.firstname)
//console.log(amol[firstname])
//update
//amol.firstName="amol r"
//amol[firstName]="amol d"
// //add
//amol.city="nagpure"
//amol["city"]="warsha"
// // delete
//delete amol.city
//delete amol["firstName"]
