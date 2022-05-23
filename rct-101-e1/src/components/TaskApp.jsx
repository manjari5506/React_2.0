import React from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";
import AddTask from "./AddTask/AddTask";


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  // const handleToggle = (title) =>{
  //   data.title === title ? 
  // }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask />
      <Tasks />
    </div>
  );
};

export default TaskApp;
