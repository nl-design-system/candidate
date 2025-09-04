const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  // Keep the contents of `reject` in line with "version-update:semver-major" ignore entries in .github/dependabot.yml
  reject: [
    ...minorConfig.reject,
    // @types/node is kept in line with the node version in .nvmrc and package.json#engines.node
    '@types/node',
    'style-dictionary',
    'react',
    'react-dom',
    '@types/react',
    '@types/react-dom',
    '@storybook/*',
    'storybook',
    '@etchteam/storybook-addon-status', // v5 is the last version that's compatible with Storybook 8
    '@whitespace/storybook-addon-html', // we are waiting for this version bump to upgrade to Storybook 9
    'vite', // keep vite at v6 to stay in line with @storybook/react-vite
  ],
  target: 'latest',
};
