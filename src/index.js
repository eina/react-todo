import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

//components
import * as actions from './actions/actions'
import store from './store/configureStore';
import firebase from './firebase/index';
import router from './router';

firebase.auth().onAuthStateChanged((user)=> {
  if(user) {
    store.dispatch(actions.logIn(user.uid))
    store.dispatch(actions.startAddToDos());
    hashHistory.push('/todos')
  }else {
    store.dispatch(actions.logOut())
    hashHistory.push('/')
  }
})

// store.subscribe(() => {
//   let state = store.getState();
//   console.log('New state', state);

//   //persist to local storage
//   ToDoAPI.setToDos(state.todos);
// })

//for anything that might be in localstorage already
// let initialTodos = ToDoAPI.getToDos();
// store.dispatch(actions.addToDos(initialTodos))

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider> ,
  document.getElementById('root')
);
