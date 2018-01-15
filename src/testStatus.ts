import fetch from 'node-fetch';

export default async function testMethod(status: number): Promise<void> {
  const response = await fetch(`https://httpbin.org/status/${status}`);
  const text = await response.text();
  expect(response.status).toBe(status);
  expect(text).toBe('');
  console.log(`got ${response.status} ${response.statusText}`);
}
