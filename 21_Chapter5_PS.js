//Q1
/*let arr = [1,2,3,4,5,6,7,8,9]
let a =prompt("Please enter the number")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)*/

//Q2
let arr = [1,2,3,4,5,6,7,8,9]
let a
do{
a=prompt("Please enter the number")
a=Number.parseInt(a)
arr.push(a)
}while(a!=0)
console.log(arr)

//Q3
let arr1 = [ 78,67,90,78,70,50]
let x1=arr1.filter((x) =>
  {
    return x%10==0
  })
console.log(x1)

//Q4
let arr2 = [ 78,67,90,78,70,50]
let x2=arr2.map((x) =>
  {
    return x*x
  })
console.log(x2)

//Q5
let arr3 = [ 1,2,3,4,5,]
let x3=arr3.reduce((x1,x2) =>
  {
    return x1*x2
  })
console.log(x3)

  

