import { test, expect } from '@playwright/test';

test.describe('Demoblaze Test Plan', () => {
  test('Navigate to the Demoblaze website to begin test script generation', async ({ page }) => {
    // Navigate to the Demoblaze website to begin test script generation
    await page.goto('https://www.demoblaze.com/');

    // Verify the page title
    await expect(page).toHaveTitle('STORE');
  });
});