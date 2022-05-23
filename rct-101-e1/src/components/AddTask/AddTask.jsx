import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({onClick}) => {
   const [title , setTitle] = React.useState("");
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Enter Task" value={title}
      onChange={(e) => setTitle(e.target.value)}/>
      <button data-cy="add-task-button" onClick={() => onClick(title)}>+</button>
    </div>
  );
};

export default AddTask;
