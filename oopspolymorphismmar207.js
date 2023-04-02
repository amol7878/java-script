//OOPS

//1.inheritance
//2.polymorphism =>1 function but having diffrent state
//many forms

//boy=>xyz=>student,friend,son

//overriding=>diffrent class,same method name,same signature(para)

//parent

// class WorldBank{
//     loan(){
//         console.log('i am loan from worldbank')
//     }
//     save(){
//         console.log('i am saving from worldbank')
//     }
// }

// class SBI extends WorldBank{
//     loan(){
//         super.loan()
//         console.log('i am loan from SBI')
//     }
//     save(){
//         console.log('i am saving from SBI')
//     }
// }
// class HDFC extends SBI{
//     loan(){
//         super.loan()
//         console.log('i am loan from HDFC')
//     }
//     save(){
//         console.log('i am saving from HDFc')
//     }
// }

// let hdcf=new HDFC()
// hdcf.loan()
// hdcf.save()

// let sbi=new SBI()
// sbi.loan()
// sbi.save()

// let wb=new WorldBank()
// wb.loan()
// wb.save()

//overloading ===>same class,same method name,diffrent signature

// class calculator{
//     addition(a,b){
//         console.log(a+b)
//     }
//     addition(a,b,c){
//         console.log(a+b+c)
//     }
//     addition(a,b,c,d){
//         console.log(a+b+c+d)
//     }
// }
// //overwrite
// let s1=new calculator()
// s1.addition(10,5)//15//NAN
// s1.addition(2,3,5)//10//NAN
// s1.addition(1,2,3,5)//11

class calculator {
    addition(a, b, c, d) {
        if (a != undefined && b != undefined && c != undefined && d != undefined) {
            console.log(a + b + c + d)
        }
        else if (a != undefined && b != undefined && c != undefined) {
            console.log(a + b + c)
        }
        else if (a != undefined && b != undefined) {
            console.log(a + b)
        }
    }
}

let s1=new calculator()
console.log(s1)
s1.addition(1,2)
s1.addition(1,2,3)
s1.addition(1,2,3,4)
