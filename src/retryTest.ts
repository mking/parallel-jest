export interface RetryOptions {
  maxAttempts?: number;
}

export default async function retryTest(
  test: () => Promise<void>,
  { maxAttempts = 3 }: RetryOptions = {}
): Promise<void> {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      await test();
      break;
    } catch (e) {
      console.error(
        `failed ${i + 1} times (${maxAttempts - (i + 1)} remaining)`
      );
      if (i === maxAttempts - 1) {
        throw e;
      }
      console.error(e);
    }
  }
}
