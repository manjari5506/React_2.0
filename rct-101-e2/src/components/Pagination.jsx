import React from "react";
import { Button,ButtonGroup,Select } from "@chakra-ui/react";
import axios from "axios";
import { useState,useEffect } from "react";


const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
  const [prod,setProd] = useState([]);
  const [newProd,setNewProd] = useState([]);
  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(3);
  const [totalCount,setTotalCount] = useState([]);

  useEffect(()=>{
    axios("https://localhost:8080/products?_page=1&_limit=3")
    .then((r) =>r.json())
    .then((d) =>{
      setProd(d);
    })
  },[]);
  const Info = () =>{
    fetch("https://localhost:8080/products",{
      method:"POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({
        title:"",
        category:"",
        gender:"",
        imageSrc:"",
        price:"",
      })
    })
    .then((r) => r.json())
    .then((d) =>{
        setProd([...prod,d]);
        setNewProd("");
    })
  }

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">First</Button>
      <Button data-cy="pagination-previous-button">Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" disabled={totalCount < page*limit} onClick={() =>{
        setPage(page+1);
      }}>Next</Button>
      <Button data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
