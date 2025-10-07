module.exports = {
  cooldown: 1, // 1 day
  dep: ['dev', 'prod'],
  install: 'always',
  // Keep the contents of `reject` in line with "version-update:semver-patch" ignore entries in .github/dependabot.yml
  reject: [],
  root: true,
  target: 'patch',
  upgrade: true,
  workspaces: true,
};
