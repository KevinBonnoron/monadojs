module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': ['ts-jest'],
  },
  maxWorkers: 1,
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
