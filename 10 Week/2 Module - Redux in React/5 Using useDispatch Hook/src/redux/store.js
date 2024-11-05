import { createStore } from 'redux'
import { todoReducer } from './reducers/todoReducer'

// Create a Redux store that holds the state of your application.
export const store = createStore(todoReducer)