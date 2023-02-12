//Object literal
let amol = {
    fullName: "amol",
    lastName: "shinde",
    agee: 24,
    skills: ["python", "dgango"]
}
let chinmay = {
    fullName: "chinmay",
    lastName: "deshpande",
    agee: 34,
    skills: ["python3", "dgango"]
}
//setting the value outside the class
class person{
    firstName=undefined
    lastName=undefined
    age=undefined
    rollno=undefined
}
let amolb= new person()
console.log(amolb)
amolb.firstName="amol"
amolb.lastName="shinde"
amolb.age=34
amolb.rollno=44
console.log(amolb)

//setting the value at the time on object creation

class persond{
    constructor(fn,ln,ag,rollno){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.rollno=rollno
    }

}
let amolc=new persond("amol","shinde",24,44)
let chinmayc=new persond("chinmay","deshpande",33,45)

console.log(amolc)
console.log(chinmayc)

chinmayc.city="pune"
console.log(chinmayc)
console.log(amolc)

class personE{
    setFirstName(fn){
        this.FirstName=fn
    }
    setLastName(ln){
        this.LastName=ln
} 
    setage(ag){
        this.age=ag
    }
    setrollno(rn){
        this.rollno=rn
    }
}
let amold=new personE
console.log(amold)

amold.setFirstName("amol")
amold.setLastName("shinde")
amold.setage(34)
amold.setrollno(44)
console.log(amold)

//operation with objects
//console.log(amol)
// //retrive
//console.log(amol.FirstName)
// //update
//amol.firstName="amol r"
// //delete
//delete amol.age
// //add
//amol.city="mumbai"
