
import React from 'react'
import products from './data'

class ProductComponent extends React.Component {

	render() {
		
		const productIdParameter = this.props.match.params.id
		let foundProduct = void 0

		for(var i = 0; i < products.length; ++i) {
			if (products[i].id == productIdParameter) {
				foundProduct = products[i]
				break
			}
		}

		if (foundProduct == void 0)
			return <h2>Товар {productIdParameter} отсутствует</h2>
		else
			return <h2>Товар {foundProduct.name}</h2>
	}

}

export default ProductComponent;