import * as redux from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";

// Combine reducers, specifying the state branches they manage
const rootReducer = redux.combineReducers({
  todos: todoReducer,   // Manages the "todos" state
  notes: noteReducer    // Manages the "notes" state
});

export const store = redux.createStore(rootReducer);
