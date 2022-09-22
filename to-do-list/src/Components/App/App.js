import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState({ task: "", completed: false });
  const [list, setList] = useState([]);

  function onInput(e) {
    setToDo({ ...toDo, task: e.target.value });
    console.log(toDo);
  }

  function onEnter(e) {
    if (e.key === "Enter" && toDo.task.length > 0) {
      setList([...list, toDo]);
      setToDo({ ...toDo, task: "" });
    }
  }

  function onSubmit() {
    if (toDo.task.length > 0) { 
      setList([...list, toDo]);
      setToDo({ ...toDo, task: "" });
    console.log(list);
    }
  }

  return (
    <div className="App">
      <div className="main">
        <h1>To-Do</h1>

        <div className="input-field">
          <input value={toDo.task} onChange={onInput} onKeyUp={onEnter} />
          <button onClick={onSubmit}>+</button>
        </div>

        <ul>
          {list.map((item, index) => (
            <div className="item" key={index}>
              {item.completed ? (
                <li
                  className="complete"
                  onClick={function () {
                    let selectedToDo = {
                      ...item,
                      completed: !list[index].completed,
                    };
                    setList([
                      ...list.slice(0, index),
                      selectedToDo,
                      ...list.slice(index + 1),
                    ]);
                    console.log(selectedToDo);
                  }}
                >
                  {item.task}
                </li>
              ) : (
                <li
                  className="incomplete"
                  onClick={function () {
                    let selectedToDo = {
                      ...item,
                      completed: !list[index].completed,
                    };
                    setList([
                      ...list.slice(0, index),
                      selectedToDo,
                      ...list.slice(index + 1),
                    ]);
                    console.log(selectedToDo);
                  }}
                >
                  {item.task}
                </li>
              )}
              <div className="buttons">
                <button
                  className="edit"
                  onClick={function () {
                    let editedToDo = prompt("Edit to-do:", item.task);
                    if (editedToDo !== null) {
                      editedToDo = { ...item, task: editedToDo };
                      setList([
                        ...list.slice(0, index),
                        editedToDo,
                        ...list.slice(index + 1),
                      ]);
                      console.log(editedToDo);
                    }
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={function () {
                    setList([
                      ...list.slice(0, index),
                      ...list.slice(index + 1),
                    ]);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
