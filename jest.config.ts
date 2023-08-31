export default {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.ts?$': ['ts-jest', { isolatedModules: true }],
    // process `*.tsx` files with `ts-jest`
  },
  transformIgnorePatterns: [
    'node_modules'
  ],
  coveragePathIgnorePatterns: ['node_modules'],
  watchPathIgnorePatterns: ["node_modules"],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['tsx', 'js', 'ts'],
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
}