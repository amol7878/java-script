//             0         1        2        3
let names=["chinmay","sarika","poorva","satish"]
let numbers=[22,33,44,55,66,77,88,99,10]
let info=["chinmay","deshpande",77901299,true]
console.log(names[0])
console.log(names[1])
console.log(info)

//looping to print element of array

let cities=["pune","mumbai","nagpure","wardha"]
console.log(cities[0])
for(let i=0;i<=3;i++){
    //console.log(i)//0,//1//2//3
    console.log(cities[i])
    //1st i=0
    //2nd i=1
    //3rd i=2
    //3th i=3
}

//javscript object
//Array-object
//object property and method

//property length

let country=["india","pakistan",'srilanka',"bangladesh"]
console.log(country.length)
console.log(country.length-1)
for(let i=0;i<country.length;i++){
    //console.log(i)
    console.log(country[i])
}
//Method 
//Action
//Return Type

//push()
//Action=>add the element at last
//Return=>new length of array
//
let vegetables=["cabbage","bringel","cauliflower","tomato"]
console.log(vegetables)
let a1=vegetables.push("ladyfinger")
console.log(a1)
console.log(vegetables)

//unshift()
let q2=vegetables.unshift("carrot")
console.log(q2)
console.log(vegetables)

//pop()
//action=>removes the last element
//return=>return the same

let fruits=["aaple","banana","mango","grapes"]
let q3=fruits.pop()
console.log(q3)
console.log(fruits)

//shift()
//action=>removes the first element
//return=>first element
let q4=fruits.shift()
console.log(q4)
console.log(fruits)

//4 Method 
//push()-new length
//unshift()-new length
//pop()-returns last element
//shift()-returns first element

//includes()
//Action=>search for element
//return-boolean value

let animals=["tiger","lion","panther","rabbit"]
let q5=animals.includes("Tiger")
let q6=animals.includes("tiger")
console.log(q5)
console.log(q6)
let q7=animals.reverse()
console.log(q7)

//indexOf()

let numberss=[555,666,777,888,9999,888]
console.log(numberss)
let q8=numberss.indexOf(777)
let q9=numberss.indexOf(888)
console.log(q8)
console.log(q9)

//join()
let infoB=["chinay","deshpande","3334555544"]
let q10=infoB.join("")
console.log(q10)
console.log(typeof infoB)

//Program 1
//               0    1    2    3
let birthyear=[1989,1990,1991,1992]
let ages=[]//[34,33,32,31]
//[34,33,32,31]

for(let i=0;i<birthyear.length;i++){
    //console.log(i)
   // console.log(birthyear[i])
   //console.log(2023-birthyear[i])
   let age=2023-birthyear[i]
   ages.push(age)
}
console.log(ages)


//program 2

let age =[11,22,33,44,55,22,33,44,66,77]
//[44,55,66,77]
let above40=[]//[44,55,66,77]
let below40=[]
for (let i=0;i<age.length;i++){
    //console.log(i)
    //console.log(age[i])
    if(age[i]>40){
        above40.push(age[i])
    }
    else{
         below40.push(age[i])
    }
}
console.log(above40)
console.log(below40)

//program 3
let addition=[11,22,33]//66
let total=0
for (let i=0;i<addition.length;i++){
    total=total+addition[i]
}
console.log(total)
//program 4

let namesA=["chinmay","sarika","satish","sanket"]
for (i=0;i<namesA.length;i++){
    //console.log(i)
    //console.log(namesA[i])
    console.log("wlcome"+namesA[i])
}
