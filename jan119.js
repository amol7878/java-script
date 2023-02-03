//Math.floor
//Math.ceil
//Math.round
//Math.random

// console.log(Math.floor(7.5))//7
// console.log(Math.floor(63.2))//63
// console.log(Math.floor(-12.6))//-13
// console.log(Math.floor(0.75))0

// console.log(Math.ceil(45.9))//46
// console.log(Math.ceil(8.23))///9
// console.log(Math.ceil(-13.65))//-13

// console.log(Math.round(8.45))//8
// console.log(Math.round(8.57))//9
// console.log(Math.round(56.98))//57

// console.log(Math.random())//0.0-0.99

//1-5 random
// console.log(Math.random()*5)//0.0-4.9
// console.log(Math.floor(Math.random()*5))//0-4
// console.log(Math.floor(Math.random()*5)+1)//1-5
//guessing game
//randomnumber=>system
//userinput

//userinput==randomnumber=>guess correct//guess incorrect

// let randomnumber=Math.floor(Math.random()*5)+1
// console.log(randomnumber)

// let userinput=prompt("please enter the number between 1-5")
// //console.log(typeof userinput)
// if(userinput==randomnumber){
//     console.log("Guess is correct")
// }
// else{
//     console.log("Guess is incorrect")
// }

//userinput
//prompt()=>window()=>browser()=>html
//-------------------------------------
//

// let randomnumber=Math.floor(Math.random()*5)+1
// console.log(randomnumber)
// let userinput=Number(prompt("Please Enter the number betweeen 1-5"))
// //console.log(typeof userinput)
// if(userinput===randomnumber){
//     console.log("Guess is correct")
// }
// else{
//     console.log("Guess is incorrect")
// }

//-------------------------------------------//

//allow user to guess number 3 time

let randomnumber = Math.floor(Math.random() * 5) + 1
console.log(randomnumber)//4
for (let i = 1; i <= 3; i++) {
    let userinput = Number(prompt("Please Enter the number betweeen 1-5"))
    //console.log(typeof userinput)
    if (userinput === randomnumber) {
        console.log("Guess is correct")
        break
    }
    else {
        console.log("Guess is incorrect")
    }
}


