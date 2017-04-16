import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//components
import * as actions from './actions/actions'
import ToDoAPI from './api/ToDoAPI';
import App from './App';

// redux
import store from './store/configureStore';

// store.subscribe(() => {
//   let state = store.getState();
//   console.log('New state', state);

//   //persist to local storage
//   ToDoAPI.setToDos(state.todos);
// })

//for anything that might be in localstorage already
// let initialTodos = ToDoAPI.getToDos();
// store.dispatch(actions.addToDos(initialTodos))

store.dispatch(actions.startAddToDos());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);
