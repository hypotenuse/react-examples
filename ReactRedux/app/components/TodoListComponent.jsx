
import React from 'react'

class TodoItemComponent extends React.Component {

	render() {
		let {text, completed} = this.props
		return (
			<li onClick={this.clickEvent.bind(this)} style={{textDecoration: completed ? 'line-through' : 'none' }}>
				{text}
			</li>
		)
	}

	clickEvent(event) {
		this.props.todoToggle()
	}
}

class TodoListComponent extends React.Component {
	render() {
		let {todoToggle, todos} = this.props
		return (
			<ul>
				{ todos.map((todo) => (<TodoItemComponent {...todo} key={todo.id} todoToggle={() => todoToggle(todo.id)} />)) }
			</ul>
		)
	}
}

export default TodoListComponent