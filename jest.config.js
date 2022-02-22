// module.exports = {
//   ...require("./test/jest-common"),
//   collectCoverageFrom: [
//     "./(components|etc|lib|pages)/**/*.(ts|tsx|js|jsx)",
//     "!./(components|etc|lib|pages)/**/__tests__/**/*.test.(ts|tsx|js|jsx)",
//     "!./(components|etc|lib|pages)/**/__mocks__/**/*.(ts|tsx|js|jsx)",
//     "!./etc/fetchers/fetch-wbw.ts",
//     "!./etc/mirror-box.ts",
//   ],
//   coverageThreshold: {
//     global: {
//       statements: 84,
//       branches: 76,
//       functions: 82,
//       lines: 84,
//     },
//   },
//   transform: {
//     "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
//   },
//   projects: ["./test/jest.client.js", "./test/jest.server.js"],
// };

module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
