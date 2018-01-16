export default async function testCoinMarketCap(name: string): Promise<void> {
  await page.goto(`https://coinmarketcap.com/currencies/${name}/`, {
    waitUntil: 'domcontentloaded'
  });
  const price = await page.$eval(
    '#quote_price span[data-currency-value]',
    e => e.textContent
  );
  console.log(`price of ${name}: ${price}, worker pid ${process.pid}`);
}
