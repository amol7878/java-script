
//            0          1       2     3
let names=["Chinmay","Sarika","ram","Satish"]
names2= names
names2[0]="ninad"
console.log(names)
console.log(names2)


//Program 1

//Spread Operator

let numbers=[11,22,33,44,55,66,77]
function addThree(a,b,c){
console.log(a+b+c)
}
addThree(...numbers)

//[11,22,33,44,55,66,77]==>11,22,33

//Program 2

let cities =["pune","Mumbai","Kolkata"]

let cities2= [...cities]

cities2[0]="wardha"

console.log(cities)
console.log(cities2)

//Program 3

let a=[11,22,33]
let b=[44,55,66]
let c=a.concat(b)
console.log(c)
console.log(a)
console.log(b)
let d=[...a,5,...b]

console.log(d)

// Program 4

let obj1={name:"john",age:25};
let obj2={city:"Deepa",country:"USA"}
let obj3={...obj1,...obj2}
console.log(obj3)

//Program 5

function addAll(...eles){
    console.log(eles)
    return eles.reduce(function(acc,el,index,arr){
     return acc+el
    },0)
}


let q1=addAll(11,22,33,44,55,66,77,88,990,5,7)
console.log(q1)

//Program 6

let numberD=[22,33,44,55,66]
let[a1,b1,c1,...d1]=numberD
console.log(a1)
console.log(b1)
console.log(c1)
console.log(d1)

//Program 7

let obj1a={firstName:"rasika",lastName:"dani",middleName:"Shirish"}
let {firstName,...restinfo}=obj1a

console.log(obj1a)
console.log(firstName)
console.log(restinfo)


