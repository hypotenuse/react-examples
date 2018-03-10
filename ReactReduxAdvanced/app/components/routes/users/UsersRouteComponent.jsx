

import React from 'react'
import {Users} from '../../../actions'

export default class UsersRouteComponent extends React.Component {
	
	componentDidMount() {
		this.props.dispatch(Users.fetchIfNeeded()).then(() => console.log('Get users'))
	}

	render() {
		
		const {users, fetching, lastUpdated} = this.props
		
		let sectionLastUpdated = lastUpdated && <section>
			<h4>Last upated: { (new Date(lastUpdated)).toISOString() }</h4>
		</section>

		let sectionUsers = !fetching && <section>
			{ users.map(user => <div key={user.id}>{user.name}({user.id} | {user.email})</div>) }
		</section>

		let sectionFetching = fetching && <section>
			<h2>Loading...</h2>
		</section>

		return (
			<div>
				{sectionLastUpdated}
				{sectionUsers}
				{sectionFetching}
			</div>
		)
	}
}