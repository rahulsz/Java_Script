//Q1
let str = "Har\""
console.log(str.length)

//Q2
const sentence="I am a Huli"
const word="Huli"
console.log(sentence.includes(word))

//Q3
const a="ABBNJL"
console.log(a.toLowerCase())

//Q4
let str2 ="Pleas give Rs 1000"
let amount = Number.parseInt(str2.slice(14)) // conversion of String to number
console.log(amount)
console.log(typeof amount)

console.log("Pleas give Rs ".length)

//Q5
let fri="Deepa"
 fri[4]=r
console.log(fri) // friend is not changed, because string is immutable
