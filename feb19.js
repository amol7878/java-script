//stirng
//array

//object
let names=["mayuri","rahu","rudra","rohan","ravi"]
// // 1.add =="shantanu"
names.push("shantanu")
names.unshift("yogesh")
console.log(names)

// //2. retrive
console.log(names[1])
console.log(names.length)//5
console.log(names[names.length-1])

//3.update

names[1]="vaibhav"
console.log(names)

//4.delete
names.pop()
names.shift()
console.log(names)

let student=["mayuri","kumari",32,45]
//array==>index
//object
//key;value=>property
let studentone={
    firstName:"mayuri",
    lastName:"kumari",
    age:32,
    rollno:45
}

//add/create,retrive,update,delete

//1.retirve(bracket notation,dot notation)
//dot notation
console.log(studentone.firstName)//mayuri
console.log(studentone.lastName)//kumari
console.log(studentone.age)//32
console.log(studentone.rollno)//45

//bracket notation
console.log(studentone["firstName"])//mayuri
console.log(studentone["lastName"])//kumari
console.log(studentone["age"])//32
console.log(studentone["rollno"])//45

//add(bracket notation,dot notation)
//dot
studentone.skill="javascript"
console.log(studentone)
studentone["language"]="marathi"
console.log(studentone)

//update(bracket notation,dot notation)
studentone.firstName="Amol"
console.log(studentone)
studentone["age"]=12
console.log(studentone)

//delete
delete studentone.firstName
console.log(studentone)
delete studentone["skill"]
console.log(studentone)


//CRUID
//Creat/add
//retrive
//update
//delete
