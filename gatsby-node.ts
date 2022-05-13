/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
import path from "path";

import type { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
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
