import React, { Component } from 'react';

// import components
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Finish this video'
        }, {
          id: 4,
          text: 'Shower and pluck eyebrows'
        }
      ],
    };
  }

  handleAddToDo (text){
    alert('new todo: ' + text)
  }

  render() {
    let {todos} = this.state;

    return (
      <div className="App">
        <ToDoList todos={todos} />
        <AddToDo onAddTodo={this.handleAddToDo} />
      </div>
    );
  }
}

export default App;
