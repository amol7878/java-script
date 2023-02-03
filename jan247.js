//             0         1        2       3
let names=["chinmay","poorva","mayuri","amit"]
//array----object
//property and method
//action and return
console.log(names.length)

//push()
let q1=names.push('amey')
console.log(q1)
console.log(names)

//unshift()
let q2=names.unshift("ram")
console.log(q2)
console.log(names)

//pop()
let q3=names.pop()
console.log(q3)
console.log(names)

//shift()
let q4=names.shift()
console.log(q4)
console.log(names)
//reverse()
//[ 'chinmay', 'poorva', 'mayuri', 'amit' ]
let q5=names.reverse()
console.log(q5)

//includes()
//[ 'amit', 'mayuri', 'poorva', 'chinmay' ]
let q6=names.includes('Poorva')
let q7=names.includes("amit")
console.log(q6)
console.log(q7)

//indexOf()
//[ 'amit', 'mayuri', 'poorva', 'chinmay' ]
let q8=names.indexOf("mayuri")
console.log(q8)
let q9=names.indexOf("mayur")
console.log(q9)

//map()
let numbers=[22,33,44,66]
let q10=numbers.map(function(el,index,arr){
    return el+2
})
console.log(q10)

//filter()
let q11=numbers.filter(function(el,index,arr){
    return el<40
})
console.log(q11)

let q12=numbers.reduce(function(acc,el,index,arr){
    return el+acc
},2)
console.log(q12)

//forEach()
let city=["pune","mumbai","banglore","kolkata","chennai"]
city.forEach(function(el,index,arr){
    console.log("welcome"+el)
})

//find()
let j=[11,22,33,44,22,33,44,55,66,77]
let q13=j.find(function(el,index,arr){
    return el>60
})
console.log(q13)
//findIndex()
let q14=j.findIndex(function(el,index,arr){
    return el>60
})
console.log(q14)


//some()
let q15=j.some(function(el,index,arr){
    return el>60
})
console.log(q15)

//every()
let q16=j.every(function(el,index,arr){
    return el>10
})
console.log(q16)

//===================================================================================================

//concat()
let k=[11,22,33]
let l=[44,55,66]

let q17=k.concat(l)
console.log(q17)
let q18=l.concat(k)
console.log(q18)

//flat()
//            0          1          2 
//         0  1  2    0  1  2    0  1  2 
let jkl=[[11,22,33],[44,55,66],[77,88,99]]
console.log(jkl[0][0])//[11,22,33]
console.log(jkl[1][2])
console.log(jkl[1][1])
console.log(jkl[2][0])
let q19=jkl.flat()
console.log(q19)

//join()
let info=["chinmay","deshpande",770192441]
let q20=info.join('@')
console.log(q20)

//sort()
let country=['india','australia','america','pakistan']
let q21=country.sort()
console.log(q21)

//at()
//
let fruits=['apple','mango','banana',"grapes"]
let q22=fruits.at(2)
console.log(q22)
