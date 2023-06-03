const { default: HtmlPlugin } = require("@rspack/plugin-html");
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  mode: "development",
  entry: {
    main: "./src/main.jsx",
  },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ["thread-loader", "less-loader"],
      },
    ],
  },
};
