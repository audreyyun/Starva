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
        alias: {      
            'mapbox-gl': 'mapbox-gl/dist/mapbox-gl.js',      
            '@mapbox/mapbox-gl-draw': '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
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
        ],
        noParse: /(mapbox-gl)\.js$/
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        })
    ],
    
};