
import React from 'react'
import {Reddit} from '../../../actions'
import SelectboxComponent from './SelectboxComponent.jsx'
import PostsComponent from './PostsComponent.jsx'

export default class RedditRouteComponent extends React.Component {

	constructor(props) {
		super(props)
		this.selectboxChangeEvent = this.selectboxChangeEvent.bind(this)
		this.invalidateEvent = this.invalidateEvent.bind(this)
	}

	fetchPostsIfNeeded(subreddit) { this.props.dispatch(Reddit.fetchPostsIfNeeded(subreddit)) }
	
	// React-redux optimization:
	// No 4 re-renderings but 1 instead after selectboxChangeEvent call (if needed)
	selectboxChangeEvent(subreddit) {
		
		this.props.dispatch(Reddit.setSubreddit(subreddit))
		this.props.dispatch(Reddit.setSubreddit(subreddit))
		this.props.dispatch(Reddit.setSubreddit(subreddit))
		//this.props.dispatch(Reddit.invalidateSubreddit(subreddit))

		this.fetchPostsIfNeeded(subreddit)
	}

	invalidateEvent(event) {
		event.preventDefault()
		const subreddit = this.props.subreddit
		this.props.dispatch(Reddit.invalidateSubreddit(subreddit))
		this.fetchPostsIfNeeded(subreddit)
	}

	componentDidMount() {
		this.fetchPostsIfNeeded(this.props.subreddit)
	}

	render() {
		
		const {subreddit, posts} = this.props
		const {items: _postsItems, fetching, lastUpdated} = posts[subreddit] || {fetching: true}

		const postsItems = _postsItems || []

		let lastUpdatedBlock = lastUpdated && <span>
			Last updated at { (new Date(lastUpdated)).toLocaleTimeString() }
		</span>

		let lnvalidateBlock = !fetching && <button onClick={this.invalidateEvent}>
			Update
		</button>

		let loadingBlock = fetching && postsItems.length == 0 && <h2>Loading...</h2>
		let emptyBlock = !fetching && postsItems.length == 0 && <h2>No posts</h2>

		let postsBlock = postsItems.length > 0 && <div className={'posts'} style={{ opacity: fetching ? .5 : 1 }}>
			<PostsComponent posts={postsItems} />
		</div>

		return (
			<div>
				<section>
					<SelectboxComponent value={subreddit} onChange={this.selectboxChangeEvent} options={['reactjs', 'frontend']} />
				</section>
				<section>
					{lastUpdatedBlock}
					{lnvalidateBlock}
				</section>
				<section className={'reddit__section-content'}>
					{loadingBlock}
					{emptyBlock}
					{postsBlock}
				</section>
			</div>
		)
	}
}