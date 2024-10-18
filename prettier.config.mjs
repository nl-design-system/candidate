/**
 * @type {import('prettier').Config}
 */
export default {
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
  printWidth: 120,
  singleQuote: true,
};
