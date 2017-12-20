const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.join(__dirname, '../');
const srcPath = path.join(rootPath, 'src');
const entryPath = path.join(srcPath, 'page/main.ts');

const outPath = path.join(rootPath, 'dist');

const config = {
    entry: {app: entryPath},
    output: {
        path: outPath,
        filename: '[name].js',
        publicPath: ''
    },
    devtool: "inline-source-map",
    devServer: {
        host: 'localhost',
        port: 8000,
        contentBase: './dist'
    },
    resolve: {
        extensions: ['.js', '.ts', '.css', '.less', '.png', '.svg', '.vue']
    },
    externals: {
        "vue": "Vue"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/,
                include: srcPath
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }, {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: rootPath, //一个根的绝对路径.
            verbose: true, //将log写到 console.
            dry: true //不要删除任何东西，主要用于测试.
        }),
        //提取公共代码插件
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: '[name].[hash:8].js',
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            title: 'hello vue-typescript',
            template: 'index.hbs',
            filename: 'app.html'
        })
    ]
}

module.exports = config;