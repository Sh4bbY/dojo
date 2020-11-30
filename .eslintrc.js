const severity = {off: 0, warn: 1, error: 2};

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': severity.off,
    '@typescript-eslint/no-explicit-any': severity.off,
    '@typescript-eslint/explicit-module-boundary-types': severity.off,
    'eqeqeq': severity.warn,
  },
};
