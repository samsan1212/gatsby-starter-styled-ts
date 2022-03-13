/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.m(j|t)sx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "swc-loader",
          },
        },
      ],
    },
    resolve: {
      alias: {
        "~services": path.resolve(__dirname, "src/services"),
        "~components": path.resolve(__dirname, "src/components"),
        "~assets": path.resolve(__dirname, "src/assets"),
        "~utils": path.resolve(__dirname, "src/utils"),
      },
    },
  });
};
