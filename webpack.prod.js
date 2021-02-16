const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    module: { rules: [
       {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}, // Babel for JS
       {test: /\.less$/i, use:[MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']},
       {
           test: /\.(png|svg|jpg|jpeg|gif)$/i,
           loader:"file-loader",
           options: {name: '/images/[name].[ext]'}  
        },
    ]},
    plugins: [
        new HTMLWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin({filename: 'style.css'}),
        new CopyWebpackPlugin({patterns:[{from:"images/", to: path.resolve(__dirname,'dist/images/')}]})
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};