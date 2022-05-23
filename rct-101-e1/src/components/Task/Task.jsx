import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
import AddTask from "../AddTask/AddTask";

const Task = () => {
  const [data, setData] = React.useState([]);

  const handleAdd = (title) =>{
    const payload = {
      title,
      status:false,
    };
    setData([...data , payload]);
  };

  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">
        <AddTask onClick={handleAdd}/>
      </div>
      <Counter />
      <button data-cy="task-remove-button"></button>
    </li>
  );
};

export default Task;
