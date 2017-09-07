"use strict;"
var path = require("path");
var webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "styles/[name].css",
    allChunks: true
});

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        operator: "./operator.js",
        visitor: "./visitor.js",
        operatorStyles: "./operator.scss",
    },
    output: {
        path: path.resolve(__dirname, "App"),
        filename: "[name].[hash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            }
        ],
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass,
        new CleanWebpackPlugin(["App"], {
            root: path.resolve(__dirname),
            verbose: true,
            dry: false
        })
    ]
}