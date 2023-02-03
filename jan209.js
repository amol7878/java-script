//array
let rollnumber = [20, 10, 56, 78, 34, 89, 98, 78]
// //+5
// //[25,15..]
let newrollnumber = []
for (i = 0; i < rollnumber.length; i++) {
    let newrn = rollnumber[i] + 5
    newrollnumber.push(newrn)
}
console.log(newrollnumber)

//map()
//action=>perform operator with each and every element of array
//return=>new array

let rollnumber1 = [20, 10, 56, 78, 34, 89, 98, 78]
let newrollnumber1 = rollnumber1.map(function (el, index, arr) {
    return el + 5
})
console.log(newrollnumber1)

let birthyear = [1985, 1989, 1890, 2003, 2000]
let age = birthyear.map(function (el, index, arr) {
    return 2023 - el
})
console.log(age)

let scores = [23, 12, 78, 90, 45, 67, 09, 11, 65]
// //score greter than 50[78,90,67,65]
let greter50 = []
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 50) {
        greter50.push(scores[i])
    }
}
console.log(greter50)

//filter()
//action=>filter out the element based on condition
//return =>new array

let greterr50=scores.filter(function(el,index,arr){
     return el>50
})
console.log(greterr50)

let marks=[12,45,67,10]
let val=0//12//57//124//134
for(let i=0;i<marks.length;i++){
  val=val+marks[i]
}
console.log(val)

//reduce()
let sum=marks.reduce(function(acc,el,index,arr){
        return acc+el
})
console.log(sum)

let sum1=marks.reduce(function(acc,el,index,arr){
        return acc+el
},10)
console.log(sum1)

let sum2=marks.reduce(function(acc,el,index,arr){
        return acc+el
},0)
console.log(sum2)



