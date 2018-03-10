
import React from 'react'

import * as ReactRedux from 'react-redux'
import * as actions from '../actions'

class TodoAddContainer extends React.Component {
	
	render() {
		return (
			<div>
				<form onSubmit={this.submitEvent.bind(this)}>
					<input ref="inputNode" />
					<button type="submit">Add Todo</button>
				</form>
			</div>
		)
	}

	submitEvent(event) {
		
		event.preventDefault()

		let inputNode = this.refs.inputNode
		let stringEmpty = String()
		
		if (inputNode.value == stringEmpty) {
			return false
		}

		this.props.dispatch(actions.todoAdd(inputNode.value))
		inputNode.value = stringEmpty

	}

}

export default ReactRedux.connect()(TodoAddContainer)