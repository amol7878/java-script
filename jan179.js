//Array=>index
// let student=["mayuri","Amol","satish","jaya","habib","mayuri"]
// console.log(student.length)
// console.log(student[0])
// console.log(student[1])
// console.log(student[2])
// console.log(student[3])
// console.log(student[4])
// console.log(student[5])

//javascript====>object
//Object
//Property
//Method

//Method
//Action
//Return

//Length==>Property

//Method

//1.push()
// Add element at last
//New Length

// let marks=[22,44,55,66,77,88,99,66,44]
// let a=marks.push(1000)
// console.log(a)//10
// console.log(marks)

//2.Unshift()
// Add element at First
//New Length

// let marks1=[22,44,55,66,77,88,99,66,44]
// let b=marks1.push(456)
// console.log(b)//10
// console.log(marks1)

//3.pop()
//remove the last element
//removed element

// let flower=["lilly","jasnine","rose","sunflower"]
// console.log(flower.pop())
// console.log(flower)

//4.shift()
//remove the first element
//removed element

// let flower=["lilly","jasnine","rose","sunflower"]
// console.log(flower.shift())
// console.log(flower.length)
// console.log(flower)

//5.index()
//Give the index of given element if found and if not found then return -1
//number(index)
//           0  1  2  3  4  5  6  7
let scores=[23,65,89,99,56,45,34,65]
console.log(scores.indexOf(65))//1
console.log(scores.indexOf(89))//3
console.log(scores.indexOf(100))//-1

let names=["ram","sham","ram","sita"]
console.log(names.indexOf('ram'))//0

//includes()
//check whether element present in array or not if present then true if not then false
//boolean
let scores1=[23,65,89,99,56,45,34,65]
console.log(scores1.includes(678))//false
console.log(scores1.includes(99))//true

//7.flat()
//convert all element into single array
//new array
//             0         1      2
let numbers=[[1,2,3],[4,5,6],[7,8,9]]
console.log(numbers[0])//[1,2,3]
console.log(numbers[0][0])//1
console.log(numbers.flat())

//8.join()
//to connect all element
//string
let student=["mayuri","jaya","krishna"]
let a2=student.join()//mayuri,jaya,krishna
console.log(typeof a2)
console.log(student.join())
console.log(student.join(''))





