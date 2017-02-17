var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

config.entry['app'].unshift(
    "webpack-dev-server/client?http://127.0.0.1:3001/", 
    "webpack/hot/only-dev-server"
);
// config.output.publicPath = '/dist/';
// config.module.loaders.unshift({
//     test: /\.jsx?$/,
//     loader: 'react-hot',
//     exclude: /node_modules/
// });
config.plugins.push(new webpack.HotModuleReplacementPlugin());
new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
    proxy: {
        '*': {
            target: 'http://127.0.0.1:3000',
            secure: false
        }
    },
}).listen(3001, '127.0.0.1', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('server start');
});