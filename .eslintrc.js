/** @type { import('eslint').Linter.Config } */
module.exports = {
  env: { node: true },
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.*', 'dist'],
  extends: '@ziloen',
}