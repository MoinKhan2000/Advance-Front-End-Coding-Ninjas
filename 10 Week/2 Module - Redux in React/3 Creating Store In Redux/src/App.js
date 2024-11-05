import { useState } from "react";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import store from '../src/redux/store'
import './App.css';
import { Provider } from "react-redux";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (text) => {
    setTodos([...todos, { id: todos.length, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id == id ? { ...todo, completed: !todo.completed } : todo))
  }

  return (
    <div>
      <h1>To Do App</h1>
      <Provider store={store}>
        <TodoForm onCreateTodo={createTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} />
      </Provider>
    </div>
  );
}

export default App;
