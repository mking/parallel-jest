import { Browser, Page } from 'puppeteer';

declare global {
  const browser: Browser | undefined;
  const page: Page | undefined;
  const globalConfig: jest.GlobalConfig | undefined;
}
