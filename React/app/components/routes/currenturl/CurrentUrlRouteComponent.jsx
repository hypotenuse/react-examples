
import React from 'react'
import URLSearchParams from 'url-search-params'

class CurrentUrlRouteComponent extends React.Component {
	render() {

		let match = JSON.stringify(this.props.match)
		let location = JSON.stringify(this.props.location)
		let routeParams = JSON.stringify(this.props.match.params)
		let urlSearchParams = JSON.stringify(this.props.location.search)

		return (
			<div>
				<section>
					<h2>RouteParams & URLSearchParams</h2>
					
					<p>Match { match }</p>
					<p>Location { location }</p>
					
					<p>RouteParams { routeParams }</p>
					<p>URLSearchParams { urlSearchParams }</p>

				</section>
			</div>
		)
	}
}

export default CurrentUrlRouteComponent;