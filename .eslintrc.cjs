/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  ignorePatterns: [
    'node_modules/',
    '.yarn/',
    '.next/',
    'out/',
    'dist/',
    '.vercel/',
    'vault/**',
    'escrow/**',
  ],
  extends: ['eslint:recommended', 'prettier'],
};
