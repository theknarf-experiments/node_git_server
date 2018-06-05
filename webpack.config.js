module.exports = {
	entry: './src/app/index.js',
	mode: 'development',
	output: {
		filename: 'server_routes.js',
		libraryTarget: 'commonjs2'
	},
	module: {
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
		{
			test: /\.(png|jpg|gif)$/,
			use: [
			{
				loader: 'file-loader',
				options: {}
			}
			]
		}
		]
	},
	target: 'node',
	externals: [require('webpack-node-externals')()]
}
