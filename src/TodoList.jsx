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
    <input className="border-4 min-w-64 border-pink-400 m-1 mb-16" id="input"/>
    <button  className="hover:shadow-green-200 shadow-md min-w-16 bg-green-300 border-green-500 border-2 mx-1 hover:bg-green-200" onClick={addingTask}>Add</button>
    <ul className="grid grid-cols-1 text-sky-400 font-mono text-2xl justify-items-center">
      {TaskList.map((task,index)=>
      <li className="flex justify-text-centre p-0 min-w-full shadow-md bg-slate-700  m-2  border-4 border-green-300 hover:shadow-green-200 " id={index}><span className="flex basis-full">Task {index+1}: {task}</span>
      <button className="shadow-sm shadow-red-300 bg-red-500 m-1 border-2 rounded-xl border-red-800 text-white text-sm hover:bg-red-300 hover:text-black p-1" onClick={()=>deleteTask(index)}>delete</button>
      <button className="ml-4 mr-4">↑</button><button className="mr-4">↓</button>
        </li>
        
      )}
    </ul>
    </div>
  </>
}
export default Todo;