it('tests config', () => {
  console.log(`maxWorkers: ${globalConfig.maxWorkers}`);
  expect(globalConfig.maxWorkers).toBeGreaterThan(0);
});
