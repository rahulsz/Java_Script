let a = prompt("Hey whats you age?")
a= Number.parseInt(a) // Converting the string into number
if(a<0)
{
  alert("This is an invalid Age")
}

else if(a<9)
{
  alert(" You are just a kid you can't")
}

else if(a<18 && a>=9)
{
  alert("Still you Can't")
}
else
{
  alert("You can drive Aeroplane")
}

// Explore Switch Statment Program



// Ternary Operator

let marks=prompt("Obtained Marks")
console.log(marks>30?"Pass":"Fail")
