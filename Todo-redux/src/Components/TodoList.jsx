import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({todoList})=>{
    return(
        <div>
          {todoList?.map((item)=>{
            return(
                <div key={item.id}>
                    <Link to={`/todos/${item.id}`}>
                    <div>{item.title}</div>
                    {/* <div>{item.status? "True" : "False"}</div> */}
                    </Link>
                </div>
            )
          })}
        </div>
    )
}

export {TodoList};