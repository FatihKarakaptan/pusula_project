module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    testEnvironment: 'jsdom',
    setupFiles: ["<rootDir>/src/prototypes/index.ts"],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
}

