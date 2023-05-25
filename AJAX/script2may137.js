//  Program 1


//sync

// function additionA(){
//     console.log('A is Executed')
// }

// function additionB(){
//     console.log('B is exexcutrd')
// }

// additionA()
// additionB()


//program 2

// function additionC(){
//     setTimeout(function(){
//         console.log('C is executed')
//     },3000)
// }

// function additionD(){
//     console.log('D is executed')
// }

// additionC()
// additionD()

// usercreated ===>ID=====>id info

function getInfo() {
    setTimeout(function () {
        console.log('user created')
    }, 5000)
    setTimeout(function () {
        console.log('id retrive')
    }, 4000)
    setTimeout(function () {
        console.log('user info')
    }, 3000)
}

// getInfo()

// async in nature ===> sync 


function getInfo() {

    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('id retrive')
            setTimeout(function () {
                console.log('user info')
            }, 3000)

        }, 4000)
    }, 5000)



}

getInfo()
