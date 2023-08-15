// console.log("This")
// console.log("Is")
// console.log("Sync")

// Async

// console.log("This")




function loadingData( ){
    new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("1)Loading Data...")
            resolve()
        }, 1000)
    })
  
}

function collectingData( ){

    new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("2)Collecting Data...")
            resolve()
        }, 1000)
    })
}

function approvingData( ){
    new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("3)approving Data...")
            resolve()
        }, 1000)
    }) 
}

function approved( ){
    console.log("4)approved Data...")
}

loadingData().then(collectingData).then(approvingData).then(approved)
