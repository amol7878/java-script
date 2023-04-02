//Obeject literal
//function constructor

function Person(fn,ln){
    this.firstName=fn
    this.lastName=ln
    // this.display=function(){
    //     console.log(this.firstName+this.lastName)
    // }
}
let chinmay=new Person("chinamay","deshpande")
let amol=new Person("amol","rao")
// console.log(chinmay)
// console.log(amol)
//Every object has one Object._proto_===Parent.prototype

console.log(amol instanceof Person)
console.log(chinmay._proto_ ===Person.prototype)
Person.prototype.display=function(){
    console.log(this.firstName+this.lastName)
}

Person.prototype.country="india"
console.log(chinmay)
console.log(amol)

chinmay.display()
amol.display()

console.log(chinmay.country)
console.log(amol.country)

console.log(amol.hasOwnProperty('country'))
console.log(chinmay.hasOwnProperty('country'))
console.log(amol.hasOwnProperty('firstName'))
console.log(amol.hasOwnProperty('lastName'))


//ES 6 class 

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

let amol2=new PersonB("ram","dani")
let amol3=new PersonB("sham","dani")

console.log(amol2)
console.log(amol3)
amol3.display()
amol2.display()

//program 3

let sarika=Object.create({})
console.log(sarika)
sarika.firstName="sarika"
sarika.lastName="pansare"
sarika.display=function(){
    console.log(this.firstName+this.lastName)
}

sarika.display()

let obj={
    init:function(fn,ln){
        this.firstName=fn,
        this.lastName=ln

    },
    display:function(){
        console.log(this.firstName+this.lastName)
    }
}

let sarika2=Object.create(obj)
console.log(sarika2)
sarika2.init("poorva","vyas")
sarika2.display()