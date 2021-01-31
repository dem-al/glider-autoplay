module.exports = {
    mode: process.env.NODE_ENV,
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "index.min.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: [/node_modules/],
            },
        ],
    },
};
