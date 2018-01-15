const BrowserManager = require('./BrowserManager');
const NodeEnvironment = require('jest-environment-node');

module.exports = class BrowserEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();

    await BrowserManager.temporary(async manager => {
      const worker = await manager.removeWorker();
      this.global.browser = worker.browser;
      this.global.page = worker.page;
    });
  }

  async teardown() {
    await BrowserManager.temporary(async manager => {
      await manager.addWorker({
        browser: this.global.browser,
        page: this.global.page
      });
    });

    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
};
