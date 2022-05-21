import React from "react";

export const TaskItem = ({ title,id, status,handletoggle }) => {
  return (
    <div className="list">
      <h2 >{`${title}`}</h2>
      <button className={status ? "TT" : "FF"} onClick={() =>handletoggle(id)}>{status? 'T' : 'F'}</button>
    </div>
  );
};
