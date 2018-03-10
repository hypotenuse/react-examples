
var path = require('path');

module.exports = {
	
	entry: './app/app.jsx',

	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '/build/',
		filename: 'build.js'
	},
	
	devServer: { historyApiFallback: true },

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: { 
					presets: ['env', 'react']
				}
			}
		]
	}
}