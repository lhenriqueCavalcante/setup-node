export default {
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  rootDir: "src",
  // globals: {
  //   "ts-jest": {
  //     diagnostics: false,
  //   },
  // },
  transform: {
    ".+\\.ts$": "ts-jest",
  },
}
