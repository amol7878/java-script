// switch case

// without break

// let city = "bhopal"
// switch (city) {
//     case "pune":
//         console.log("MH")
//     case "bhopal":
//         console.log("MP")
//     case "Jaipure":
//         console.log("RJ")
//     case "Kanpure":
//         console.log("UP")
//     default:
//         console.log("Invalid City")
// }

// With Break

// let city = "bhopal"
// switch (city) {
//     case "pune":
//         console.log("MH")
//         break
//     case "bhopal":
//         console.log("MP")
//         break
//     case "Jaipure":
//         console.log("RJ")
//         break
//     case "Kanpure":
//         console.log("UP")
//         break
//     default:
//         console.log("Invalid City")
// }

// Multiple case Same Output

let city = "bhopal"
switch (city) {
    case "pune":
    case "nagpure":
        console.log("MH")
        break
    case "bhopal":
    case "indore":
        console.log("MP")
        break
    case "Jaipure":
    case "udaipure":
        console.log("RJ")
        break
    case "Kanpure":
    case "lucknow":
        console.log("UP")
        break
    default:
        console.log("Invalid City")
}

// Truthy Value and falsy Value

// Truthy Value-'A',"Chinmay","3",4,-67,"&&"," ",{},98.7,78,78<90,true
// Falsy Value-0,undefined,null,NAN,"",false,45>66

if (0) {
    console.log("hello")
}
else {
    console.log("Bye")
}

// undefined
// let B
// console.log(B)

// // NAA 
//console.log(undeifned+undefined)

// loop

//1 to 5
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// 1 to 100 (loop) for while

// loop array object

//for(initialization;conditioncheck;increment/decrement){
//  Statements
// }

// for(let i=1;i<=5;i++){//1//2///3//4//5//6
//     console.log("Hello")//Heloo//Heloo//Heloo//Heloo//Heloo
// }


for (let i = 1; i <= 3; i++) {//2//3//4
    console.log(i)//1//2//3
}

for (let i = 1; i <= 4; i++) {//2//3//4//5
    console.log(i)//1//2//3//4
}

for (let i = 2; i <= 20; i = i + 2) {//4//6//8////10//12//14//16//18//20//22
    console.log(i)//2//4//6//8////10//12//14//16//18//20
}

