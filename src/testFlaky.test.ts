import retryTest from './retryTest';

it('tests flaky', () =>
  retryTest(async () => {
    expect(Math.random()).toBeGreaterThan(0.5);
  }));
