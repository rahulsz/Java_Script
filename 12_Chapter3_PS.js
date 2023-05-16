// Chap3 Q1
let marks =
  {
    rahul: 90,
    subhham: 9,
    monika: 56,
    monika: 4
  }
for(let i=0;i<Object.keys(marks).length;i++)
  {
    console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
  }

// Chap3 Q2
for(let key in marks)
  {
  console.log("The marks of "+key+" are "+marks[key])
  }


// Chap3 Q3
let cn=43
let i
while(i!=cn)
  {
     console.log("Try Again")
    i=prompt("Enter a number")
   
    
  }
console.log("You have entered a correct number")

// Chap3 Q4

 const mean = (a,b,c,d) => {
     return(a+b+c+d) / 4
   }
conole.log(mean(1,2,3,4))

/*
[Answer By OpenAi]

 const mean = (a,b,c,d) => {
     return(a+b+c+d) / 4
   }
conole.log(mean(1,2,3,4))

correct function or not

Correct function. answer = 2.5
*/