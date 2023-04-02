//Lexical scope
function addition(){
    let x=10
    let y=20
    console.log(x+y)
    function additionB(){
        let a=100
        let b=50
        console.log(x+y+a+b)
        //console.log(s)
        function additionC(){
            let s=10
            let t=5
            console.log(x+y+a+b+s+t)
        }
        additionC()
    }
    additionB()
}
addition()


//Program 2

function greet(){
    console.log('hello')
    return "Hello chinmay!"
    console.log("bye Chinmay")
}
let a=greet()
console.log(a)

//Program 2b
function calculation(x,y){
    return function(){
        console.log(x+y)
    }
}
let r=calculation(12,1)
console.log(r)
// console.log(x)
// console.log(y)

let r1=function(){
   console.log(x1+y1)
}
r()