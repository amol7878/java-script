// console.log(Math.floor(23.5))
// console.log(Math.floor(24.8))
// console.log(Math.ceil(24.8))
// console.log(Math.ceil(23.2))
// console.log(Math.floor(-24.1))
// console.log(Math.ceil(-24.8))
// console.log(Math.round(12.5))
// console.log(Math.round(-24.2))

console.log(Math.random())
console.log(Math.random()*5)
console.log(Math.floor(Math.random()*5))
console.log(Math.floor(Math.random()*5)+1)

let randomNumber=Math.floor(Math.random()*5)+1
console.log(randomNumber)

let userinput=prompt("Enter the any number between 1-5")

if(userinput==randomNumber){
    console.log("your guess is correct")
}
else{
console.log("your guess is incorrect")
}