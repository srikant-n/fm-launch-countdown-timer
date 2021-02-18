const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }, // Babel for JS
            {
                test: /\.less$/i, use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ''}
                    },
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: "file-loader",
                options: { name: './images/[name].[ext]' }
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({ filename: 'style.css'}),
        new CopyWebpackPlugin({ patterns: [{ from: "src/images/", to: path.resolve(__dirname, 'dist/images/') }] }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
      },
};