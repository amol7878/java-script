//sync code

//Async code

//Program 1
// function additionA(){
//     console.log("A is printed")
// }
// function additionB(){
//     console.log("B is printed")
// }
// additionB()
// additionA()

// //Program 2
// function additionC(){
//     setTimeout(function(){
//      console.log("C is printed")
//     },2000)

// }
// function additionD(){
//     console.log("D is printed")
// }
//additionC()
//additionD()

//Program 3
// function additionE() {
//     setTimeout(function () {
//         console.log("User is created")
//     }, 3000)
//     setTimeout(function () {
//         console.log("get id")
//     }, 2000)
//     setTimeout(function () {
//         console.log("get info by id")
//     }, 1000)
// }
// additionE()

//Execute asy code ,synchronously
//Program 4

// function additionE() {
//     setTimeout(function () {
//         console.log("User is created")
//         setTimeout(function () {
//             console.log("get id")
//             setTimeout(function () {
//                 console.log("get info by id")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// additionE()

//promise---asyn---sync---better way---promises
//promises---pending
//resolve
//reject


// let pro=new Promise(function(resolve,reject){
//   let a=10
//   let b=100
//   if(a==b){
//     resolve("hello i completed promise")
//   }
//   else{
//     reject("promise is not completed")
//   }
// })
// //consuming the promise
// pro.then(function(a){
//     console.log(a)
// },function(b){
//   console.log(b)
// })


// let pro3=new Promise(function(resolve,reject){
//     let city="pune"
//     if(city.includes('z')){
//         resolve([11,22,33])
//     }
//     else{
//         reject([-11,-12,13])
//     }
// })

// pro3.then(function(a){
//      console.log(a[0])
// },function(b){
//     console.log(b[1])

// })


// let pro4=new Promise(function(resolve,reject){
//     let city="pune"
//     if(city.includes('p')){
//         resolve([11,22,33])
//     }
//     else{
//         reject([-11,-12,13])
//     }
// })

// pro4
// .then(function(a){
//      console.log(a[0])
// })
// .catch(function(b){
//     console.log(b[2])
// })
// .finally(function(){
//     console.log("i will always execute")
// })


// let pro5=new Promise(function(resolve,reject){
//       let a=70
//       let b=50
//       if(a>b){
//         resolve("a is called")
//       }
//       else{
//         reject("b is called")
//       }
// })

// pro5
// .then(function(a){
//     console.log(a)
//     return "Hello"
// })
// .then(function(b){
//     console.log(b)
// })
// .catch(function(c){
//   console.log(c)
// })
// .finally(function(){
//  console.log("i will execute")
// })

//Promise.all()
//Promise any()
//Promise race()
//Promise.allSettled

function createUser(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve('user created')
    },3000)
  })
}

function getid(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve('get id')
    },2000)
  })
}

function getinfoByid(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve('get info by id')
    },1000)
  })
}

createUser()
.then(function(a){
  console.log(a)
  return getid()
})
.then(function(b){
  console.log(b)
  return getinfoByid()
})
.then(function(c){
  console.log(c)
  return getid
})
.catch(function(){
  console.log("rejected")
})

.finally(function(){
  console.log("finally")
})