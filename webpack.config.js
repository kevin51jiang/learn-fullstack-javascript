module.exports = {
    mode: "none",
    entry: './src/index.js',
    output: {
        //path: path.resolve(__dirname, './public'),
        filename: '../public/bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.json$/,
            //     use: [
            //         'json-loader'
            //     ]
            // },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    }

};