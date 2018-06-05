const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [ new MiniCssExtractPlugin() ];
const modules  = {
	rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react'],
					plugins: [
						["transform-react-jsx", {
							"pragma": "dom" // default pragma is React.createElement
						}]
					]
				}
			}
		},
		{ test: /\.(png|jpg|gif)$/, loader: 'file-loader' },
		{
			test: /\.scss$/,
			use: [ MiniCssExtractPlugin.loader,  "css-loader", "sass-loader" ]
		}
	]
}

module.exports = [
	{
		entry: './src/app/index.js',
		output: {
			filename: 'server_routes.js',
			libraryTarget: 'commonjs2'
		},
		target: 'node',
		externals: [ require('webpack-node-externals')() ],
		module: modules,
		plugins,
	},
	{
		entry: './src/app/frontend.js',
		output: {
			filename: 'frontend.js'
		},
		target: 'web',
		module: modules,
		plugins,
	}
]
