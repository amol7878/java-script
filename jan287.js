let firstName="chinmay"
let lastName="deshpande"
let middleName="shirish"

console.log(firstName)
console.log(lastName)
console.log(middleName)

let city="pune"
// 0 1 2 3 
// p u n e
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

let city2="chandrapur"
//  0    1  2  3  4  5  6  7  8  9
//  c    h  a  n  d  r  a  p  u  r
//-10   -9 -8 -7 -6 -5 -4 -3 -2 -1
for(let i=0;i<city2.length;i++){
    //console.log(i)
    console.log(city2[i])
}

city2="Chandrapur"
//  0    1  2  3  4  5  6  7  8  9
//  c    h  a  n  d  r  a  p  u  r
//-10   -9 -8 -7 -6 -5 -4 -3 -2 -1

let q1=city2.toUpperCase()
console.log(q1)

let q2=city2.toLowerCase()
console.log(q2)

//Method of chaining
//let q3=city2.toLowerCase().city2.toUpperCase().length.city2.toUpperCase()
//          "chandrapur"           "CHANDRAPUR"    10
//console.log(q3)

let city3="Bhopal"
let q4=city3.includes("B")
console.log(q4)


let city4="Bhopal"
let q5=city4.indexOf("o")
let q6=city4.indexOf("O")
console.log(q5)
console.log(q6)

let q7=city4.startsWith("Bho")
let q8=city4.startsWith("bho")
let q9=city4.startsWith("b")
console.log(q7)
console.log(q8)
console.log(q9)

let q10=city4.endsWith("pal")
let q11=city4.endsWith("l")
let q12=city4.endsWith("kk")
console.log(q10)
console.log(q11)
console.log(q12)

city2="Chandrapur"
//  0    1  2  3  4  5  6  7  8  9
//  c    h  a  n  d  r  a  p  u  r
//-10   -9 -8 -7 -6 -5 -4 -3 -2 -1

let q13=city2.charAt(3)
console.log(q13)

//q13.slice(start,stop)
console.log(city2.slice(2))
console.log(city2.slice(2,6))
console.log(city2.slice(-5))
console.log(city2.slice(-7,-3))
console.log(city2.slice(2,-3))
console.log(city2.slice(-1,-4))

//trim()
let city9=" pune "
console.log(city9.length)
let q3=city9.trim()
console.log(q3)
console.log(q3.length)

//trimStart()
console.log(city9.length)
let q3a=city9.trimStart()
console.log(q3a)
console.log(q3a.length)

//trimEnd()
console.log(city9.length)
let q3aa=city9.trimEnd()
console.log(q3aa)
console.log(q3aa.length)

let jkl="I am Learning js"
let e=jkl.replace('js','python')
console.log(e)

let abc="i am student"
let ac=abc.replace("student","boy")
console.log(ac)
