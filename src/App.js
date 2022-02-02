import { useState } from 'react';
import './App.css'
function App() {
  const [ToDos,setToDos] = useState([])
  const [ToDo,setToDo] = useState('') 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={ToDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...ToDos,{id:Date.now(), text: ToDo, status: false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      { ToDos.map((result)=>{
        return ( <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(result)
              setToDos(ToDos.filter(InResult=>{
                if(InResult.id===result.id){
                  InResult.status=e.target.checked
                }
                return InResult
              }))
            }} value={result.status} type="checkbox" name="" id="" />
            <p>{result.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div> )
        })
      }

      {ToDos.map((result)=>{
        if(result.status){
          return(<h1>{result.text}</h1>)
        }
        return null
      })}
      </div>
    </div>
  );
}

export default App;
