import React from "react";

export const TodoList = ({ title, id, status, handletoggle }) => {
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={() => handletoggle(id)}>
        {status ? "True" : "False"}
      </button>
    </div>
  );
};
