export interface RetryOptions {
  maxAttempts?: number;
}

export default async function retryIt(
  name: string,
  test: () => Promise<void>,
  { maxAttempts = 3 }: RetryOptions = {}
): Promise<void> {
  it(name, async () => {
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
  });
}
