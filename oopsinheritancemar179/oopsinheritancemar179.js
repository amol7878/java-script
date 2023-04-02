// class student{
//     firstName="Mayuri"
//     lastName="Katwe"
//     age=25
//     rollNo=30
// }
// class Teacher extends student {
//     skill="Javascript"
// }

// let mayuriA=new student()
// console.log(mayuriA)
// console.log(mayuriA.firstName)
// console.log(mayuriA.lastName)
// console.log(mayuriA.age)
// console.log(mayuriA.rollNo)

// let amol=new Teacher()
// console.log(amol)

// class Student{
//     constructor(firstName,lastName,age,rollNo){
//         this.firstName=firstName
//         this.lastName=lastName
//         this.age=age
//         this.rollNo=rollNo
//     }
//     displayFullName(){
//         console.log(this.firstName+this.lastName)
//     }
// }

// class Teacher extends Student{
//     skill=["java","python","SQL"]
//     displaySkill(){
//         console.log(this.firstName)
//         console.log(this.skill)
//     }
// } 

// let kartik=new Teacher("kartik","patil",34,12)
// console.log(kartik)
// kartik.displayFullName()//kartik patil
// kartik.displaySkill()//kartik//["java","python","SQL"]

//========================================================================================

// class student{
//     constructor(fn,ln,ag,rn){
//         this.firstName=fn
//         this.lastName=ln
//         this.age=ag
//         this.rollNo=rn
//     }
//     displayFullName(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// class Teacher extends student{
//     constructor(fn,ln,ag,rn,skill,salary){
//         super(fn,ln,ag,rn)
//         this.skill=skill
//         this.salary=salary
//     }
//     displaySkillandSalary(){
//         console.log(this.age)
//         console.log(this.firstName+this.lastName)
//         console.log(this.skill+this.salary)
//         console.log(this.salary)
//     }
// }
// let jaya=new Teacher("jaya","kumari",40,34,"SQL",40000)
// console.log(jaya)
// jaya.displaySkillandSalary()
// jaya.displayFullName()//jaya kumari

// let maya=new student("Mayuri","Katwe",23,78)
// console.log(maya)
//maya.displaySkillandSalary()//not possible
// maya.displayFullName()

class student{
    constructor(fullName,adharNo,DOB){
        this.fullName=fullName
        this.adharNo=adharNo
        this.dateOfBirth=DOB
    }
    display(){
        console.log(this.fullName)
    }
}
class Teacher extends student{
    constructor(fullName,adharNo,DOB,salary){
        super(fullName,adharNo,DOB)
        this.salary=salary
    }
    displaySalary(){
        console.log(this.fullName)
        console.log(this.salary)
    }
}

class Professor extends Teacher{
    constructor(fullName,adharNo,DOB,salary,skill){
        super(fullName,adharNo,DOB,salary)
        this.skill=skill
    }
    displayskill(){
        console.log(this.skill)
    }
}

let mayuri=new student("mayuri","123456","05/02/1998")
console.log(mayuri.fullName)
console.log(mayuri.adharNo)
console.log(mayuri.dateOfBirth)
//console.log(mayuri.salary)//not possible
//console.log(mayuri.skill)//not possible
mayuri.display()
// mayuri.displayskill()//not possible
// mayuri.displaySalary()//not possible

let satish=new Professor("satishKumar","98765432","04/02/1991",50000,"HtML")
console.log(satish)
satish.display()
satish.displayskill()
satish.displaySalary()

let amit=new Teacher("amitSharma",43455556,'04/07/1989',1000000)
console.log(amit)
amit.display()
//amit.displaySkill()//not possible
amit.displaySalary()