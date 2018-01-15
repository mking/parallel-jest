const level = require('level');

(async () => {
  const db = level('./browsers', { valueEncoding: 'json' });
  try {
    await db.open();
    await db.put('endpoints', [1, 2, 3]);
    const array = await db.get('endpoints');
    console.log(JSON.stringify(array));
  } finally {
    await db.close();
  }
})();
