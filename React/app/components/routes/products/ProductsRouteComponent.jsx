
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import ProductsComponent from './ProductsComponent.jsx'
import ProductComponent from './ProductComponent.jsx'
import ProductSearchComponent from './ProductSearchComponent.jsx'
import NotFoundRouteComponent from '../notfound/NotFoundRouteComponent.jsx'

class ProductsRouteComponent extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/products" component={ProductsComponent} />
				<Route exact path="/products/search" component={ProductSearchComponent} />
				<Route path="/products/:id(\d+)" component={ProductComponent} />
				<Route component={NotFoundRouteComponent} />
			</Switch>
		)
	}
}

export default ProductsRouteComponent;