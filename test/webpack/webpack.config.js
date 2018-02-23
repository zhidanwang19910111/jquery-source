const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: __dirname + "/src/main.js",
	output: {
		path:__dirname + "/dist",
		filename: "bundle.js",
		publicPath: "/src/"
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
}