
// https://github.com/jaketrent/html-webpack-template
module.exports = HtmlWebpackTemplate => ({
	
	template: HtmlWebpackTemplate,
	inject: false,

	appMountId: 'react-root',
	
	/* googleAnalytics: {}, */
	
	lang: 'ru-RU',

	title: 'ReactApp',

	meta: [
		{ name: 'description', content: 'React App using Redux & Webpack' }
	],

	links: [
		{ href: 'https://fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet', type: 'text/css' }
	],

	scripts: [],

	mobile: false

})