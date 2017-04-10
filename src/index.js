import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// redux
import { setSearchText,addTodo,toggleShowCompleted,toggleTodo } from './actions/actions.js';
import store from './store/configureStore';

store.subscribe(() => {
  console.log('New state', store.getState());
})

store.dispatch(addTodo('Clean the yard'));
store.dispatch(setSearchText('yard'));
store.dispatch(toggleShowCompleted());

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
