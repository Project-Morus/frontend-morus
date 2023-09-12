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
  testMatch: [
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  coveragePathIgnorePatterns: ['node_modules'],
  watchPathIgnorePatterns: ["node_modules"],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['tsx', 'js', 'ts'],
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
}