import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import ShoeCard from "./ShoeCard/ShoeCard";
import axios from "axios";

const Shoes = () => {
  const dispatch = useDispatch();
  const shoes = useSelector(state=> state.shoes)
  const getShoes = () =>{
    dispatch(getShoesRequest());
    axios.get("/shoes")
    .then((r) => dispatch(getShoesSuccess(r.data)))
    .catch((e) => dispatch(getShoesFailure(e)))
  };
  useEffect(() =>{
      getShoes();
  }, []);

  console.log(shoes);
  return <div>
    <ShoeCard shoeList={shoes}/>
  </div>;
};

export default Shoes;
