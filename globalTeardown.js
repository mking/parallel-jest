const BrowserManager = require('./BrowserManager');

module.exports = async function() {
  await BrowserManager.temporary(manager => manager.clearWorkers());
};
