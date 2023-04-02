// Actual diffrence between let var const

// let x=10
// console.log(x)//10

//update
// x=20
// console.log(x)

//=====================================================================================

// const x1=90
// console.log(x1)//90
// x1=22//update
// console.log(x1)//error

//========================================================================================

//program 1

//{}=>block
//let const==>scope=>blocked scope variable

// {
//     let z=20
//     console.log(z)//20
// }
// console.log(z)//error  z is not defined

//program 2

// let y1=100
// {
//     let y1=500
//     console.log(y1)//500
// }
// console.log(y1)//100


//program 3

// let x1=900
// {
//     console.log(x1)//900
//     x1=200
//     console.log(x1)//200
// }
// console.log(x1)//200

//program 4

// let z1=500
// {
//     console.log(z1)//error ==>hoisting
//     let z1=300
//     console.log(x1)//300
// }
// console.log(x1)//500

//program 5

// {
//     const p1=400
// }
// console.log(p1)// p1 is not defined

// let y1
// console.log(y1)//undefined

//program 6

// const k=600
// {
//     console.log(k)//600
//     k=700
//     console.log(k)//error  Assignment to constant variable.
// }
// console.log(k)

//program 7

// {
//     var a=90
// }
// console.log(a)//90

//let and const have block scope
//var dont have block scope
//var having function scope

//program 8

// var num=100
// console.log(num)//100
// function add(){
//     var num=200
//     console.log(num)//200
// }
// console.log(num)//100
// add()
// console.log(num)//100

//100
//100
//200
//100

// var num=100 //200
// console.log(num)//100
// function add(){
//     var num=200
//     console.log(num)//200
// }
// console.log(num)//100
// add()
// console.log(num)//200

//program 9

function init(){
    var t1=999
    console.log(t1)//999
}
init()
console.log(t1)//error

