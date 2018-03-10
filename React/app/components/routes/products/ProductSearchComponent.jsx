
import URLSearchParams from 'url-search-params'
import React from 'react'
import {Link} from 'react-router-dom'

import InputComponent from './InputComponent.jsx'

import products from './data'
import {keyGenerate} from '../../../misc'


class ProductSearchComponent extends React.Component {

	constructor(props) {

		super(props)
		
		let searchParams = new URLSearchParams(this.props.location.search)
		
		this.searchText = searchParams.get('text')
		this.state = { products }

		this.searchProduct = this.searchProduct.bind(this)
	}

	searchProduct(text) {
		
		console.log(this.refs.InputComponent)

		let productsFiltered = products.filter(
			(product) => product.name.toLowerCase().search(text.toLowerCase()) != -1
		)
		this.setState({ products: productsFiltered })
	}

	render() {
		return (
			<div>
				<h2>Поиск товаров</h2>
				<div className="searchBox">
					<InputComponent searchProduct={this.searchProduct} searchText={this.searchText} ref="InputComponent" />
				</div>
				<div className="itemsList">
					<nav>
						{ 
							this.state.products.map(
								(product) => <div key={keyGenerate()}> <Link to={`/products/${product.id}`}>{product.name}</Link> </div>
							)
						}
					 </nav>
				</div>
			</div>
		)
	}

}

export default ProductSearchComponent;