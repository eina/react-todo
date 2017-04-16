import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/actions.js';
import moment from 'moment';

class ToDo extends Component {
  render(){
    let {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    let renderDate = () => {
      var message = 'Created at ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed at ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ hh:mm A');
    }
    return (      
      <div onClick={() => {
          dispatch(action.startToggleToDo(id, !completed));
         }}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
}

export default connect()(ToDo)

