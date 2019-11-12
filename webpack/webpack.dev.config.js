const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config = require('./webpack.config')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    entry: config.entry,
    output: {
        ...config.output,
        // pathinfo: false
    },
    resolve: config.resolve,
    module: config.module,
    optimization: {
        namedModules: true,
        namedChunks: true,
        nodeEnv: 'development',
        flagIncludedChunks: false,
        occurrenceOrder: false,
        sideEffects: false,
        usedExports: false,
        concatenateModules: false,
        noEmitOnErrors: false,
        checkWasmTypes: false,
        minimize: false,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1]

                        return `${packageName.replace('@', '')}`
                    },
                },
            },
        },

        // removeAvailableModules: false,
        // removeEmptyChunks: false,
        // splitChunks: false,
    },
    plugins: [
        ...config.plugins,
        new ForkTsCheckerWebpackPlugin(),
        new webpack.NamedChunksPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.API_URL': JSON.stringify('//localhost:3000'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
