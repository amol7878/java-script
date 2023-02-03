//Array=> Method
let marks = [12, 45, 67, 90, 34, 25]
console.log(typeof marks)

//+5
//[17,50..]
//for loop
let plus5 = []
for (let i = 0; i < marks.length; i++) {
    let add = marks[i] + 5
    plus5.push(add)
}
console.log(plus5)

//map()
let pluss5 = marks.map(function (el, index, arr) {
    return el + 5
})
console.log(pluss5)

let marks1=[12,45,67,90,34,25,12,9,5,8]
//abovve25
//[45,67,90,34]
//for loop
let newarr=[]
for (let i=0;i<marks1.length;i++){
    if(marks1[i]>25){
       newarr.push(marks[i])
    }
}
console.log(newarr)

let even=[]
for (let i=0;i<marks1.length;i++){
    if(marks1[i]%2==0){
       even.push(marks[i])
    }
}
console.log(even)


//filter
let greter25=marks1.filter(function(el,index,arr){
     return el>25
})
console.log(greter25)

let evenno=marks1.filter(function(el,index,arr){
       return el%2==0
})

console.log(evenno)


//JFYI//
let evennno=marks1.filter((el,index,arr)=>el%2==0)
console.log(evennno)

let marks2=[12,45,67,90,34,25,12,9,5,8]
let sum=0
for (let i=0;i<marks2.length;i++){
    sum=sum+marks2[i]
}
console.log(sum)

// // average=sum/no of element
let avg=sum/marks2.length
console.log(avg)

let sum1=marks2.reduce(function(acc,el,index,arr){
    return acc+el

})
console.log(sum1)

let student=["mayuri","vaibhav","raj","radhe"]
//welcome mayuri
//welcome raj

for (let i=0;i<student.length;i++){
    console.log("welcome"+student[i])
}

//forEach
student.forEach(function(el,index,arr){
    console.log( "welcome"+el)

})

//map()
//filter()
//reduce()
//forEach

// let a=function (){
//     console.log('hello')
// }

// let a1=()=>{
//     console.log('hello1')
// }

