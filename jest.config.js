// eslint-disable-next-line no-undef
module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
  testEnvironment: 'jsdom'
};
