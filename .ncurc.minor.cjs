const patchConfig = require('./.ncurc.patch.cjs');

module.exports = {
  ...patchConfig,
  // Keep the contents of `reject` in line with "version-update:semver-minor" ignore entries in .github/dependabot.yml
  reject: [...patchConfig.reject],
  target: 'minor',
};
