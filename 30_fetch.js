fetch(``)
.then( response =>{
    return response.json();
})
.then ( data => console.log(data))
.catch (err => console.error(err))