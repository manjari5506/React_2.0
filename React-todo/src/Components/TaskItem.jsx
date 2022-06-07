import React from "react";
import {FaStar} from 'react-icons/fa';

export const TaskItem = ({ title,id, status,handletoggle }) => {
  return (
    <div className="list">
      <input type="checkbox" className="check" onChange={() =>handletoggle(id)}/>
      {/* <button className={status ? "TT" : "FF"} onClick={() =>handletoggle(id)}>{status? 'T' : 'F'}</button> */}
      <h2 className={status ? "TT" : "FF"}>{`${title}`}</h2>
      <FaStar className="star"/>
    </div>
  );
};
