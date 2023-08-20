
import { useState } from "react";
import "./styles.css";

export default function AdvanceForm() {


  const [ person , SetPerson] = useState({firstName:'', email:'', age:'' })
  const [ people , setPeople] = useState([]);

  const handleChange =(e)=>{
       const name = e.target.name;
       const value = e.target.value;
       SetPerson({...person,[name]:value})

  }

  const handleSumbit = (e) =>{
       e.preventDefault();
       if(person.firstName && person.email && person.age)
       {
         const newPerson = {
           ...person,
           id:new Date().getTime().toString()
         }
         setPeople([...people, newPerson])

         setPeople[{firstName:'', email:'', age:'' }]
       }
  }
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div>
          <div>
            <label htmlFor="firstName">Name: </label>
            <input type="text" id="firstName" name="firstName" value={person.firstName} 
            onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" value={person.email} 
               onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="age">Age: </label>
            <input type="text" id="age" name="age" value={person.age} 
            onChange={handleChange}/>
          </div>
         </div>
        <button type = "submit" >Add</button>
      </form>
      {
        people.map((person , index) =>{
             const {id , firstName , email , age} = person;
             return(
               <div key={id}>
                 <h4>{firstName}</h4>
                 <p>{email}</p>
                 <p>{age}</p>
                 </div>
             )
        })
      }
    </div>
  );
}
