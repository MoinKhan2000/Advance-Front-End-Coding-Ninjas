// counterReducer.js

import { INCREMENT, DECREMENT, RESET } from '../actions/counterActions';

// Initial state for the counter
const INITIAL_STATE = { count: 0 };

// Counter reducer function
export const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
