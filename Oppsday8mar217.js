// class addition{
//     add(x,y){
//         console.log(x+y)
//     }
//     add(x,y,z){
//         console.log(x+y+z)
//     }
//     add(x,y,z,q){
//         console.log(x+y+z+q)
//     }
// }

class calculator {
    addition(x, y, z, a) {
        if (x != undefined && y != undefined && z != undefined && a != undefined) {
            console.log(x + y + z + a)
        }
        else if (x != undefined && y != undefined && z != undefined ) {
            console.log(x + y + z )
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y)
        }
    }
}

let s1=new calculator()
console.log(s1)
s1.addition(1,2)
s1.addition(1,2,3)
s1.addition(1,2,3,4)

class WorldBank{
    loan(){
        console.log('i am from worldbank loan')
    }
    save(){
        console.log('i am from worldbank save')
    }
}
class SBI extends WorldBank{
    loan(){
        console.log('i am from sbi loan')
        super.loan()
    }
    save(){
        console.log('i am from sbi save')
        super.save()
    }
}

let sbi=new SBI()
sbi.loan()
sbi.save()

