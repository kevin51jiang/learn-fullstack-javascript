module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        //path: path.resolve(__dirname, './public'),
        publicPath: './public',
        filename: '../public/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                use: [
                    'json-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    }
};