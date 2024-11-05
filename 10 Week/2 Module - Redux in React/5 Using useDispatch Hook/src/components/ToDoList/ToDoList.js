import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions/todoActions";
import "./ToDoList.css";

function ToDoList() {

  // we can also do like this way //? const todos = store.getState().todos; 
  //? but this will be called tight coupling because we will require the access of store directly.

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleToggle = (index) => {
    dispatch(toggleTodo(index))
  }

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? 'completed' : 'pending'}>{todo.completed ? 'Completed' : 'Pending'}</span>
            <button className="btn btn-warning"
              onClick={() => { handleToggle(index + 1) }}
            >Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
