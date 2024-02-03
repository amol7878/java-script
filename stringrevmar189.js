// let firstName="Mayuri"
// console.log(typeof firstName)

// let a="20"
// console.log(typeof a)

// let y=  `true`
// console.log(typeof y)

// let x='mayuri'
// console.log(typeof x)

//let firstName="Mayuri"

//  //M a y u r i
//  //0 1 2 3 4 5

// console.log(firstName[2])
// console.log(firstName[5])

//String==>property and method
//length
// console.log(firstName.length)//6
// console.log(firstName[firstName.length-1])

//Methods

// let city="Nashik"
// //1.toUpperCase()
// //new string

// let a=city.toLocaleUpperCase()
// console.log(a)//NASHK

// //2.toLowerCase()
// let b=city.toLowerCase()
// console.log(b)//nashik

// //3.indexOf()
//  let city1="Pune"

// P u n e
// 0 1 2 3

// let a2=city1.indexOf('u')
// console.log(a2)

// let a3=city1.indexOf('e')
// console.log(a3)ds

// let a4=city1.indexOf('p')
// console.log(a4)//-1

// let a5=city1.indexOf('x')
// console.log(a5)//-1

//4.includes()
// let b1=city1.includes("p")
// console.log(b1)
// let b2=city1.includes('n')
// console.log(b2)

//5.startsWith()
// let name1='Mayuri'
// let y1=name1.startsWith('may')
// console.log(y1)
// let y2=name1.startsWith('M')
// console.log(y2)
// //6.endsWith()
// let y3=name1.endsWith('yuri')
// console.log(y3)
// let y4=name1.endsWith('ayu')
// console.log(y4)

//7.trim()

// let name1=" mayuri"
// // m y u r i
// /0 1 2 3 4 5
// console.log(name1.length)
// let u1=name1.trim()
// console.log(u1)
// console.log(u1.length)

//8.trimStart()
//let name1=" mayuri "
// console.log(name1.length)//8
// let u2=name1.trimStart()
// console.log(u2)
// console.log(u2.length)//7

//9.trimEnd()
// let name1=" mayuri "
// console.log(name1.length)//8
// let u2=name1.trimEnd()
// console.log(u2)
// console.log(u2.length)//7

//10.slice()
// let fruit='apple'
//app
//pple
//ple

// /-5 -4 -3 -2 -1
// //a  p  p  l  e
// //0  1  2  3  4 

// //String.slice(startposition,endposition)
// //endposition optional
// //endposition always less than 1
// //left rigth

// let fruit='apple'
// let m1=fruit.slice(2)//ple
// console.log(m1)

// let m2=fruit.slice(0,3)
// console.log(m2)//app

// let m3=fruit.slice(3,1)
// console.log(m3)

// let m4=fruit.slice(-1,-4)
// console.log(m4)

// let m5=fruit.slice(-2)
// console.log(m5)

// let m6=fruit.slice(-4,-1)
// console.log(m6)

// let m7=fruit.slice(-3,2)
// console.log(m7)

// let m8=fruit.slice(-2,2)
// console.log(m8)//ppl

// let u3=fruit.slice(-2,-2)
// console.log(u3)

// //11.split()
//array

// let firstName='mayuri m katwe'
// let p1=firstName.split('a')
// console.log(p1)
// // //[m,yuri]
// let p2=firstName.split('')
// console.log(p2)
// let p3=firstName.split(' ')
// console.log(p3.join(''))

//12.charAt()
// let fruit="apple"
// let y1=fruit.charAt(3)
// console.log(y1)

// let y2=fruit.charAt(7)
// console.log(y2)

// //13.charCodeAt()
// let r1=fruit.charCodeAt(4)
// console.log(r1)

// let r2=fruit.charCodeAt(10)
// console.log(r2)

// //array ==>join()=>string

// //string==>split()==>array

//string concatination(+)
//string+string==>
//string+number==>string
//number+string==>string
//number+number==>number
// let a="mayuri"
// let b=10
// let c=20

// console.log(b+c)//30
// console.log(a+b)//mayuri10
// console.log(b+c+a)//30mayuri
// console.log(a+b+c)//mayuri1020

let firstName="mayuri"
let lastName="katwe"

//my firstName is mayuri and my lastName is katwe
//console.log("my firstName is"+firstName+"and my lastName is"+lastName)

///my firstName ismayuri andmy lastName iskatwe

//string interpolation

console.log(`My firstName is ${firstName} and my lastName is ${lastName}`)

console.log(typeof `${2+2}`)

console.log(`20`)
console.log(20)
