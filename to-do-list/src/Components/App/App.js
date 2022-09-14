import React from 'react';
import './App.css';
import { useState } from 'react'

function App() {
  const [toDo, setToDo] = useState()
  const [list, setList] = useState([])

  // function submitToDo(input){
  //   setList(input)
  // }

  return (
    <div className="App">
     
     <div className='main'>
     <h1>To-Do</h1>

     <div className='input-field'>
     <input onChange={function(e){setToDo(e.target.value); console.log(toDo)}}/>
     <button onClick={function(){setList([...list, toDo]); console.log(list)}}>+</button>
     </div>

     <ul>
      {list.map((item, index) => 
      <div className='item' key={index}>
      <li>{item}</li>
      <div className='buttons'>
      <button className='edit' onClick={function(){let editedToDo = prompt('Edit to-do:', item); 
      if(editedToDo !== null){
      setList([...list.slice(0, index), editedToDo, ...list.slice(index+1)]) }}}>Edit</button>
      <button className='delete' onClick={function(){setList([...list.slice(0, index), ...list.slice(index+1)])}}>-</button>
      </div>
      </div>
      )}
     </ul>

     </div>
    </div>
  );
}

export default App;
