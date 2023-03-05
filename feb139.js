//destructuring
//[12 pair]//blue

//[]
//{}
//[{}]

//1.array

let rollnumber=[12,23,34,45,56,78]
let a=rollnumber[0]//12
console.log(a)
let [x,y,z,p,q,r]=rollnumber
console.log(x)
console.log(y)
console.log(z)
console.log(p)
console.log(q)
console.log(r)

// //2.nested array
let num1=[[11,22,33],[99,88,77]]
console.log(num1[0])//[11,22,33]
console.log(num1[1])//[99,88,77]
console.log(num1[0][1])//22
let[[s,v,u],[d,e,f]]=num1
console.log(s)//11
console.log(d)//99

//3.object
let car={
    model:"audi",
    color:"white"
}
console.log(car.model)
console.log(car.color)

let {model,color}=car
console.log(model)//audi
console.log(color)//color

//4.nested object
let student={
    firstName:"mayuri",
    classinfo:{
        std:"kg",
        rollnumber1:"20"
    }
}
console.log(student.classinfo.std)//kg
console.log(student.firstName)

let {firstName,classinfo:{std,rollnumber1}}=student
console.log(std)
console.log(rollnumber1)
console.log(firstName)

//==========2way


let {firstName:fn,classinfo:{std:sd,rollnumber1:rn}}=student
console.log(rn)

let{classinfo:{std:sd1}}=student

console.log(sd1)

//array inside the object
let emp={
    fullName:"amol shinde",
    empid:1234,
    skills:["java","python","cypress"]
}
let {fullName:f1,empid:f2,skills:[a1,a2,a3]}=emp
console.log(a2)
console.log(f1)
console.log(f2)
