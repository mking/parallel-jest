export default async function testReddit(name: string): Promise<void> {
  await page.goto(`https://www.reddit.com/subreddits/search?q=${name}`, {
    waitUntil: 'domcontentloaded'
  });
  const title = await page.$eval('.thing a.title', e => e.textContent);
  console.log(`suggested subreddit: ${title}, worker pid ${process.pid}`);
}
