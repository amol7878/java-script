function createUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('user created')
        }, 3000)
    })
}

function updateUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Get user by id')
        }, 3000)
    })
}

function GetInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('get info')
        }, 1000)
    })
}


// createUser()
//     .then(function (a) {
//         console.log(a)
//         return updateUser()
//     })
//     .then(function (b) {
//         console.log(b)
//         return GetInfo()
//     })
//     .then(function (c) {
//         console.log(c)
//     })
//     .catch(function () {
//         console.log('error')
//     })
//     .finally(function () {
//         console.log('finally executed')
//     })

async function GetUsers() {
    let a = await createUser()
    console.log(a)
    let b = await updateUser()
    console.log(b)
    let c = await GetInfo()
    console.log(c)
}
GetUsers()

//database                 Api   -----------------ui