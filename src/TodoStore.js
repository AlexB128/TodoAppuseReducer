import React, {useReducer} from 'react';
import './App.css';
import useFetch from './useFetch';
import {todoReducer} from './TodoReducer';

export const TodoContext = React.createContext();

function TodoStore(props) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  const setInitData = (initData) => {
    dispatch({type:'SET_INIT_DATA', payload:initData});
  }
  const url = 'http://localhost:8080/todos';
  const loading = useFetch(setInitData, url);

  // useEffect(() => {console.log(todos)}, [todos]);

  return (
    <TodoContext.Provider value={{todos, loading, dispatch}}>
      <div style={{padding: "1.5rem"}}>
        {props.children}
      </div>
    </TodoContext.Provider>
  );
}

export default TodoStore;