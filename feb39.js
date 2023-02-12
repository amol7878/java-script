// let mayuri={
//     firstName:"mayuri",
//     lastName:"katwe",
//     age:25,
//     skills:["java","slenium","javascript"]
// }

// console.log(mayuri)
// console.log(typeof mayuri)

// //10 th std class==>100
// let vinayak={
//     firstName:"vinayak",
//     lastName:"kanade",
//     age:43,
//     skills:["java","slenium","javascript"]
// }

// let vinayak={
//     firstName:"vinayak",
//     lastName:"kanade",
//     age:43,
//     skills:["java","slenium","javascript"]
// }
// //class ==>miltiple object//blue print==>user defined data type

// class student{
//     firstName="sham"
//     lastName="raut"
//     age=30
//     skills="javascript"
// }

// let mayuri=new student()
// console.log(mayuri)
// let vinayak1=new student()
// console.log(vinayak1)

//s1 way ==>setting object value outside the class

class student{
    firstName=undefined
    lastName=undefined
    age=undefined
    skills=undefined
}
let ram=new student()
console.log(ram)
ram.firstName="ram"
ram.lastName="kumar"
ram.age=24
ram.skills="cypress"
console.log(ram)

let sham=new student()
console.log(sham)
sham.firstName="sham"
sham.lastName="rao"
sham.age=44
sham.skills="sql"
console.log(sham)

//2 way ==>constructor class
class studentone{
    constructor(fn,ln,ag,sk){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.skills=sk
    }
}
let mayuri=new studentone("mayuri","katwe",22,"java")
console.log(mayuri)
let ganesh=new studentone("ganesh","deshpande",25,"django")
console.log(ganesh)

//3 way==>by using method
class studentThree{
    setFirstName(fn){
        this.FirstName=fn
    }
    setLastName(ln){
        this.lastName=ln
    }
    setage(ag){
        this.age=ag
    }
    setskills(sk){
        this.skills=sk
    }
}
let satish=new studentThree()
console.log(studentThree)//{}

satish.setFirstName("satish")
satish.setLastName("kumar")
satish.setage(44)
satish.setskills("java")
console.log(satish)

let ramesh=new studentThree()
console.log(ramesh)
ramesh.setFirstName("ramesh")
ramesh.setLastName("kumar")
ramesh.setage(55)
ramesh.setskil
ls("java")
console.log(ramesh)

//let a={}

//let b=[]

//let c=''
