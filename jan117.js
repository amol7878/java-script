// console.log("hello")
//Math

// console.log(Math.floor(23.4))//23
// console.log(Math.floor(-23.4))//24
// console.log(Math.ceil(23.4))//24
// console.log(Math.ceil(-23.4))//-23
// console.log(Math.round(2.4))//2
// console.log(Math.round(2.5))//3

// console.log(Math.random())//0-1
// console.log(Math.random()*6)//0-5
// console.log(Math.floor(Math.random()))//0-5
// console.log(Math.floor(Math.random()*6+1) )//1-6

//prompt function works in browser only
// let randomnumber=Math.floor(Math.random()*6)+1//4
// console.log(randomnumber)
// let userinput=prompt("plese guess the number")//3
// if(randomnumber==userinput){
//     console.log("Guess is correct")
// }
// else{
//     console.log("Guess is incorrect")
// }

//Ternary operator
//randomnumber==userinput?console.log("Guess is correct"):console.log("Guess is incorrect")

//for loop
// let randomnumber=Math.floor(Math.random()*6)+1
// console.log(randomnumber)
// for(let i=1;i<=5;i++){
//     let userinput=prompt("plesae guess the number")
//     if(userinput==randomnumber){
//         console.log("guess is correct")
//         break;
//     }
//     else{
//         console.log("guess is incorrect")
//     }
// }

//while loop
let randomnumber = Math.floor(Math.random() * 6) + 1//4
console.log(randomnumber)
let userinput;
console.log(userinput)//undefined
while (userinput != randomnumber) {
    userinput = prompt("guess the number")
    if (userinput == randomnumber) {
        console.log("Guess is correct")
        //break;
    }
    else {
        console.log("Guess is incorrect")
    }
}
