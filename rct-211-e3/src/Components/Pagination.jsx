import { useState } from "react";
import "./Pagination.css";

export const Pagination = ({ total, selected, onPageChange }) => {
  const [page,setPage] = useState(selected);

  const handlePage = (e)=>{
    setPage(page + e);
  }
  return <div className="pageContainer">
    <h3>Pages</h3>
    <button className="butt" onClick={()=>handlePage(-1)} disabled={page<=1 ? true:false}>-</button>
    <h3>{page}</h3>
    <button className="butt" onClick={()=>handlePage(1)} disabled={page>=10 ? true:false}>+</button>
    <h3>Total:{total}</h3>
  </div>;
};
