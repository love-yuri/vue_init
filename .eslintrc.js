/*
 * @Author: love-yuri yuri2078170658@gmail.com
 * @Date: 2024-04-11 21:46:04
 * @LastEditTime: 2024-04-11 21:56:33
 * @Description: eslint config
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:vue/vue3-recommended', 'prettier', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    'max-len': ['error', { code: 140, tabWidth: 2, ignoreComments: true }],
  },
};
