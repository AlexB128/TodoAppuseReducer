import React, {useReducer} from 'react';
import './App.css';
import List from './List';
import Header from './Header';
import Form from './Form';
import TodoStore from './TodoStore';

function App() {
  return (
    <TodoStore>
      <Header />
      <Form />
      <List />
    </TodoStore>
  );
}

export default App;
