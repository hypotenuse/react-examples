
import React from 'react'

class InputComponent extends React.Component {

	constructor(props) {
		super(props)

		this.changeEvent = this.changeEvent.bind(this)

		this.state = { value: this.props.searchText == void 0 ? String() : this.props.searchText }
		this.placeholderText = 'Поиск'

		this.props.searchProduct(this.state.value)
	}

	changeEvent(event) {

		let value = event.target.value

		this.setState({ value })
		this.props.searchProduct(value.trim())
	}

	render() {
		return <input placeholder={this.placeholderText} value={this.state.value} onChange={this.changeEvent} />
	}
}

export default InputComponent;