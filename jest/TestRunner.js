const JestRunner = require('jest-runner');

module.exports = class TestRunner {
  constructor(globalConfig) {
    this.globalConfig = globalConfig;
    this.jestRunner = new JestRunner(globalConfig);
  }

  async runTests(tests, watcher, onStart, onResult, onFailure, options) {
    console.log('--- globalConfig', this.globalConfig.maxWorkers);
    return await this.jestRunner.runTests(
      tests,
      watcher,
      onStart,
      onResult,
      onFailure,
      options
    );
  }
};
