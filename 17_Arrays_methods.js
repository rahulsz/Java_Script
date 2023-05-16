// Array Methods
let num = [1, 2, 3, 4, 5]
let b = num.toString() // b is now String
console.log(b)

let c = num.join("_")
console.log(c, typeof c)

// pop()
let r = num.pop()  // pop returns the popped element
console.log(num, r)

// push()
let r2 = num.push() // push adds an element at the end of the array and returns the new length
console.log(num, r2)

// shift()
let r3 = num.shift()// shift removes the first element and returns the new length
console.log(num, r3)

// unshift()
let r4 = num.unshift() // unshift adds an element at the beginning of the array and returns the new length
