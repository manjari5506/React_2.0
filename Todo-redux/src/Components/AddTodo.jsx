import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { addTodoFaliure,addTodoSuccess,addTodoRequest } from "../Redux/action";
import axios from "axios";

const AddTodo = ()=>{
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const addTodo=(payload)=>{
        dispatch(addTodoRequest());
        axios.post("/todos",payload)
        .then((r) => dispatch(addTodoSuccess(r.data)))
        .catch((e) => dispatch(addTodoFaliure(e)));
    }
    const handleAdd = ()=>{
        if(todo){
            const payload = {title:todo,status:false}
            addTodo(payload);
            setTodo("")
        }
    }

    return(
        <div>
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="add todo..."/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export {AddTodo};