// classical for loop
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < num.length; i++) {
  console.log(num[i])
}                                             

// for-each loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.form
let name = "Harry"
let arr = Array.format(name)
console.log(arr)

// for-of

let num1=[1,3,4,5]
for (let item of num1) {
  console.log(item)
}

// for-in
for (let i in num1) {
  console.log(num[i])
}

