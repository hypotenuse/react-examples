
import request from 'axios'

import settings from '../constants' 
import * as consts from '../constants'

class Users {

	static _fetchOrNot(storeState) { 
		return !storeState.getIn(['users', 'updated']) && 
					 !storeState.getIn(['users', 'fetching'])
	}

	static _fetchRequest() { return { type: consts.FETCH_USERS_REQUEST } }

	static _fetchSuccess(items) { return { type: consts.FETCH_USERS_SUCCESS, lastUpdated: Date.now(), items } }

	static _fetchFailure(items) { return { type: consts.FETCH_USERS_FAILURE, items } }

	static _fetch() {
		return (dispatch, storeState) => {
			
			dispatch(Users._fetchRequest()) 

			return request.get(settings.path('users'), {responseType: 'json'})
				.then(response => response.data)
				.then(data => {
					dispatch(Users._fetchSuccess(data))
				})
				.catch(error => {
					dispatch(Users._fetchFailure([{error: error.response.data}]))
				})
		}
	}

	static invalidate() { return { type: consts.INVALIDATE_USERS } }
	
	static fetchIfNeeded() {
		return (dispatch, storeState) => (Users._fetchOrNot(storeState()) ? dispatch(Users._fetch()) : Promise.resolve())
	}
}


class Reddit {

	static _fetchPostsOrNot(subreddit, storeState) {
		return !storeState.getIn(['reddit', 'posts', subreddit, 'fetching']) && 
					 !storeState.getIn(['reddit', 'posts', subreddit, 'updated'])
	}

	static _fetchPostsRequest(subreddit) { return { type: consts.FETCH_REDDIT_POSTS_REQUEST, subreddit } }

	static _fetchPostsSuccess(subreddit, items) { return { type: consts.FETCH_REDDIT_POSTS_SUCCESS, lastUpdated: Date.now(), subreddit, items } }

	static _fetchPostsFailure(subreddit, items) { return { type: consts.FETCH_REDDIT_POSTS_FAILURE, subreddit, items } }

	static _fetchPosts(subreddit) {
		return (dispatch, storeState) => {
			
			dispatch(Reddit._fetchPostsRequest(subreddit))

			return request.get(settings.path('reddit', {subreddit}), {responseType: 'json'})
				.then(response => response.data)
				.then(data => {
					dispatch(Reddit._fetchPostsSuccess(subreddit, data.data.children.map(child => child.data)))
				})
				.catch(error => {
					dispatch(Reddit._fetchPostsFailure(subreddit, [{error: error.response.data}]))
				})

		}
	}
	
	static invalidateSubreddit(subreddit) { return { type: consts.INVALIDATE_SUBREDDIT, subreddit } }

	static setSubreddit(subreddit) { return { type: consts.SET_SUBREDDIT, subreddit } }

	static fetchPostsIfNeeded(subreddit) {
		return (dispatch, storeState) => {
			return (Reddit._fetchPostsOrNot(subreddit, storeState()) ? dispatch(Reddit._fetchPosts(subreddit)) : Promise.resolve())
		}
	}
}

export {Reddit, Users}