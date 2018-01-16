const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');

module.exports = class TestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    await this.setupBrowser();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }

  async setupBrowser() {
    if (!global.browser) {
      console.log('--- new browser', process.pid);
      global.browser = await puppeteer.launch({
        headless: false
      });
      global.page = await global.browser.newPage();
    } else {
      console.log('--- browser exists', process.pid);
    }
    this.global.browser = global.browser;
    this.global.page = global.page;
  }
};
