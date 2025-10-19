import importPlugin from "eslint-plugin-import";
import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";

export default defineConfig([
  eslintConfigPrettier,
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, importPlugin },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  importPlugin.flatConfigs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      ...importPlugin.flatConfigs.recommended.rules,
      "import/no-anonymous-default-export": ["warn"],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js"],
          moduleDirectory: ["node_modules", "."],
        },
      },
    },
  },
  {
    files: ["**/*.test.js"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
    languageOptions: { globals: jest.environments.globals.globals },
  },
]);
