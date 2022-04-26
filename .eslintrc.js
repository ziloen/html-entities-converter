
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    '@ziloen/eslint-config-typescript'
  ],
  ignorePatterns: [
    "out",
    "dist",
    "**/*.d.ts",
    '*.js'
  ]
}