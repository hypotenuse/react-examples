
import React from 'react'
import {Link} from 'react-router-dom'

import packageJSON from '../../../../package.json'

import {interpolate} from '../../../misc'

export default class IndexRouteComponent extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = { paths: ['/users', '/reddit', '/thispagedoesnotexist'] }
	}

	packages() {
		return Object.entries(packageJSON.dependencies).reduce((packages, entry) => {
			
			let _packages = packages.slice()

			const _package = entry[0]
			const version = entry[1]
			const packageHref = interpolate('https://www.npmjs.com/package/{{package}}', {package: _package})
			const packageText = interpolate('{{package}}: {{version}}', {package: _package, version})

			_packages.push(<div key={_package}><a href={packageHref} target="_blank">{packageText}</a></div>)

			return _packages
		}, [])
	}

	render() {
		return (
			<div>
				<section className={'index__section-header'}>
					
					<div className={'react-logo'}></div>
					<div className={'react-redux-logo'}></div>

					<div>
						An application using: { this.packages() }
					</div>
				</section>

				<section>
					<div>
						Available links:
					</div>
					{ this.state.paths.map((path, index) => <div key={index}><Link to={`${path}`}>{ path }</Link></div>) }
				</section>
			</div>
		)
	}
}