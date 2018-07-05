const path = require("path");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["env", { modules: false }], "stage-0", "react"]
          }
        }
      }
    ]
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react"
    },
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components"
    },
    i18next: {
      commonjs: "i18next",
      commonjs2: "i18next",
      amd: "i18next"
    },
    "react-i18next": {
      commonjs: "react-i18next",
      commonjs2: "react-i18next",
      amd: "react-i18next"
    }
  }
};