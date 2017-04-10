import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'

class ToDoSearch extends Component {
  render(){
    const { dispatch, showCompleted, searchText } = this.props;
    return(
      <div>
        <div>
          <input type="search" 
              ref="searchText" 
              onChange={()=> { 
                var searchText = this.refs.searchText.value;
                dispatch(actions.setSearchText(searchText))
              }}
              value={searchText}
              placeholder="Searh To Dos"/>
        </div>
        <div>
          <label htmlFor="checkbox">            
            <input type="checkbox" name="checkbox"
                ref="showCompleted"
                checked={showCompleted}
                onChange={() => {
                  dispatch(actions.toggleShowCompleted())
                }}/>
            Show completed tasks
          </label>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(ToDoSearch);