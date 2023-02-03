//slice()
//       -8 -7 -6 -5 -4 -3 -2 -1
let num=[23,56,78,11,22,33,55,99]
//       0  1   2  3  4  5  6  7

console.log(num.slice(4))//[22,33,55,99]
console.log(num.slice(-4,0))//[]
console.log(num.slice(2,6))

//splice()
//return==>removed element array
let marks=[11,22,33,44,55,66,77,88]
//         0  1  2  3  4  5  6   7 
//arrayname.splice(startindex,no of deleted element,repl1,repl2)
console.log(marks.splice(1,2,100,200))//
console.log(marks)
//[11, 100, 200, 44,55,  66,  77, 88]
let a=marks.splice(2,3)
console.log(a)//[200,44,55]
console.log(marks)//[11,200,66,77,88]

//fill()
let marks1=[11,22,33,44,55,66,77,88]
//         0  1  2  3  4  5  6   7 
//arrayname.fill(replacevalue,startposition,endposition)
let y1=marks1.fill(200,2)
console.log(y1)//[11,22,200,200,200,200,200,200]
let y2=marks1.fill("mayuri",3,6)//[11,22,33,"mayuri","mayuri","mayuri",77,88]
console.log(y2)

//at()
let marks2=[11,22,33,44,55,66,77,88]
//         0  1  2  3  4  5  6   7 
let a1=marks2.at(5)
console.log(a1)
let a2=marks2.at(7)
console.log(a2)
let a3=marks2.at(10)
console.log(a3)//undefined

//concat()
let b=[2,3,4]
let c=[10,20,30]
let d=[99,90,98]
let e=[100,200,300]
let result=b.concat(c)
console.log(result)
let result1=c.concat(b)
console.log(result1)

console.log(b.concat(c))//[2,3,4,10,20,30]
console.log(c.concat(b))//[10,20,30,2,3,4]

console.log(b.concat(c).concat(d).concat(e))

//slice()
//splice()
//fill()
//at()
//concat()
