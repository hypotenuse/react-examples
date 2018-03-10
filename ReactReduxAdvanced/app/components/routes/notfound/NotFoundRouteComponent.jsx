
import React from 'react'
import {Redirect} from 'react-router-dom'

export default class NotFoundRouteComponent extends React.Component {

	constructor(props) {
		super(props)

		this.state = { seconds: 7 }
		this.indexRoute = '/'
	}

	countdown() { 
		this.setState((prevState) => ({ seconds: prevState.seconds - 1 }))
	}

	componentDidMount() {
		this.intervalIdentifier = setInterval(() => this.countdown(), 1e3)
	}

	clear() {
		clearInterval(this.intervalIdentifier)
	}

	componentWillUnmount() {
		this.clear()
	}

	render() {

		if (this.state.seconds == 0) {
			this.clear()
			return <Redirect to={this.indexRoute} />
		}
		else {
			return (
				<div>
					<section>
						<h2>Sorry, Page not found :(</h2>
						<h5>You will be redirected in {this.state.seconds} seconds</h5>
					</section>
				</div>
			)
		}
	}
}