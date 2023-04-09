
//sync vs async

// function additionA(){
//     console.log("Printed A")
// }
// function additionB(){
//     console.log("Printed B")
// }
// additionA()
// additionB()

//=======================================================================================================
// function additionC(){
//     setTimeout(function(){
//     console.log("Printed C")
//     },2000)
// }
// function additionD(){
//     console.log("Printed D")
// }
// additionC()
// additionD()

//=========================================================================================================

//asyn=====execution====sync

// function Getinfo(){
//     setTimeout(function(){
//      console.log("user created")
//     },3000)
//     setTimeout(function(){
//     console.log("get Id..")
//     },2000)
//     setTimeout(function(){
//     console.log("get info by id.....")
//     },1000)
// }
// Getinfo()

//"user created  get Id.  get info by id.....

// function Getinfo(){
//     setTimeout(function(){
//      console.log("user created")
   
//         setTimeout(function(){
//             console.log("get Id..")
//             setTimeout(function(){
//                 console.log("get info by id.....")
//             },1000)
//         },2000)
//     },3000)
// }
// Getinfo()


//promise
//pending resolve reject

// let pro=new Promise(function(resolve,reject){
//   let a=10
//   let b=10
//   if(a==b){
//     resolve("hello")
//   }else{
//     reject("bye")
//   }
// })
// pro
// .then(function(a){
//     console.log(a)
// },function(b){
//     console.log(b)
// })

// pro
// .then(function(a){
//     console.log(a)
// })
// .catch(function(b){
//     console.log(b)
// })

// pro
// .then(function(a){
//     console.log(a)//"hello"
//     return "hello-b"
// })
// .then(function(b){
//     console.log(b)//hello-b
//     console.log('b')//"b"
// })
// .catch(function(b){
//     console.log(b)
// })
// .finally(function(){
//     console.log("always executed")//"always executed"
// })



// function Getinfo(){
//     setTimeout(function(){
//      console.log("user created")
   
//         setTimeout(function(){
//             console.log("get Id..")
//             setTimeout(function(){
//                 console.log("get info by id.....")
//             },1000)
//         },2000)
//     },3000)
// }
// Getinfo()



function GetUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
         resolve('Uaser Created')
        },3000)
    })
}

function GetID(){
    return new Promise(function(resolve,reject){
       setTimeout(function(){
      resolve("get user by id")
       },2000)
    })
}

function GetInfoById(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
         resolve("Get info by Id")
        },1000)
    })
}

GetUser()
.then(function(a){
    console.log(a)
    return GetID()
})
.then(function(b){
    console.log(b)
    return GetInfoById()
})
.then(function(c){
    console.log(c)
})
.catch(function(){
    console.log("hello")
})
.finally(function(){
    console.log("Executed")
})