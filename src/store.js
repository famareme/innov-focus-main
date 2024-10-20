import {configureStore} from '@reduxjs/toolkits';
import todoReducer from './components/TodoSlice';

export default configureStore({
  reduce: {
    todos: todoReducer
  }
})