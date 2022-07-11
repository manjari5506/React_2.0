import React from "react";

export const TodoInput = ({ onClick }) => {
  const [title, setTitle] = React.useState("");

  return (
    <div>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => onClick(title)}>ADD</button>
    </div>
  );
};
