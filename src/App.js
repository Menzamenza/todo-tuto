import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.random() * 1000,
      value: todo
    }

    setTodoList(prev => [...prev, newTodo])
    setTodo('')
  }

  const removeTodo = (todoId) => {
    const newTodos = todoList.filter(todo => todo.id !== todoId)
    setTodoList(newTodos)
  }
  const editTodo = (todoId) => {
    
    
  }
  return (
    <div className="App container">
      <h1 className="text-center mt-4 mb-4">To-do List</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <form
            className="p-4"
            onSubmit={addTodo}
          >
            <div className="mb-3">
              <label htmlFor="taskInput" className="form-label">Task</label>
              <input
                type="text"
                className="form-control"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}

              />
              <small id="taskHelp" className="form-text text-muted">
                Enter your task here.
              </small>
            </div>
            <button type="submit" className="btn btn-success w-100">Add Task</button>
          </form>
          <h3>Tasks List</h3>
          <ul>
            {todoList.map(todo => (
              <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center mt-2">
                {todo.value}
                <button
                  className="btn btn-danger"
                  onClick={() => removeTodo(todo.id)}
                >X
                </button>
              </li>
            ))}
            {todoList.length === 0 && <p className="text-center text-danger">No tasks yet.</p>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;