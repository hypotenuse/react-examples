

import ReactDOM from 'react-dom'
import React from 'react'
import * as ReactRedux from 'react-redux'
import * as Redux from 'redux'

import reducers from './reducers'
import AppViewComponent from './components/AppView/AppViewComponent.jsx'
import {node} from './misc'

let Provider = ReactRedux.Provider

let store = Redux.createStore(reducers)

ReactDOM.render(
	<Provider store={store}><AppViewComponent /></Provider>, node('react-root')
)