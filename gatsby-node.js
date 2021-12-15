/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "swc-loader",
            options: {
              sourceMaps: true,
              parseMap: true,
              jsc: {
                parser: {
                  tsx: true,
                  syntax: "typescript",
                  decorators: true,
                  topLevelAwait: true,
                  importMeta: true,
                },
                transform: {
                  legacyDecorator: true,
                  decoratorMetadata: true,
                  react: {
                    runtime: "automatic",
                  },
                },
                target: "es2017",
              },
            },
          },
        },
      ],
    },
  });
};
