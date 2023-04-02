//Program 1

// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     age = 32
//     adharNo = 7
// }

// class Teacher extends Student {
//     salary = 1000
// }

// let chinmayT = new Teacher()
// console.log(chinmayT.firstName)
// console.log(chinmayT.lastName)
// console.log(chinmayT.adharNo)
// console.log(chinmayT.age)

// let chinmay = new Student()
// console.log(chinmay)

//program 2

// class StudentB {
//     constructor(fn, ln, ag, adharNo) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag
//         this.adharNo = adharNo
//     }
//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends StudentB {
//     salary = 1000
//     displaySalary() {
//         console.log(this.salary)
//     }
// }

// let mayuriB=new Teacher("maya","rao",33,31)

// //properties

// console.log(mayuriB.firstName)
// console.log(mayuriB.lastName)
// console.log(mayuriB.age)
// console.log(mayuriB.adharNo)
// console.log(mayuriB.salary)

// mayuriB.displayName()
// mayuriB.displaySalary()

// let mayuri=new StudentB("maya","rao",33,31)

//program 3

// class StudentC {
//     constructor(fn, ln, ag, adharNo) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag
//         this.adharNo = adharNo
//     }
//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// class TeacherC extends StudentC {
//     constructor(fn, ln, ag, adharNo, salary) {
//         super(fn, ln, ag, adharNo)
//         this.salary = salary
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let poorva=new TeacherC("poorva","vyas",29,29,1200000)
// console.log(poorva.firstName)
// console.log(poorva.lastName)
// console.log(poorva.adharNo)
// console.log(poorva.age)
// console.log(poorva.salary)

// poorva.displaySalary()
// poorva.displayName()


class GrandFather {
    constructor(firstName, LastName) {
        this.firstName = firstName
        this.LastName = LastName
    }
    displayGName() {
        console.log(this.firstName + this.LastName)
    }
}

class Father extends GrandFather {
    constructor(firstName, LastName, ffirstName) {
        super(firstName, LastName)
        this.ffirstName = ffirstName
    }
    dispplayFName() {
        console.log(this.ffirstName + this.LastName)
    }
}

class Son extends Father {
    constructor(firstName, LastName, ffirstName, sname) {
        super(firstName, LastName, ffirstName)
        this.sname = sname
    }
    displaySname(){
        console.log(this.sname+this.LastName)
    }
}

let chinmay=new Son("manohar","deshpande","shirish","chinmay")
console.log(chinmay.firstName)
console.log(chinmay.LastName)
console.log(chinmay.sname)
console.log(chinmay.ffirstName)

chinmay.dispplayFName()
chinmay.displayGName()
chinmay.displaySname()