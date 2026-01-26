const { test, expect } = require('@playwright/test');

test.describe('Homepage Tests', () => {
  test('Category Navigation Test', async ({ page }) => {
    // Navigate to the Demoblaze homepage
    await page.goto('https://www.demoblaze.com/');

    // Click on the 'Phones' category
    await page.click('a:has-text("Phones")');
    await expect(page.locator('.card-title')).toBeVisible();

    // Click on the 'Laptops' category
    await page.click('a:has-text("Laptops")');
    await expect(page.locator('.card-title')).toBeVisible();

    // Click on the 'Monitors' category
    await page.click('a:has-text("Monitors")');
    await expect(page.locator('.card-title')).toBeVisible();
  });
});