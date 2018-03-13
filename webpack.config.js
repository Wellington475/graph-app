const path = require('path');

module.exports = {
	entry: [
		path.join(__dirname, 'src', 'index')
	],

	output: {
		path: path.join(__dirname, 'public/static/js/dist'),
    filename: 'bundle.js',
    publicPath: '/static/js/dist'
	},

	devServer: {
		contentBase: path.join(__dirname, 'public'),
		compress: true,
		port: 4242
	},

	module: {
		rules: [
      {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2017', 'stage-0']
				}
			}
		]
  }
};
