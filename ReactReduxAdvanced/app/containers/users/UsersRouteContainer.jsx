
import * as ReactRedux from 'react-redux'
import { ImmutableTypesConverterComponent } from '../../hocs'

import UsersRouteComponent from '../../components/routes/users/UsersRouteComponent.jsx'

export default ReactRedux.connect(

	(storeState, props) => {
		const gi = storeState.getIn.bind(storeState)
		return {
			users: gi(['users', 'items']),
			fetching: gi(['users', 'fetching']),
			updated: gi(['users', 'updated']),
			lastUpdated: gi(['users', 'lastUpdated'])
		}
	}

)(ImmutableTypesConverterComponent(UsersRouteComponent))