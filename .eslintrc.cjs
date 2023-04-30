module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:security/recommended",
    "plugin:node/recommended",
  ],
  env: { es6: true, node: true, browser: true, mocha: true },
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    "default-param-last": "off",
    "no-plusplus": "off",
    "no-unused-vars": 2,
    "class-methods-use-this": "off",
    "no-underscore-dangle": 1,
    "comma-dangle": ["error", "only-multiline"],
    "no-console": ["error", { allow: ["info", "warn", "error"] }],
    "function-paren-newline": "off",
    "function-call-argument-newline": "off",
    "no-await-in-loop": "off",
    "no-trailing-spaces": 1,
    "space-before-blocks": 1,
    "arrow-parens": ["error", "always"],
    curly: ["error", "all"],
    "dot-location": ["error", "property"],
    eqeqeq: ["error", "always"],
    "no-floating-decimal": 1,
    "no-undef-init": 1,
    "block-spacing": ["error", "always"],
    "comma-spacing": 1,
    "func-call-spacing": 1,
    "key-spacing": 1,
    "keyword-spacing": 1,
    "no-whitespace-before-property": 1,
    "nonblock-statement-body-position": 1,
    "object-curly-spacing": ["error", "always"],
    "semi-spacing": ["error", { before: false, after: true }],
    "space-infix-ops": ["error", { int32Hint: false }],
    "space-unary-ops": 1,
    "switch-colon-spacing": 1,
    "linebreak-style": ["error", "unix"],
    "security/detect-object-injection": 0,
    "object-shorthand": 1,
    "require-atomic-updates": 0,
    "no-prototype-builtins": 1,
    "no-async-promise-executor": 0,
    "no-process-exit": 0,
  },
  overrides: [
    {
      files: "**/*.test.js",
      rules: {
        "node/no-unpublished-require": 0,
        "node/no-missing-require": 0,
        "node/no-unpublished-import": 0,
      },
    },
  ],
  globals: {},
};
