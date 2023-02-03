let firstName="chinmay"
let lastName='deshpande'
let middleName=`shirish`

let city="pune"
//0 1 2 3
//p u n e

console.log(city[0])
console.log(city[1])

let city2="chandrapur"
//  0    1  2  3  4  5  6  7  8  9
//  c    h  a  n  d  r  a  p  u  r
for(let i=0;i<city2.length;i++){
    //console.log(i)
    console.log(city2[i])
}
//stirng==object
//object==property and method
//method=action and return

let city3="Nagpure"
let q1=city3.toUpperCase()
console.log(q1)

let q2=city3.toLowerCase()
console.log(q2)
let q3=city3.includes('a')
let q4=city3.includes("n")
console.log(q3)
console.log(q4)

let q5=city3.indexOf("p")
let q6=city3.indexOf("P")
console.log(q5)
console.log(q6)

//toUpperCase(),//ToLowerCase(),includes(),indexOf()
//starstWith(),endsWith(),trim(),trimStart(),trimEnd()

let city4="Bhopal"
let q7=city4.startsWith("B")
let q8=city4.startsWith("Bho")
let q9=city4.startsWith("b")
console.log(q7)
console.log(q8)
console.log(q9)

city4="Bhopal"
let q10=city4.endsWith("l")
let q11=city4.endsWith("Pal")
let q12=city4.endsWith("al")
console.log(q10)
console.log(q11)
console.log(q12)

//trim()
let city7=" pune "
console.log(city7.length)
let q13=city7.trim()
console.log(q13.length)
console.log(q13)

//trimstart()
let city8=" pune "
console.log(city8.length)
let q14=city8.trimStart()
console.log(q14.length)
console.log(q14)

//trimEnd()
let city9=" pune "
console.log(city9.length)
let q15=city9.trimStart()
console.log(q15.length)
console.log(q15)

let city10="wardha"
// 0 1 2 3 4 5
// w a r d h a

console.log(city10[0])
let q16=city10.charAt(2)
console.log(q16)

//slice(startposition,endposition)
//0   1   2   3   4  5
//w   a   r   d   h  a
//-6 -5  -4  -3  -2 -1

console.log(city10.slice(2))
console.log(city10.slice(-3))
console.log(city10.slice(1,5))
console.log(city10.slice(-4,-1))
console.log(city10.slice(1,-1))
console.log(city10.slice(-4,5))
console.log(city10.slice(-1,4))
