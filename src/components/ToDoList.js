import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo';

class ToDoList extends Component {
  render(){
    //todos was a prop passed from App.js
    let {todos} = this.props;
    const renderTodos = () => {
      return todos.map((todo)=> {
        return (
          // every attribute of todo will get passed 
          //to ToDo as its own prop
          <ToDo key={todo.id} {...todo} />
        )
      })
    }

    return (
      <div>
        { renderTodos() }
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(ToDoList);