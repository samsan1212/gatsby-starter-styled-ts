const fs = require("fs");
const swcConfig = JSON.parse(fs.readFileSync("./.swcrc", { encoding: "utf8" }));

module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": ["@swc/jest", swcConfig],
  },
  rootDir: ".",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "^gatsby-page-utils/(.*)$": `gatsby-page-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    "^gatsby-core-utils/(.*)$": `gatsby-core-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    "^gatsby-plugin-utils/(.*)$": [
      `gatsby-plugin-utils/dist/$1`,
      `gatsby-plugin-utils/$1`,
    ], // Workaround for https://github.com/facebook/jest/issues/9771
    "~services/(.*)$": "<rootDir>/src/services/$1",
    "~components/(.*)$": "<rootDir>/src/components/$1",
    "~assets/(.*)$": "<rootDir>/src/assets/$1",
    "~utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  testEnvironment: "jsdom",
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: [`<rootDir>/jest.setup.js`],
};
