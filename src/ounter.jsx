import { useState } from "react";

function Ounter(){
  const [x,setCount]=useState(0);
  const Increment=()=>{
    setCount(x+1);
  }
  const Decrement=()=>{
    setCount(x-1);
  }
  const Reset=()=>{
    setCount(0);
  }

  return<>
  <h1>{x}</h1><br />
  <button onClick={Increment}>Increment</button>
  <button onClick={Decrement}>Decrement</button>
  <button onClick={Reset}>reset</button><br />
  </>
}
export default Ounter;