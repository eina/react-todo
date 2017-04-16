import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions'

export class LogIn extends Component {
  constructor(props){
    super(props);
    this.onLogIn = this.onLogIn.bind(this);
  }
  onLogIn(){
    const { dispatch } = this.props;

    dispatch(actions.startLogIn());
  }
  render(){
    return(
      <div>
        <h1>Todo App</h1>

        <h3>Login</h3>
        <button onClick={this.onLogIn}>Login with GitHub</button>
      </div>
    );
  }
}

export default connect()(LogIn);