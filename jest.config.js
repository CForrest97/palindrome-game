module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  collectCoverageFrom: ['src/**/*.ts', '!src/utils/Logger.ts', '!src/config/*.ts', '!src/index.ts'],
};
