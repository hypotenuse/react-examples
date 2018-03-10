
import * as ReactRedux from 'react-redux'
import { ImmutableTypesConverterComponent } from '../../hocs'

import RedditRouteComponent from '../../components/routes/reddit/RedditRouteComponent.jsx'

export default ReactRedux.connect(

	(storeState, props) => {
		const gi = storeState.getIn.bind(storeState)
		return {
			subreddit: gi(['reddit', 'subreddit']),
			posts: gi(['reddit', 'posts'])
		}
	}

)(ImmutableTypesConverterComponent(RedditRouteComponent))