import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import App from '../App.js';
import LogIn from '../components/LogIn';
import firebase from '../firebase'

//middleware to keep routes private
const requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser){
    //if nobody is logged in, direct them to default path
    replace('/')
  }
  next();
}

const redirectIfLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser){
    //if nobody is logged in, direct them to default path
    replace('/todos')
  }
  next();
}

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="todos" component={App} onEnter={requireLogin} />
      <IndexRoute component={LogIn} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
)