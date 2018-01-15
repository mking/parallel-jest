const level = require('level');
const puppeteer = require('puppeteer');

module.exports = class BrowserManager {
  static async temporary(callback) {
    const manager = new BrowserManager();
    try {
      await manager.open();
      await callback(manager);
    } finally {
      await manager.close();
    }
  }

  constructor() {
    this.db = level('./browsers', { valueEncoding: 'json' });
  }

  async open() {
    await this.db.open();
  }

  async close() {
    await this.db.close();
  }

  async getEndpoints() {
    try {
      return await this.db.get('endpoints');
    } catch (e) {
      if (e.notFound) {
        return [];
      }
      throw e;
    }
  }

  async putEndpoints(endpoints) {
    await this.db.put('endpoints', endpoints);
  }

  async removeWorker() {
    const endpoints = await this.getEndpoints();
    const endpoint = endpoints.pop();
    await this.putEndpoints(endpoints);

    if (endpoint) {
      const browser = await puppeteer.connect({ browserWSEndpoint: endpoint });
      const page = (await browser.pages())[0];
      return { browser, page };
    } else {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      return { browser, page };
    }
  }

  async addWorker(worker) {
    const endpoints = await this.getEndpoints();
    endpoints.push(worker.browser.wsEndpoint());
    await this.putEndpoints(endpoints);
  }

  async clearWorkers() {
    const endpoints = await this.getEndpoints();
    await this.putEndpoints([]);

    await Promise.all(
      endpoints.map(async endpoint => {
        const browser = await puppeteer.connect({
          browserWSEndpoint: endpoint
        });
        await browser.close();
      })
    );
  }
};
