import { createStore } from 'redux';
import { timerReducer } from './reducers/timerReducer';

export const store = createStore(timerReducer);
