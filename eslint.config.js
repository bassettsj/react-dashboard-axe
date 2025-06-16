// ESLint Flat Config for React + TypeScript
const tsParser = require("@typescript-eslint/parser");
const reactPlugin = require("eslint-plugin-react");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const importPlugin = require("eslint-plugin-import");

/** @type {import("eslint").FlatConfig[]} */
module.exports = [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": tsPlugin,
      import: importPlugin
    },
    rules: {
      "import/prefer-default-export": "warn",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description", "ts-expect-error": true }],
      "react/display-name": "error"
    },
    settings: {
      react: { version: "detect" }
    }
  },
  {
    ignores: ["node_modules/**"]
  }
];
