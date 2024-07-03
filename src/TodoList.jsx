import { useState } from "react";
import './index.css'
function Todo(){
  const[TaskList,addTask]=useState([]);

  function addingTask(){
    const x=document.getElementById("input").value;
    if(x=="") return;
    document.getElementById("input").value="";
    addTask([...TaskList,x]);
  }

  function deleteTask(index){
    addTask(t=>TaskList.filter((_,i)=>i!==index));
  }

  return <>
    <div className="text-center items-center">
    <h1 className="text-4xl text-yellow-500">To do List</h1>
    <br/>
    <label htmlFor="" className="text-blue-400 text-2xl lg:text-lg">Enter Your task below:</label><br />
    <input className="border-2 border-black m-1 mb-16" id="input"/>
    <button  className=" min-w-16 bg-green-300 border-green-500 border-2 mx-1 hover:bg-green-200" onClick={addingTask}>Add</button>
    <ul className="grid grid-cols-1 text-pink-900 font-mono text-2xl justify-items-center">
      {TaskList.map((task,index)=>
      <li className="flex p-0 min-w-96  bg-yellow-300  m-1 block  border-2 border-black" id={index}><label htmlFor="">Task  {index+1}:</label>{task}  
      <button className="bg-red-500 m-1 border-2 border-red-800 text-white text-sm hover:bg-red-300 hover:text-black " onClick={()=>deleteTask(index)}>delete</button>
        </li>
        
      )}
    </ul>
    </div>
  </>
}
export default Todo;