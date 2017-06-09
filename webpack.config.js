var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    devtool: 'inline-source-map',
    
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:3001`,
        'webpack/hot/only-dev-server',
        './src/index.js',

    ],

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
    ],

    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },

    stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
            green: '\u001b[32m',
        },
    },

    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'src'),
        publicPath: '/',
        host: 'localhost',
        port: 3001,
        historyApiFallback: true
    }
}