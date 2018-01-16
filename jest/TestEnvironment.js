const NodeEnvironment = require('jest-environment-node');

module.exports = class TestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    console.log('--- setup');
  }

  async teardown() {
    console.log('--- teardown');
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
};
