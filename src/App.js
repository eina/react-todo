import React, { Component } from 'react';

// import components
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import ToDoSearch from './components/ToDoSearch';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
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

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleAddToDo (text){
    alert('new todo: ' + text)
  }

  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  render() {
    let {todos} = this.state;

    return (
      <div className="App">
        <ToDoSearch onSearch={this.handleSearch}/>
        <ToDoList todos={todos} />
        <AddToDo onAddTodo={this.handleAddToDo} />
      </div>
    );
  }
}

export default App;
