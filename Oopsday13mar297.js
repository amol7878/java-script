// //call bind apply

let info={
    firstName:"Chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:34,
    skills:["python","javascript"],
    display:function(){
        console.log(this.firstName+this.lastName)
    }
}

info.display()
let info2={
    firstName:"Poorva",
    lastName:"vyas",
    age:25,
    rollNo:27,
    skills:["python","javascript","css"]
}

let brdm=info.display
//let brdm=function(){
//    console.log(this.firstName+this.lastName)
//}
brdm()

// // call,bind,apply
//bind()
let brdm2=brdm.bind(info2)
//let brdm2=function(){
//    console.log(this.firstName+this.lastName)
//}
brdm2()

//program 2

let john={
    firstName:"john",
    lastName:"desuza"
}
let smith={
    firstName:"steven",
    lastName:"smith"
}
let chinmay={
    firstName:"chinmay",
    lastName:"dehpande"
}
let displayName=function(){
 console.log(this.firstName+this.lastName)
}
displayName()
s1=displayName.bind(john)
displayName.bind(john)()
displayName.bind(smith)()
displayName.bind(chinmay)()
// s1=function(){
//     console.log(john.firstName+john.lastName)
// }

s1()

//call
displayName.call(john)
displayName.call(smith)
displayName.call(chinmay)

let displayName2=function(greet){
    console.log(`${greet}${this.firstName}${this.lastName}`)
}
displayName2()
displayName2.call(john,"Gm")
displayName2.call(smith,"Ge")
displayName2.call(chinmay,"Ga")

//apply
displayName2.apply(chinmay,["gm"])
let firstName="abhilasha"
let lastName="dani"

//My firstName is abhilasha and lastName is dani
console.log("My firstName is "+firstName+" My lastName is "+lastName)
console.log(`My firstName is ${firstName} My lastName is ${lastName}`)
console.log(`${1+4}`)

