//1-5 random number

//Math.floor(Math.random()*5)+1//0.00-0.99=>0.0-4.9=>0-4
//Math.floor(12.5)//12

//1-10
//Math.floor(Math.random()*10)+1

//Guess Game(1 Chance)
// let randomNumber=Math.floor(Math.random()*5)+1
// console.log(randomNumber)

// let userinput=Number(prompt("Enter the number between 1-5"))
// if(userinput===randomNumber){
//     console.log("Guess is correct")
// }
// else{
//     console.log("Guss is incorrect")
// }

//user 3 chance=>known the duration

// let randomNumber=Math.floor(Math.random()*5)+1
// console.log(randomNumber)
// for(i=1;i<=3;i++){
// let userinput=Number(prompt("Enter the number between 1-5"))
// if(userinput===randomNumber){
//     console.log("Guess is correct")
//     break
// }
// else{
//     console.log("Guss is incorrect")
// }
// }


//do not known duration=>while

// let randomNumber=Math.floor(Math.random()*5)+1
// console.log(randomNumber)
// let userinput
// while(userinput!=randomNumber){
// let userinput=Number(prompt("Enter the number between 1-5"))
// if(userinput===randomNumber){
//     console.log("Guess is correct")
//     break
// }
// else{
//     console.log("Guss is incorrect")
// }
// }
//=============================================================================================//
// let randomNumber=Math.floor(Math.random()*5)+1
// console.log(randomNumber)
// let userinput=prompt("Enter the number between 1-5")
// while(userinput!=randomNumber){
//      userinput=Number(prompt("Enter the number between 1-5"))
// if(userinput===randomNumber){
//     console.log("Guess is correct")
//     break
// }
// else{
//     console.log("Guss is incorrect")
// }
// }

//do while
//let i=1
// do{
//     console.log(i)//1 //2//3
//     i++//2 3 4
// }
//while(i<=3)//2<=3 3<=3 4<=3

//do while

let randomNumber=Math.floor(Math.random()*5)+1
console.log(randomNumber)
let userinput
do{
  userinput=Number(prompt("Enter th number betweeen 1-5"))
    if (userinput===randomNumber){
        console.log("Guess is correct")
    }
    else{
        console.log("Guess is incorrect")
    }
}
while(userinput!=randomNumber)