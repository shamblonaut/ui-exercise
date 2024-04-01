const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    "drop-down": "./src/drop-down/index.js",
    "mobile-menu": "./src/mobile-menu/index.js",
    "image-slider": "./src/image-slider/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "head",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/drop-down/index.html",
      filename: "ui-exercise/drop-down/index.html",
      inject: "head",
      chunks: ["drop-down"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mobile-menu/index.html",
      filename: "ui-exercise/mobile-menu/index.html",
      inject: "head",
      chunks: ["mobile-menu"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/image-slider/index.html",
      filename: "ui-exercise/image-slider/index.html",
      inject: "head",
      chunks: ["image-slider"],
    }),
  ],

  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
};
