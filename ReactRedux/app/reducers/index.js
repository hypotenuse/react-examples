
import Immutable from 'immutable'
import * as constants from '../constants'

const toImmutableType = Immutable.fromJS

// stateDefault = Map { todos: List [], visitilityFilter: 'SHOW_ALL' }
let stateDefault = toImmutableType({ todos: [], visibilityFilter: 'SHOW_ALL' })

export default (state = stateDefault, action) => {

	switch(action.type) {
		
		case constants.TODO_ADD:
			return state.update('todos', (todos) => {
				return todos.push(toImmutableType({id: action.id, text: action.text, completed: false}))
			})

		case constants.TODO_TOGGLE:
			return state.update('todos', (todos) => {
				return todos.map((todo) => {
					if (todo.get('id') == action.id) {
						return todo.set('completed', !todo.get('completed'))
					}
					else {
						return todo
					}
				})
			})

		case constants.VISIBILITY_FILTER_SET:
			return state.set('visibilityFilter', action.visibilityFilter)

		default: return state
	}

}