/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest/presets/js-with-ts", // Use the ts-jest preset for TypeScript
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Path to setup file for jest-dom
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  // Optional: Add custom module directories if needed
  moduleDirectories: ["node_modules", "src"],
};
