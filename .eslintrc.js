module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],

  plugins: ['vue', 'prettier'],

  rules: {
    'vue/html-self-closing': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: [2, 'never'],
    'vue/max-attributes-per-line': 'off'
  }
}
