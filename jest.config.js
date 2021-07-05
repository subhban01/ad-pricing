module.exports = {
  modulePaths: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/src/setuptests.ts"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "d.ts"],
  modulePathIgnorePatterns: [],
  testEnvironment: "node",
  moduleNameMapper: {
    "src/(.*)$": "<rootDir>/src/$1",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
