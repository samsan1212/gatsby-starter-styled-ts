module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": [
      "@swc/jest",
      {
        sourceMaps: true,
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
          target: "es2020",
        },
      },
    ],
  },
  rootDir: ".",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "^gatsby-page-utils/(.*)$": `gatsby-page-utils/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    "^gatsby-core-utils/(.*)$": `gatsby-core-utils/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    "^gatsby-plugin-utils/(.*)$": [
      `gatsby-plugin-utils/dist/$1`,
      `gatsby-plugin-utils/$1`,
    ], // Workaround for https://github.com/facebook/jest/issues/9771
    "~/(.*)$": "<rootDir>/src/$1",
    "~modules/(.*)$": "<rootDir>/src/modules/$1",
    "~assets/(.*)$": "<rootDir>/src/assets/$1",
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script)/)`],
  testEnvironment: "jsdom",
  globals: {
    __PATH_PREFIX__: ``,
  },
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: [`<rootDir>/jest.setup.js`],
};
