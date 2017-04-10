import React, { Component } from 'react';
import moment from 'moment';

export default class ToDoList extends Component {
  render(){
    let {text, id, completed, createdAt, completedAt} = this.props;
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
      <div onClick={() => this.props.onToggle(id)}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
}