// delete
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//delete num[0]
//console.log(num) // [<1 empty item>,2,3,4,5,6,7,8,9]


// concat
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num3 = num1.concat(num2)
let num4 = num1.concat(num2, num3)
console.log(num3)

// sort method
let x1 = [551, 22, 3, 14, 5, 6, 7, 8, 229]   // Alphabatically sorting happens
x1.sort()
console.log(x1) // [14,22,229,3,5,551,6,7,8]

//***************************************//
// sortig array using compare function

let compare = (a, b) =>
  {
    return a -b;
  }
 x1.sort(compare)  // use compare function
console.log(x1)

//pslice
let m1= [551, 22, 3, 14, 5, 6, 7, 8, 229] 
m1.splice(2,3,1021,1022,1023)
console.log(m1)

//slice
let m2= [551, 22, 3, 14, 5, 6, 7, 8, 229] 
let newnum = m2.slice(3)
console.log(newnum)