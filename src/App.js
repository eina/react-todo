import React, { Component } from 'react';
import uuid from 'node-uuid';

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
          id: uuid(),
          text: 'Walk the dog'
        }, {
          id: uuid(),
          text: 'Clean the yard'
        }, {
          id: uuid(),
          text: 'Finish this video'
        }, {
          id: uuid(),
          text: 'Shower and pluck eyebrows'
        }
      ],
    };

    this.handleAddToDo = this.handleAddToDo.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleAddToDo (text){
    this.setState({
      todos: [
        // show the old array
        ...this.state.todos,
        // then add a new item
        {
          id: uuid(),
          text: text
        }
        //updates the todos state w/ the whole thing
      ]
    })
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
