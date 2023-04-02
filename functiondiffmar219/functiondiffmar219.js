//actual diffrence btw arrow function and function expression

//function declaration
//function expression
//arrow function

// function add(a,b){
//     console.log(a+b)
// }

// let add1=()=>{
//     console.log(hello)
// }

// let add2=function(){
//     console.log('bye')
// }

let x=10//local
console.log(x)//10

console.log(window.x)//undefined

//  //window
var y=20 //global
console.log(y)//20
console.log(window.y)

let info={
    firstName:"Mayuri",
    lastName:"Katwe",
    age:25,
    display:function(){
        console.log(this==info)//true
        console.log(this.firstName+this.lastName)//mayuri katwe
    }
}