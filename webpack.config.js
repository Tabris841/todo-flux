const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: [
            'react-hot-loader/patch',
            path.resolve(__dirname, 'src')
        ]
    },

    output: {
        filename: '[name]-[hash:8].js',
        chunkFilename: '[name]-[chunkhash:8].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'React',
        }),
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, 'node_modules')
        ]),
    ],

    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                }
            }]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
        }
    }
};