const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	resolve: {
		extensions: [ '.js', '.vue' ],
		alias: {
			'vue$': process.env.NODE_ENV ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
			'@':  path.join(__dirname, 'src')
		}
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$|.scss$|.sass$/,
				use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
		new HtmlPlugin({
			title: 'cocktails app'
		})
	],
	devServer: {
		hot: true,
		open: true,
		port: 8080
	}
};
