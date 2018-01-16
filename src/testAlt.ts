import testCoinMarketCap from './testCoinMarketCap';
// import testReddit from './testReddit';

export default async function testAlt(name: string): Promise<void> {
  await testCoinMarketCap(name);
  // await testReddit(name);
}
