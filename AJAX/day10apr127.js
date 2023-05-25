// //promise combinators??
// //parallel execution
// //advantage??

// async function PromiseAll(){
//     try{
//         let a=await Promise.all([
//             Promise.resolve("hello"),
//             Promise.resolve("hello2"),
//             Promise.resolve("hello3"),
//             Promise.rejeced("rejeccted"),
//             Promise.resolve("hello4")
//         ])
//         console.log(a)
//     }
//     catch(s){
//         console.log(s)
//     }
// }
// PromiseAll().then(function(){
//     console.log('bye')
// })


// //program 2

// async function PromiseAllSettle() {
//     let a = await Promise.allSettled([
//         Promise.resolve("hello"),
//         Promise.resolve("hello2"),
//         Promise.resolve("hello3"),
//         Promise.reject("rejected because...."),
//         Promise.resolve("hello")
//     ])
//     console.log(a)
// }

// PromiseAllSettle()

let pro = new Promise(function (resolve,reject) {
    setTimeout(function () {
        reject('calculated')
    },3000)
})

let pro2 = new Promise(function (resolve, rejeced) {
    setTimeout(function () {
        reject("calculated2")
    }, 2000)
})

let pro3 = new Promise(function (resolve, rejeced) {
    setTimeout(function () {
        reject("rejected because not calculated")
    }, 1000)
})

// async function PromiseRace() {
//     let qq = await Promise.race([
//         pro,
//         pro2,
//         pro3
//     ])
//     console.log(qq)
// }

// PromiseRace().then(function () {
//     console.log('bye')
// })


//Promise

// async function PromiseRace() {
//     try {
//         let qq = await Promise.race([
//             pro,
//             pro2,
//             pro3
//         ])
//         console.log(qq)
//     }
//     catch (e) {
//         console.log(e)
//         console.log('Please contienue execution')
//     }
// }
// PromiseRace().then(function () {
//     console.log('bye')
// })

//Promise.any()---ignore


// async function PromiseAny(){
//     let r=await Promise.any([
//         pro,
//         pro2,
//         pro3
//     ])
//     console.log(r)
// }
// PromiseAny()

async function PromiseAny() {
    try {
        let r = await Promise.any([
            pro,
            pro2,
            pro3
        ])
        console.log(r)
    }
    catch(e){
        console.log(e)
    }
}
PromiseAny().then(function(){
    console.log('bye')
})

console.log('hello')
try{
    const j=10
    j=89
}
catch(e){
    console.log(e)
}

console.log('bye')