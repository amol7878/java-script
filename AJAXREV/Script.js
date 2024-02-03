//Object Literal

let amol={
    firstName:"amol",
    lastName:"rao",
    age:39,
    rollNo:34
}

let chinmay={
    firstName:"chinmay",
    lastName:"deshopnde",
    age:29,
    rollNo:23
}

// 1 object ======> 4lines
// 100 object===========>400 lines
//template Object=========object


// user Defined Data Type

//Program 2
//Comment

class Person{
    firstName
    lastName
    age
    rollNo
}


let amolA= new Person()
console.log(amolA)
amolA.firstName="AmolA"
amolA.lastName="ShindeA"
amolA.age=23
amolA.rollNo=22
console.log(amolA)


// Retrive DOT Notation and Btracket Notation

console.log(amolA.firstName)
console.log(amolA['firstName'])

// // Add // dot nOttion and Bracket Notation

amolA.language="Marathi"
amolA['city']="Pune"

// // Update dot notation and Bracket Notation

amolA['city']="Nagpure"
amolA.language="hindi"

// delete // dot notation And bracket notation

delete amolA.city
delete amolA['city']


console.log(amolA)

// Program 2

class PersonB{
    //Properties
    constructor(fn,ln,ag,rn){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.rollNO=rn
    }
    //Method
    displayName(){
        console.log(this.firstName+this.lastName)
    }
}

let amolB=new PersonB("amolB","ShindeB",12,24)
console.log(amolB)
amolB.city="pune"
amolB['language']="Marathi"
console.log(amolB)
amolB.displayName()

// Set And Get Method

class PersonC{
    //Properties Value Set
    setAge(ag){
        this.age=ag
    }
    setRollNo(rn){
        this.rollNO=rn
    }
    setFirstName(fn){
        this.firstName=fn
    }
    setLastName(ln){
        this.lastName=ln
    }
    //Properties Vallue get
    getAge(){
        console.log(this.age)
    }
    getRollNo(){
        console.log(this.rollNO)
    }
    getFirstName(){
        console.log(this.firstName)
    }
    getLastName(){
        console.log(this.lastName)
    }
}

let amolC= new PersonC()
console.log(amolC)

amolC.setAge(13)
amolC.setFirstName("Amol")
amolC.setLastName("Shinde")
amolC.setRollNo(23)
console.log(amolC)

amolC.getAge()
amolC.getFirstName()
amolC.getLastName()
amolC.getRollNo()


let info={
    firstName:"chinmay",
    lastName:"Deshpande"

}

info.city="pune"

// set and get 

class PeronD{
  set firstN(fn){
    this.firstName=fn
  }
  get firstN(){
    return this.firstName
  }
  set lastN(ln){
    this.lastName=ln
  }
  get lastN(){
    return this.lastName
  }
  set Age(ag){
    this.age=ag
  }
  get Age(){
    return this.age
  }
  set RollNO(rn){
    this.rollNO=rn
  }
  get RollNO(){
    return this.rollNO
  }

}

let amolD=new PeronD()
amolD.Age=12
amolD.lastN="deshpande"
amolD.firstN="Chinmay"
amolD.RollNO=23
console.log(amolD)

console.log(amolD.Age)
console.log(amolD.firstN)
console.log(amolD.lastN)
console.log(amolD.RollNO)