import React, { Component } from 'react';

export default class ToDoSearch extends Component {
  constructor(props){
    super(props)
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(){
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    //props that's going to be passed down from App.js
    this.props.onSearch(showCompleted, searchText);
  }
  render(){
    return(
      <div>
        <div>
          <input type="search" 
              ref="searchText" 
              onChange={this.handleSearch}
              placeholder="Searh To Dos"/>
        </div>
        <div>
          <label htmlFor="checkbox">            
            <input type="checkbox" name="checkbox"
                ref="showCompleted"
                onChange={this.handleSearch}/>
            Show completed tasks
          </label>
        </div>
      </div>
    );
  }
}