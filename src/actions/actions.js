import firebase, { firebaseRef } from '../firebase/index';
import moment from 'moment'

export let setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

export let addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}

export let startAddTodo = (text) => {
  return (dispatch, getState) => {
    const todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null 
    };
    var todoRef = firebaseRef.child('todos').push(todo);
    //synchronize with firebase
    todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }))
    })
  }
}

export let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  }
}

export let updateToDo = (id, updates) => {
  return {
    type: 'TOGGLE_TODO',
    id,
    updates
  }
}

export let addToDos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export let startToggleToDo = (id, completed) => {
  return (dispatch, getState) => {
    let todoRef = firebaseRef.child(`todos/${id}`);
    let updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    }

    return todoRef.update(updates)
      .then( ()=> { dispatch(updateToDo(id, updates)) } )
  }
}