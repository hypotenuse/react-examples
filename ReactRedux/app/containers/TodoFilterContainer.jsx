
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'
import TodoFilterComponent from '../components/TodoFilterComponent.jsx'

import { ImmutableTypesConverterComponent } from '../hocs'

const bindProps = (reuduxStoreState, props) => ({
	active: props.filter == reuduxStoreState.get('visibilityFilter')
})

const bindHandlers = (reduxDispatch, props) => ({

	visibilityFilterSet: () => {
		reduxDispatch(actions.visibilityFilterSet(props.filter))
	}

})

export default ReactRedux.connect(bindProps, bindHandlers)(ImmutableTypesConverterComponent(TodoFilterComponent))