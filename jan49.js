// loop

// For Loop

//for(initialization;conditioncheck;increment/decrement){
//  Statements
// }

//0-5

for (let i = 0; i <= 5; i++) {
    console.log(i)
}

for (let i = 0; i <= 6; i++) {
    console.log(i)
}

// 10-1

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

//10----1

//

// Break
// Continue

// 1-5 number number ===3

for (let i = 1; i <= 5; i++) {//2//3
    if (i == 3) {
        break
    }
    console.log(i)//1//2
}

// i=1 1<=5 true 1==3 false ===>1
// i=2 2<=5 true 2==3 false ===>2
// i=3 3<=5 true 3==3 true ===>break

for (let i = 1; i <= 10; i++) {
    if (i > 3) {
        break
    }
    console.log(i)
}

for (let i = 0; i < 5; i++) {//1//2//3
    console.log(i)//0//1//2//3
    if (i == 3) {
        break
    }
}

//0  1 2 3 

//===================================================================================================

// // Continue ===> loop ==>Perticular Values escape

// //1-5 3 =>1 2   4 5 

for (let i = 1; i < 5; i++) {//2  3  4  5 6
    if (i == 3) {
        continue
    }
    console.log(i)//1
}



for (let i = 0; i <= 5; i++) {//1 3
    console.log(i)// 0 1 2 3
    if (i == 3) {//0==3 3==3
        continue
    }
}
// i=1 1<5 1==3 =>1
// i=2 2<5 2==3 =>2
// i=3 3<5 3==3
// i=4 4<5 4==3 =>4
// i=5 5<5 5==3 =>5
// i=6 6<=5


