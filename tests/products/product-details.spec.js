const { test, expect } = require('@playwright/test');

test.describe('Product Tests', () => {
  test('Product Details Test', async ({ page }) => {
    // Navigate to the Demoblaze homepage
    await page.goto('https://www.demoblaze.com/');

    // Click on a product from the homepage
    await page.click('.card-title a:has-text("Samsung galaxy s6")');

    // Verify the product details page
    await expect(page.locator('#tbodyid')).toContainText('Samsung galaxy s6');
    await expect(page.locator('#tbodyid')).toContainText('$360');

    // Click the 'Add to Cart' button
    await page.click('a:has-text("Add to cart")');

    // Verify the confirmation message
    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Product added');
      await dialog.accept();
    });
  });
});