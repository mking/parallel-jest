const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');

module.exports = class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    this.global.browser = await puppeteer.launch({ headless: false });
    this.global.page = await this.global.browser.newPage();
  }

  async teardown() {
    await this.global.page.close();
    await this.global.browser.close();
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
};
