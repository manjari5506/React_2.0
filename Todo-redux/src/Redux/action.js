import * as types from "./actionTypes";


const getTodoListRequest = () => {
    return { type: types.GET_TODO_LIST_REQUEST };
  };
  const getTodoListSuccess = (payload) => {
    return { type: types.GET_TODO_LIST_SUCCESS, payload };
  };
  const getTodoListFaliure = () => {
    return { type: types.GET_TODO_LIST_FALIURE };
  };
  

  const addTodoRequest = () => {
    return { type: types.ADD_TODO_REQUEST };
  };
  const addTodoSuccess = (payload) => {
    return { type: types.ADD_TODO_SUCCESS, payload };
  };
  const addTodoFaliure = () => {
    return { type: types.ADD_TODO_FALIURE };
  };
  

  const toggleTodoRequest = () => {
    return { type: types.TOGGLE_TODO_REQUEST };
  };
  const toggleTodoSuccess = (payload) => {
    return { type: types.TOGGLE_TODO_SUCCESS, payload };
  };
  const toggleTodoFaliure = () => {
    return { type: types.TOGGLE_TODO_FALIURE };
  };

  const removeTodoRequest = () => {
    return { type: types.REMOVE_TODO_REQUEST };
  };
  const removeTodoSuccess = (payload) => {
    return { type: types.REMOVE_TODO_SUCCESS, payload };
  };
  const removeTodoFaliure = () => {
    return { type: types.REMOVE_TODO_FALIURE };
  };
  
  export { getTodoListFaliure,
     getTodoListRequest,
      getTodoListSuccess ,
       addTodoFaliure, 
       addTodoSuccess,
        addTodoRequest,
        toggleTodoFaliure,
        toggleTodoRequest,
        toggleTodoSuccess,
        removeTodoFaliure,
        removeTodoRequest,
        removeTodoSuccess
      };
  