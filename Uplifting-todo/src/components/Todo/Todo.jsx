import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { v4 as uuid } from "uuid";

export const Todo = () => {
  const [data, setData] = React.useState([]);
  const [showAll, setShowAll] = React.useState(true);

  const handleAdd = (title) => {
    const payload = {
      title,
      status: false,
      id: uuid()
    };
    setData([...data, payload]);
  };

  const handletoggle = (id) => {
    const updatedTodo = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setData(updatedTodo);
  };
  const handledelete = (id) => {};

  return (
    <div>
      <TodoInput onClick={handleAdd} />
      {data
        .filter((item) => (showAll ? true : !item.status))
        .map((item) => (
          <TodoList
            handledelete={handledelete}
            handletoggle={handletoggle}
            key={item.id}
            {...item}
          />
        ))}

      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Unfinished Task" : "Show All Tasks"}
      </button>
    </div>
  );
};
