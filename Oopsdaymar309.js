//let aa="
//let rn=[]

// let mayuri={
//     firstName:"Mayuri",
//     lastName:"Katwe",
//     age:25,
//     rollNo:35,
//     display:function(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// console.log(mayuri.firstName)//Mayuri
// console.log(mayuri.lastName)//katwe
// console.log(mayuri.display)//function print
// mayuri.display()

// let abc=mayuri.display//
// function(){
//     console.log(this.firstName+this.lastName)
//                 undefined+undefined==>NAN 
// }

// console.log(abc)//function
// abc()

//call()
//bind()
//apply()

//1.bind()
// let a=mayuri.display.bind(mayuri)
// console.log(a)
// a()
//2.call()
// mayuri.display.call(mayuri)
//3/.apply()
// mayuri.display.apply(mayuri)

//===============================================================================================

// let Mayurik={
//     firstName:"Mayuri",
//     lastName:"Katwe",
//     display:function(){
//         console.log(this.firstName+this.lastName)
//     }
// }

// let Amol={
//     firstName:"Amol",
//     lastName:"Rao",
// }

// let y1=Mayurik.display.bind(Amol)
// y1()

//======================================================================================================

// let dinga={
//     firstName:"dinga"
// }
// let pinga={
//     firstName:"pinga"
// }
// let ranga={
//     firstName:"ranga"
// }
// let simga={
//     firstName:"simga"
// }

// let displayFirstName=function(){
//     console.log(this.firstName)
// }

// let s1=displayFirstName.bind(dinga)
// s1()
// displayFirstName.bind(simga)()
// displayFirstName.call(pinga)
// displayFirstName.apply(ranga)

//================================================================================================


let dinga={
    firstName:"dinga"
}
let pinga={
    firstName:"pinga"
}
let ranga={
    firstName:"ranga"
}
let simga={
    firstName:"simga"
}

let displayFirstName=function(greet1,greet2){
    console.log(`${greet1} ${this.firstName} ${greet2}!!!`)
}
//bind()
let y1=displayFirstName.bind(ranga,"Good morning","Have a nice day")
y1()

//call()
displayFirstName.call(dinga,"good noon","have a good day")

//apply()
displayFirstName.apply(simga,["good night","sweet dream"])

//to set ref of this
//to use one method in multiple object

let add=function(){
    console.log("hello")
}
console.log(add)//print
add()//call