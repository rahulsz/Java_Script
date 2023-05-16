// Strings are immuatable (but we can return new String instances)

let name="Rakshita"
console.log(name.length) //8

let name1 ="r\""
console.log(name1.length) //2

name.toLowerCase()
console.log(name) //rakshita

name.toUpperCase()
console.log(name) //RAKSHITA

name.slice(2,4)
console.log(name.slice(2,4)) //ks

name.slice(2)
console.log(name.slice(2))  //kshita 

let girl_friend ="Dani Daniels"
console.log(girl_friend.replace("Dani","Sunny")) // console.log(name.slice(2,4))

let naam="Rahul"
let dosth="Ruma"
console.log(naam.concat(dosth)) // RahulRuma

let dosthani ="    Mona   "
console.log(dosthani.trim()) //Mona  

let fr="Sizuka"
for(let i=0;i<fr.length;i++)
  {
    console.log(fr[i])
  }
