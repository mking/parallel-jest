const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');

module.exports = class TestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    await this.startBrowser();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }

  async startBrowser() {
    if (!global.browser) {
      global.browser = await puppeteer.launch({ headless: false });
      global.page = await global.browser.newPage();
    }
    this.global.browser = global.browser;
    this.global.page = global.page;
  }
};
