let arr=[11,22,33,44,55]
//console.log(arr[0])//11
// let a=arr[0]
// let b=arr[1]
// let c=arr[2]
// let d=arr[3]
// let e=arr[4]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

//destructure
let numbers=[11,22,33]
let [a1,a2,a3]=numbers
console.log(a1)
console.log(a2)
console.log(a3)

let names=["poorva","mayuri","abhilasha"]
let [q1,q2,q3]=names
console.log(q1)
console.log(q2)
console.log(q3)

//program2
//               0       1  
//             0 1 2   0 1 2 
let numberss=[[1,2,3],[4,5,6]]
let [[x1,x2,x3],[x4,x5,x6]]=numberss
console.log(x3)
console.log(x4)
console.log(x5)

//program 3

let info={
    firstName:"amol",
    lastName:"rao",
    age:33
}
let {firstName,lastName,age}=info
console.log(firstName)
console.log(lastName)
console.log(age)

let vehical={
    color:"red",
    type:"sedane"
}
let {color,type}=vehical
console.log(color)
console.log(type)

//program 4
let family={
    firstName:"chinmay",
    lastName:"deshpande",
    parent:{
        mother:"kanchan",
        father:"shirish"
    }
}
let {firstName:f1,lastName:l1,parent:{mother:m1,father:f2}}=family
console.log(f1)
console.log(f2)
console.log(l1)
console.log(m1)

let state={
    MH:{
        city:"pune",
        city2:"mumbai"
    },
    MP:{
        city:"bhopal",
        city2:"indore"
    }
}

let {MH:{city:c1,city2:c2},MP:{city:c3,city2:c4}}=state
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)


//program 5

let stud={
    firstName:"mayuri",
    lastName:"rao",
    age:34,
    skills:["sql","testing","js"]
}
let {firstName:ff1,lastName:ff2,age:aa3,skills:[rr1,rr2,rr3]}=stud
console.log(rr2)
console.log(rr3)
console.log(aa3)

//program 6
let student=[
    {
        firstName:"mayuri",
        lastName:"rao",
         age:34
    },
    {
        firstName:"amol",
        lastName:"rao",
         age:32
    }
]
let [b1,b2]=student
let [{firstName:q11,lastName:q22,age:q33},{firstName:q44,lastName:q55,age:q66}]=student
console.log(b1)
console.log(b2)

console.log(q11)
console.log(q22)
console.log(q33)
console.log(q44)
console.log(q55)
console.log(q66)
