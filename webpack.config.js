module.exports = {
    entry: "./src/Main.js",
    output: {
        filename: "public/bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                /*exclude: /(node_modules|bower_components)/,*/

                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
            ]

        }

};