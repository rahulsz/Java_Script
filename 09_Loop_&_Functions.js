// for loop
for(let i=1;i<=10;i++)
{
  //console.log(i)
}

// Program to add first n natural numbers
let sum=0
let n =prompt("Enter the value of n")
n =Number.parseInt(n)
for(let i=1;i<=n;i++)
{
 sum+=i;
 }
console.log("Sum of "+n+" natural numbers is "+sum)

// Program to Factorial first n natural numbers

let factorial=1;
let num=prompt("Enter the value of n")
num =Number.parseInt(num)
for(let i=1;i<=num;i++)
{
 factorial*=i;
 }
console.log("Factorial of "+n+" natural numbers is "+factorial)

//for-in loop

let obj ={
rahul: 90,
rakshi: 25,
rithika: 45,
ram: 89
}
for(let a in obj)
{
 console.log(a+" : "+obj[a])
}

//for-of loop

for(let a of "RAHUL")
{
 console.log(a) // RAHUL
}
