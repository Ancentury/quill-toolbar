const path = require ("path");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry:{
        "quill.imageCompressor": "./src/quill.imageCompressor.js",
        demo: ".src/demo.js"
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/"
    },
    externals:{
        quill: "Quill"
    },
    module: {
        rules:[
            {
                test:/\.js$/, 
                use: {
                    loader:'babel-loader'
                }, 
                exclude: /node_modules/
            }
        ]
    }
};