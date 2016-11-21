var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_dir = path.join(__dirname, './node_modules/');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

// 判断是否是在当前生产环境
var isProduction = process.env.NODE_ENV === 'production';
module.exports = {
    entry: {
        app: ['./src/app.js']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle.[hash:8].js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js?$/,
            loader: 'babel',
            exclude: node_dir,
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style', 'css!less')
        }, {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'url?limit=8192&name=img/[name].[ext]'
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file?limit=10000&name=fonts/[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.css', '.less', '.vue'],
        alias: {
            
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    vue: { // vue的配置
        loaders: {
            js: 'babel',
            css: ExtractTextPlugin.extract('vue-style', 'css')
        }
    },
    plugins: [
        new DashboardPlugin(),
        new webpack.ProvidePlugin({
            Vue: 'vue'
        }),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('css/[name].[hash:8].css'),
        new HtmlWebpackPlugin({
            filename: isProduction ?'../index.html':'index.html', // 开发环境输出到dist目录下
            template: './src/template.html',
            inject: 'body',
            minify: {
                removeComments: true, // 移除注释
                collapseWhitespace: true // 删除空白符与换行符
            }
        })
    ],
    devtool: isProduction ? null : 'source-map'
};
