import { useReducer, useState } from "react";

const reducer = (state , action)=>{
  console.log(state, action)
  if(action.type === 'incr')
  {
    return {count: state.count+1}
  }
  else if(action.type === 'decr')
  {
    return {count: state.count-1}
  }
  else{
     throw new Error("Unsupported Action type")
  }
}

const Reducers = () => {

  const [ state, dispatch] = useReducer(reducer, {count:0});

  const handleClickInc =() =>{
    dispatch({type:"incr"})
  }
  const handleClickDesc =() =>{
    dispatch({type:"decr"})
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDesc}>-</button>
    </div>
  );
};

export default Reducers;
