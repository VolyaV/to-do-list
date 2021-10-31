import React from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = React.useState('')
  const [todos, setTodos] = React.useState([])
  const [status,setStatus] = React.useState('all')
  const [filteredTodos,setFilteredTodos] = React.useState([])
  
  React.useEffect(()=>{
    filterHandler()
  },[todos,status])

  const filterHandler =()=>{
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.completed === true))
        break;
      case 'uncompleted':
          setFilteredTodos(todos.filter(todo=> todo.completed === false))
          break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>to-do-app</h1>
      </header>
      <Form
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      status={status}
      setStatus={setStatus} 
      />
      <TodoList
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
