const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC = path.resolve(__dirname, 'src');

module.exports = {
    entry: {
        app: [path.resolve('src/index.tsx')]
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].[hash:8].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            "~": path.resolve(__dirname, SRC)
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                //     experimentalWatchApi: true,
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true // webpack@2.x and newer
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve('src/index.html') })
    ]
}
