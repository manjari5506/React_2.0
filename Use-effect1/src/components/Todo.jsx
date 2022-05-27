import React from "react";
import { useEffect, useState } from "react";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("https://m6g3bt.sse.codesandbox.io/todos?_page=1&_limit=50")
      .then((r) => r.json())
      .then((d) => {
        setTodo(d);
      });
  }, []);

  const saveInfo = () => {
    fetch("https://m6g3bt.sse.codesandbox.io/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        text: newTodo,
        isCompleted: false
      })
    })
      .then((r) => r.json())
      .then((d) => {
        setTodo([...todo, d]);
        setNewTodo("");
      });
  };

  return (
    <>
      <div>Todo</div>
      <div>
        <div>
          <input
            value={newTodo}
            onChange={({ target }) => setNewTodo(target.value)}
          />
          <button onClick={saveInfo}>Add</button>
        </div>
        {todo.map((todo) => (
          <div key={todo.id}>{todo.value}</div>
        ))}
      </div>
    </>
  );
};
