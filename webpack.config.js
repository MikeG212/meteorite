const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname),
        publicPath: '/build/',
    },
    entry: './js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        alias: {
            /* eslint-disable key-spacing */
            js:      path.resolve(__dirname, 'js'),
            classes: path.resolve(__dirname, 'js', 'classes'),
            utility: path.resolve(__dirname, 'js', 'utility'),
            /* eslint-enable key-spacing */
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
}