//Nullish Operator

// Undefined And Null

//Program 1

// let variable =undefined
// let variable2="Hello World"

// let result1=variable??"default"
// let result2=variable2??"deafult"
// console.log(result1)
// console.log(result2)

//Null Coalesing Operator
//null,undefined,",7<2

// let variable3=null
// let variable4="Hello World"

// let variable5=5<2

// let result3=variable3||"deafult-a"
// let result4=variable4||"deafult-b"
// let result5=variable5||"default-c"

// console.log(result3)//deafault-a
// console.log(result4)//Hello World
// console.log(result5)//deafault-c

//Short Circkit

// let a="chinmay" && "Deshpande"
// let b= 6<7 && "deshpande"
// let c=6<7 && 8>9
// let d=6==6 && null
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//  ||

// let e=8>9 || "hello"
// let f=8<9 || "Hello"
// let g="chinmay" || 8<5
// console.log(e)
// console.log(f)
// console.log(g)


function greet(name){
    if(name){
        console.log("Hello"+name)
    }
    else{
        console.log("Hello guest")
    }
    name= name||"Guest"
    console.log("hello"+name)
}

greet("chinamy")
greet()

