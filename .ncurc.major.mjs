import minorConfig from './.ncurc.minor.mjs';

export default {
  ...minorConfig,
  // Keep the contents of `reject` in line with "version-update:semver-major" ignore entries in .github/dependabot.yml
  reject: [
    ...minorConfig.reject,
    // @types/node is kept in line with the node version in .nvmrc and package.json#engines.node
    '@types/node',
    'react',
    'react-dom',
    '@types/react',
    '@types/react-dom',
  ],
  target: 'latest',
};
