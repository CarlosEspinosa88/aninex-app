import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.next/'
  ],
}

module.exports = createJestConfig(customJestConfig)
