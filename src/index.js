import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
//components
import * as actions from './actions/actions'
import App from './App';
import LogIn from './components/LogIn'

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
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={App}/>
        <IndexRoute component={LogIn}/>
      </Route>
    </Router>
  </Provider> ,
  document.getElementById('root')
);
