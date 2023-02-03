//              0       1       2       3         4
// let names=["chinmay","sarika","ram","poorva","satish"]
// let numbers=[22,33,44,55,66,77,88,99,10]
// let info=["chinmay","deshpande",7709192441,true]

// console.log(names[0])
// console.log(numbers[1])
// console.log(info)

//============Looping to print element of array


// let cities=["pune","mumbei","nagpure","wardha"]
// console.log(cities[0])

// for(let i=0;i<=3;i++){//1///2//3
//     console.log(i)//0//1//2//3
//     console.log(cities[i])
//     // 1st i=0
//     //2nd i=1
//     //3rd i=2
//     //4th i=3
// }

//Javasript object
//array-object
//object property method

//porperty length

// let country=["india","pakistan","srilanka","bangladesh"]
// console.log(country.length)
// console.log(country.length-1)
// for(let i=0;i<country.length;i++){
//     console.log(i)
//     console.log(country[i])
// }

//Method 
//Action
//Return type

//push()
//action-add the element at last of array
// //rturn-new length of array


// let vegetables=["cabbage","bringel","cauliflower","tomato"]
// console.log(vegetables)
// let q1=vegetables.push("ladfinger")
// console.log(q1)
// console.log(vegetables)

//unshift()
//Action--add the element at start of array
//return-new lwngth of array

// let q2=vegetables.unshift("carrot")
// console.log(q2)
// console.log(vegetables)

// pop()
//Acton--Removes th last element
//return-returns the same

//              0      1        2        3
// let fruits=["apple","Mango","banana","Grapes"]
// console.log(fruits)
// let q3=fruits.pop()
// console.log(fruits)
// console.log(q3)

//shift()
//Action-Removes th first element
//Return-first element

// let q4=fruits.shift()
// console.log(fruits)
// console.log(q4)


// 4 Method 

//Push()=========New Length
//unshift()======New Length
//pop()==========returns last element
//shift()========returns first element


//includes()
//action-search for element
//return- Boolean value

let animals=["tiger","lion","panther","rabbit"]
let q5=animals.includes("Tiger")
let q6=animals.includes("tiger")
console.log(q6)
//rverse()
let q7=animals.reverse()
console.log(q7)

//indexof()
//
let numberss=[555,666,777,8888,9999,8888]
console.log(numberss)
let q8=numberss.indexOf(666)
let q9=numberss.indexOf(10000)
console.log(q8)
console.log(q9)

//join
let infob=["chinmay","deshpande",7709192441]
let q10=infob.join("")//"chinmay-deshpande-7709192441"
console.log(q10)
console.log(typeof q10)



