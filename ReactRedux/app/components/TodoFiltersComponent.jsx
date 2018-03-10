
import React from 'react'
import TodoFilterContainer from '../containers/TodoFilterContainer.jsx'

class TodoFiltersComponent extends React.Component {
	render() {
		return (
			<div>
				Show: {' '}
				<TodoFilterContainer filter="SHOW_ALL">All</TodoFilterContainer>
				{' '}
				<TodoFilterContainer filter="SHOW_ACTIVE">Active</TodoFilterContainer>
				{' '}
				<TodoFilterContainer filter="SHOW_COMPLETED">Completed</TodoFilterContainer>
			</div>
		)
	}
}

export default TodoFiltersComponent