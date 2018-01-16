// I need to run teardown on each worker process.

// module.exports = async function() {
//   if (!global.browser) {
//     console.log('--- browser was never set up');
//     return;
//   }
//   console.log('--- closing browser');
//   await global.page.close();
//   await global.browser.close();
// };
