import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as action from './actions/actions.js';
import App from './App';

// redux
import store from './store/configureStore';

store.subscribe(() => {
  console.log('New state', store.getState());
})

store.dispatch(action.addTodo('Clean the yard.'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);
