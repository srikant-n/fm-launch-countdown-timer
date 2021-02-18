const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: { contentBase: './dist' }, // Webpack dev server
    module: { rules: [
       {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}, // Babel for JS
       {test: /\.less$/i, use:['style-loader', 'css-loader', 'less-loader']},
       {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader:"file-loader",
        options: {name: './images/[name].[ext]'}  
     },
    ]},
    plugins: [
        new HTMLWebpackPlugin({ template: './src/index.html' }),
        // new CopyWebpackPlugin({ patterns: [{ from: "src/images/", to: path.resolve(__dirname, 'dist/images/') }] }),
    ],
};