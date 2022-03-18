const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  experiments: {
    asyncWebAssembly: true
  },
  entry: "./src/frontend/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js"
  },
  devServer: {
    compress: true,
    port: 8080,
    proxy: {
        '/api/**': 'http://localhost:8081'
    },
    hot: true,
    static: './dist',
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.css$/,
        exclude: /node_modules/,
        use: {
          loader: 'css-loader'
        }
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      filename: "index.html"
    }),
  ],
  mode: "development",
  devtool: 'inline-source-map',
};