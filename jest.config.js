/** @type {import('jest').Config} */
const config = {
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
  rootDir: ".",
};

export default config;
