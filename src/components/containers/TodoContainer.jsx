// import React from 'react'
import { connect } from 'react-redux'
import { TodoList } from '../pure/TodoList'

import { toggletodo } from '../../store/actions/actions'

// export const TodoContainer = props => {
//   return <div>TodoContainer</div>
// }
//Filter Tdo List

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return { todos: filterTodos(state.todosState, state.filterState) }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggletodo(id))
    }
  }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoContainer
