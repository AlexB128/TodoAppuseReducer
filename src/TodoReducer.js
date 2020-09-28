
export const todoReducer = (todos, {type, payload}) => {
    let newTodos = [];
    switch (type) {
      case 'ADD_TODO':
        newTodos = [...todos, {
            id: todos.length + 1,
            title: payload,
            status: 'todo'
          }];
        return newTodos;
      case 'SET_INIT_DATA':
        return payload;
      case 'CHANGE_STATUS':
        newTodos = todos.map(todo => {
          if (todo.id === Number(payload)) {
            todo.status = todo.status === 'todo' ? 'done' : 'todo';
          }
          return todo;
        });
        return newTodos;
      default:
        break;
    }
  }