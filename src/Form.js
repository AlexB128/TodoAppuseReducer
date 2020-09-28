import React, {useContext, useRef} from 'react'
import {TodoContext} from './TodoStore';

function Form() {
    const inputRef = useRef(false);
    const {dispatch} = useContext(TodoContext);
    const addTodo = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_TODO', payload:inputRef.current.value});
    }
    
    return (
        <form action="">
            <input type="text" ref={inputRef}/>
            <button onClick={addTodo} >Add Task</button>
        </form>
    );
}

export default Form;