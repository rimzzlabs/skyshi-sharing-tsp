module.exports = {
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  arrowParens: 'always',
  endOfLine: 'auto',
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^@/components(.*)$', '^@/(.*)$', '^[./]', '^'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
