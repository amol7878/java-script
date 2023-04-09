//promise??

//async code -------->sync

//async----->user page wise

//userid

//https://reqres.in/api/users?page=2
//https://reqres.in/api/users/2

function getUserPageWise(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
      return response.json()
    })
    .then(function(response){
        return response.data[0].id
    })
}

function getSingleUserInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}

getUserPageWise(2)
.then(function(id){
    console.log(id)
    return getSingleUserInfo(id)
})
.then(function(data){
    console.log(data)
    return data
})
.then(function(el){
    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<h1>${el.email}</h1>`)
    document.write(`<h1>${el.id}</h1>`)  
    document.write(`<img src=${el.avatar}>`)

})
