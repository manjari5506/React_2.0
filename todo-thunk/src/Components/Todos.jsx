import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoListFaliure, getTodoListRequest, getTodoListSuccess } from "../Redux/action";
import axios from "axios";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos)
  const getTodos = () => {
    dispatch(getTodoListRequest());
    axios.get("/todos")
    .then((r) => dispatch(getTodoListSuccess(r.data)))
    .catch((e) => dispatch(getTodoListFaliure(e)));
  };

  useEffect(() => {
   if(todos?.length === 0){
     getTodos();
    }
  }, []);
  console.log(todos);
  return <div>
    <h3>Todos</h3>
    <AddTodo />
    <TodoList todoList={todos}/>
  </div>;
};

export { Todos };
