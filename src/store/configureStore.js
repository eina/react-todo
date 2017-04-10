import { combineReducers, createStore, compose } from 'redux';
import {  searchTextReducer,showCompletedReducer, todosReducer} from '../reducers/reducers.js';


let reducer = combineReducers({
  searchText: searchTextReducer,
  showCompleted: showCompletedReducer,
  todos: todosReducer
})

const store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))


export default store;