const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { join } = require("path");
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require("glob");
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                },
                // 'style-loader', 
                {
                    // loader: 'css-loader?modules&localIdentName=[name]_[local]-[hash:base64:5]'
                    loader: 'css-loader'
                }]
            }
        ]
    },
    plugins: [
        new WebpackDeepScopeAnalysisPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          }),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(join(__dirname, './dist/*.html')),
        })
    ]
};