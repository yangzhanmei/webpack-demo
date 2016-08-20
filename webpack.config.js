var path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'out'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/, loaders: ["babel"]
            }
        ]
    }
};