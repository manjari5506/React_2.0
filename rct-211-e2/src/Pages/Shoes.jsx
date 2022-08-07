import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import {useSearchParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShoes } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";
import  styled from "styled-components";
//import {Link} from "react-router-dom";

const Shoes = () => {
 
  const shoes = useSelector((state => state.shoes));
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get("category");

  useEffect(() =>{
    if(shoes.length === 0 && (!urlCategory)){
      dispatch(getShoes());
    }
  }, []);
 // console.log(shoes)

  return (
    <div>
      <Filter />
      <div> 
       <ShoeCard shoes={shoes} />
      </div>
    </div>
  );
};

export default Shoes;
