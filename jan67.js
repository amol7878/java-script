// initialization

//while(consdition){
//     ststatement
//     increment/decrement
// }

//print(1  to 5)

let i1=1
while(i1<=5){
    console.log(i1)//1//2//3//4//5
    i1++//2//3//4//5//6//
}


//print Hello 5 times

let i2=1
while(i2<=5){
    console.log("Hello")
    i2++
}

//Print 5 to 1

let i3=5
while(i3>=1){
    console.log(i3)
    i3--
}

//table 2

let i4=2
while(i4<=20){
    console.log(i4)
    i4=i4+2
}

//table of 2 reverse

i5=20
while(i5>=2){
    console.log(i5)
    i5=i5-2
}

// break statement with while loop

let i6=5

while(i6>=1){
    if(i6==3){
        break
    }
    console.log(i6)//5//4
    i6--
}

// break statement with while loop

let i7=1

while(i7<=5){
    if(i7==2){
        break
    }
    console.log(i7)//1
    i7++//2
}

//continue with while loop

let i8=1
while(i8<=5){
    if(i8==3){
        i8++//4
        continue
    }
    console.log(i8)//1//2//3//5
    i8++//2//3//5//6
}


let i9=5
while(i9>=1){
    if(i9==2){
        i9--//1
        continue
    }
    console.log(i9)//5//4//3//1
    i9--//5//4//3//1//0
}
