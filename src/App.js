import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

//data
import ToDoAPI from './api/ToDoAPI';

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
      todos: ToDoAPI.getToDos() //should return an arrray
    };

    this.handleAddToDo = this.handleAddToDo.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    // this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidUpdate(){
    // console.log(ToDoAPI);
    ToDoAPI.setToDos(this.state.todos);
  }

  handleAddToDo (text){
    this.setState({
      todos: [
        // show the old array
        ...this.state.todos,
        // then add a new item
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
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
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = ToDoAPI.filterToDos(todos, showCompleted, searchText);

    return (
      <div className="App">
        <ToDoSearch onSearch={this.handleSearch}/>
        <ToDoList />
        <AddToDo onAddTodo={this.handleAddToDo} />
      </div>
    );
  }
}

export default App;
