

// Conditional Statement

// if 
// else
// else if
// ternary Operator
// Switch Case

// if(true){
//     console.log('1 is number')
// }

// truly Value =>1,"a","mayuri",{},[],true,""(space)
// falsy Value =>0,null,undefined,NAN,False, 

// if(" "){
//     console.log("output is Ture")
// }
// else{
//   console.log("Outpur is False")
// }

let marks = 50
// if(marks>90){
//     console.log("A Grade")
// }
// if(marks>80){
//     console.log("B Grade")
// }
// if(marks>70){
//     console.log("C Grade")
// }

// if(marks>90){
//     console.log("A Grade")
// }
// else if(marks>80){
//     console.log("B Grade")
// }
// else if(marks>70){
//     console.log(" C Grade")
// }
// else{
//     console.log("Invalid Grade")
// }

// Switch case

//1-7 1==monday 2 == tuesday

// Switch Case Without Break

// let day = 5
// switch (day) {
//     case 1:
//         console.log("Monday")
//     case 2:
//         console.log("Tuesday")
//     case 3:
//         console.log("Wednesday")
//     case 4:
//         console.log("Thuesday")
//     case 5:
//         console.log("Frieday")
//     case 6:
//         console.log("Satuerday")
//     case 7:
//         console.log("Sunday")

// }


// Switch Case With Break

// let day = 5
// switch (day) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thuesday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Satuerday")
//         break
//     case 7:
//         console.log("Sunday")
//         break

// }

// let city = "Nashik"
// switch (city) {
//     case "Pune":
//         console.log("MH")
//         break
//     case "Ujjan":
//         console.log("MP")
//         break
//     case "Jaipure":
//         console.log("RJ")
//         break
//     default:
//         console.log("invalid City")
// }


// let city = "Indore"
// switch (city) {
//     case "Pune":
//     case "Nashik":
//         console.log("MH")
//         break
//     case "Ujjan":
//     case "Indore":
//         console.log("MP")
//         break
//     case "Jaipure":
//         console.log("RJ")
//         break
//     default:
//         console.log("invalid City")
// }

// let country = "india"
// switch (country) {
//     case "France":
//     case "Spain":
//     case "Netherland":
//     case "italy":
//         console.log("This Country is in Europe")
//         break
//     case "United States":
//     default:
//         console.log("This country Is in Not in Europe")
// }

// Ternary Oerator

//condition?true:false

let a=10
let b=20

a>b?console.log("A s greater"):console.log("B is Greater")

let result = a>b?"A is Greater":"B is Greater"
console.log(result)
