const { secureHeapUsed } = require("crypto");

// Chapter-01 Q1
let a=10;
let b="Rahul";
console.log(a+b);  // 10Rahul

// Chapter-01 Q2
console.log(typeof (a+b)) // String

// Chapter-01 Q3
const c=
{
  name:"Rahul",
  section: 1,
  isPrinciple:false // btw we can add new element in the object 
                    // and we can alter the value of the element 
    }
// c={} // error

// Chapter-01 Q4
c['friend']="Witcher";

console.log(c);

// Chapter-01 Q5
// gf dictionary
const  gf_dictionary=
  {
    first_gf:"Pratiksha",
    second_gf:"Nivedita",
    third_gf:"Shraddha",
    forth_gf:"Rashmi",
    fifth_gf:"doesn't exist"
  }
console.log(gf_dictionary.first_gf)
