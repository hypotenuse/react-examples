
import React from 'react'
import {Link} from 'react-router-dom'

import {keyGenerate} from '../../../misc'

class IndexRouteComponent extends React.Component {

	constructor(props) {
		super(props)

		this.state = { appPaths: ['/', '/about', '/products', '/products/search?text=7', '/currenturl', '/nopage'] }

		console.log(3)
	}

	render() {
		return (
			<div>
				<section>
					<h2>Welcome</h2>
					<h4>Visit links below if you want:</h4>
				</section>
				<nav>
					{ 
						this.state.appPaths.map(
							(path) => <div key={keyGenerate()}><Link to={path}>{path}</Link></div>
						)
					}
				</nav>
			</div>
		)
	}
}

export default IndexRouteComponent;