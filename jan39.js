// loop 
// for loop
// while loop
// do while

// function ==>DRY
//Loop=>repetative Operation Perform based on condition

//1-100000==>print

//console.log(1)
//console.log(2)
//console.log(3)
//console.log(4)
//console.log(5)

//1.for Loop

//Syntax

//for(initialization;conditioncheck;increment/decrement){
//   //   Statements
//} 

let firstName = "Amol"
// 1-5 Print

// forward loop

for (let i = 0; i <= 5; i++) { //2 3 4 5 6
    console.log(i) //1  1<=5 2 2<=5 3 3<=5 4 4<=5 5 5<=5 6 6<=5
}
//1
//2
//3
//4
//5


// good Morning 5 times

for (let i = 1; i <= 5; i++) {
    console.log("Good Morning")
}

// Reverse Loop

//5-1
for(let i=5;i>=1;i--){//4 3 2 1
    console.log(i)//5 4 3 2 1
}

//i=5 5>=1
//i=4 5>=4
//i=3 5>=3
//i=2 5>=2
//i=1 5>=1
//i=0 0>=1

//Table of 5

//5 =50
//5 =5+5 =>10
//10
//15

for (let i=5;i<=50;i=i+5){//5+5=10  10+5 15+5
    console.log(i)//5 10 15 20 --50
}

// i=5 5<=50
//i=10 10<=50
//1=15 15<=50
//i<20  20<=50

let sum=0
sum=sum+10
console.log(sum)