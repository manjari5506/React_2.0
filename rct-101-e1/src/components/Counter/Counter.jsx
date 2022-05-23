import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count , setCount] = React.useState(0);

  const handleCount = (value) =>{
    setCount(count+value);
  }
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={handleCount(1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={handleCount(-1)}>-</button>
    </div>
  );
};

export default Counter;
