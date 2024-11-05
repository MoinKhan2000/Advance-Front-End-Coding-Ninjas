import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions"
let initialState = {
  todos: [
    { text: "Buy groceries", completed: false, id: 1, },
    { text: "Clean the house", completed: true, id: 2, }
  ],
}

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
            id: state.todos.length + 1
          }
        ]
      }
    }

    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      }
    }

    default: {
      return state
    }
  }
}