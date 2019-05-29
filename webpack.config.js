const path = require('path'),
	webpack = require('webpack'),
	TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: ['./src/index.tsx', 'webpack-hot-middleware'],
		vendor: ['react', 'react-dom']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].bundle.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
		alias: {
			"@Components": path.resolve(__dirname, './src/Components/'),
			"@Interfaces": path.resolve(__dirname, './src/Interfaces/'),
		}
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/
			},
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
		new webpack.HotModuleReplacementPlugin(),
		new TsconfigPathsPlugin()
	]
}
