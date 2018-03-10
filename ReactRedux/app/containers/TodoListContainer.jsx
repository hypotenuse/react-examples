
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'

import TodoListComponent from '../components/TodoListComponent.jsx'
import { ImmutableTypesConverterComponent } from '../hocs'

const [SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE] = ['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']

const filterTodos = (todos, currentVisibilityFilter) => {
	switch(currentVisibilityFilter) {
		case SHOW_ACTIVE: return todos.filterNot((todo) => todo.get('completed'))
		case SHOW_ALL: return todos
		case SHOW_COMPLETED: return todos.filter((todo) => todo.get('completed'))
	}
}

const bindProps = (reduxStoreState, props) => {
	return {
		todos: filterTodos(reduxStoreState.get('todos'), reduxStoreState.get('visibilityFilter'))
	}
}

const bindHandlers = (reduxDispatch, props) => {
	return {
		todoToggle: (id) => {
			reduxDispatch(actions.todoToggle(id))
		}
	}
}

export default ReactRedux.connect(bindProps, bindHandlers)(ImmutableTypesConverterComponent(TodoListComponent))