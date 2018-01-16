export default async function testAlt(name: string): Promise<void> {
  await page.goto(`https://www.reddit.com/subreddits/search?q=${name}`, {
    waitUntil: 'domcontentloaded'
  });
  const title = await page.$eval('.thing a.title', e => e.textContent);
  console.log(`suggested subreddit: ${title}, worker pid ${process.pid}`);

  // await page.goto(`https://coinmarketcap.com/currencies/${name}/`, {
  //   waitUntil: 'domcontentloaded'
  // });
  // const price = await page.$eval(
  //   '#quote_price span[data-currency-value]',
  //   e => e.textContent
  // );
  // console.log(`price of ${name}: ${price}, worker pid ${process.pid}`);
}
