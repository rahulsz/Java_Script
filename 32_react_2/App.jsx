


import { useState } from "react";
import "./styles.css";

export default function App() {

  const [ firstName , setFirstName] = useState('');
  const [ email , setemail] = useState('');
  const [ people , setpeople] = useState([]);

  const handleSumbit = (e) =>{
       e.preventDefault();

       if(!firstName && !email){
         alert("Please Enter all details")
       }
       else{
         const person = {id:new Date().getTime().toString(),firstName , email};
         setpeople((people) =>{
           return  [...people , person]
         })

         setFirstName('');
         setemail('')
       }

       

  }
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div>
          <div>
            <label htmlFor="firstName">Name: </label>
            <input type="text" id="firstName" name="firstName" value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" value={email} 
            onChange={(e) => setemail(e.target.value)}/>
          </div>
         </div>
        <button type = "submit">Add</button>
      </form>
      {
        people.map((person , index) =>{
             const {id , firstName , email} = person;
             return(
               <div key={id}>
                 <h4>{firstName}</h4>
                 <h4>{email}</h4>
                 </div>
             )
        })
      }
    </div>
  );
}

