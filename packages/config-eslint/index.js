module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  plugins: ["@typescript-eslint", "react", "prettier"],
  parser: "@typescript-eslint/parser",
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-console": ["warn", { allow: ["warn", "error"] }]
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    node: true,
    browser: true,
    es2022: true
  }
};
