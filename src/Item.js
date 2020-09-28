import React, {useContext} from 'react'
import {TodoContext} from './TodoStore';

const Item = ({todo}) => {
    const {dispatch} = useContext(TodoContext);

    const toggleItem = (e) => {
        dispatch({type: 'CHANGE_STATUS', payload: e.target.dataset.id})
    }

    const style = todo.status === "done" ? {
        textDecoration: 'line-through',
        fontStyle: 'italic'
    } : null;

    return (
        <li data-id={todo.id} onClick={toggleItem} style={style}>
            {todo.title}
        </li>
    )
}

export default Item