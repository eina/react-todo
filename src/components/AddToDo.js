import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

class AddToDo extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    let { dispatch } = this.props;
    let todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      //clear out the value
      this.refs.todoText.value = '';
      //onAddTodo is a prop of this component 
      //that runs the function (in App.js): handleAddToDo
      this.props.onAddTodo(todoText);
      dispatch(actions.addTodo(todoText))
    } else {
      //focus on the field so they can put data since it's empty
      this.refs.todoText.focus();
    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add to do item here"
          ref="todoText" />
        <button type="submit">Add To Do</button>
      </form>
    );
  }
}

export default connect()(AddToDo);