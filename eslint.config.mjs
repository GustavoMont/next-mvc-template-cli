import importPlugin from "eslint-plugin-import";
import js from "@eslint/js";
import globals from "globals";

// eslint-disable-next-line import/no-unresolved
import { defineConfig } from "eslint/config";

export default defineConfig([
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
  },
]);
