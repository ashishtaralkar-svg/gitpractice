const { test, expect } = require('@playwright/test');

test.describe('Homepage Tests', () => {
  test('Homepage Load Test', async ({ page }) => {
    // Navigate to the Demoblaze homepage
    await page.goto('https://www.demoblaze.com/');

    // Verify the title
    await expect(page).toHaveTitle('STORE');

    // Verify the navigation bar is visible
    const navBar = page.locator('nav');
    await expect(navBar).toBeVisible();

    // Verify the carousel is functional
    const carousel = page.locator('.carousel-inner');
    await expect(carousel).toBeVisible();
  });
});