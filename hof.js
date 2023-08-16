/*
Map
Reduce
Filter
*/ 

// Map

let num = [ 10 , 20 , 35 , 19 , 25 , 60]

let a = num.map((val,index) =>{
    return val+10;
})

 // console.log(a)        o/p : [ 20, 30, 45, 29, 35, 70 ]

 // Reduce 

 let sum  = num.reduce((acc , num) =>{
    return acc+num
 },0);

//console.log(sum);


// Filter

let filtr = num.filter((val,index , arr) =>{
       if(val >= 10 && val <=25)
       {
        return val;
       }
})

//console.log(filtr);