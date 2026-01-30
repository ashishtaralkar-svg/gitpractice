// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { report } from 'node:process';
import { junit } from 'node:test/reporters';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 35000,
  expect:{timeout: 5000   },
  //reporter: 'html',
  reporter: [['junit', { outputFile: 'results.xml' }  ],['allure-playwright']],
  retries: 1,

  projects: [
    
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox', headless: true, screenshot: 'on', trace: 'on' },
    // },
    {
      name: 'chromium',
      use: { browserName: 'chromium', headless: false, screenshot: 'on', trace: 'on' , viewport: null, launchOptions: 
        {
      args: ['--start-maximized']},
    }}
  ],
});



