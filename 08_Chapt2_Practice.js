// Chap2 Q1
let age=prompt("What is your age?")
if(age>10 && age<20)
{
  console.log("Your age lies between 10 and 20")
}
else{
  console.log("Your age doesnot lies between 10 and 20")
}

// Chap2 Q2
let Age=prompt("What is your age?")
Age=Number.parseInt(Age)
switch(Age){
  case 12:
console.log("Your age is 12")
    break
  case 13:
    console.log("Your age is 13")
    break
  case 14:
    console.log("Your age is 14")
    break
  default :
    console.log("Invalid Input")
}

// Chap2 Q3
let num=prompt("What is your age?")
num=Number.parseInt(num)
if(num % 2 == 0 && num % 3 == 0)
{
  console.log("Your Number is divisible by both 2 and 3")
}
else
{
  console.log("Your Number is not divisible by both 2 and 3")
}

// Chap2 Q4

let Num=prompt("What is your age?")
Num=Number.parseInt(num)
if(Num % 2 == 0 )
{
  console.log("Your Number is divisible by both 2")
}
if(Num % 3 == 0)
{
  console.log("Your Number is divisible by  3")
}


// Chap2 Q5

let _age= 12
console.log(_age > 18 ?"You can drive":"You cant drive")