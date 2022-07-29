import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toggleTodoSuccess ,toggleTodoRequest,toggleTodoFaliure, removeTodoRequest} from "../Redux/action";

const SinglePage = ()=>{
  const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const navigate = useNavigate();
    const { id } = useParams();
    const [currentTodo,setCurrentTodo] = useState({})
    // const [currentTodo] = useState(() => {
    //     return todos.find((item) => item.id === Number(id)) || {};
    // });

    const toggleStatus = (id,newStatus)=>{
        dispatch(toggleTodoRequest);
        axios.patch(`/todo/${id}`,{status:newStatus})
        .then(r=> toggleTodoSuccess(r.data))
        .catch(e => toggleTodoFaliure(e));
    }
    const removeTodo = (id)=>{
      dispatch(removeTodoRequest);
      axios.delete(`/todos/${id}`)
      .then(r=> {
          dispatch( removeTodoSuccess(id));
          navigate("/")
      })
        .catch(e => removeTodoFaliure(e));
    }
    useEffect(()=>{
      let currentTodo = todos.find((item) => item.id === Number(id)) || {};
      currentTodo && setCurrentTodo(currentTodo);
    },[todos,id])

    return(
      <div>
        <h3>{currentTodo?.title} 
        <button onClick={()=> toggleStatus(currentTodo.id,!currentTodo.status)}></button>
        <button onClick={() => removeTodo(currentTodo.id)}>Remove</button>
        </h3>
      </div>
    )
}

export default SinglePage;