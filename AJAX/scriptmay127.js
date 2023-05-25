// function additionA(){
//     console.log('Running A')
// }

// function additionB(){
//     console.log('Running B')
// }

// additionB()
// additionA()

// function additionC(){
//     setTimeout(function(){
//         console.log("Running C")
//     },3000)
// }


// function additionD(){
//     console.log("running D")
// }


// additionC()
// additionD()

//userCreate===>id==>info

// function getInfo(){
//     setTimeout(function(){
//    console.log('User Created')
//     },3000)

//     setTimeout(function(){
//         console.log('Get Id')
//     },2000)

//     setTimeout(function(){
//         console.log("Get Info")
//     })
// }

// getInfo()


//async code execution in sync order

//call back hell 

function getInfo() {
    setTimeout(function () {
        console.log('User Created')
        setTimeout(function () {
            console.log('Get Id')
            setTimeout(function () {
                console.log("Get Info")
            },1000)
        }, 2000)
    }, 3000)
}

getInfo()


//promises

