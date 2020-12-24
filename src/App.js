import React from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/TodoList';



function App() {

  
  return (
    <div className="App">
    <h1> Todo Form</h1>

    <Form/>
     <TodoList/>
    </div>
  );
}

export default App;
