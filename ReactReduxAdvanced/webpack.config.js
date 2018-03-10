
const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTemplate = require('html-webpack-template')

const HtmlWebpackScriptsPlugin = require('html-webpack-scripts-plugin')

const postcssAutoprefixer = require('autoprefixer')

module.exports = (env) => {

	const developmentMode = env == 'development'

	const outputPathName = 'build'
	const publicPathName = '/build/'

	const cleanWebpackPluginInstance = new CleanWebpackPlugin([outputPathName], {root: __dirname})

	const webpackOptimizeUglifyJsPluginInstance = new webpack.optimize.UglifyJsPlugin({
		output: { comments: false },
		sourceMap: developmentMode
	})

	const webpackHashedModuleIdsPluginInstance = new webpack.HashedModuleIdsPlugin()

	const extractTextWebpackPluginInstance = new ExtractTextWebpackPlugin({
		filename: '[name].[contenthash].css',
		disable: developmentMode
	})

	const htmlWebpackPluginInstance = new HtmlWebpackPlugin(
		merge({
			minify: {
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true
			},
			filename: 'index.html'
		},
		require('./webpack.config.html.js')(HtmlWebpackTemplate))
	)

	const htmlWebpackScriptsPluginInstance = new HtmlWebpackScriptsPlugin({ 'defer': /.js/ })

	// Splits vendor modules from core application code. Also removes duplication from multiple entries
	const webpackOptimizeCommonsChunkPluginInstance = new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: 'vendor.[chunkhash].js',
		minChunks: module => module.context && module.context.includes('node_modules')
	})

	// Extracts webpack's boilerplate and manifest which can change with every build
	const webpackOptimizeCommonsChunkPluginInstance2 = new webpack.optimize.CommonsChunkPlugin({
		name: 'manifest',
		filename: 'manifest.[hash].js'
	})

	return {
	
		entry: {'app': './app/app.jsx'},

		output: {
			path: path.resolve(__dirname, outputPathName),
			publicPath: publicPathName,
			filename: '[name].[chunkhash].js'
		},

		devtool: (developmentMode ? 'eval' : false),
		
		devServer: {
			port: 8080,
			historyApiFallback: {
				index: publicPathName
			}
		},

		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					loader: 'babel-loader',
					options: { presets: ['env', 'react'] }
				},
				
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},

				{
					test: /\.(?:png|svg|jpe?g|gif)$/,
					use: ['file-loader']
				},
				
				{
					test: /\.(?:woff|woff2|eot|ttf|otf)$/,
					use: ['file-loader']
				},
				
				{
					test: /\.scss$/,
					use: extractTextWebpackPluginInstance.extract({
						use: [
							{ loader: 'css-loader', options: { minimize: true, importLoaders: 1 } },
							{ loader: 'postcss-loader', options: { ident: 'postcss', plugins: (loader) => [ postcssAutoprefixer({browsers: ['since 2012']}) ] } },
							{ loader: 'sass-loader' }
						],
						fallback: 'style-loader',
						publicPath: publicPathName
					})
				}
			]
		},

		plugins: [
			cleanWebpackPluginInstance,
			webpackHashedModuleIdsPluginInstance,
			webpackOptimizeCommonsChunkPluginInstance,
			webpackOptimizeCommonsChunkPluginInstance2,
			webpackOptimizeUglifyJsPluginInstance,
			htmlWebpackPluginInstance,
			htmlWebpackScriptsPluginInstance,
			extractTextWebpackPluginInstance
		]
	}
}