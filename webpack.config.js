const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry : './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
        
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'src/index.html'
        })
        
    ],
    mode: "development",
}
