import React from "react";

const Counter = () =>{
  const [count , setCount] = React.useState(0);

  return(
    <>
    <h1 className="heading">Counter App</h1>
    <h1 className={count%2==0 ? "even" : "odd"}>{count}</h1>
    <button onClick={ () => setCount(count+1)}>Increment</button>
    <button onClick={ () => setCount(count-1)}>Decrement</button>
    <button onClick={ () => setCount(count*2)}>Double</button>

    </>
  )
}

export { Counter };