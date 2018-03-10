
import '../assets/sass/app.scss'
import './polyfills'

import React from 'react'
import ReactDOM from 'react-dom'
import * as Redux from 'redux'

import thunkMiddleware from 'redux-thunk'
import {actionLoggerMiddleware, crashReporterMiddleware} from './middlewares'

import {node} from './misc'
import reducers from './reducers'

import AppViewComponent from './components/root/AppViewComponent.jsx'

const isDevelopment = process.env.NODE_ENV == 'development'

const store = Redux.createStore(
	reducers, 
	isDevelopment 
		? Redux.applyMiddleware(thunkMiddleware, actionLoggerMiddleware, crashReporterMiddleware)
		: Redux.applyMiddleware(thunkMiddleware, crashReporterMiddleware)
)

ReactDOM.render(<AppViewComponent store={store} />, node('react-root'))