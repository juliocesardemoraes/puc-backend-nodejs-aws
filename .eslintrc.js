module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Add Jest environment
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "script",
  },
  rules: {
    // Add any rules you need or modify existing ones for CommonJS compatibility
  },
  overrides: [
    {
      files: ["**/*.test.js", "**/*.spec.js"], // Add patterns for your Jest test files
      rules: {
        // Override rules for Jest files
        "no-undef": "off",
      },
    },
  ],
};
