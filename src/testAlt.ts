export default async function testAlt(name: string): Promise<void> {
  console.log(`testing ${name}`);
  expect(name).toBe(name);
}
