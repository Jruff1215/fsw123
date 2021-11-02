import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { items } from './components/STORE';

function App() {
  const [todos, setTodos] = useState(items);
  const [newItems, setNewItems] = useState ('')

  
  const onSubmit = (e) => {
    e.preventDefault()
    let newItem = {
        name: newItems
    }

    setTodos([...todos, newItem])
}


  const completeTodo = id => {
   let newTodos=todos.map(todo => {
    if (todo.id === id) {
      todo.isComplete = !todo.isComplete
      return todo
    }
    else return todo
   }) 

         setTodos(newTodos)
  }   
  const deleteTodo = id => {
    let newTodos = todos.filter( todo => {
      if (todo.id !== id) {
        return todo
      }
    })
    setTodos(newTodos)
  }
 

  return (
    <div>
      <h1>List of Todos</h1>
      <form onSubmit={onSubmit}>
               <label>Todo Item</label>
               <input
                type='text'
                onChange={(e) => setNewItems(e.target.value) }
               />
               <button>Add New Todo</button> 
            </form>
    < TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </div>
  
)
}

export default App;
