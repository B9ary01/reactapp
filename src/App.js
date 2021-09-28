import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";



import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

import {uuid} from 'uuidv4';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const LOCAL_STORAGE_KEY1="contacts";

  const [todos, setTodos] = useState([]);

  //contact state
  const[contacts, setContacts]=useState([]);
  //handler
  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id:uuid(), ...contact}]);
  }

  const removeContactHandler=(id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id !==id;
    });
    setContacts(newContactList);
  }


  //retrieve data

  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY1));
  if(retrieveContacts) setContacts(retrieveContacts);
}, []);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY1, JSON.stringify(contacts));
  }, [contacts]);


  useEffect(() => {

    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);


  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  //contact list
  /*
  const contacts=[
  {
    id:"1",
    name:"Dimash",
    address:"3 hill way",
  },
  {
    id:"2",
    name:"Anil",
    address:"4 broad way",
  }
  ];

  <ContactList contacts={contacts} getContactId={removeContactHandler}/>

        < AddContact addContactHandler={addContactHandler}/>  

<Typography style={{ padding: 44 }} variant="h1">
        React 
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
  */

  return (
      <div className="ui container">

   // <div className="App">
      <Router>
       < Header/>
       <Switch>
       <Route path="/" exact component={ContactList}/>
       <Route path="/add" component={AddContact} />
       </Switch>
        

                    </Router>
 

    //  </div>
 </div>
    
  );
}

export default App;
