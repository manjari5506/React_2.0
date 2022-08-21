import * as types from "./actionTypes";



const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
const {type, payload} = action;

  switch(type) {
    case types.GET_COUNTRIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
      case types.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: payload,
        isLoading: false,
        isError: true
      }
      case types.GET_COUNTRIES_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false
        }
        default:
          return state;
  }
};

