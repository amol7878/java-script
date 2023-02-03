//string store the value by index

let firstName='chinmay'
let lastName='deshpande'
let middle='satish'

console.log(firstName[0])
console.log(lastName[1])
//0 1 2 3 4 5 6
//c h i n m a y

//sting==object

let city='pune'

//0 1 2 3 
//p u n e
console.log(city[0])

let city1='chandrapur'
//0 1 2 3 4 5 6 7 8 9
//c h a n d r a p u r
console.log(city1[0])
//object==property and method 
//method action and return type

for (let i=0;i<city1.length;i++){
    //console.log(i)
    console.log(city1[i])
}
//Method
//UpperCase()
let city2='jaipure'
let q=city2.toUpperCase()
console.log(q)

//LowerCase()
let city3='GOA'
let q1=city2.toLowerCase()
console.log(q1)

let city4='nagpur'
let q2=city3.includes("N")
let q3=city3.includes("n")
let q4=city3.includes("nag")
let q5=city3.includes("UR")
console.log(q2)
console.log(q3)
console.log(q4)
console.log(q5)

let city5='raipur'
//0 1 2 3 4 5
//r a i p u r

let q6=city5.indexOf('a')
let q7=city5.indexOf('A')
console.log(q6)
console.log(q7)

let city6='udaipur'
let q8=city6.startsWith('uda')
let q9=city6.startsWith('u')
let q10=city6.startsWith('i')
console.log(q8)
console.log(q9)
console.log(q10)

let city7='wardha'
let q11=city7.endsWith('a')
let q12=city7.endsWith('dha')
let q13=city7.endsWith('Dha')
console.log(q11)
console.log(q12)
console.log(q13)

let city8='kanpur'
let q14=city8.charAt(2)
console.log(q14)