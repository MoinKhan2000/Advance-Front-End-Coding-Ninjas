const redux = require('redux')
/*
Redux Data Flow

+-------------+          Dispatch Action          +-----------+          Returns New State          +-------------+
|   Action    | --------------------------------> |  Reducer  | ---------------------------------> |   Store     |
+-------------+                                   +-----------+                                    +-------------+
        ^                                                                                                 |
        |                                                                                                 |
        |                                                                                                 |
        |                                                                                                 v
        |                                    Notify View of State Change                               +---------+
        +--------------------------------------------------------------------------------------------> |  View   |
                                                                                                       +---------+

Flow:
1. The View dispatches an Action.
2. The Action goes to the Reducer.
3. Reducer processes the action and returns a new state.
4. The Store updates with the new state and notifies the View.
5. The View re-renders based on the updated state.
*/


// Action Types.

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// Action Creators.

function addTodo(text) {
  return { type: ADD_TODO, text };
}

function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

// Initial State.

const initialState = {
  todos: [],
};

// Reducer. - Reducers must return the state.

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (action.index == index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }
        ),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.index !== action.index),
      };
    default:
      return state;
  }
}

//? Crating Store.
const store = redux.createStore(todoReducer)

// Dispatch the action
store.dispatch(addTodo('Need to go to Hyderabad'))
store.dispatch(addTodo('Today need to go to Shoib Bhai'))
store.dispatch(toggleTodo(0))

// How to read the stroe or get the data.

console.log(store.getState());