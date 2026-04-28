module.exports = {
  rules: {
    'valid-values-license': ['error', ['EUPL-1.2']],
    'valid-values-name-scope': ['error', ['@nl-design-system-candidate']],
    'no-caret-version-dependencies': 'error',
    'no-caret-version-devDependencies': 'error',
    'no-tilde-version-dependencies': 'error',
    'no-tilde-version-devDependencies': 'error',
    'require-repository-directory': 'error',
    'require-publishConfig': 'error',
    'valid-values-publishConfig': [
      'error',
      [
        {
          access: 'public',
          provenance: true,
        },
        {
          access: 'restricted',
          provenance: true,
        },
      ],
    ],
  },
  overrides: [
    {
      patterns: ['packages/docs/**/package.json', 'scripts/templates/docs/package.json'],
      rules: {
        'valid-values-license': ['error', ['CC0-1.0']],
      },
    },
    {
      // These packages are not published to npm, so we don't need to require publishConfig
      patterns: [
        './package.json',
        'packages/storybook/package.json',
        'packages/storybook-non-conforming/package.json',
        'packages/storybook-shared/package.json',
        'packages/storybook-test/package.json',
      ],
      rules: {
        'require-publishConfig': 'off',
      },
    },
  ],
};
