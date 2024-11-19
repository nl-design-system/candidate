/**
 * @type {import('jest').Config}
 * */
export default {
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: 'jest-environment-jsdom',
};
