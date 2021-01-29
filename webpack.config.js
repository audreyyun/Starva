const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './frontend/starva.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                        ignore: ['./node_modules/mapbox-gl/mapbox-gl.js']
                    }
                },
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'css-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};