import React from "react";
import { Routes , Route} from "react-router-dom";
import { HomePage } from "./HomePage";
import  SinglePage from "./SinglePage";

const Pages = ()=>{
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/todos/:id" element={<SinglePage/>}/>
    </Routes>
   
  )
}

export {Pages};