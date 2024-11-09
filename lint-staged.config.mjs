export default {
  '*.{css,scss}': ['stylelint --allow-empty-input', 'prettier --write'],
  '*.{js,cjs,mjs,json,jsx,mdx,ts,tsx}': ['eslint --no-error-on-unmatched-pattern', 'prettier --write'],
  '*.{yml,yaml}': ['prettier --write'],
  '*.md': ['markdownlint', 'prettier --write'],
  'package.json': 'npmPkgJsonLint --allowEmptyTargets',
};
