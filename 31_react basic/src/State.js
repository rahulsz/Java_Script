import { useState } from "react";


const State = () => {

  const [ count , SetCount ] = useState(0);
  const handleClick = () =>{
      SetCount(count+1);
  }

  return (
    <div>
    <h1>{count}</h1>
    
    <button onClick={handleClick}>+</button>
    </div>

  )
}

export default State;