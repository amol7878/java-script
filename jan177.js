//               0    1    2    3
let birthyear=[1989,1990,1991,1992]
//[34,33,32,31]
//currentyear-birthyear
let ages=[]
console.log(birthyear)
for(let i=0;i<birthyear.length;i++){
    //console.log(i)
    //console.log(2023-birthyear[i])
    let r=2023-birthyear[i]
    ages.push(r)
}
console.log(ages)

//map()
//birthyear=[1989,1990,1991,1992]
let q1=birthyear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023-el
})
console.log(q1)

let numbers=[1,2,3,4,5,6,7,8,9,10]
//[2,4,6,8,10,12,14,16,18,20]
let q2=numbers.map(function(el,index,arr){
    return el*2
})
console.log(q2)

//program 2

let marks=[44,55,22,33,44,56,77]
//[44,55,44,56,77]
let above40=[]//[44,55]
for(let i=0;i<marks.length;i++){
    if(marks[i]>40){
        above40.push(marks[i])
    }
}
console.log(above40)

let q3=marks.filter(function(el,index,arr){
    return el>40
})
console.log(q3)
