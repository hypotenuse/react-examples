
import React from 'react'
import {Link} from 'react-router-dom'

import products from './data'
import {keyGenerate} from '../../../misc'

class ProductsComponent extends React.Component {

	constructor(props) {
		super(props)
		this.state = { products }
	}

	render() {
		return (
			<div>
				<section>
					<h2>Список товаров</h2>
				</section>
				<nav>
					<ul>
						{
							this.state.products.map(
								(product) => <li key={keyGenerate()}> <Link to={ `/products/${product.id}` }> {product.name} </Link> </li>
							)
						}
					</ul>
				</nav>
			</div>
		)
	}
}

export default ProductsComponent;