/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

/** @type {import("gatsby").GatsbyNode['onCreateWebpackConfig']} */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~modules": path.resolve("src/modules"),
        "~assets": path.resolve("src/assets"),
        "~": path.resolve("src"),
      },
    },
  });
};
