module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "array-bracket-spacing": [2, "never"],
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs"],
    "camelcase": 1,
    "computed-property-spacing": [2, "never"],
    "curly": 2,
    "eol-last": 2,
    "eqeqeq": [2, "smart"],
    "max-depth": [1, 3],
    "max-len": [1, 200],
    "max-statements": [1, 20],
    "new-cap": 1,
    "no-extend-native": 2,
    "no-mixed-spaces-and-tabs": 2,
    "indent": ["error", 2],
    "no-trailing-spaces": 2,
    "no-unused-vars": 1,
    "no-use-before-define": [2, "nofunc"],
    "object-curly-spacing": [2, "never"],
    "quotes": [2, "single", "avoid-escape"],
    "semi": ["error", "always"],
    "keyword-spacing": [2, {"before": true, "after": true}],
    "space-unary-ops": 2,
    "space-before-function-paren": ["error", "always"]
  }
};