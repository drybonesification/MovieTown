var path = require("path");
var webpack = require("webpack");
module.exports = {
  devServer: {
    contentBase: "./dist"
  },
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dir"),
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: "file-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
