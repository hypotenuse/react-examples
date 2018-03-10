
import React from 'react'

class TodoFilterComponent extends React.Component {

	render() {
		
		let {children, active} = this.props

		if (active) {
			return <span>{children}</span>
		}
		else {
			return <a href={''} onClick={this.clickEvent.bind(this)}>{children}</a>
		}
	}

	clickEvent(event) {
		event.preventDefault()
		this.props.visibilityFilterSet()
	}
}

export default TodoFilterComponent