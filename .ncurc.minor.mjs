import patchConfig from './.ncurc.patch.mjs';

export default {
  ...patchConfig,
  // Keep the contents of `reject` in line with "version-update:semver-minor" ignore entries in .github/dependabot.yml
  reject: [...patchConfig.reject],
  target: 'minor',
};
