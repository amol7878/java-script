//ES6 class
//without constructor
//with constructor
//by using function
//set and get keyword

// class Person{
//     fullName="mayuri Katwe"
//     displayName(){
//         console.log(this.fullName)
//     }
// }
// let a1=new Person()
// console.log(a1)
// a1.displayName()

// let a2=new Person()
// console.log(a2)

// class Person{
//     fullName=undefined
//     displayName(){
//         console.log(this.fullName)
//     }
// }
// let a3=new Person()
// console.log(a3)
// a3.fullName="Ram Chandra"
// console.log(a3)
// a3.displayName()

////==============================================================

//with constructor

// class Person{
//     constructor(fullName){
//      this.fullName=fullName
//     }
//     display(){
//         console.log(this.fullName)
//     }
// }
// let a4=new Person("Ravi Kumar")
// console.log(a4)
// a4.display()

// let a5=new Person("satish Kumar rao")
// console.log(a5)
// a5.display()

//=================================================================
//bu using function
// class Person{
//     FullName(fn){
//         this.FullName=fn
//     }
//     Age(ag){
//         this.Age=ag
//     }
//     displayFullName(){
//         return this.FullName
//     }
//     displayAge(){
//         return this.Age
//     }
// }
// let s1=new Person()
// console.log(s1)
// s1.FullName="Sita Kumari"
// s1.Age=34
// console.log(s1)

// s1.setFullName("Sita Kumari")
// s1.setAge(34)
// console.log(s1)
// console.log(s1.getFullName())//Sita Kumari 
// let aa=s1.setAge(34)
// console.log(aa)

//=====================================================================================

// // set nad get keyword

// class Person{
//     set firstNameA(firstName){
//         this.firstName=firstName
//     }
//     set lastName(ln){
//         this.lastName=ln
//     }
//     set age(ag){
//         this.age=ag
//     }
//     get firstNameB(){
//         return this.firstName
//     }
//     get lastName(){
//         return this.lastName
//     }
//     get age(){
//         return this.age
//     }
// }

// let s2= new Person()
// s2.firstName="mayuri"
// s2.lastName="katwe"
// s2.age=34
// console.log(s2)


// class ClassWithGetSet{
//     // #msg="hello world";
//     // get msg(){
//     //     return this.#msg;
//     // }
//     set msg(x){
//         this.msg=`hell0 ${x}`;
//     }
//     get msg(){
//         return this.msg();
//     }
// }

// const instance= new ClassWithGetSet();
// console.log(instance.msg);//"hello world"

//instance.msg="cake";
//console.log(instance.msg);//"hello cake"


//=====================================================================================================

//static
class PersonA{
    static greeting(greet){
        console.log("hello"+greet)
    }
}

PersonA.greeting('All')