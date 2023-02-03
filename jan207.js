let n=[11,22,33,44,55]
//[13,24,35,46,57,68,79]
let s=n.map(function(el,index,arr){
   return el+2
})
console.log(s)

let birthyear=[1989,1990,1991,1992]
let age=birthyear.map(function(el,index,arr){
    return 2023-el
    
})
console.log(age)

let numbers=[22,33,44,55,22,33,44,55,66]
let above50=numbers.filter(function(el,index,arr){
       return el>50
})

console.log(above50)
let numbers1=[22,33,44,55,22,33,44,55,66]
let even=numbers1.filter(function(el,index,arr){
    return el%2==0
})
console.log(even)

//program 3

let nnm=[11,22,33]//66

let sum=0
for (let i=0;i<nnm.length;i++){
    sum=sum+nnm[i]
}
console.log(sum)
let sumA=nnm.reduce(function(acc,el,index,arr){
    return acc+el
})
console.log(sumA)

let bal=[11,22,33,44,55,66,110,123,-190,323,-900,-99000]
let deposit=bal.filter(function(el,index,arr){
    return el>0
})
console.log(deposit)
let withdraw=bal.filter(function(el,index,arr){
    return el<0
})
console.log(withdraw)
let totalbal=deposit.reduce(function(acc,el,index,arr){
   return acc+el
})
console.log(totalbal)
//map(),filter(),reduce()//forEach
let names=["chinmay","shirish","ram"]
names.forEach(function(el,index,arr){
    console.log("welcome"+el)
})

//map(),filter(),reduce()//forEach

//map()
let arr=[11,22,33,44,55,66,77,88,99,100]
let q1=arr.map(function(el,index,arr){
    return el*10
})
console.log(q1)

//filter()
let transaction=[333,444,55,-56,77,-89,199,22,22,-900,800,1000]
let deposits=transaction.filter(function(el,index,arr){
    return el>0
})
console.log(deposits)
let withdrawls=transaction.filter(function(el,index,arr){
     return el<0
})
console.log(withdrawls)

////reduce()
let totald=deposits.reduce(function(acc,el,index,arr){
    return acc+el
})
console.log(totald)

let totalw=withdrawls.reduce(function(acc,el,index,arr){
    return acc+el
})
console.log(totalw)

//forEach()
let city=["pune","mumbai","nagpur","delhi","kolkatta"]
city.forEach(function(el,index,arr){
    console.log("welcome"+el)
})

let a1=[44,66,33,66,55,77]
//find()
let qq=a1.filter(function(el,index,arr){
     return el>50
})
console.log(qq)

let qqa=a1.find(function(el,index,arr){
    return el>50
})
console.log(qqa)

////findIndex()
let qqqa=a1.findIndex(function(el,index,arr){
       return el>50
})
console.log(qqqa)

//some
let marks=[33,44,56,77,44,55,66]
let w1=marks.some(function(el,index,arr){
    return el>77
})
console.log(w1)

//every()

let w2=marks.every(function(el,index,arr){
    return el>10
})
console.log(w2)

