
const actionLoggerMiddleware = store => next => action => {
	console.info('dispatching', action.type)
	let _next = next(action)
	console.log(store.getState())
	return _next
}

const crashReporterMiddleware = store => next => action => {
	try {
		return next(action)
	} 
	catch(exception) {
		console.error('Caught an exception', exception)
		Raven.captureException(exception, { extra: { action, state: store.getState() } })
	}
}

export {actionLoggerMiddleware, crashReporterMiddleware}