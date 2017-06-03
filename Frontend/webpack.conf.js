const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: '/',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	//devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader'
		}, {
      test: /\.css$/,
      loader:'style-loader!css-loader'
		}, {
			test: /\.(png|eot|ttf|svg)$/,
			loader: 'url-loader?limit=100000'
		}, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?modules&sourceMap', 'sass-loader?modules&sourceMap']
    }, {
		  test: /\.(jpg|png|svg)$/,
		  loader: 'file',
		  include: '/src/images'
		}, {
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "url-loader?limit=10000&mimetype=application/font-woff"
		}, {
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "file-loader"
		}]
	},
	devServer: {
		contentBase: './',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
		proxy: {
			'/': {
				bypass: function (req, res, proxyOptions) {
					return '/public/index.html';
				}
			}
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
