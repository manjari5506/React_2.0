import React from "react";
import { TaskItem } from "./TaskItem";
import { v4 as uuid } from "uuid";

export const Tasks = () => {
  const [query, setQuery] = React.useState("");
  const [task, setTask] = React.useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };
  const handleAdd = () => {
    const payload = {
      title: query,
      status: false,
      id: uuid()
    };
    let newTask = [...task, payload];
    setTask(newTask);
  };

  const handletoggle = (id) => {
    const updatedTodo = task.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTask(updatedTodo);
  };

  return (
    <>
      <div className="grey">
        <h1>TODO APP</h1>
        <div>
          {task.map((item) => {
            return (
              <div className="listdiv">
                <TaskItem
                  title={item.title}
                  status={item.status}
                  handletoggle={handletoggle}
                  key={item.id}
                  {...item}
                />
              </div>
            );
          })}
        </div>
        <div>
          <input
            value={query}
            onChange={handleChange}
            placeholder="Write Something"
          />

          <button className="plus" onClick={handleAdd}>
            +
          </button>
        </div>
      </div>
    </>
  );
};
