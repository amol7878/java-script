// class Person {
//     firstName =undefined
//     lastName =undefined
//     rollNo =undefined
//     age =undefined
// }

// let amol=new Person()
//console.log(amol)
// //dot notation and bracket notation

// amol.firstName="amol"
// amol.lastName="rao"
// amol.rollNo=32
// amol.age=34
// console.log(amol)
// console.log(amol instanceof Person)

// let amolB=new Person()
// amolB.firstName="amol"
// amolB.lastName="rao"
// amolB.rollNo=34
// amolB.age=45

// class PersonB {
//     // constructor(){
//     //     console.log("called")
//     // }
//     constructor(fn, ln, age, rollNo) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = age
//         this.rollNo = rollNo
//     }
// }
// // let sarika = new PersonB('sarika', 'pansare', 23, 55)
// // console.log(sarika)
// // let mayuri = new PersonB('mayuri', 'rao', 32, 54)
// // console.log(mayuri)
// let students = [
//                new PersonB('chinamay', 'deshpande', 13, 5),
//                new PersonB('chinamay1', 'deshpande1', 11, 34),
//                new PersonB('chinamay2', 'deshpande2', 12, 23),
//                new PersonB('chinamay3', 'deshpande3', 14, 44),
//                new PersonB('chinamay4', 'deshpande4', 15, 25)
//             ]

// students.forEach(function(el){
//     console.log(el.firstName)
//     console.log(el.lastName)
//     console.log(el.age)
//     console.log(el.rollNo)
// })

// let studentss={
//     studentOne:new PersonB('s1','l4',23,5),
//     studentTwo:new PersonB('s2','l4',24,8),
//     studentThree:new PersonB('s3','l4',24,7),
//     studentFour:new PersonB('s4','l4',25,6),
// }
// for(let [k,v]of Object.entries(studentss)){
//     console.log(k,v)
//     }

    //set and get method 

//     class PersonC{
//         setFisrtName(fn){
//             this.firstName=fn
//         }
//         setLastname(ln){
//             this.lastName=ln
//         }
//         setAge(ag){
//             this.age=ag
//         }
//         setRollNo(rn){
//             this.rollNo=rn
//         }
//     }
//     let ninad=new PersonC()
//     console.log(ninad)
//    ninad.setFisrtName('ninad')
//    ninad.setLastname('dani')
//    ninad.setAge(23)
//    ninad.setRollNo(33)
//    console.log(ninad)


//set and get keyword
// let namea=["ram","sham","ganesh"]
// namea.length=4
// namea.push()

class PersonD{
    set firstN(fn){
        this.firstName=fn
    }
    set lastN(ln){
        this.lastName=ln
    }
    set Age(ag){
        this.age=ag
    }
    set RollNo(rn){
        this.rollNo=rn
    }
}

let vijeet=new PersonD()
console.log(vijeet)
vijeet.firstN="vijeet"
vijeet.lastN='rao'
vijeet.Age=44
vijeet.RollNo=55
console.log(vijeet)
