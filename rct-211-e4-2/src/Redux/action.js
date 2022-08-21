import * as types from "./actionTypes";
//import axios from "axios";

const getCountriesRequest = ()=>{
    return {type : types.GET_COUNTRIES_REQUEST};
}

const getCountriesSuccess = (payload)=>{
    return {type : types.GET_COUNTRIES_SUCCESS, payload};
}

const getCountriesFailure = ()=>{
    return {type : types.GET_COUNTRIES_FAILURE};
}



export {getCountriesRequest , getCountriesFailure, getCountriesSuccess};