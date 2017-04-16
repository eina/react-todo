import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {  searchTextReducer,showCompletedReducer, todosReducer, authReducer } from '../reducers/reducers.js';


let reducer = combineReducers({
  searchText: searchTextReducer,
  showCompleted: showCompletedReducer,
  todos: todosReducer,
  auth: authReducer
})

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))


export default store;