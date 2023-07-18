import React from 'react';
import "./App.css"
import {useState} from 'react';
import ListItem from './list-item';
function App() {
  const [item,setItem]=useState('');
  const handleChange=(e)=>{
    setItem(e.target.value);
  }
  const [list,setList]=useState([]);
  const handleClick=()=>{
    if(item===''){
      alert("please enter the task");
    }
    else if(list.includes(item)){
      alert("task already exist");
    }
    else{
    setList((prev)=>{
      return [...prev,item];
    })
    setItem('');
  }
  }
  const deleteItems=(id)=>{
    setList(list.filter((itemval,index)=> {return index!==id;}));
  }
  return (
    <>
    <div className="main-body">
      <div className="center-frame">
        <br />
        <h3 className="heading">My To-Do App</h3>
        <br />
        <div className='input-fields'>
        <input type="text" id="new-item" placeholder='Enter new task'onChange={handleChange} value={item}/>
        <button id="add-button" onClick={handleClick}>+</button></div>
        <br />
        <ul className="task-list">
          {list.map((itemval,index)=>{
            return <ListItem text={itemval}d
            id={index} delFunction={deleteItems} />;
          })}
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
