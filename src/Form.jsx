import "./App.css"
import Mybutton from "./Mybutton"
import { useState } from "react"
import './index.css'
function Form(){
  function extract(e) {
    e.target.textContent="Stop clicking me";
  }
  const [name,Name]=useState("Guest");
  const [age,Age]=useState(0);
  function setName(event){
    Name(event.target.value);
  }
  function setAge(event){
    Age(event.target.value);
  }

  const[color,setColor]=useState(0,0,0);
  function changeColor(event){
    setColor(event.target.value);
  }
  return( <>
  <br/>
  <label htmlFor="">Choose colour :</label>
  
  <input type="color"  onChange={changeColor} /><br />

  <div className='div1' style={{backgroundColor: color}}>
    <label id="l1" htmlFor="name">Enter your name :</label><br />
    <input id="name" type="text" onChange={setName} /><br />
    <label id="l2" htmlFor="age" >Enter your Age :</label><br />
    <input id="age" type="number" onChange={setAge} /><br />
    <button id="allset" type="button" onClick={(e)=>extract(e)}>all set</button>
    </div>
    <Mybutton name={name} age={age}></Mybutton>
  </>
  )
}
export default Form;