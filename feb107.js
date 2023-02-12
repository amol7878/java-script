let names=["amol","akash","ram","satidh"]
let a=names[0]
let b=names[1]
let c=names[2]
let d=names[3]
console.log(a)
console.log(b)
console.log(c)
console.log(d)

let[a1,a2,a3,a4]=names
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
//                0          1
//            0   1 2    0   1  2
let numbers=[[11,22,33],[44,55,66]]
console.log(numbers)

let[[x1,x2,x3],[y1,y2,y3]]=numbers
console.log(x1)
console.log(y1)

//program3

let info={
    firstName:"chinmay",
    lastName:"deshpande"
}

let s1=info.firstName
console.log(s1)
let s2=info.lastName
console.log(s2)
let s3=info["firstName"]
console.log(s3)
let s4=info["lastName"]
console.log(s4)

info={
    firstName:"chinmay",
    lastName:"deshpande"
}
let{firstName,lastName}=info
console.log(firstName)
console.log(lastName)

//program4=
let info3 = {
    firstName: "ninad",
    lastName: "dani",
    parents: {
        mother: "manali",
        father: "mohan"
    }
}

let {firstName:f1,lastName:l1,parents:{mother:mn,father:fna}}=info3
console.log(fna)
console.log(f1)

//program5
let student={
    fullName:"chinmay deshpande",
    age:32,
    skills:["python","django","javascript","css"],
    parents:{
        father:"shirish",
        mother:"kanchan"
    }
}

let {fullName:q1,age:q2,skills:[q3,q4,q5,q6],parents:{father:q7,mother:q8}}=student
console.log(q1)
console.log(q2)
console.log(q3)
console.log(q4)
console.log(q5)
console.log(q6)
console.log(q7)
console.log(q8)

//program6

let student1=[
    {
    firstName:"samay",
    lastName:"jain"
},
{
    firstName:"raj",
    lastName:"kumar"

}
]
let [{firstName:w1,lastName:w2},{firstName:w3,lastName:w4}]=student1
console.log(w1)
console.log(w2)
console.log(w3)
console.log(w4)
