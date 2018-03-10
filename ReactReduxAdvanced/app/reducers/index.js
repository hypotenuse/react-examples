
import Immutable, { Iterable } from 'immutable'
import * as constants from '../constants'

const {isIterable} = Iterable
const toImmutableType = Immutable.fromJS

const stateDefault = toImmutableType({

	/* USERS */
	users: { items: [], fetching: false, updated: false, lastUpdated: false },

	/* REDDIT */
	reddit: { subreddit: 'reactjs', posts: { /* [subreddit]: {items, fetching, updated, lastUpdated} */ } }

})

export default (state = stateDefault, action) => {
	
	switch(action.type) {
		
		/* USERS */
		case constants.INVALIDATE_USERS: 
			return state.updateIn(['users', 'updated'], value => false)
		
		case constants.FETCH_USERS_REQUEST: 
			return state.updateIn(['users', 'fetching'], value => true)

		case constants.FETCH_USERS_SUCCESS:
			return state.update('users', users => {
				return users.withMutations(
					users => users
						.set('fetching', false)
						.set('updated', true)
						.set('lastUpdated', action.lastUpdated)
						.set('items', toImmutableType(action.items))
				)
			})

		case constants.FETCH_USERS_FAILURE:
			return state.update('users', users => {
				return users.withMutations(users => users.set('fetching', false).set('items', toImmutableType(action.items)))
			})


		/* REDDIT */
		case constants.INVALIDATE_SUBREDDIT: 
			return state.updateIn(['reddit', 'posts'], posts => posts.setIn([action.subreddit, 'updated'], false))

		case constants.SET_SUBREDDIT: 
			return state.updateIn(['reddit', 'subreddit'], value => action.subreddit)

		case constants.FETCH_REDDIT_POSTS_REQUEST:
			return state.updateIn(['reddit', 'posts'], posts => posts.setIn([action.subreddit, 'fetching'], true))

		case constants.FETCH_REDDIT_POSTS_SUCCESS:
			return state.updateIn(['reddit', 'posts', action.subreddit], subreddit => {
				return subreddit.withMutations(
					subreddit => subreddit
						.set('fetching', false)
						.set('updated', true)
						.set('lastUpdated', action.lastUpdated)
						.set('items', toImmutableType(action.items))
				)
			})

		case constants.FETCH_REDDIT_POSTS_FAILURE:
			return state.updateIn(['reddit', 'posts', action.subreddit], subreddit => {
				return subreddit.withMutations(subreddit => subreddit.set('fetching', false).set('items', toImmutableType(action.items)))
			})

		default: return state
	}
}