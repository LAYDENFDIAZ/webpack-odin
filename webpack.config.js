const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

// Common configuration, which includes settings for both development and production
const commonConfig = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Demo",
      template: "./src/index.html", // Make sure this path is correct
    }),
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Cleans the /dist folder each build
  },
  // Added stats configuration for detailed error information
  stats: {
    children: true, // Provides detailed information about child compilations
  },
};

// Development configuration
const devConfig = {
  mode: "development",
  devtool: "inline-source-map", // Source maps for development
  devServer: {
    static: "./dist",
  },
};

// Production configuration
const prodConfig = {
  mode: "production",
  // Add any production-specific configurations here
};

// Merge and export the configuration
module.exports = (env) => {
  switch (env) {
    case "production":
      return merge(commonConfig, prodConfig);
    case "development":
    default:
      return merge(commonConfig, devConfig);
  }
};
