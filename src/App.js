import React, { Component } from 'react';
import { connect } from 'react-redux';
// import components
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import ToDoSearch from './components/ToDoSearch';
import * as actions from './actions/actions'

export class App extends Component {
  constructor(props){
    super(props);
    this.onLogOut = this.onLogOut.bind(this);
  }

  onLogOut(e){
    e.preventDefault();
    var { dispatch } = this.props;
    dispatch(actions.startLogOut());
  }
  render() {
    return (      
      <div className="App">
        <div>
          <a href="#" onClick={this.onLogOut}>Log Out</a>
        </div>

        <h1>To Do App</h1>

        <ToDoSearch />
        <ToDoList />
        <AddToDo />
      </div>
    );
  }
}

export default connect()(App);
