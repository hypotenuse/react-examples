
import React from 'react'
import TodoFiltersComponent from '../TodoFiltersComponent.jsx'
import TodoAddContainer from '../../containers/TodoAddContainer.jsx'
import TodoListContainer from '../../containers/TodoListContainer.jsx'

class AppViewComponent extends React.Component {
	render() {
		return (
			<div>

				<div>
					<TodoAddContainer />
				</div>
				
				<div>
					<TodoListContainer />
				</div>
				
				<div>
					<TodoFiltersComponent />
				</div>
				
			</div>
		)
	}
}

export default AppViewComponent