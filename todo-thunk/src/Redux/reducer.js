import * as types from "./actionTypes";

const initialState = {
    todos: [],
    isLoading: false,
    isError: false
  }
  const reducer = (state=initialState,action) =>{
    const {type,payload} = action;
  
    switch(type){
       case types.GET_TODO_LIST_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
       case types.GET_TODO_LIST_SUCCESS:
            return{
                ...state,
                todos:payload,
                isLoading:false,
                isError:true
            }
       case types.GET_TODO_LIST_FALIURE:
            return{
                ...state,
                isLoading:true,
                isError:false
            }


        case types.ADD_TODO_REQUEST:
                return{
                    ...state,
                    isLoading:true,
                    isError:false
                }
       case types.ADD_TODO_SUCCESS:
        let newTodos = [...state.todos,payload]
                return{
                    ...state,
                    todos:newTodos,
                    isLoading:false,
                    isError:true
                }
        case types.ADD_TODO_FALIURE:
                return{
                    ...state,
                    isLoading:true,
                    isError:false
                }

        
        
        case types.TOGGLE_TODO_REQUEST:
                    return{
                        ...state,
                        isLoading:true,
                        isError:false
                    }
        case types.TOGGLE_TODO_SUCCESS:
            let newToggleTodos = state.todos.map(item => item.id === payload.id ? payload : item)
                    return{
                        ...state,
                        todos:newToggleTodos,
                        isLoading:false,
                        isError:true
                    }
         case types.TOGGLE_TODO_FALIURE:
                    return{
                        ...state,
                        isLoading:true,
                        isError:false
                    }  
                    
                    
        case types.REMOVE_TODO_REQUEST:
                    return{
                        ...state,
                        isLoading:true,
                        isError:false
                    }
        case types.REMOVE_TODO_SUCCESS:
            let remainTodos = state.todos.filter(item => item.id !== payload)
                    return{
                        ...state,
                        todos:remainTodos,
                        isLoading:false,
                        isError:true
                    }
         case types.REMOVE_TODO_FALIURE:
                    return{
                        ...state,
                        isLoading:true,
                        isError:false
                    }   
      default:
        return state;
    }
  }
  
  export {reducer};