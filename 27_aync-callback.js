// console.log("This")
// console.log("Is")
// console.log("Sync")

// Async

// console.log("This")




function loadingData( callback ){
    setTimeout(() =>{
        console.log("1)Loading Data...")
        callback()
    }, 1000)
   
}

function collectingData( ){
    setTimeout(() =>{
        console.log("2)Collecting Data...")
        callback()
    }, 2000)
  
}

function approvingData( ){
    setTimeout(() =>{
        console.log("3)approving Data...")
        callback()
    }, 2000)
    
}

function approved( ){
    console.log("4)approved Data...")
}

loadingData( function() {
    collectingData(function() {
        approvingData(function (){
            approved();
        })
    })
})
