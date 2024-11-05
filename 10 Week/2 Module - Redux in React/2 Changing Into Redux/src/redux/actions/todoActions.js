// Actions Constants.

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO'


// Action Creators.
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export { addTodo, toggleTodo, ADD_TODO, TOGGLE_TODO }