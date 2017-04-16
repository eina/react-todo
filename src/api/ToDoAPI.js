//knows how to set and fetch items from the localstorage

const API = {

  filterToDos: function(todos, showCompleted, searchText){
    let filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo)=> {
      return !todo.completed || showCompleted;      
    })

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      let text = todo.text.toLowerCase();

      //return all items when input field is empty
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    })


    // sort todos with non-complete first
    filteredTodos.sort((a,b) => {
      if (!a.completed && b.completed){
        //b first, next a
        return -1;
      } else if(a.completed && !b.completed) {
        //a first, b next
        return 1;
      }else {
        return 0;
      }
    })

    return filteredTodos;
  }
}

export default API;