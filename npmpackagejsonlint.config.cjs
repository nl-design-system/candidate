module.exports = {
  rules: {
    'valid-values-license': ['error', ['EUPL-1.2']],
    'valid-values-name-scope': ['error', ['@nl-design-system-candidate']],
    'no-caret-version-dependencies': 'error',
    'no-caret-version-devDependencies': 'error',
    'no-tilde-version-dependencies': 'error',
    'no-tilde-version-devDependencies': 'error',
    'require-repository-directory': 'error',
  },
  overrides: [
    {
      patterns: ['packages/docs/**/package.json', 'scripts/templates/docs/package.json'],
      rules: {
        'valid-values-license': ['error', ['CC0-1.0']],
      },
    },
  ],
};
