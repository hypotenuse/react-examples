
import ReactDOM from 'react-dom'
import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import {node} from './misc'
import IndexRouteComponent from './components/routes/index/IndexRouteComponent.jsx'
import AboutRouteComponent from './components/routes/about/AboutRouteComponent.jsx'
import ProductsRouteComponent from './components/routes/products/ProductsRouteComponent.jsx'
import CurrentUrlRouteComponent from './components/routes/currenturl/CurrentUrlRouteComponent.jsx'
import NotFoundRouteComponent from './components/routes/notfound/NotFoundRouteComponent.jsx'


ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={IndexRouteComponent} />
			<Route exact path="/about" component={AboutRouteComponent} />
			<Route path="/products" component={ProductsRouteComponent} />
			<Route exact path="/currenturl/:id([0-9a-zA-Z]+)?" component={CurrentUrlRouteComponent} />
			<Route component={NotFoundRouteComponent} />
		</Switch>
	</Router>,
	node('react-root')
)