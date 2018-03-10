
import React from 'react'

export default class PostsComponent extends React.Component {
	render() {
		return <ul>
			{ this.props.posts.map((post, index) => <li key={index}>{post.title}</li>) }
		</ul>
	}
}