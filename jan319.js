//String

//1.toUpperCase()
//2.toLowerCase()
//3.indexOf()
//4.includes()
//5.tirm()
//6.trimStart()
//7.trimEnd()

let flower="jasmin"
//j a s m i n
//0 1 2 3 4 5
console.log(flower)
console.log(typeof flower)
console.log(flower[2])//s
console.log(flower.length)

//8.startsWith()
//action=>check whether string starts with given char/substring
//return==>boolean

let flower1="jasmin"
let a=flower1.startsWith("j")
console.log(a)
let b=flower1.startsWith("jas")
console.log(b)
let c=flower1.startsWith("Ja")
console.log(c)
let d=flower1.startsWith("min")
console.log(d)

//9.endsWith()
//action=>check whether string end with given char/substring
//return==>boolean

let firstName="Shree Ganesh"
let s1=firstName.endsWith("ganesh")
console.log(s1)
let s2=firstName.endsWith("Ganesh")
console.log(s2)

console.log(firstName.endsWith("h"))

//9.slice()
//action==>break string as per start and end index
//return =>string

let firstName1="Shree Ganesh"
//-12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
// S   h   r   e  e     G  a  n  e  s  h
// 0   1   2   3  4  5  6  7  8  9  11 12
//left==>right
//right==>left==>blank string
//string.slice(startposition,endposition)
//endposition optional
//endposition number is always less than 1

let a1=firstName1.slice(6)
console.log(a1)//Ganesh
let a2=firstName1.slice(4,10)
console.log(a2)//e Gane
let a3=firstName1.slice(-3)
console.log(a3)//esh
let a4=firstName1.slice(9,4)
console.log(a4)//
let a5=firstName1.slice(-9,-3)
console.log(a5)
let a6=firstName1.slice(2,-4)
console.log(a6)

//10.split()
//return==>array

let firstName2="mayuri k"
let d1=firstName2.split("y")
console.log(d1)//["ma", "uri k"]
let d2=firstName2.split(" ")
console.log(d2)//["mayuri","k"]
let d3=firstName2.split("")
console.log(d3)

//11.charAt()
//if index not found==>blank string
let firstName3="mayuri"
// m a y u r i
// 0 1 2 3 4 5
let w1=firstName3.charAt(1)
console.log(w1)
let w2=firstName3.charAt(7)
console.log(w2)

console.log(firstName3.charAt(5))

//12.charCodeAt()
//return==>ASCII value 
console.log(firstName3.charCodeAt(2))//y
console.log(firstName3.charCodeAt(8))//NAN
console.log(undefined+undefined)


//array===>join()
//string==>split()==>array
