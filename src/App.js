import React, { Component } from 'react';

// import components
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import ToDoSearch from './components/ToDoSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoSearch />
        <ToDoList />
        <AddToDo />
      </div>
    );
  }
}

export default App;
