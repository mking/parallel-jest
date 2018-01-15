export default async function testReddit(reddit: string): Promise<void> {
  await page.goto(`https://www.reddit.com/r/${reddit}`);
  const title = await page.$eval(
    '.thing:not(.promoted):not(.stickied) a.title',
    element => element.textContent
  );
  console.log(`top of ${reddit}: ${title}`);
}
