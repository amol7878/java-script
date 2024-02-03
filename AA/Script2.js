//Program 1

// var x=10
// console.log(x)

//Program 2

// console.log(x)
// var x=100
// console.log(x)

//Execution Steps

// var x
// console.log(x)
// x=100
// console.log(x)

// console.log(x)
// let x=10
// console.log(x)

//Program 3

// ssyhello()
// function sayhello(){
//     console.log("Hello")
// }


// sayhello2()
// var sayhello2=function (){
//     console.log("hello")
// }

//Program 4

// var Myfunction="bye"
// function Myfunction(){
//     console.log("heloo")
// }

// console.log(typeof Myfunction)


//Program 5
// console.log(a)
// console.log(b)

// var a=10
// let b=22


//Program 6

function outer(){
    var inner
    console.log(inner)//undefined
    if(true){
        var inner="inner variable"
    }
    console.log(inner)//inner variable
}
outer()
