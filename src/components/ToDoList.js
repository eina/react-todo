import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo';
import ToDoAPI from '../api/ToDoAPI'
class ToDoList extends Component {
  render(){
    //todos was a prop passed from App.js
    let { todos, showCompleted, searchText } = this.props;
    const renderTodos = () => {
      return ToDoAPI.filterToDos(todos, showCompleted, searchText).map((todo)=> {
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
    return state;
    //return everything
  }
)(ToDoList);