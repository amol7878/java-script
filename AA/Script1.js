// Essential--for statrting React

// // Destruccting of Objects And Array 

let names =["Chinmay","Sarika","Poorva"]
let[a11,a12,a13]=names

console.log(a11)
console.log(a12)
console.log(a13)

let info={

    firstName:"Amol",
    lastName:"shinde"
}

let{firstName:fn,lastName:ln}=info

console.log(fn,ln)

// // Rest And Spread Operator

////[11,22,33,44,55]=====>11,22,33,44,55
// //11,22,33,,44,5 =====>[11,22,33,44,55]

function addition(...arr){//rest
   console.log(arr)
}
addition(123,4,5,56,77)


let numbers=[11,22,33,44,55,66,77]

function add(x,y,z,a){
    console.log(x+y+z+a)
}
add(...numbers)

// // Programs  3 Literals

let fne ="Chinmay"
let lne="Deshpande"
console.log(`My firstName is ${fne} and My LastName is ${lne}`)

// // Programm 4

let h=2
let q=5

h>q?console.log('H is greater'):console.log("q Is greater")

// // Program 5

function addition(x,y){
  console.log(x+y)
}

addition(12,3)

let addtionw = function(x,y){
   console.log(x+y)
}
addtionw(11,22)

let infoe={
    firstName:"chinmay",
    lastName:"deshpande",
    display:function(){
        console.log(this.firstName+this.lastName)
        let display3=()=>{
            console.log(this.firstName+this.lastName)
        }
        display3()
    }
}


let n=[11,22,33,44]
let nwarr=n.map(function(el,index,arr){
    return el+2
})
console.log(nwarr)

let nm=[11,22,33,44]
let nwarr1=nm.filter(function(el,index,arr){
    return el>20
})
console.log(nwarr1)

let nmn=[11,22,33,44]
let nwee=nm.reduce(function(acc,el,index,arr){
    return acc+el
},0)
console.log(nwee)


// shortCirckit

let a=12!=12 && 4

console.log(a)

let b=""||9
console.log(b)


// 8,9,-7,32,True,{},[],2==3,True
//null,0,undefined,NaN,12>13,False,""

//Sort method array
// immutable array
//optiional Parameter

