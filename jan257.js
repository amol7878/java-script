let names=["chinmay","poorva","mayuri","amit"]
console.log(typeof names)
let name1="chinamay"
console.log(typeof name1)

//// array ==object
//property and Method
//action and return
console.log(names.length)
//push()
let q1=names.push("amey")
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
//[ 'chinmay', 'poorva', 'mayri', 'amit' ]

let q5=names.reverse()
console.log(names)

//includes()
//[ 'amit', 'mayri', 'poorva', 'chinmay' ]
let q6=names.includes("Poorva")
let q7=names.includes("amit")
console.log(q6)
console.log(q7)

//indexOf()
//     0       1        2          3
//[ 'amit', 'mayuri', 'poorva', 'chinmay' ]
let q8=names.indexOf("poorva")
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

//reduce()
let q12=numbers.reduce(function(acc,el,inde,arr){
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
let w2=j.find(function(el,index,arr){
    return el>60
})
console.log(w2)

//findIndex()
let w3=j.findIndex(function(el,index,arr){
    return el>60
})
console.log(w3)

//some()
let w4=j.some(function(el,index,arr){
    return el>60
})
console.log(w4)

//every()
let w5=j.every(function(el,index,arr){
    return el>78
})
console.log(w5)

/////==============================================================================================
//concat()
let k=[11,22,33]
let l=[44,55,66]
let q14=k.concat(l)
console.log(q14)
let q15=l.concat(k)
console.log(q15)

//flat()
//            0          1          2
//        0   1  2   0   1  2    0  1  2 
let jkl=[[11,22,33],[44,55,66],[77,88,99]]
console.log(jkl[0])//[11,22,33]
console.log(jkl[1][2])
console.log(jkl[1][1])
console.log(jkl[2][0])

let q16=jkl.flat()
console.log(q16)

//join()
let info=["chinmay","deshpande","7778889999"]
let aa=info.join('@')
console.log(aa)

//sort()
let country=["india","australia","america","pakistan"]
let q17=country.sort()
console.log(q17)

//at()
//            0        1       2        3
let fruits=["apple","mango","banana","grapes"]
let q18=fruits.at(2)
console.log(q18)

//slice()
//             0        1          2        3        4         5         6
let cities=["wardha","nagpur","banglore","delhi","amravati","chennai","delhi"]
//             -7       -6       -5         -4       -3        -2        -1
//cities.slice(start,endposition)
let q111=cities.slice(3)
console.log(q111)
console.log(cities.slice(1,5))     
console.log(cities.slice(0,4))   
console.log(cities.slice(-4))   
console.log(cities.slice(-7,-4))   
console.log(cities.slice(1,-4))   
console.log(cities.slice(-7,5))   
console.log(cities.slice(-1,4))   
                            
//splice()
//                 0        1         2        3
let vegetables=["tomato","potato","brinjal","onion"]
//vegetables.pop()
//vegetables.shift()
console.log(vegetables)
//vegetables.splice(startindex,numberof element to be deleted)
let q333=vegetables.splice(2,1)
console.log(q333)
console.log(vegetables)
//vegetables.splice(startindex,numberof element to be deleted,repl,repl)
vegetables.splice(1,2,"cabbage","caulyflower","carrot")
console.log(vegetables)

//fill()
//         0   1  2 3  4  5   6
let marks=[22,33,44,55,66,77,88]
//let q444=marks.fill(true,1)
//console.log(q444)
let q555=marks.fill(true,1,4)
console.log(q555)