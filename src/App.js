import React, { Component } from 'react';
import ToDoList from './components/ToDoList';


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

  render() {
    let {todos} = this.state;

    return (
      <div className="App">
        <ToDoList todos={todos} />
      </div>
    );
  }
}

export default App;
