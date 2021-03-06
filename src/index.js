//import React from 'react';
import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoForm from './components/TodoForm';

import reportWebVitals from './reportWebVitals';
import { IconName } from "react-icons/ti";

import Play from './Play';
import 'semantic-ui-css/semantic.min.css';



//import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;

//ReactDOM.render(<Play />,document.getElementById('plays'));




//ReactDOM.render(<Play />,document.getElementById('plays'));



const mynum = <input type="number" />;



const mytable = (
  <ul>
    <li>sos</li>
    <li>opera</li>
    <li>stranger</li>
  </ul>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
