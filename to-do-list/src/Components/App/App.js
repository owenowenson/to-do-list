import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState({ task: "", date: "", completed: false });
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  function onInput(e) {
    setToDo({ ...toDo, task: e.target.value });
  }

  function onEnter(e) {
    if (e.key === "Enter" && toDo.task.length > 0) {
      onSubmit();
    }
  }

  function onSubmit() {
    const d = new Date();
    let hours = "0" + d.getHours();
    let mins = "0" + d.getMinutes();
    let time = hours.slice(-2) + ":" + mins.slice(-2);
    setToDo({ ...toDo, date: time });

    if (toDo.task.length > 0) {
      setList([...list, toDo]);
      setToDo({ ...toDo, task: "" });
      console.log(list);
    }
  }

  useEffect(() => {
    onSubmit();

    const last = list.length - 1;
    if (list.length > 0 && count < 2) {
      setList([...list.slice(0, last), { ...list[last], date: toDo.date }]);
      setCount(count + 1);
    } else if (count === 2) {
      setCount(0);
    }
  }, [list]);

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
                    setCount(2)
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
                    setCount(2)
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
                    console.log('hi')
                  }}
                >
                  {item.task}
                </li>
              )}
              <div className="buttons">
                <span className="date">{item.date}</span>
                <button
                  className="edit"
                  onClick={function () {
                    setCount(2)
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
