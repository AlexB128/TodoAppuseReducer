import React, {useContext} from 'react'
import {TodoContext} from './TodoStore';

const Header = () => {
    const {todos} = useContext(TodoContext);

    return (
        <div style={{padding: "1.5rem"}}>
            <h1>Todo app</h1>
            <div>{JSON.stringify(todos)}</div>
            <div>{todos.filter(t=>t.status==='todo').length} Todos</div>
        </div>
    )
}

export default Header