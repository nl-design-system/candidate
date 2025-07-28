const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
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
    'vite', // keep vite at v6 to stay in line with @storybook/react-vite
  ],
  target: 'latest',
};
