const { test, expect } = require('@playwright/test');

test.describe('Cart Tests', () => {
  test('Cart Functionality Test', async ({ page }) => {
    // Navigate to the Demoblaze homepage
    await page.goto('https://www.demoblaze.com/');

    // Add a product to the cart
    await page.click('.card-title a:has-text("Samsung galaxy s6")');
    await page.click('a:has-text("Add to cart")');
    page.on('dialog', async (dialog) => {
      await dialog.accept();
    });

    // Navigate to the cart
    await page.click('a:has-text("Cart")');

    // Verify the product is in the cart
    await expect(page.locator('#tbodyid')).toContainText('Samsung galaxy s6');

    // Remove the product from the cart
    await page.click('a:has-text("Delete")');

    // Verify the cart is empty
    await expect(page.locator('#tbodyid')).not.toContainText('Samsung galaxy s6');
  });
});