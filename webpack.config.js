const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: 'development',
	entry: {
		app: './client/index.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist/js'),
		publicPath: '/',
	},
	devServer: {
		historyApiFallback: true,
	},
	devtool: 'inline-source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: isDev ? '[name].css' : '[name].[hash].css',
			chunkFilename: isDev ? '[name].css' : '[name].[hash].css',
		}),
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({ template: './index.html' }),
	],
	watch: true,
	module: {
		rules: [
			{
				test: /\.css/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: true,
							hmr: isDev,
						},
					},
					'css-loader',
					// 'style-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.scss'],
	},
};
