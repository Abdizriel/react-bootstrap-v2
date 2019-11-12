const webpack = require('webpack')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const config = require('./webpack.config')

module.exports = {
    mode: 'production',
    devtool: 'nosource-source-map',
    entry: config.entry,
    output: config.output,
    resolve: config.resolve,
    module: config.module,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        ...config.plugins,
        new webpack.NoEmitOnErrorsPlugin(),
        // new webpack.NormalModuleReplacementPlugin(
        //     new RegExp('/lib/adapters/xhr.js'),
        //     'http.js'
        // ),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.API_URL': JSON.stringify(''),
        }),
    ],
}
