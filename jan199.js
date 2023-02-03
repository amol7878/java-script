//length   1   2   3    4
//index    0   1   2    3
let rollnumber=[12,45,67,90]
console.log(rollnumber)
console.log(typeof rollnumber)//object
console.log(rollnumber[1])//45
//first value
console.log(rollnumber[0])//12
// //Last value print
console.log(rollnumber[3])//90
console.log(rollnumber.length)//4
console.log(rollnumber[rollnumber.length-1])//rollnumber[3]//90

let numbers=[2,4,5,6,7,8,9,7,6,45,435,789,678,65,67,89,54,34,12]
console.log(numbers[numbers.length-1])

//1-5
for (let i=0;i<=5;i++){
    console.log(i)
}

let student=["mayuri","ram","sham","amol","shubham"]
console.log(student[0])
console.log(student[1])
console.log(student[3])

for (let i=0;i<student.length;i++){
    console.log(i)
    console.log(student[i])
}

//problem 1
let birthyear=[1995,1998,1990,1890,2003]
//current year-birthyear==>age//2023-1995,2023-1998
age=[]
for(let i=0;i<birthyear.length;i++){
    //console.log(birthyear[i])
    //console.log(2023-birthyear[i])
    let ag=2023-birthyear[i]
    age.push(ag)
}
console.log(age)
//============================================================================
let scores=[23,45,67,89,65,34]//+2
//new score=[25,47,69,91,67,36]
let newscore=[]
for(let i=0;i<scores.length;i++){
   //console.log(scores[i]+2)
   let ns=scores[i]+2
   newscore.push(ns)
}
console.log(newscore)

//=================================================================================

let numbers1=[20,12,34,67,11,9,78,99,5,2]
//grete than 50
// //[67,78,99]
let greter50=[]
for(let i=0;i<numbers1.length;i++){
    if(numbers1[i]>50){
        greter50.push(numbers1[i])

    }
}
console.log(greter50)

//===============================================================================================
let marks3=[23,50,10]
//sum=23+50+10=>83
let sum=0//0//23//73//83
for(let i=0;i<marks3.length;i++){
    sum=sum+marks3[i]
}
console.log(sum)

