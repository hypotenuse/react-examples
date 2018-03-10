
import {interpolate} from '../misc'

const INVALIDATE_USERS = 'INVALIDATE_USERS'
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
const SET_SUBREDDIT = 'SET_SUBREDDIT'
const FETCH_REDDIT_POSTS_REQUEST = 'FETCH_REDDIT_POSTS_REQUEST'
const FETCH_REDDIT_POSTS_SUCCESS = 'FETCH_REDDIT_POSTS_SUCCESS'
const FETCH_REDDIT_POSTS_FAILURE = 'FETCH_REDDIT_POSTS_FAILURE'

export {INVALIDATE_USERS, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE}
export {INVALIDATE_SUBREDDIT, SET_SUBREDDIT, FETCH_REDDIT_POSTS_REQUEST, FETCH_REDDIT_POSTS_SUCCESS, FETCH_REDDIT_POSTS_FAILURE}

const PATHS_PREPARED = {
	reddit: 'https://www.reddit.com/r/{{subreddit}}.json',
	users: 'https://jsonplaceholder.typicode.com/users/'
}

export default { path: (path, args) => (args ? interpolate(PATHS_PREPARED[path], args) : PATHS_PREPARED[path]) }