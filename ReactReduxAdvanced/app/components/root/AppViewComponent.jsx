
import React from 'react'
import * as ReactRedux from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NotFoundRouteComponent from '../routes/notfound/NotFoundRouteComponent.jsx'
import IndexRouteComponent from '../routes/index/IndexRouteComponent.jsx'
import UsersRouteContainer from '../../containers/users/UsersRouteContainer.jsx'
import RedditRouteContainer from '../../containers/reddit/RedditRouteContainer.jsx'

const Provider = ReactRedux.Provider

export default class AppViewComponent extends React.Component {
	render() {
		return (
			<Provider store={this.props.store}>
				<Router>
					<Switch>
						<Route exact path="/" component={IndexRouteComponent} />
						<Route exact path="/users" component={UsersRouteContainer} />
						<Route exact path="/reddit" component={RedditRouteContainer} />
						<Route component={NotFoundRouteComponent} />
					</Switch>
				</Router>
			</Provider>
		)
	}
} 